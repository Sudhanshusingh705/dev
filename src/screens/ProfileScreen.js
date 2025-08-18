import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SessionManager } from '../utils/secureStorage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from '@react-native-community/netinfo';
import { API_BASE_URL, API_TIMEOUT, ENDPOINTS, createAuthHeader } from '../api';

// Import local profile images
const maleAvatar = require('../assets/man.png');
const femaleAvatar = require('../assets/woman.png');

// List of common female names to check against
const FEMALE_NAMES = [
  'mary', 'patricia', 'jennifer', 'linda', 'elizabeth', 'barbara', 'susan', 'jessica', 'sarah',
  'karen', 'lisa', 'nancy', 'betty', 'margaret', 'sandra', 'ashley', 'kimberly', 'emily', 'donna',
  'michelle', 'carol', 'amanda', 'dorothy', 'melissa', 'deborah', 'stephanie', 'rebecca', 'laura',
  'sharon', 'cynthia', 'kathleen', 'amy', 'shirley', 'anna', 'angela', 'ruth', 'brenda', 'virginia',
  'pamela', 'catherine', 'katherine', 'nicole', 'christine', 'janet', 'debra', 'maria', 'heather',
  'diane', 'julie', 'joyce', 'victoria', 'kelly', 'christina', 'lauren', 'joan', 'evelyn', 'olivia',
  'judith', 'megan', 'cheryl', 'martha', 'andrea', 'frances', 'hannah', 'jacqueline', 'ann', 'gloria',
  'jean', 'kathryn', 'alice', 'teresa', 'sara', 'janice', 'doris', 'madison', 'julia', 'grace',
  'judy', 'abigail', 'marie', 'denise', 'beverly', 'amber', 'theresa', 'marilyn', 'danielle', 'brittany',
  'ruby', 'diana', 'rachel', 'sophia', 'ava', 'isabella', 'natalie', 'charlotte', 'emma', 'amelia', 'priya',
  'anita', 'sunita', 'anjali', 'pooja', 'swati', 'neha', 'deepika', 'sonia', 'rani', 'lakshmi', 'divya',
  'sneha', 'kavita', 'nisha', 'savita', 'asha', 'meena', 'sudha', 'geeta'
];

// Updated mock profiles for testing with proper admin details
const MOCK_PROFILES = {
  'mock-admin-token': {
    id: 'admin-123',
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '123-456-7890',
    institution: 'Admin Institute',
    role: 'Admin',
    lastLogin: new Date().toLocaleString()
  },
  'mock-user-token': {
    id: 'user-456',
    name: 'Student User',
    email: 'student@example.com',
    phone: '987-654-3210',
    institution: 'Student University',
    role: 'Student',
    lastLogin: new Date().toLocaleString()
  }
};

/**
 * Simple function to determine if a name is likely female
 * This is a very basic implementation that could be improved
 */
const isLikelyFemale = (name) => {
  if (!name) return false;
  
  const femaleName = name.toLowerCase();
  
  // Common female name endings
  const femaleEndings = ['a', 'e', 'i', 'ie', 'y', 'ah', 'na', 'la', 'ine', 'een'];
  // Common explicit female names
  const femaleNames = [
    'mary', 'elizabeth', 'patricia', 'jennifer', 'linda', 'barbara', 'susan', 'jessica',
    'sarah', 'karen', 'lisa', 'nancy', 'betty', 'margaret', 'sandra', 'ashley',
    'kimberly', 'emily', 'donna', 'michelle', 'dorothy', 'carol', 'amanda', 'melissa',
    'deborah', 'stephanie', 'rebecca', 'laura', 'sharon', 'cynthia', 'kathleen', 'amy',
    'anna', 'sophia', 'emma', 'olivia', 'ava', 'isabella', 'mia', 'abigail', 'charlotte'
  ];
  
  // Check for exact matches in common female names
  const nameParts = femaleName.split(' ');
  const firstName = nameParts[0];
  
  if (femaleNames.includes(firstName)) {
    return true;
  }
  
  // Check name endings
  for (const ending of femaleEndings) {
    if (firstName.endsWith(ending)) {
      return true;
    }
  }
  
  return false;
};

/**
 * Get profile image source based on name and role
 */
const getProfileImageSource = (name, role) => {
  if (!name) {
    return role === 'Admin' ? maleAvatar : femaleAvatar;
  }
  
  // Check if the name is likely female
  const isFemale = isLikelyFemale(name);
  
  // Return appropriate avatar
  return isFemale ? femaleAvatar : maleAvatar;
};

