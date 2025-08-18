/**
 * NativeModules.js
 * This file registers custom native modules with React Native
 */

import { NativeModules, Platform } from 'react-native';
import PlatformConstants from '../constants/PlatformConstants';

// First, ensure PlatformConstants is available in NativeModules
if (!NativeModules.PlatformConstants) {
  NativeModules.PlatformConstants = PlatformConstants;
}

// Create a proper mock for TurboModuleRegistry
if (global.TurboModuleRegistry === undefined) {
  global.TurboModuleRegistry = {
    getEnforcing: (name) => {
      // Return our custom modules based on name
      if (name === 'PlatformConstants') {
        return NativeModules.PlatformConstants;
      }
      
      // For other modules, check if they exist in NativeModules
      if (NativeModules[name]) {
        return NativeModules[name];
      }
      
      // For any other module, return a basic mock
      console.warn(`TurboModuleRegistry: '${name}' not found, using mock instead.`);
      return { S: undefined };
    }
  };
}

export default NativeModules;