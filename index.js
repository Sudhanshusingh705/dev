// Import global polyfills first
import './src/utils/global';

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

// Import and initialize TurboModule system
import { initializeTurboModules } from './src/utils/TurboModuleSetup';
import './src/utils/NativeModules';

// Initialize TurboModules before importing App
initializeTurboModules();

import App from './App';

// Register the main application component with the correct app name
AppRegistry.registerComponent('SMCApp', () => App);
