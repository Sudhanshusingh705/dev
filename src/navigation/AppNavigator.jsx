import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import StudyPlaceDetails from '../pages/StudyPlaceDetails';
// Import other screens as needed

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
        {/* Add other drawer screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
