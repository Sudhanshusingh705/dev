import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../api';

// Dynamically determine the base URL
const BASE_URL = API_BASE_URL;

console.log('API Service initialized with base URL:', BASE_URL);

// Create an Axios instance with better timeout and retry config
const API = axios.create({
  baseURL: BASE_URL,
  timeout: 15000, // 15 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Caching token in memory
let cachedToken = null;

// Request interceptor
API.interceptors.request.use(
  async (config) => {
    try {
      if (!cachedToken) {
        cachedToken = await AsyncStorage.getItem('authToken');
        console.log('Token retrieved for API request:', cachedToken ? 'Token exists' : 'No token');
      }
      
      if (cachedToken) {
        config.headers.Authorization = `Bearer ${cachedToken}`;
      }
      
      console.log('API Request:', config.method.toUpperCase(), config.baseURL + config.url);
      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return config; // Continue with request even if token retrieval fails
    }
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  async (error) => {
    // Handle request timeout
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout:', error.config.url);
    }
    
    // Handle network errors
    if (error.message && error.message.includes('Network Error')) {
      console.error('Network error - Server may be down or unreachable');
    }
    
    // Handle API errors
    if (error.response) {
      console.error('API Error:', 
        error.response.status,
        error.response.config.url,
        error.response.data?.message || error.message
      );
      
      if (error.response.status === 401) {
        // Handle token expiration
        await AsyncStorage.removeItem('authToken');
        cachedToken = null;
        console.error('Session expired. Redirecting to login.');
        // Redirect to login screen if necessary
      }
    }
    
    return Promise.reject(error);
  }
);

export default API; 