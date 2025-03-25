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

<<<<<<< HEAD
// Dynamically determine the base URL - make sure this matches your backend server address
const BASE_URL = 'http://192.168.1.11:5000/api';

console.log('API Service initialized with base URL:', BASE_URL);
=======
// Dynamically determine the base URL
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.6:5000/api/admin'
    : 'https://your-production-url.com/api/admin';
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

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
<<<<<<< HEAD
      cachedToken = await AsyncStorage.getItem('authToken');
      console.log('Token retrieved for API request:', cachedToken ? 'Token exists' : 'No token');
=======
      cachedToken = await AsyncStorage.getItem('adminToken');
    }
    if (cachedToken) {
      config.headers.Authorization = `Bearer ${cachedToken}`;
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
    }
    if (cachedToken) {
      config.headers.Authorization = `Bearer ${cachedToken}`;
    }
    console.log('API Request:', config.method.toUpperCase(), config.baseURL + config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
API.interceptors.response.use(
<<<<<<< HEAD
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  async (error) => {
    console.error('API Error:', 
      error.response?.status,
      error.response?.config?.url,
      error.response?.data?.message || error.message
    );
    
    if (error.response?.status === 401) {
      // Handle token expiration
      await AsyncStorage.removeItem('authToken');
=======
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token expiration
      await AsyncStorage.removeItem('adminToken');
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
      cachedToken = null;
      console.error('Session expired. Redirecting to login.');
      // Redirect to login screen if necessary
    }
    return Promise.reject(error);
  }
);

export default API; 