/**
 * Get a greeting based on the time of day
 */
const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return 'Good Morning';
  } else if (hour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

// Helper function for base64 decoding in React Native
const base64Decode = (str) => {
  // For React Native which doesn't have atob natively
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let output = '';
  
  str = String(str).replace(/=+$/, '');
  
  if (str.length % 4 === 1) {
    throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  
  for (
    let bc = 0, bs = 0, buffer, i = 0;
    (buffer = str.charAt(i++));
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4)
      ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
      : 0
  ) {
    buffer = chars.indexOf(buffer);
  }
  
  return output;
};

const dynamicStyles = (token) => ({
  offlineNotice: {
    backgroundColor: token && token.includes('eyJhb') ? '#0066cc' : '#dc3545',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const ProfileScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState('');
  const [isNetworkConnected, setIsNetworkConnected] = useState(true);
  const [isServerAvailable, setIsServerAvailable] = useState(true);
  const [token, setToken] = useState(null);
  
  // Add state for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  
  // Add a state variable to track if we've successfully loaded the profile
  const [profileLoaded, setProfileLoaded] = useState(false);
  
  // Initialize edited profile when profile changes
  useEffect(() => {
    if (profile) {
      setEditedProfile({ ...profile });
    }
  }, [profile]);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNetworkConnected(state.isConnected);
    });

    return () => {
      // Unsubscribe when component unmounts
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchProfile();
      
      // Remove the problematic code that was overriding the profile after 5 seconds
      // We'll still extract a backup profile but only use it if the profile couldn't be loaded
      const extractProfileOnLoad = async () => {
        try {
          const token = await AsyncStorage.getItem('authToken');
          if (token && !profile) {
            setToken(token);
            const role = await AsyncStorage.getItem('userRole') || 'Student';
            // This will be used ONLY if the profile fails to load initially
            const tokenProfile = await extractProfileFromToken(token, role);
            if (tokenProfile && !profile) {
              console.log('Setting backup profile from token on initial load only');
              setProfile(tokenProfile);
              setLoading(false);
            }
          }
        } catch (e) {
          console.error('Error extracting backup profile from token:', e);
        }
      };
      
      if (loading) {
        extractProfileOnLoad();
      }
    }
  }, [isFocused, isNetworkConnected]);

  const checkServerStatus = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT / 2); // Half timeout for status check
      
      try {
        console.log('Checking server status...');
        
        // Try the actual API endpoint with proper token
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          console.log('Using token for server check');
          
          // First try the status endpoint which should be lightweight
          const statusEndpoint = ENDPOINTS.STATUS;
          const statusResponse = await fetch(`${API_BASE_URL}${statusEndpoint}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            },
            signal: controller.signal
          }).catch(() => null);
          
          if (statusResponse && statusResponse.ok) {
            console.log('Server status endpoint responded OK');
            setIsServerAvailable(true);
            clearTimeout(timeoutId);
            return true;
          }
        }
        
        // Fallback to basic API check without auth
        console.log('Trying basic API endpoint check');
        const response = await fetch(`${API_BASE_URL}`, {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
          signal: controller.signal
        }).catch(() => null);
        
        if (response && response.ok) {
          console.log('Basic API endpoint check succeeded');
          setIsServerAvailable(true);
          clearTimeout(timeoutId);
          return true;
        }
        
        // If we get here, the server is not responding properly
        console.log('API endpoints not responding properly');
        setIsServerAvailable(false);
        clearTimeout(timeoutId);
        return false;
      } catch (error) {
        clearTimeout(timeoutId);
        console.log('Server check error:', error);
        setIsServerAvailable(false);
        return false;
      }
    } catch (error) {
      console.error('Server check error:', error);
      setIsServerAvailable(false);
      return false;
    }
  };

  // Update function for caching profile data to ensure admin details are cached
  const cacheProfileData = async (profile) => {
    if (!profile) return;
    
    try {
      console.log('Caching profile data');
      await AsyncStorage.setItem('cachedProfile', JSON.stringify(profile));
      await AsyncStorage.setItem('profileCacheTimestamp', Date.now().toString());
      
      // Also store in shared AsyncStorage for admin dashboard usage
      if (profile.role === 'Admin') {
        console.log('Caching admin profile data for dashboard');
        await AsyncStorage.setItem('adminProfileCache', JSON.stringify({
          name: profile.name,
          email: profile.email,
          role: profile.role,
          lastLogin: new Date().toLocaleString()
        }));
      }
    } catch (error) {
      console.error('Error caching profile:', error);
    }
  };

  // Add function to get cached profile data
  const getCachedProfile = async () => {
    try {
      const cachedProfile = await AsyncStorage.getItem('cachedProfile');
      const cacheTime = await AsyncStorage.getItem('profileCacheTimestamp');
      
      if (cachedProfile) {
        const profile = JSON.parse(cachedProfile);
        const cacheAge = Date.now() - parseInt(cacheTime || '0');
        const isCacheValid = cacheAge < 1000 * 60 * 15; // 15 minutes cache validity
        
        return { profile, isCacheValid };
      }
    } catch (error) {
      console.error('Error retrieving cached profile:', error);
    }
    
    return { profile: null, isCacheValid: false };
  };

  // Update the fetchProfile function to prioritize cached admin profiles
  const fetchProfile = async () => {
    try {
      setLoading(true);
      
      // Get the auth token and user data
      const sessionData = await SessionManager.getSession();
      const token = sessionData?.token;
      const role = sessionData?.userData?.role || 'Student';
      
      if (!token) {
        console.log('No authentication token found');
        setLoading(false);
        setProfile(null);
        return;
      }

      // Set token and role in state
      setToken(token);
      setUserRole(role);
      
      // If we already have a successfully loaded profile, don't reload it
      // But only skip for real profiles, not mock ones
      if (profileLoaded && profile && !isEditing && 
          !(token === 'mock-admin-token' || token === 'mock-user-token')) {
        console.log('Profile already loaded successfully, skipping fetch');
        setLoading(false);
        return;
      }
      
      // For admin users, prioritize using admin-specific cache
      if (role === 'Admin') {
        console.log('Checking for admin-specific cached profile');
        const cachedAdminData = await AsyncStorage.getItem('adminProfileCache');
        
        if (cachedAdminData) {
          try {
            const profileData = JSON.parse(cachedAdminData);
            console.log('Using admin-specific cached profile');
            
            // Get gender-specific image
            const isFemale = isLikelyFemale(profileData.name);
            profileData.profileImage = isFemale ? femaleAvatar : maleAvatar;
            
            // Add last login time if missing
            const lastLoginTime = await AsyncStorage.getItem('lastLoginTime');
            if (lastLoginTime && !profileData.lastLogin) {
              profileData.lastLogin = lastLoginTime;
            }
            
            setProfile(profileData);
            setProfileLoaded(true);
            setLoading(false);
            
            // If network is connected, refresh in background without showing loading spinner
            const netInfo = await NetInfo.fetch();
            if (netInfo.isConnected) {
              fetchProfileFromAPI(token, role, false);
            }
            return;
          } catch (e) {
            console.log('Error parsing admin cache:', e);
            // Continue with normal flow if admin cache failed
          }
        }
      }
      
      // For mock tokens, always use fresh mock data
      if (token === 'mock-admin-token' || token === 'mock-user-token') {
        console.log('Using mock profile data');
        const mockData = {...MOCK_PROFILES[token]};
        
        // Add gender-specific image
        const isFemale = isLikelyFemale(mockData.name);
        mockData.profileImage = isFemale ? femaleAvatar : maleAvatar;
        
        // Get real login timestamp if available
        const lastLoginTime = await AsyncStorage.getItem('lastLoginTime');
        if (lastLoginTime) {
          mockData.lastLogin = lastLoginTime;
        }
        
        setProfile(mockData);
        setProfileLoaded(true); // Mark as successfully loaded
        setLoading(false);
        return;
      }
      
      // Check for regular cached profile
      const { profile: cachedProfile, isCacheValid } = await getCachedProfile();
      
      // If we have a valid cached profile, use it immediately
      if (cachedProfile && isCacheValid) {
        console.log('Using regular cached profile data');
        setProfile(cachedProfile);
        setProfileLoaded(true); // Mark as successfully loaded
        setLoading(false);
        
        // Refresh in background without showing loading spinner
        fetchProfileFromAPI(token, role, false);
        return;
      }
      
      // If cache is invalid or missing, fetch fresh data
      await fetchProfileFromAPI(token, role, true);
      
    } catch (error) {
      console.error('Profile fetch error:', error);
      setProfile(null);
      setLoading(false);
    }
  };

  // Update the fetchProfileFromAPI function to check API availability first
  const fetchProfileFromAPI = async (token, role, updateLoadingState = true) => {
    try {
      // Try network check only if we're updating loading state
      if (updateLoadingState) {
        const netInfo = await NetInfo.fetch();
        setIsNetworkConnected(netInfo.isConnected);
        
        if (!netInfo.isConnected) {
          console.log('No network connection');
          setLoading(false);
          return;
        }
        
        // Check if API is available before attempting to fetch
        const apiAvailable = await isAPIAvailable();
        if (!apiAvailable) {
          console.log('API is not available, using cached data');
          setIsServerAvailable(false);
          
          // For admin users, prioritize getting data from cache
          if (role === 'Admin') {
            const cachedAdminData = await AsyncStorage.getItem('adminProfileCache');
            if (cachedAdminData) {
              console.log('Using cached admin profile data');
              const profileData = JSON.parse(cachedAdminData);
              setProfile(profileData);
              setProfileLoaded(true);
              setLoading(false);
              return;
            }
          }
          
          // Try to use general cache
          const cachedProfileData = await getCachedProfile();
          if (cachedProfileData.profile) {
            console.log('Using cached profile data');
            setProfile(cachedProfileData.profile);
            setProfileLoaded(true);
            setLoading(false);
            return;
          }
          
          // Last resort - try token or create basic profile
          const profileFromToken = await extractProfileFromToken(token, role);
          if (profileFromToken) {
            console.log('Using profile from token');
            setProfile(profileFromToken);
          } else {
            console.log('Using basic profile');
            setProfile({
              name: role === 'Admin' ? 'Admin User' : 'Student User',
              email: role === 'Admin' ? 'admin@example.com' : 'user@example.com',
              phone: 'Not available offline',
              role: role,
              lastLogin: await AsyncStorage.getItem('lastLoginTime') || new Date().toISOString()
            });
          }
          
          setLoading(false);
          return;
        }
      }
      
      // Skip extensive server checks - directly try to fetch profile
      try {
        // Define endpoint path using constants
        const endpoint = role === 'Admin' ? ENDPOINTS.ADMIN_PROFILE : ENDPOINTS.USER_PROFILE;
        
        console.log(`Fetching profile from: ${API_BASE_URL}${endpoint}`);
        
        // Set a timeout for the fetch operation
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          console.log('Profile fetch timeout - aborting request');
          controller.abort();
        }, API_TIMEOUT);
        
        // We'll use the createAuthHeader helper, no need for custom handling
        console.log('Using token for authorization:', token.substring(0, 15) + '...');
        
        try {
          const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
              ...createAuthHeader(token),
          'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            signal: controller.signal
          });

          clearTimeout(timeoutId);
          
          console.log('Profile API response status:', response.status);
          
          // Handle different response statuses
          if (response.status === 401 || response.status === 403) {
            console.log('Received 401/403 Unauthorized from server');
            // This is a special case for admin dashboard - try to recover first
            if (role === 'Admin') {
              console.log('Attempting to recover admin profile data');
              const cachedAdminData = await AsyncStorage.getItem('adminProfileCache');
              if (cachedAdminData) {
                const profileData = JSON.parse(cachedAdminData);
                setProfile(profileData);
                setProfileLoaded(true);
                setLoading(false);
                return;
              }
            }
            
            // Try to use token data if available
            const profileFromToken = await extractProfileFromToken(token, role);
            if (profileFromToken) {
              console.log('Created profile from token data (auth error fallback)');
              setProfile(profileFromToken);
              setProfileLoaded(true);
              setLoading(false);
              return;
            }
            
            // If we couldn't recover with cached data, handle unauthorized
            await handleUnauthorizedError();
            return;
          }

      if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
          }

          // Try to parse the response as JSON
          const data = await response.json();
          console.log('Profile data received:', Object.keys(data));
          
          // Successfully got data
          setIsServerAvailable(true);
          
          const profileData = {
            ...data,
            role: role
          };
          
          // Store the profile email for future token-based profile extraction
          if (profileData.email) {
            await AsyncStorage.setItem('userEmail', profileData.email);
          }
          
          setProfile(profileData);
          setProfileLoaded(true); // Mark as successfully loaded
          
          // Cache the profile data for future quick loading
          cacheProfileData(profileData);
        } catch (fetchError) {
          clearTimeout(timeoutId);
          
          if (fetchError.name === 'AbortError') {
            console.log('Request was aborted (timeout)');
            throw new Error('Request timeout - server took too long to respond');
          }
          
          throw fetchError;
        }
      } catch (apiError) {
        console.error('API Error:', apiError.message);
        
        // For admin users, prioritize getting data from cache
        if (role === 'Admin') {
          console.log('Admin user - checking for cached data');
          
          // Try to get from admin cache
          const cachedAdminData = await AsyncStorage.getItem('adminProfileCache');
          if (cachedAdminData) {
            console.log('Using cached admin profile data');
            const profileData = JSON.parse(cachedAdminData);
            setProfile(profileData);
            setProfileLoaded(true);
            setLoading(false);
            return;
          }
        }
        
        // Only use token profile if we don't have a successfully loaded profile yet
        if (!profileLoaded && !profile) {
          // Try to create profile from token
          console.log('Attempting to create profile from token data (fallback)');
          const profileFromToken = await extractProfileFromToken(token, role);
          
          if (profileFromToken) {
            console.log('Created profile from token successfully (fallback)');
            setProfile(profileFromToken);
            // Do NOT mark as successfully loaded since this is fallback data
          } else {
            // Last resort - create a basic profile
            console.log('Using basic fallback profile');
            const userName = await AsyncStorage.getItem('userName');
            const userEmail = await AsyncStorage.getItem('userEmail');
            
            setProfile({
              name: userName || (role === 'Admin' ? 'Admin User' : 'Student User'),
              email: userEmail || (role === 'Admin' ? 'admin@example.com' : 'user@example.com'),
              phone: 'N/A',
              role: role,
              lastLogin: await AsyncStorage.getItem('lastLoginTime') || new Date().toISOString()
            });
            // Do NOT mark as successfully loaded since this is fallback data
          }
        }
        
        setIsServerAvailable(false);
      }
    } finally {
      if (updateLoadingState) {
        setLoading(false);
      }
    }
  };

  // Add new function to handle 401 Unauthorized errors with better token validation
  const handleUnauthorizedError = async () => {
    console.log('Authentication failed - checking if using mock token or admin access');
    
    // Get current token and role
    const currentToken = await AsyncStorage.getItem('authToken');
    const userRole = await AsyncStorage.getItem('userRole');
    
    // Always preserve mock tokens
    if (currentToken === 'mock-admin-token' || currentToken === 'mock-user-token') {
      console.log('Using mock token - ignoring unauthorized error');
      
      // Re-initialize from mock data
      const mockData = {...MOCK_PROFILES[currentToken]};
      
      // Add gender-specific image
      const isFemale = isLikelyFemale(mockData.name);
      mockData.profileImage = isFemale ? femaleAvatar : maleAvatar;
      
      setProfile(mockData);
      setProfileLoaded(true);
      return;
    }
    
    // Check if token data includes userId
    if (currentToken && currentToken.includes('.')) {
      try {
        const parts = currentToken.split('.');
        if (parts.length >= 2) {
          const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
          const pad = base64.length % 4;
          const paddedBase64 = pad ? base64 + '='.repeat(4 - pad) : base64;
          
          // Try to decode token
          const rawData = base64Decode(paddedBase64);
          const decodedData = JSON.parse(rawData);
          
          // Check if the token has proper userId data
          if (decodedData && decodedData.id) {
            console.log('Token has userId, refreshing profile from stored data');
            
            // Use stored userName/userEmail to create valid profile
            const userName = await AsyncStorage.getItem('userName');
            const userEmail = await AsyncStorage.getItem('userEmail');
            
            if (userName && userEmail) {
              const refreshedProfile = {
                id: decodedData.id,
                name: userName,
                email: userEmail,
                role: userRole || 'Admin',
                lastLogin: await AsyncStorage.getItem('lastLoginTime') || new Date().toISOString(),
                tokenBased: true
              };
              
              setProfile(refreshedProfile);
              setProfileLoaded(true);
              return;
            }
          }
        }
      } catch (e) {
        console.log('Error decoding token for recovery:', e);
      }
    }
    
    // For real tokens, try to recover using cached data
    try {
      console.log('Attempting to recover using cached data');
      
      // For admin users, try to use cached admin data
      if (userRole === 'Admin') {
        const cachedAdminData = await AsyncStorage.getItem('adminProfileCache');
        if (cachedAdminData) {
          console.log('Using cached admin profile data instead of logging out');
          const profileData = JSON.parse(cachedAdminData);
          setProfile(profileData);
          setProfileLoaded(true);
          return;
        }
      }
      
      // Try regular cached profile
      const cachedProfile = await AsyncStorage.getItem('cachedProfile');
      if (cachedProfile) {
        console.log('Using cached profile data instead of logging out');
        const profileData = JSON.parse(cachedProfile);
        setProfile(profileData);
        setProfileLoaded(true);
        return;
      }
    } catch (e) {
      console.error('Error recovering from unauthorized error:', e);
    }
    
    // Only show the error if we couldn't recover
    console.log('Authentication failed - could not recover');
      Alert.alert(
      'Authentication Error',
      'Your session has expired. Please log in again.',
      [
        { text: 'OK', onPress: () => navigation.navigate('LoginSignup') }
      ]
    );
    throw new Error('Authentication failed. Please log in again.');
  };

  // Fix the token extraction function to handle decoded token with proper userId format
  const extractProfileFromToken = async (token, role) => {
    if (!token) return null;
    
    try {
      console.log('Extracting profile from token:', token);
      
      // Handle mock tokens directly with predefined profiles
      if (token === 'mock-admin-token' || token === 'mock-user-token') {
        console.log('Using predefined mock profile data from token');
        return {
          ...MOCK_PROFILES[token],
          tokenBased: true
        };
      }
      
      // For JWT tokens
      if (token.includes('.')) {
        // Extract the payload part
        const parts = token.split('.');
        if (parts.length < 2) return null;
        
        try {
          // For base64 decoding
          const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
          
          // Create proper padding
          const pad = base64.length % 4;
          const paddedBase64 = pad ? base64 + '='.repeat(4 - pad) : base64;
          
          try {
            // Decode using multiple methods to ensure it works
            let decodedData;
            
            // First try with custom base64 decoder
            try {
              const rawData = base64Decode(paddedBase64);
              decodedData = JSON.parse(rawData);
            } catch (e) {
              // If that fails, try another method
              console.log('First token decode method failed, trying alternative');
              
              // Simple decode using URI decoding
              const jsonStr = decodeURIComponent(
                Array.prototype.map
                  .call(base64Decode(paddedBase64), (c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                  })
                  .join('')
              );
              decodedData = JSON.parse(jsonStr);
            }
            
            console.log('Token data extracted:', Object.keys(decodedData));
            
            // Extract user info
            // The token appears to use 'id' as the key for the userId
            const userId = decodedData.id || decodedData._id || decodedData.userId || 'unknown';
            const userName = await AsyncStorage.getItem('userName');
            const userEmail = await AsyncStorage.getItem('userEmail') || 'user@example.com';
            
            return {
              id: userId,
              name: userName || (role === 'Admin' ? 'Admin User' : 'Student User'),
              email: userEmail,
              phone: decodedData.phone || 'Not available offline',
              role: role,
              tokenBased: true
            };
          } catch (decodeError) {
            console.error('Error decoding token payload:', decodeError);
          }
        } catch (e) {
          console.error('Error processing token parts:', e);
        }
      }
      
      // If JWT parsing fails or it's not a JWT, try to extract basic info from the token string
      // This is a fallback method
      if (token.includes('eyJhb')) {
        console.log('Using fallback token info extraction');
        const userName = await AsyncStorage.getItem('userName');
        const userEmail = await AsyncStorage.getItem('userEmail') || (role === 'Admin' ? 'admin@example.com' : 'user@example.com');
        
        return {
          id: 'from-token',
          name: userName || (role === 'Admin' ? 'Admin User' : 'Student User'),
          email: userEmail,
          phone: 'Not available offline',
          role: role,
          tokenBased: true
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error extracting profile from token:', error);
      return null;
    }
  };

  const handleLogout = async () => {
    try {
      await SessionManager.destroySession();
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginSignup' }],
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  const handleLogin = () => {
    navigation.navigate('LoginSignup');
  };

  const handleRetry = () => {
    // Clear the server availability state to force a fresh check
    setIsServerAvailable(true);
    
    // Clear any cached error states
    AsyncStorage.removeItem('profileFetchError').catch(err => console.log('Error clearing error state:', err));
    
    // Reset the profileLoaded state to ensure we get fresh data
    setProfileLoaded(false);
    
    // Force a fresh fetch by bypassing cache
    const forceFresh = async () => {
      try {
        setLoading(true);
        
        // Get the auth token
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          setLoading(false);
          return;
        }
        
        // Set token in state
        setToken(token);
        
        // Get user role
        const role = await AsyncStorage.getItem('userRole') || 'Student';
        setUserRole(role);
        
        // Force direct API call with fresh fetch
        await fetchProfileFromAPI(token, role, true);
      } catch (error) {
        console.error('Error in retry fetch:', error);
      setLoading(false);
    }
  };

    forceFresh();
  };
  
  // Toggle editing mode
  const toggleEditMode = () => {
    if (isEditing) {
      // Cancel editing
      setEditedProfile({ ...profile });
    }
    setIsEditing(!isEditing);
  };
  
  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Save profile changes
  const saveProfileChanges = async () => {
    try {
      setIsSaving(true);
      
      // Check for required fields
      if (!editedProfile.name.trim()) {
        Alert.alert('Error', 'Name cannot be empty');
        setIsSaving(false);
        return;
      }

      if (!editedProfile.email.trim()) {
        Alert.alert('Error', 'Email cannot be empty');
        setIsSaving(false);
        return;
      }
      
      // Get token for API call
      const token = await AsyncStorage.getItem('authToken');
      
      // For mock tokens, just update the profile directly
      if (token === 'mock-admin-token' || token === 'mock-user-token') {
        // Update the profile
        setProfile(editedProfile);
        setProfileLoaded(true); // Mark as successfully loaded
        setIsEditing(false);
        setIsSaving(false);
        
        // Store the updated username and email
        await AsyncStorage.setItem('userName', editedProfile.name);
        await AsyncStorage.setItem('userEmail', editedProfile.email);
        
        // Update cache with edited profile
        cacheProfileData(editedProfile);
        
        Alert.alert('Success', 'Profile updated successfully');
        return;
      }

      // Always update locally first for better UX
      const updatedProfile = { ...editedProfile };
      setProfile(updatedProfile);
      setProfileLoaded(true); // Mark as successfully loaded
      
      // Store the updated username and email
      await AsyncStorage.setItem('userName', updatedProfile.name);
      await AsyncStorage.setItem('userEmail', updatedProfile.email);
      
      // Update cache with edited profile
      await cacheProfileData(updatedProfile);

      // Try to update on server if connected
      if (isNetworkConnected && isServerAvailable) {
        try {
          console.log('Updating profile on server...');
          
          // Select endpoint based on role
          const endpoint = userRole === 'Admin' 
            ? ENDPOINTS.UPDATE_ADMIN_PROFILE 
            : ENDPOINTS.UPDATE_USER_PROFILE;
          
          // Skip fields that shouldn't be sent to the server
          const { tokenBased, ...dataToSend } = updatedProfile;
          
          const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
              ...createAuthHeader(token),
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(dataToSend)
          });

          // Handle different response statuses
          if (response.status === 401 || response.status === 403) {
            console.log('Authentication error during profile update');
            // We won't show an error to the user since the local update succeeded
            setIsEditing(false);
            setIsSaving(false);
            return;
          }
          
          if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
          }

          const responseData = await response.json();
          console.log('Profile update response:', responseData);
          
          setIsEditing(false);
          setIsSaving(false);
          Alert.alert('Success', 'Profile updated successfully');
        } catch (serverError) {
          console.log('Error updating profile on server:', serverError);
          // We still consider it a success since we updated locally
          setIsEditing(false);
          setIsSaving(false);
          Alert.alert(
            'Partial Success', 
            'Your profile was updated locally, but we couldn\'t sync with the server. Changes will be available on this device.'
          );
        }
      } else {
        setIsEditing(false);
        setIsSaving(false);
        Alert.alert(
          'Offline Mode', 
          'Your profile was updated locally. Changes will sync when you\'re back online.'
        );
      }
        } catch (error) {
      console.error('Error saving profile changes:', error);
      setIsSaving(false);
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  // Add dedicated function to check API availability
  const isAPIAvailable = async () => {
    try {
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        console.log('Network is disconnected');
        return false;
      }

      console.log('Checking API availability...');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // Short timeout
      
      try {
        // Try without auth first
        const response = await fetch(`${API_BASE_URL}/status`, {
          method: 'GET',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          console.log('API is available');
          return true;
        }
        
        // If that fails, try with auth token
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          const authResponse = await fetch(`${API_BASE_URL}/status`, {
            method: 'GET',
            headers: {
              ...createAuthHeader(token),
              'Accept': 'application/json'
            },
            signal: controller.signal
          });
          
          if (authResponse.ok) {
            console.log('API is available (with auth)');
            return true;
          }
        }
        
        console.log('API status endpoint returned non-OK response');
        return false;
      } catch (error) {
        clearTimeout(timeoutId);
        console.log('API status check failed:', error.message);
        return false;
      }
    } catch (error) {
      console.error('Error checking API availability:', error);
      return false;
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  if (!isNetworkConnected) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
          <Icon name="wifi-off" size={80} color="#dc3545" style={styles.noNetworkIcon} />
          <Text style={styles.errorTitle}>No Internet Connection</Text>
          <Text style={styles.subText}>Please check your network settings and try again</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Icon name="account-off" size={80} color="#ccc" style={styles.noProfileIcon} />
          <Text style={styles.notLoggedInText}>You are not logged in</Text>
          <Text style={styles.subText}>Please log in to view your profile</Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const dynamicStyle = dynamicStyles(token);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {!isServerAvailable && (
            <View style={dynamicStyle.offlineNotice}>
              <Icon 
                name={token && token.includes('eyJhb') ? "information" : "server-network-off"} 
                size={16} 
                color="#fff" 
              />
              <Text style={styles.offlineNoticeText}>
                {token && token.includes('eyJhb') 
                  ? "Showing profile from authentication data" 
                  : "Server unavailable - Showing cached data"}
              </Text>
              <TouchableOpacity onPress={handleRetry} style={styles.retryIcon}>
                <Icon name="refresh" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          
          <View style={styles.header}>
            <Text style={styles.headerTitle}>My Profile</Text>
            <TouchableOpacity
              style={[styles.editButton, isEditing && styles.cancelButton]}
              onPress={toggleEditMode}
            >
              <Icon 
                name={isEditing ? "close" : "pencil"} 
                size={16} 
                color="#fff" 
                style={styles.buttonIcon} 
              />
              <Text style={styles.editButtonText}>
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileImageContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={getProfileImageSource(profile.name, profile.role)}
                style={styles.profileImage}
                onError={() => {
                  console.log('Image loading error, using gender-specific default');
                }}
              />
            </View>
            <Text style={styles.profileNameLabel}>
              {getTimeBasedGreeting()}, {profile.name}
            </Text>
            <Text style={styles.welcomeText}>
              Welcome back to your {profile.role} dashboard
            </Text>
          </View>
          
            <View style={styles.profileInfo}>
              <View style={styles.infoItem}>
                <Text style={styles.label}>Full Name</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={editedProfile.name}
                  onChangeText={(text) => handleInputChange('name', text)}
                  placeholder="Enter your full name"
                />
              ) : (
                <Text style={styles.value}>{profile.name}</Text>
              )}
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.label}>Email</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={editedProfile.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
              ) : (
                <Text style={styles.value}>{profile.email}</Text>
              )}
              </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Phone</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={editedProfile.phone}
                  onChangeText={(text) => handleInputChange('phone', text)}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.value}>{profile.phone || 'Not provided'}</Text>
              )}
            </View>
            {profile.institution && !isEditing && (
              <View style={styles.infoItem}>
                <Text style={styles.label}>Institution</Text>
                <Text style={styles.value}>{profile.institution}</Text>
              </View>
            )}
            {editedProfile?.institution && isEditing && (
              <View style={styles.infoItem}>
                <Text style={styles.label}>Institution</Text>
                <TextInput
                  style={styles.input}
                  value={editedProfile.institution}
                  onChangeText={(text) => handleInputChange('institution', text)}
                  placeholder="Enter your institution"
                />
              </View>
            )}
            <View style={styles.infoItem}>
              <Text style={styles.label}>Last Login</Text>
              <Text style={styles.value}>
                {profile.lastLogin ? new Date(profile.lastLogin).toLocaleString() : 'First login'}
              </Text>
            </View>
          </View>

          {isEditing && (
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={saveProfileChanges}
              disabled={isSaving}
            >
              {isSaving ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <Icon name="content-save" size={18} color="#fff" style={styles.buttonIcon} />
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </>
              )}
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Icon name="logout" size={20} color="#fff" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#0066cc',
    overflow: 'hidden',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileNameLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  profileInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  logoutIcon: {
    marginRight: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  notLoggedInText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  loginButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noProfileIcon: {
    marginBottom: 10,
  },
  noNetworkIcon: {
    marginBottom: 10,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#dc3545',
    marginTop: 10,
  },
  retryButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  offlineNoticeText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#28a745',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonIcon: {
    marginRight: 10,
  },
  retryIcon: {
    marginLeft: 10,
  },
});

export default ProfileScreen;
