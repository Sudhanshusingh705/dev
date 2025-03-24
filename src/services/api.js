import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Dynamically determine the base URL - make sure this matches your backend server address
const BASE_URL = 'http://192.168.1.11:5000/api';

console.log('API Service initialized with base URL:', BASE_URL);

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
      cachedToken = await AsyncStorage.getItem('authToken');
      console.log('Token retrieved for API request:', cachedToken ? 'Token exists' : 'No token');
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
      cachedToken = null;
      console.error('Session expired. Redirecting to login.');
      // Redirect to login screen if necessary
    }
    return Promise.reject(error);
  }
);

export default API; 