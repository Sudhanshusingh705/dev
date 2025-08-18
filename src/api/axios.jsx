import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SessionManager } from '../utils/secureStorage';

const API = axios.create({
    baseURL: 'https://searchmycolleges.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    }
});

// Request interceptor for authentication and security
API.interceptors.request.use(async (config) => {
    try {
        const sessionData = await SessionManager.getSession();
        const token = sessionData?.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        // Security headers
        config.headers['X-Content-Type-Options'] = 'nosniff';
        config.headers['X-Frame-Options'] = 'DENY';
        config.headers['X-XSS-Protection'] = '1; mode=block';
        
        return config;
    } catch (error) {
        console.error('Security error in request interceptor:', error);
        return Promise.reject(error);
    }
}, (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
});

// Response interceptor for security and error handling
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Clear token on unauthorized
            await SessionManager.destroySession();
        }
        
        // Log security incidents
        if (error.response?.status >= 400) {
            console.error('API Security Incident:', {
                status: error.response.status,
                url: error.config?.url,
                method: error.config?.method,
                timestamp: new Date().toISOString()
            });
        }
        
        return Promise.reject(error);
    }
);

export default API;
