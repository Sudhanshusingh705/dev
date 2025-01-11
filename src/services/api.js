import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create an axios instance with the base URL
const API = axios.create({
  baseURL: 'http://192.168.1.14:5000/api/admin', // Replace with your backend URL 192.168.14:8081 (http://192.168.x.x:5000/api/admin), http://localhost:5000/api/admin, http://10.0.2.2:8081/api/admin
});

// Add a request interceptor to include the token if available
API.interceptors.request.use(
  async (config) => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem('adminToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default API;
