// API configuration
// Use production API URL for the release build
export const API_BASE_URL = 'https://searchmycolleges.com/api';
console.log('Using API base URL:', API_BASE_URL);

// Connection timeout settings
export const API_TIMEOUT = 15000; // Increased to 15 seconds to prevent timeout

// Authentication constants
export const TOKEN_PREFIX = 'Bearer '; // Used for constructing Authorization headers

// API endpoints
export const ENDPOINTS = {
  LOGIN: '/user/login',
  ADMIN_LOGIN: '/admin/login',
  REGISTER: '/user/register',
  ADMIN_REGISTER: '/admin/register',
  USER_PROFILE: '/user/profile',
  ADMIN_PROFILE: '/admin/profile',
  UPDATE_USER_PROFILE: '/user/profile/update',
  UPDATE_ADMIN_PROFILE: '/admin/profile/update',
  GET_USER_PROFILE: '/user/profile',
  GET_ADMIN_PROFILE: '/admin/profile',
  DASHBOARD_STATS: '/admin/dashboard/stats',
  STATUS: '/status'
}; 

// Helper function to create authorization header
export const createAuthHeader = (token) => {
  if (!token) return {};
  
  // Handle different token formats
  if (token === 'mock-admin-token' || token === 'mock-user-token') {
    // For mock tokens, we'll create a special format
    return { 'Authorization': token };
  }
  
  // For real tokens, ensure Bearer prefix
  if (token.startsWith(TOKEN_PREFIX)) {
    return { 'Authorization': token };
  }
  
  return { 'Authorization': `${TOKEN_PREFIX}${token}` };
};