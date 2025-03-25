<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import API from '../services/api'; // Ensure this is correctly configured

// const LoginSignupScreen = ({ navigation }) => {
//   const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleAuth = async () => {
//     if (isSignup && (!name || !email || !password)) {
//       Alert.alert('Error', 'Please fill all the fields to sign up.');
//       return;
//     }
//     if (!isSignup && (!email || !password)) {
//       Alert.alert('Error', 'Please enter your email and password to log in.');
//       return;
//     }

//     try {
//       const endpoint = isSignup ? '/register' : '/login'; // Update this if API endpoints differ
//       const data = isSignup ? { name, email, password } : { email, password };

//       console.log('Sending data to server:', data); // Debug log

//       const response = await API.post(endpoint, data);
//       console.log('API Response:', response.data); // Debug log

//       if (response.data && response.data.token) {
//         // Save token using AsyncStorage
//         await AsyncStorage.setItem('adminToken', response.data.token);
//         Alert.alert('Success', `${isSignup ? 'Signup' : 'Login'} successful`);
//         navigation.navigate('Admin Profile');
//       } else {
//         Alert.alert(
//           'Error',
//           response.data?.message || 'Authentication failed, please try again.'
//         );
//       }
//     } catch (error) {
//       console.error('API Error:', error); // Debug log
//       Alert.alert(
//         'Error',
//         error.response?.data?.message ||
//           'Authentication failed, please check your details and try again.'
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Company Logo */}
//       <Image
//         source={{
//           uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/smc-logo.png',
//         }}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       {/* Title */}
//       <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>

//       {/* Input Fields */}
//       {isSignup && (
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//       )}
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />

//       {/* Auth Button */}
//       <Button title={isSignup ? 'Signup' : 'Login'} onPress={handleAuth} />

//       {/* Toggle Button */}
//       <Button
//         title={`Switch to ${isSignup ? 'Login' : 'Signup'}`}
//         onPress={() => setIsSignup(!isSignup)}
//         color="#ff4500"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
// });

// export default LoginSignupScreen;







// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import API from '../services/api'; // Ensure this is correctly configured

