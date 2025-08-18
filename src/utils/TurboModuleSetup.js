/**
 * TurboModuleSetup.js
 * This file provides proper initialization for the TurboModule system
 */

import { NativeModules } from 'react-native';
import PlatformConstants from '../constants/PlatformConstants';

/**
 * Initialize the TurboModule system with proper mocks
 * This function should be called before the app renders
 */
export function initializeTurboModules() {
  // Ensure PlatformConstants is available in NativeModules
  if (!NativeModules.PlatformConstants) {
    NativeModules.PlatformConstants = PlatformConstants;
  }

  // Create a proper mock for TurboModuleRegistry if it doesn't exist
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
        
        // For any other module, return a basic mock to prevent crashes
        console.warn(`TurboModuleRegistry: '${name}' not found, using mock instead.`);
        return {};
      }
    };
    
    console.log('TurboModuleRegistry mock initialized successfully');
  }
}

export default {
  initializeTurboModules
};