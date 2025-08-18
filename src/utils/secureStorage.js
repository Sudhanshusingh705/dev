/**
 * Secure storage utilities with encryption-like behavior
 * Note: For production apps, use react-native-keychain or similar for real encryption
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Secure storage wrapper with basic obfuscation
 */
export class SecureStorage {
  static async setItem(key, value) {
    try {
      // Basic obfuscation - not real encryption
      const obfuscatedValue = btoa(JSON.stringify(value));
      await AsyncStorage.setItem(key, obfuscatedValue);
      return true;
    } catch (error) {
      console.error('Secure storage set error:', error);
      return false;
    }
  }

  static async getItem(key) {
    try {
      const obfuscatedValue = await AsyncStorage.getItem(key);
      if (!obfuscatedValue) return null;
      
      const value = JSON.parse(atob(obfuscatedValue));
      return value;
    } catch (error) {
      console.error('Secure storage get error:', error);
      return null;
    }
  }

  static async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Secure storage remove error:', error);
      return false;
    }
  }

  static async clear() {
    try {
      const keys = ['authToken', 'userRole', 'user', 'lastLoginTime'];
      await AsyncStorage.multiRemove(keys);
      return true;
    } catch (error) {
      console.error('Secure storage clear error:', error);
      return false;
    }
  }

  /**
   * Store sensitive data with expiration
   */
  static async setItemWithExpiry(key, value, expiryMinutes = 60) {
    const item = {
      value: value,
      expiry: new Date().getTime() + (expiryMinutes * 60 * 1000)
    };
    return await this.setItem(key, item);
  }

  /**
   * Get item with expiry check
   */
  static async getItemWithExpiry(key) {
    const item = await this.getItem(key);
    if (!item) return null;
    
    if (new Date().getTime() > item.expiry) {
      await this.removeItem(key);
      return null;
    }
    
    return item.value;
  }
}

/**
 * Session management utilities
 */
export class SessionManager {
  static async createSession(token, userData) {
    const sessionData = {
      token,
      userData,
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString()
    };
    
    await SecureStorage.setItemWithExpiry('session', sessionData, 1440); // 24 hours
    return sessionData;
  }

  static async getSession() {
    return await SecureStorage.getItemWithExpiry('session');
  }

  static async updateActivity() {
    const session = await SecureStorage.getItem('session');
    if (session) {
      session.lastActivity = new Date().toISOString();
      await SecureStorage.setItemWithExpiry('session', session, 1440);
    }
  }

  static async destroySession() {
    await SecureStorage.clear();
  }

  static async isSessionValid() {
    const session = await this.getSession();
    return session && session.token;
  }
}