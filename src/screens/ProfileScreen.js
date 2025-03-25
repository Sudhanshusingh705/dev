<<<<<<< HEAD
=======
// import React, { useEffect, useState } from 'react';
// import { View, Text, Alert, Button, ActivityIndicator, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import API from '../services/api';

// const ProfileScreen = ({ navigation }) => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = await AsyncStorage.getItem('adminToken');
//         if (!token) {
//           Alert.alert('Error', 'Authentication token not found');
//           navigation.navigate('LoginScreen');
//           return;
//         }

//         const response = await API.get('/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfile(response.data);
//       } catch (error) {
//         Alert.alert('Error', error.response?.data?.message || 'Unable to fetch profile');
//         navigation.navigate('LoginScreen');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [navigation]);

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem('adminToken'); // Remove token from storage
//       Alert.alert('Success', 'Logged out successfully');
//       navigation.navigate('LoginScreen');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to log out');
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {profile ? (
//         <View style={styles.profileContainer}>
//           <Text style={styles.label}>Name:</Text>
//           <Text style={styles.value}>{profile.name}</Text>
//           <Text style={styles.label}>Email:</Text>
//           <Text style={styles.value}>{profile.email}</Text>
//         </View>
//       ) : (
//         <Text style={styles.errorText}>Profile not available</Text>
//       )}
//       <Button title="Logout" onPress={handleLogout} color="#ff4500" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
// });

// export default ProfileScreen;







// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import API from '../services/api';

// const ProfileScreen = ({ navigation }) => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = await AsyncStorage.getItem('adminToken');
//         if (!token) {
//           Alert.alert('Error', 'Authentication token not found');
//           navigation.navigate('LoginSignup');
//           return;
//         }

//         const response = await API.get('/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfile(response.data);
//       } catch (error) {
//         Alert.alert('Error', error.response?.data?.message || 'Unable to fetch profile');
//         navigation.navigate('LoginSignup');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [navigation]);

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem('adminToken'); // Remove token from storage
//       Alert.alert('Success', 'Logged out successfully');
//       navigation.navigate('LoginSignup');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to log out');
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {profile ? (
//         <View style={styles.profileContainer}>
//           <Text style={styles.label}>Name:</Text>
//           <Text style={styles.value}>{profile.name}</Text>
//           <Text style={styles.label}>Email:</Text>
//           <Text style={styles.value}>{profile.email}</Text>
//         </View>
//       ) : (
//         <Text style={styles.errorText}>Profile not available</Text>
//       )}
//       <Button title="Logout" onPress={handleLogout} color="#ff4500" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
// });

// export default ProfileScreen;










// import React, { useEffect, useState } from "react"
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
//   SafeAreaView,
//   ScrollView
// } from "react-native"
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import { useNavigation } from "@react-navigation/native"

// const ProfileScreen = () => {
//   const navigation = useNavigation()
//   const [profileData, setProfileData] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetchProfileData()
//   }, [])

//   const fetchProfileData = async () => {
//     try {
//       const token = await AsyncStorage.getItem("adminToken")

//       if (!token) {
//         throw new Error("No authentication token found")
//       }

//       const response = await fetch(
//         "http://192.168.1.14:5000/api/admin/profile",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//           }
//         }
//       )

//       if (!response.ok) {
//         throw new Error("Failed to fetch profile data")
//       }

//       const data = await response.json()
//       setProfileData(data)
//     } catch (error) {
//       Alert.alert(
//         "Error",
//         error instanceof Error ? error.message : "Failed to load profile",
//         [
//           {
//             text: "OK",
//             onPress: () => navigation.navigate("Login")
//           }
//         ]
//       )
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.multiRemove(["adminToken", "userData"])
//       navigation.navigate("Login")
//     } catch (error) {
//       Alert.alert("Error", "Failed to logout. Please try again.")
//     }
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0066cc" />
//         <Text style={styles.loadingText}>Loading profile...</Text>
//       </View>
//     )
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Admin Profile</Text>
//         </View>

//         {profileData ? (
//           <View style={styles.profileContainer}>
//             <View style={styles.infoSection}>
//               <Text style={styles.label}>Name</Text>
//               <Text style={styles.value}>{profileData.name}</Text>
//             </View>

//             <View style={styles.infoSection}>
//               <Text style={styles.label}>Email</Text>
//               <Text style={styles.value}>{profileData.email}</Text>
//             </View>

//             <View style={styles.infoSection}>
//               <Text style={styles.label}>Role</Text>
//               <Text style={styles.value}>{profileData.role || "Admin"}</Text>
//             </View>
//           </View>
//         ) : (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>No profile data available</Text>
//           </View>
//         )}

//         <TouchableOpacity
//           style={styles.logoutButton}
//           onPress={handleLogout}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.logoutButtonText}>Logout</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5"
//   },
//   scrollContainer: {
//     flexGrow: 1
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#666"
//   },
//   header: {
//     padding: 20,
//     backgroundColor: "#fff",
//     borderBottomWidth: 1,
//     borderBottomColor: "#e0e0e0"
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333"
//   },
//   profileContainer: {
//     padding: 20
//   },
//   infoSection: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3
//   },
//   label: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 5
//   },
//   value: {
//     fontSize: 16,
//     color: "#333",
//     fontWeight: "500"
//   },
//   errorContainer: {
//     padding: 20,
//     alignItems: "center"
//   },
//   errorText: {
//     fontSize: 16,
//     color: "#ff3b30",
//     textAlign: "center"
//   },
//   logoutButton: {
//     backgroundColor: "#ff3b30",
//     padding: 15,
//     borderRadius: 10,
//     margin: 20,
//     alignItems: "center"
//   },
//   logoutButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600"
//   }
// })

// export default ProfileScreen;







// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
//   SafeAreaView
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProfileScreen = ({ navigation }) => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = await AsyncStorage.getItem('adminToken');
//       if (!token) {
//         navigation.replace('LoginScreen');
//         return;
//       }

//       const response = await fetch('http://192.168.1.8:5000/api/admin/profile', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       const data = await response.json();
      
//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to fetch profile');
//       }

//       setProfile(data);
//     } catch (error) {
//       Alert.alert(
//         'Error',
//         error.message || 'Failed to load profile',
//         [
//           { 
//             text: 'OK', 
//             onPress: () => navigation.replace('LoginScreen')
//           }
//         ]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const handleLogout = async () => {
//   //   try {
//   //     await AsyncStorage.removeItem('adminToken');
//   //     navigation.replace('LoginScreen');
//   //   } catch (error) {
//   //     Alert.alert('Error', 'Failed to logout. Please try again.');
//   //   }
//   // };

//   // const handleLogout = async () => {
//   //   try {
//   //     console.log('Logout button pressed'); // Debugging log
//   //     await AsyncStorage.removeItem('adminToken');
//   //     console.log('Token removed from AsyncStorage'); // Debugging log
//   //     // navigation.replace('LoginScreen');
//   //   } catch (error) {
//   //     console.error('Error during logout:', error); // Debugging log
//   //     Alert.alert('Error', 'Failed to logout. Please try again.');
//   //   }
//   // };
  

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#f4511e" />
//         <Text style={styles.loadingText}>Loading profile...</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         {profile ? (
//           <>
//             <View style={styles.profileInfo}>
//               <View style={styles.infoItem}>
//                 <Text style={styles.label}>Name</Text>
//                 <Text style={styles.value}>{profile.name}</Text>
//               </View>
              
//               <View style={styles.infoItem}>
//                 <Text style={styles.label}>Email</Text>
//                 <Text style={styles.value}>{profile.email}</Text>
//               </View>
//             </View>

            
//             {/*<TouchableOpacity
//               style={styles.logoutButton}
//               onPress={handleLogout}
//             >
//               <Text style={styles.logoutText}>Logout</Text>
//             </TouchableOpacity>*/}

//           </>
//         ) : (
//           <Text style={styles.errorText}>Failed to load profile data</Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//     fontSize: 16,
//   },
//   profileInfo: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   infoItem: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '500',
//   },
//   logoutButton: {
//     backgroundColor: '#f4511e',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   logoutText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#ff3b30',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });

// export default ProfileScreen;













>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
<<<<<<< HEAD
  ScrollView,
  Platform,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from '@react-native-community/netinfo';
import { API_BASE_URL } from '../api';
=======
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

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

// Mock profiles for testing
const MOCK_PROFILES = {
  'mock-admin-token': {
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '123-456-7890',
    role: 'Admin'
  },
  'mock-user-token': {
    name: 'Student User',
    email: 'student@example.com',
    phone: '987-654-3210',
    role: 'Student'
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

const ProfileScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [userRole, setUserRole] = useState('');
  const [isNetworkConnected, setIsNetworkConnected] = useState(true);
  const [isServerAvailable, setIsServerAvailable] = useState(true);
  
  // Add state for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  
  // Initialize edited profile when profile changes
  useEffect(() => {
    if (profile) {
      setEditedProfile({ ...profile });
    }
  }, [profile]);
=======
  const [uploading, setUploading] = useState(false);
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

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
    }
  }, [isFocused, isNetworkConnected]);

  const checkServerStatus = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      try {
        // Try root API endpoint
        await fetch(`${API_BASE_URL}`, {
          method: 'GET',
          signal: controller.signal
        });
        setIsServerAvailable(true);
        return true;
      } catch (error) {
        console.log('Server check error:', error);
        try {
          // Try base URL
          await fetch(`http://192.168.1.11:5000/`, {
            method: 'GET',
            signal: controller.signal
          });
          setIsServerAvailable(true);
          return true;
        } catch (error) {
          setIsServerAvailable(false);
          return false;
        }
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (error) {
      console.error('Server check error:', error);
      setIsServerAvailable(false);
      return false;
    }
  };

  const fetchProfile = async () => {
    try {
      setLoading(true);
      
      // Check network connectivity
      const netInfo = await NetInfo.fetch();
      setIsNetworkConnected(netInfo.isConnected);
      
      if (!netInfo.isConnected) {
        console.log('No network connection');
        setLoading(false);
        return;
      }

<<<<<<< HEAD
      // Get the auth token
      const token = await AsyncStorage.getItem('authToken');
      
      if (!token) {
        console.log('No authentication token found');
        setLoading(false);
        setProfile(null);
        return;
      }

      // Log token for debugging (mask most of it)
      const maskedToken = token.length > 10 ? 
        `${token.substring(0, 5)}...${token.substring(token.length - 5)}` : token;
      console.log(`Using auth token: ${maskedToken}`);

      // Get user role
      const role = await AsyncStorage.getItem('userRole') || 'Student';
      setUserRole(role);
      console.log(`User role: ${role}`);

      // Check if we have mock data for this token
      if (token === 'mock-admin-token' || token === 'mock-user-token') {
        // Use mock data for testing
        console.log('Using mock profile data for:', token);
        const mockData = {...MOCK_PROFILES[token]};
        console.log('Mock profile data:', JSON.stringify(mockData));
        setProfile(mockData);
        setLoading(false);
        return;
      }

      // Check if server is available before making API call
      const serverAvailable = await checkServerStatus();
      
      if (!serverAvailable) {
        console.log('Server is unavailable, using fallback data');
        // Use a fallback profile with gender-specific image
        const fallbackName = role === 'Admin' ? 'Admin User' : 'Student User';
        setProfile({
          name: fallbackName,
          email: 'user@example.com',
          phone: 'N/A (Server Offline)',
          role: role,
        });
        setLoading(false);
        return;
      }

      // Try to fetch from the actual API
      try {
        const endpoint = role === 'Admin' ? '/admin/profile' : '/user/profile';
        
        console.log(`Fetching profile from: ${API_BASE_URL}${endpoint}`);
        
        // Set a timeout for the fetch operation
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        // Fix authorization header format
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        console.log('Profile API response status:', response.status);

        // Check for 401 unauthorized specifically
        if (response.status === 401) {
          console.log('Authentication failed - invalid or expired token');
          // Clear the invalid token
          await AsyncStorage.removeItem('authToken');
          Alert.alert(
            'Authentication Error',
            'Your session has expired. Please log in again.',
            [
              { text: 'OK', onPress: () => navigation.navigate('LoginSignup') }
            ]
          );
          throw new Error('Authentication failed. Please log in again.');
        }

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch (e) {
            errorData = { message: 'Failed to fetch profile' };
          }
          throw new Error(errorData.message || 'Failed to fetch profile');
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Unexpected response format:', contentType);
          throw new Error('Unexpected response format from server');
        }

        const data = await response.json();
        console.log('Profile data received:', Object.keys(data));
        setProfile({
          ...data,
          role: role, // Ensure role is included
        });
      } catch (apiError) {
        console.error('API Error:', apiError);
        
        if (apiError.name === 'AbortError') {
          Alert.alert('Request Timeout', 'The server took too long to respond. Please try again later.');
        } else {
          // Only show an alert for non-authentication errors (401 is handled above)
          if (!apiError.message.includes('Authentication failed')) {
            Alert.alert('Profile Error', apiError.message || 'Failed to fetch profile data');
          }
        }
        
        // If API fails, fall back to basic profile from token
        const fallbackName = role === 'Admin' ? 'Admin User' : 'Student User';
        setProfile({
          name: fallbackName,
          email: 'user@example.com',
          phone: 'N/A (API Error)',
          role: role,
        });
      }
    } catch (error) {
      console.error('Profile fetch error:', error);
      setProfile(null);
=======
      const response = await fetch('http://192.168.1.6:5000/api/admin/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch profile');
      }

      setProfile(data);
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Failed to load profile',
        [
          {
            text: 'OK',
            onPress: () => navigation.replace('LoginScreen'),
          },
        ]
      );
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('userRole');
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
    fetchProfile();
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
        setIsEditing(false);
        setIsSaving(false);
        Alert.alert('Success', 'Profile updated successfully');
        return;
      }
      
      // Check network and server
      if (!isNetworkConnected || !isServerAvailable) {
        setProfile(editedProfile); // Update locally anyway
        setIsEditing(false);
        setIsSaving(false);
        Alert.alert('Offline Mode', 'Profile updated locally. Changes will sync when back online.');
        return;
      }
      
      // Make API call to update profile
      const role = await AsyncStorage.getItem('userRole') || 'Student';
      const endpoint = role === 'Admin' ? '/admin/profile/update' : '/user/profile/update';
      
      // Try to update via API
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(editedProfile)
        });
        
        if (!response.ok) {
          throw new Error('Failed to update profile');
        }
        
        // Update was successful
        setProfile(editedProfile);
        setIsEditing(false);
        Alert.alert('Success', 'Profile updated successfully');
      } catch (apiError) {
        console.error('API Error during profile update:', apiError);
        // Update locally anyway
        setProfile(editedProfile);
        Alert.alert('Warning', 'Server sync failed, but profile updated locally');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert('Error', 'Failed to save profile changes');
    } finally {
      setIsSaving(false);
    }
