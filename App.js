import React, { useEffect } from 'react';
import { StatusBar, LogBox, UIManager, Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

// Ignore specific warnings for cleaner console
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Require cycle:',
  'Non-serializable values were found in the navigation state',
]);

// Enable layout animations for better performance
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  useEffect(() => {
    // Preload critical resources if needed
    console.log('App initialized');
  }, []);

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#f4511e" 
        translucent={false}
      />
      <AppNavigator />
    </>
  );
};

export default App;
