import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { 
  sanitizeInput, 
  validateEmail, 
  validateUsername, 
  validatePassword, 
  validateName,
  RateLimiter 
} from '../utils/security';
import { SecureStorage, SessionManager } from '../utils/secureStorage';

const API_BASE_URL = 'https://searchmycolleges.com/api'; // Production API URL

const LoginSignupScreen = () => {
  const navigation = useNavigation();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('Student');
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('checking');
  const [validationErrors, setValidationErrors] = useState({});
  const loginRateLimiter = new RateLimiter(5, 60000); // 5 attempts per minute
  const signupRateLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes

  useEffect(() => {
    const initializeScreen = async () => {
      try {
        await checkServerStatus();
        await handleLogout(); // Check if we need to logout on component mount
      } catch (error) {
        console.error('Initialization error:', error);
        setServerStatus('offline'); // Default to offline if initialization fails
      }
    };
    
    initializeScreen();
  }, []);

  const handleLogout = async () => {
    try {
      // Get the previous screen from params
      const previousScreen = navigation.getState()?.routes?.find(route => 
        route.name === 'Logout' || route.params?.source === 'logout'
      );
      
      // If this is a logout action, clear the auth token and role
      if (previousScreen) {
        await SessionManager.destroySession();
        console.log('User logged out successfully');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const checkServerStatus = async () => {
    try {
      setServerStatus('checking');
      
      // Check network connectivity first
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        setServerStatus('offline');
        return;
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(`${API_BASE_URL}/status`, {
          method: 'GET',
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          setServerStatus('online');
        } else {
          setServerStatus('offline');
        }
      } catch (error) {
        console.log('Server connection failed:', error.message);
        setServerStatus('offline');
      }
    } catch (error) {
      console.error('Server check error:', error);
      setServerStatus('offline');
    }
  };

  const validateInputs = () => {
    const errors = {};
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedName = sanitizeInput(name);
    
    // Validate email
    if (!validateEmail(sanitizedEmail)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.message;
    }
    
    // Validate signup fields
    if (isSignup) {
      if (!validateUsername(sanitizedUsername)) {
        errors.username = 'Username must be 3-20 characters, alphanumeric and underscore only';
      }
      
      if (!validateName(sanitizedName)) {
        errors.name = 'Name must be 2-50 characters, letters and spaces only';
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAuth = async () => {
    // Clear previous errors
    setValidationErrors({});
    
    // Validate inputs
    if (!validateInputs()) {
      return;
    }
    
    // Rate limiting
    const rateLimiter = isSignup ? signupRateLimiter : loginRateLimiter;
    const emailKey = `auth_${email}`;
    
    if (!rateLimiter.isAllowed(emailKey)) {
      const remaining = rateLimiter.getRemainingAttempts(emailKey);
      Alert.alert(
        'Too Many Attempts', 
        `Too many ${isSignup ? 'signup' : 'login'} attempts. Please try again later. ${remaining} attempts remaining.`
      );
      return;
    }

    setIsLoading(true);

    try {
      // Check network connectivity
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        throw new Error('No internet connection. Please check your network settings.');
      }

      // Handle offline mode with mock credentials if server is unavailable
      if (serverStatus === 'offline') {
        // Allow mock logins in offline mode
        if (email === 'admin@test.com' && password === 'admin123') {
          console.log('Using mock admin login (offline mode)');
          await SessionManager.createSession('mock-admin-token', { role: 'Admin', email });
          
          Alert.alert('Success', 'Login successful (Offline Mode)');
          navigation.reset({
            index: 0,
            routes: [{ name: 'AdminDrawer' }],
          });
          return;
        } else if (email === 'user@test.com' && password === 'user123') {
          console.log('Using mock user login (offline mode)');
          await SessionManager.createSession('mock-user-token', { role: 'Student', email });
          
          Alert.alert('Success', 'Login successful (Offline Mode)');
          navigation.reset({
            index: 0,
            routes: [{ name: 'UserDrawer' }],
          });
          return;
        } else {
          throw new Error('Server is currently unavailable. Please try again later or use mock credentials.');
        }
      }

      // Determine the endpoint based on signup/login and role
      let endpoint;
      if (isSignup) {
        endpoint = role === 'Admin' 
          ? `${API_BASE_URL}/admin/register` 
          : `${API_BASE_URL}/user/register`;
      } else {
        // For login, try multiple endpoints in order if needed
        endpoint = role === 'Admin' 
          ? `${API_BASE_URL}/admin/login` 
          : `${API_BASE_URL}/user/login`; // Try user/login first
      }
      
      // Create request data
      const data = isSignup 
        ? (role === 'Admin' 
            ? { username: username, name: name, email, password, role } 
            : { username: username, email, password, role })
        : { email, password };

      console.log('Sending request to:', endpoint);
      console.log('With data:', JSON.stringify(data));

      // Set timeout for fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        // Send the request with fetch
        let response;
        let responseData;
        
        try {
          console.log(`Trying endpoint: ${endpoint}`);
          response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            signal: controller.signal
          });
          
          clearTimeout(timeoutId);
          
          if (!response.ok) {
            const errorText = await response.text();
            console.log('Server response not OK:', response.status, errorText);
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
          }
          
          responseData = await response.json();
          console.log('Server response:', responseData);
          
        } catch (error) {
          clearTimeout(timeoutId);
          if (error.name === 'AbortError') {
            throw new Error('Request timeout. Please check your connection.');
          }
          throw error;
        }
        
        console.log('Response:', responseData);
        
        if (!requestSucceeded) {
          throw new Error(responseData.message || 'Authentication failed');
        }
        
        if (responseData.token) {
          // Store the real token from the API
          let userRole;
          
          if (endpoint.includes('/admin/')) {
            userRole = 'Admin';
          } else {
            userRole = responseData.role || (isSignup ? role : 'Student');
          }
          
          // Process name for display (capitalize first letter of each word)
          const userName = responseData.name || 
                          (email.includes('@') ? email.split('@')[0] : email);
                          
          const formattedName = userName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
            
          // Store user data for profile
          const userData = {
            id: responseData.userId || responseData._id || 'unknown',
            name: formattedName,
            email: responseData.email || email,
            role: userRole,
            lastLogin: new Date().toISOString()
          };
          
          // Use secure storage for sensitive data
          await SessionManager.createSession(responseData.token, userData);
          
          Alert.alert('Success', `${isSignup ? 'Signup' : 'Login'} successful`);

          // Navigate based on role
          if (userRole === 'Admin') {
            navigation.reset({
              index: 0,
              routes: [{ name: 'AdminDrawer' }],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: 'UserDrawer' }],
            });
          }
        } else {
          Alert.alert('Error', 'Authentication failed, no token received.');
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out. Server might be unavailable.');
        }
        
        // If there's an API error but the user appears to be using admin credentials,
        // provide a fallback option for demo purposes
        if ((!isSignup && role === 'Admin' && 
            (email.toLowerCase().includes('admin') && password.toLowerCase().includes('admin'))) ||
            (email === 'admin@test.com' && password === 'admin123')) {
          Alert.alert(
            'API Connection Error',
            'Cannot connect to authentication server. Would you like to use demo mode?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Use Demo Mode',
                onPress: async () => {
                  console.log('Using admin demo mode login');
                  await SessionManager.createSession('mock-admin-token', { 
                    role: 'Admin', 
                    email: email,
                    name: 'Demo Admin'
                  });
                  
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'AdminDrawer' }],
                  });
                }
              }
            ]
          );
          return;
        }

        // Student demo mode fallback
        if ((!isSignup && role === 'Student') ||
            (email === 'user@test.com' && password === 'user123')) {
          Alert.alert(
            'API Connection Error',
            'Cannot connect to authentication server. Would you like to use demo mode?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Use Demo Mode',
                onPress: async () => {
                  console.log('Using student demo mode login');
                  await SessionManager.createSession('mock-student-token', { 
                    role: 'Student', 
                    email: email,
                    name: 'Demo Student'
                  });
                  
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'UserDrawer' }],
                  });
                }
              }
            ]
          );
          return;
        }
        
        throw fetchError;
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Auth Error:', error);
      
      // Better error messaging
      if (error.message && error.message.includes('Network request failed')) {
        Alert.alert(
          'Connection Error',
          'Could not connect to the server. Please check your internet connection or use test credentials: admin@test.com/admin123 or user@test.com/user123'
        );
      } else {
        Alert.alert(
          'Authentication Error',
          error.message || 'Login failed. Please check your credentials or use mock credentials for testing.'
        );
      }
    }
  };

  const renderServerStatus = () => {
    if (serverStatus === 'checking') {
      return (
        <View style={styles.serverStatusContainer}>
          <ActivityIndicator size="small" color="#007bff" />
          <Text style={styles.serverStatusText}>Checking server...</Text>
        </View>
      );
    } else if (serverStatus === 'offline') {
      return (
        <View style={styles.serverStatusContainer}>
          <Text style={[styles.serverStatusText, { color: '#dc3545' }]}>
            ⚠️ Server offline - Use mock credentials
          </Text>
          <TouchableOpacity onPress={checkServerStatus}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.serverStatusContainer}>
          <Text style={[styles.serverStatusText, { color: '#28a745' }]}>
            ✓ Server online
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/smc-logo.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>

      {renderServerStatus()}

      {isSignup && (
        <>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            autoCapitalize="words"
          />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            autoCapitalize="none"
          />
        </>
      )}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* Role selector - show for both login and signup */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Role:</Text>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Student" value="Student" />
          <Picker.Item label="Admin" value="Admin" />
        </Picker>
      </View>

      <TouchableOpacity 
        style={[styles.button, isLoading && styles.buttonDisabled]} 
        onPress={handleAuth}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.buttonText}>{isSignup ? 'Signup' : 'Login'}</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => setIsSignup(!isSignup)}
        disabled={isLoading}
      >
        <Text style={styles.switchButtonText}>
          Switch to {isSignup ? 'Login' : 'Signup'}
        </Text>
      </TouchableOpacity>

      <View style={styles.mockCredentialsContainer}>
        <Text style={styles.mockCredentialsTitle}>Offline Mode Credentials:</Text>
        <Text style={styles.mockCredentials}>Admin: admin@test.com / admin123</Text>
        <Text style={styles.mockCredentials}>User: user@test.com / user123</Text>
        <Text style={styles.mockCredentials}>Note: These credentials work when the server is offline</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    marginBottom: 5,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  switchButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  serverStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  serverStatusText: {
    fontSize: 14,
    marginLeft: 5,
  },
  retryText: {
    color: '#007bff',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  mockCredentialsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'rgba(0,123,255,0.1)',
    borderRadius: 5,
    alignItems: 'center',
  },
  mockCredentialsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mockCredentials: {
    fontSize: 14,
    color: '#333',
  },
});

export default LoginSignupScreen;

