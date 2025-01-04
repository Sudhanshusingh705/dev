import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJ1Yr9hd3X-TlaTaBvsLIFHiI5-PZbPE",
  authDomain: "smc-apps-a2548.firebaseapp.com",
  projectId: "smc-apps-a2548",
  storageBucket: "smc-apps-a2548.firebasestorage.app",
  messagingSenderId: "886043516618",
  appId: "1:886043516618:web:481bd31cd5d39adea95e33",
};

// Initialize Firebase app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };









