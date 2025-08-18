/**
 * PlatformConstants.js
 * This file provides platform-specific constants for the React Native app.
 */

import { Platform, Dimensions } from 'react-native';

// Get device dimensions
const { width, height } = Dimensions.get('window');

const PlatformConstants = {
  // Core platform information
  OS: Platform.OS,
  Version: Platform.Version,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isWeb: Platform.OS === 'web',
  
  // Device information
  deviceType: Platform.isPad ? 'tablet' : 'phone',
  deviceWidth: width,
  deviceHeight: height,
  
  // Required properties for TurboModule compatibility
  isTesting: false,
  reactNativeVersion: {
    major: 0,
    minor: 76,
    patch: 5,
  },
  
  // App-specific constants
  appConstants: {
    appName: 'SMC App',
    appVersion: '1.0.0',
    buildNumber: '1',
  },
  
  // Mock methods that might be expected
  getConstants: function() {
    return {
      OS: this.OS,
      Version: this.Version,
      isTesting: this.isTesting,
      reactNativeVersion: this.reactNativeVersion,
      ...this.appConstants
    };
  }
};

export default PlatformConstants;