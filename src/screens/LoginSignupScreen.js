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
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import API from '../services/api';

const LoginSignupScreen = () => {
  const navigation = useNavigation();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');

  const handleAuth = async () => {
    if (isSignup && (!name || !email || !password)) {
      Alert.alert('Error', 'Please fill all the fields to sign up.');
      return;
    }
    if (!isSignup && (!email || !password)) {
      Alert.alert('Error', 'Please enter your email and password to log in.');
      return;
    }

    try {
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
      } else {
        Alert.alert(
          'Error',
          response.data?.message || 'Authentication failed, please try again.'
        );
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert(
        'Error',
        error.response?.data?.message ||
          'Authentication failed, please check your details and try again.'
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

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isSignup ? 'Signup' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => setIsSignup(!isSignup)}
      >
        <Text style={styles.switchButtonText}>
          Switch to {isSignup ? 'Login' : 'Signup'}
        </Text>
      </TouchableOpacity>
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
});

export default LoginSignupScreen;