// const LoginSignupScreen = () => {
//   const navigation = useNavigation();
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleAuth = async () => {
//     if (isSignup && (!name || !email || !password)) {
//       Alert.alert('Error', 'Please fill all the fields to sign up.');
//       return;
//     }
//     if (!isSignup && (!email || !password)) {
//       Alert.alert('Error', 'Please enter your email and password to log in.');
//       return;
//     }

//     try {
//       const endpoint = isSignup ? '/register' : '/login';
//       const data = isSignup ? { name, email, password } : { email, password };

//       console.log('Sending data to server:', data);

//       const response = await API.post(endpoint, data);
//       console.log('API Response:', response.data);

//       if (response.data && response.data.token) {
//         await AsyncStorage.setItem('adminToken', response.data.token);
//         Alert.alert('Success', `${isSignup ? 'Signup' : 'Login'} successful`);
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'DrawerScreens' }],
//         });
//       } else {
//         Alert.alert(
//           'Error',
//           response.data?.message || 'Authentication failed, please try again.'
//         );
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       Alert.alert(
//         'Error',
//         error.response?.data?.message ||
//           'Authentication failed, please check your details and try again.'
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/smc-logo.png',
//         }}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>

//       {isSignup && (
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//       )}
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />

//       <TouchableOpacity style={styles.button} onPress={handleAuth}>
//         <Text style={styles.buttonText}>{isSignup ? 'Signup' : 'Login'}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.switchButton}
//         onPress={() => setIsSignup(!isSignup)}
//       >
//         <Text style={styles.switchButtonText}>
//           Switch to {isSignup ? 'Login' : 'Signup'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   switchButton: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   switchButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//   },
// });

// export default LoginSignupScreen;









// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   Image,
//   Picker,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import API from '../services/api'; // Ensure this is correctly configured

// const LoginSignupScreen = () => {
//   const navigation = useNavigation();
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('student'); // Default role is 'student'

//   const handleAuth = async () => {
//     if (isSignup && (!name || !email || !password)) {
//       Alert.alert('Error', 'Please fill all the fields to sign up.');
//       return;
//     }
//     if (!isSignup && (!email || !password)) {
//       Alert.alert('Error', 'Please enter your email and password to log in.');
//       return;
//     }

//     try {
//       const endpoint = isSignup ? '/register' : '/login';
//       const data = isSignup ? { name, email, password, role } : { email, password, role };

//       console.log('Sending data to server:', data);

//       const response = await API.post(endpoint, data);
//       console.log('API Response:', response.data);

//       if (response.data && response.data.token) {
//         await AsyncStorage.setItem('userToken', response.data.token);
//         Alert.alert('Success', `${isSignup ? 'Signup' : 'Login'} successful`);

//         // Navigate based on the role
//         if (response.data.role === 'admin') {
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'AdminDashboard' }],
//           });
//         } else {
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'HomeScreen' }],
//           });
//         }
//       } else {
//         Alert.alert(
//           'Error',
//           response.data?.message || 'Authentication failed, please try again.'
//         );
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       Alert.alert(
//         'Error',
//         error.response?.data?.message ||
//           'Authentication failed, please check your details and try again.'
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/smc-logo.png',
//         }}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>

//       {isSignup && (
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//       )}
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />

//       <Picker
//         selectedValue={role}
//         onValueChange={(itemValue) => setRole(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Student" value="student" />
//         <Picker.Item label="Admin" value="admin" />
//       </Picker>

//       <TouchableOpacity style={styles.button} onPress={handleAuth}>
//         <Text style={styles.buttonText}>{isSignup ? 'Signup' : 'Login'}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.switchButton}
//         onPress={() => setIsSignup(!isSignup)}
//       >
//         <Text style={styles.switchButtonText}>
//           Switch to {isSignup ? 'Login' : 'Signup'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   switchButton: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   switchButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//   },
// });

// export default LoginSignupScreen;











// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker
// import { useNavigation } from '@react-navigation/native';
// import API from '../services/api'; // Ensure this is correctly configured

// const LoginSignupScreen = () => {
//   const navigation = useNavigation();
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('Student'); // Add role selection state

//   const handleAuth = async () => {
//     if (isSignup && (!name || !email || !password)) {
//       Alert.alert('Error', 'Please fill all the fields to sign up.');
//       return;
//     }
//     if (!isSignup && (!email || !password)) {
//       Alert.alert('Error', 'Please enter your email and password to log in.');
//       return;
//     }

//     try {
//       const endpoint = isSignup ? '/register' : '/login';
//       const data = isSignup ? { name, email, password, role } : { email, password };

//       console.log('Sending data to server:', data);

//       const response = await API.post(endpoint, data);
//       console.log('API Response:', response.data);

//       if (response.data && response.data.token) {
//         await AsyncStorage.setItem('authToken', response.data.token);
//         Alert.alert('Success', `${isSignup ? 'Signup' : 'Login'} successful`);

//         if (role === 'Admin') {
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'AdminDashboard' }], // Navigate to Admin Dashboard
//           });
//         } else {
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'HomeScreen' }], // Navigate to Home Screen for Students
//           });
//         }
//       } else {
//         Alert.alert(
//           'Error',
//           response.data?.message || 'Authentication failed, please try again.'
//         );
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       Alert.alert(
//         'Error',
//         error.response?.data?.message ||
//           'Authentication failed, please check your details and try again.'
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/smc-logo.png',
//         }}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>

//       {isSignup && (
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//       )}
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />

//       {isSignup && (
//         <View style={styles.pickerContainer}>
//           <Text style={styles.pickerLabel}>Select Role:</Text>
//           <Picker
//             selectedValue={role}
//             onValueChange={(itemValue) => setRole(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Student" value="Student" />
//             <Picker.Item label="Admin" value="Admin" />
//           </Picker>
//         </View>
//       )}

//       <TouchableOpacity style={styles.button} onPress={handleAuth}>
//         <Text style={styles.buttonText}>{isSignup ? 'Signup' : 'Login'}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.switchButton}
//         onPress={() => setIsSignup(!isSignup)}
//       >
//         <Text style={styles.switchButtonText}>
//           Switch to {isSignup ? 'Login' : 'Signup'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   pickerContainer: {
//     marginBottom: 15,
//   },
//   pickerLabel: {
//     marginBottom: 5,
//     fontSize: 16,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   switchButton: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   switchButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//   },
// });

// export default LoginSignupScreen;













import React, { useState } from 'react';
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
<<<<<<< HEAD
import NetInfo from '@react-native-community/netinfo';

const API_BASE_URL = 'http://192.168.1.11:5000/api';
=======
import API from '../services/api';
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

const LoginSignupScreen = () => {
  const navigation = useNavigation();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('checking');

  useEffect(() => {
    checkServerStatus();
    handleLogout(); // Check if we need to logout on component mount
  }, []);

  const handleLogout = async () => {
    try {
      // Get the previous screen from params
      const previousScreen = navigation.getState()?.routes?.find(route => 
        route.name === 'Logout' || route.params?.source === 'logout'
      );
      
      // If this is a logout action, clear the auth token and role
      if (previousScreen) {
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('userRole');
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
      
      // Try to ping the server with a timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      // We'll try to call a simple endpoint to check server status
      try {
        await fetch(`${API_BASE_URL}/status`, {
          method: 'GET',
          signal: controller.signal
        });
        setServerStatus('online');
      } catch (error) {
        console.log('Server check error:', error);
        // Try fetching from the root
        try {
          await fetch(`http://192.168.1.11:5000/`, {
            method: 'GET',
            signal: controller.signal
          });
          setServerStatus('online');
        } catch (error) {
          setServerStatus('offline');
        }
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (error) {
      console.error('Server check error:', error);
      setServerStatus('offline');
    }
  };
=======
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

  const handleAuth = async () => {
    if (isSignup && (!name || !email || !password)) {
      Alert.alert('Error', 'Please fill all the fields to sign up.');
      return;
    }
    if (!isSignup && (!email || !password)) {
      Alert.alert('Error', 'Please enter your email and password to log in.');
      return;
    }

    setIsLoading(true);

    try {
<<<<<<< HEAD
      // For testing purposes - mock login
      if (email === 'admin@test.com' && password === 'admin123') {
        console.log('Using mock admin login');
        await AsyncStorage.setItem('authToken', 'mock-admin-token');
        await AsyncStorage.setItem('userRole', 'Admin');
        
        Alert.alert('Success', 'Login successful (Mock Admin)');
        navigation.reset({
          index: 0,
          routes: [{ name: 'AdminDrawer' }],
        });
        return;
      } else if (email === 'user@test.com' && password === 'user123') {
        console.log('Using mock user login');
        await AsyncStorage.setItem('authToken', 'mock-user-token');  
        await AsyncStorage.setItem('userRole', 'Student');
        
        Alert.alert('Success', 'Login successful (Mock User)');
        navigation.reset({
          index: 0,
          routes: [{ name: 'UserDrawer' }],
        });
        return;
      }

      // Check network connectivity
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        throw new Error('No internet connection. Please check your network settings.');
      }

      // If server is offline, don't attempt the API call
      if (serverStatus === 'offline') {
        throw new Error('Server is currently unavailable. Please try again later or use mock credentials.');
      }

      // Determine the endpoint
      let endpoint;
      if (isSignup) {
        endpoint = role === 'Admin' 
          ? `${API_BASE_URL}/admin/register` 
          : `${API_BASE_URL}/user/register`;
=======
      const endpoint = isSignup ? '/register' : '/login';
      const data = isSignup ? { name, email, password, role } : { email, password };

      console.log('Sending data to server:', data);

      const response = await API.post(endpoint, data);
      console.log('API Response:', response.data);

      if (response.data && response.data.token) {
        await AsyncStorage.setItem('authToken', response.data.token);
        Alert.alert('Success', `${isSignup ? 'Signup' : 'Login'} successful`);

        if (role === 'Admin') {
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
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
      } else {
        endpoint = role === 'Admin' 
          ? `${API_BASE_URL}/admin/login` 
          : `${API_BASE_URL}/user/login`;
      }
      
      // Create request data
      const data = isSignup 
        ? (role === 'Admin' 
            ? { username: name, name: name, email, password, role } 
            : { username: name, email, password, role })
        : { email, password };

      console.log('Sending request to:', endpoint);
      console.log('With data:', data);

      // Set timeout for fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        // Send the request directly with fetch instead of axios
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        const responseData = await response.json();
        console.log('Response:', responseData);

        if (!response.ok) {
          throw new Error(responseData.message || 'Authentication failed');
        }

        if (responseData.token) {
          await AsyncStorage.setItem('authToken', responseData.token);
          
          // Store user role - For admin login or registration, always use 'Admin'
          // Otherwise, use the role from response or default to 'Student'
          let userRole;
          
          if (endpoint.includes('/admin/')) {
            userRole = 'Admin';
          } else {
            userRole = responseData.role || (isSignup ? role : 'Student');
          }
          
          await AsyncStorage.setItem('userRole', userRole);
          
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
        throw fetchError;
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
    } finally {
      setIsLoading(false);
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
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
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

      {isSignup && (
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
      )}

<<<<<<< HEAD
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
=======
      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isSignup ? 'Signup' : 'Login'}</Text>
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
        <Text style={styles.mockCredentialsTitle}>Test Credentials:</Text>
        <Text style={styles.mockCredentials}>Admin: admin@test.com / admin123</Text>
        <Text style={styles.mockCredentials}>User: user@test.com / user123</Text>
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