=======
  const handleImageUpload = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        const formData = new FormData();
        formData.append('profilePicture', {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        });

        try {
          setUploading(true);
          const token = await AsyncStorage.getItem('adminToken');
          const res = await fetch('http://192.168.1.6:5000/api/admin/profile/upload', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message || 'Failed to upload image');
          }

          setProfile((prev) => ({ ...prev, profileImage: data.filePath }));
          Alert.alert('Success', 'Profile picture updated successfully!');
        } catch (error) {
          Alert.alert('Error', error.message || 'Failed to upload image');
        } finally {
          setUploading(false);
        }
      }
    });
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {!isServerAvailable && (
            <View style={styles.offlineNotice}>
              <Icon name="server-network-off" size={16} color="#fff" />
              <Text style={styles.offlineNoticeText}>
                Server offline - Showing cached data
              </Text>
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
=======
      <View style={styles.content}>
        {profile ? (
          <>
            <Image
              source={{ uri: profile.profileImage || 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleImageUpload}
              disabled={uploading}
            >
              <Text style={styles.uploadText}>
                {uploading ? 'Uploading...' : 'Upload Profile Picture'}
              </Text>
            </TouchableOpacity>
            <View style={styles.profileInfo}>
              <View style={styles.infoItem}>
                <Text style={styles.label}>Full Name</Text>
                <Text style={styles.value}>{profile.name}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{profile.email}</Text>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.errorText}>Failed to load profile data</Text>
        )}
      </View>
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
<<<<<<< HEAD
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
=======
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    color: '#fff',
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
    fontSize: 16,
    fontWeight: '600',
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
<<<<<<< HEAD
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
=======
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
<<<<<<< HEAD
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
=======
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
  offlineNotice: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default ProfileScreen;
