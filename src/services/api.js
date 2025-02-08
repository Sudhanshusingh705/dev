// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Create an axios instance with the base URL
// const API = axios.create({
//   baseURL: 'http://192.168.1.8:5000/api/admin', // Replace with your backend URL 192.168.14:8081 (http://192.168.x.x:5000/api/admin), http://localhost:5000/api/admin, http://10.0.2.2:8081/api/admin
// });

// // Add a request interceptor to include the token if available
// API.interceptors.request.use(
//   async (config) => {
//     try {
//       // Retrieve the token from AsyncStorage
//       const token = await AsyncStorage.getItem('adminToken');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     } catch (error) {
//       console.error('Error retrieving token:', error);
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request errors
//     return Promise.reject(error);
//   }
// );

// export default API;










import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Dynamically determine the base URL
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.6:5000/api/admin'
    : 'https://your-production-url.com/api/admin';

// Create an Axios instance
const API = axios.create({
  baseURL: BASE_URL,
});

// Caching token in memory
let cachedToken = null;

// Request interceptor
API.interceptors.request.use(
  async (config) => {
    if (!cachedToken) {
      cachedToken = await AsyncStorage.getItem('adminToken');
    }
    if (cachedToken) {
      config.headers.Authorization = `Bearer ${cachedToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token expiration
      await AsyncStorage.removeItem('adminToken');
      cachedToken = null;
      console.error('Session expired. Redirecting to login.');
      // Redirect to login screen if necessary
    }
    return Promise.reject(error);
  }
);

export default API;
