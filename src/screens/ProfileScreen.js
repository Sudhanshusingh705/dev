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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('adminToken');
      if (!token) {
        navigation.replace('LoginScreen');
        return;
      }

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
    } finally {
      setLoading(false);
    }
  };

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
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f4511e" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
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
    fontSize: 16,
    fontWeight: '600',
  },
  profileInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoItem: {
    marginBottom: 15,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: '#ff3b30',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProfileScreen;
