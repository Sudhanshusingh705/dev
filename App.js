import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Update the path if AppNavigator is in a different folder

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <AppNavigator />
    </>
  );
};

export default App;
