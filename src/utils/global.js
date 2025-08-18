/**
 * global.js
 * This file provides global polyfills for React Native
 */

// Polyfill for TurboModuleRegistry
if (global.TurboModuleRegistry === undefined) {
  global.TurboModuleRegistry = {
    getEnforcing: (name) => {
      console.log(`TurboModuleRegistry.getEnforcing called for: ${name}`);
      return {
        // Add all properties needed to fix the TypeScript error
        anonymous: {},
        guardedLoadModule: () => {},
        loadModuleImplementation: () => {},
        metroRequire: () => {},
        global: global,
        __turboModuleProxy: null,
        startHeartbeat: () => {},
        stopHeartbeat: () => {},
        setGlobalEagerInvalidation: () => {},
        invalidateModuleCache: () => {},
        getModuleId: () => 0,
        hot: {
          accept: () => {},
          decline: () => {},
          dispose: () => {},
          addStatusHandler: () => {},
          removeStatusHandler: () => {}
        }
      };
    }
  };
}

// Ensure localStorage is available
if (global.localStorage === undefined) {
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  
  // Create a synchronous localStorage API that wraps AsyncStorage
  // This is not ideal but helps with compatibility
  const localStorageData = {};
  
  global.localStorage = {
    _data: localStorageData,
    
    // Synchronous version that works with the cached data
    getItem: (key) => {
      console.log(`localStorage.getItem called for: ${key}`);
      return localStorageData[key] !== undefined ? localStorageData[key] : null;
    },
    
    // Synchronous version that updates the cache
    setItem: (key, value) => {
      console.log(`localStorage.setItem called for: ${key}`);
      localStorageData[key] = value.toString();
      // Also update AsyncStorage in the background
      AsyncStorage.setItem(key, value.toString())
        .catch(error => console.error('AsyncStorage.setItem error:', error));
    },
    
    // Synchronous version that updates the cache
    removeItem: (key) => {
      console.log(`localStorage.removeItem called for: ${key}`);
      delete localStorageData[key];
      // Also update AsyncStorage in the background
      AsyncStorage.removeItem(key)
        .catch(error => console.error('AsyncStorage.removeItem error:', error));
    },
    
    // Additional methods for compatibility
    clear: () => {
      console.log('localStorage.clear called');
      Object.keys(localStorageData).forEach(key => {
        delete localStorageData[key];
      });
      // Also clear AsyncStorage in the background
      AsyncStorage.clear()
        .catch(error => console.error('AsyncStorage.clear error:', error));
    },
    
    key: (index) => {
      console.log(`localStorage.key called for index: ${index}`);
      return Object.keys(localStorageData)[index] || null;
    },
    
    get length() {
      return Object.keys(localStorageData).length;
    }
  };
  
  // Initialize the cache from AsyncStorage
  (async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      items.forEach(([key, value]) => {
        localStorageData[key] = value;
      });
      console.log('localStorage cache initialized with AsyncStorage data');
    } catch (error) {
      console.error('Error initializing localStorage cache:', error);
    }
  })();
}

export default {};