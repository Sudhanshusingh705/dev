// // import React from 'react';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { NavigationContainer } from '@react-navigation/native';
// // import HomeScreen from '../screens/HomeScreen';
// // import AboutUs from '../pages/AboutUs';
// // import ContactUs from '../pages/ContactUs';
// // import PrivacyPolicy from '../pages/PrivacyPolicy';
// // import TermsAndConditions from '../pages/TermsAndConditions';
// // import StudyPlaceDetails from '../pages/StudyPlaceDetails';
// // // Import other screens as needed

// // const Drawer = createDrawerNavigator();
// // const Stack = createStackNavigator();

// // const AppNavigator = () => {
// //   return (
// //     <NavigationContainer>
// //       <Drawer.Navigator
// //         initialRouteName="Home"
// //         screenOptions={{
// //           headerShown: false,
// //         }}
// //       >
// //         <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
// //         {/* Add other drawer screens here */}
// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default AppNavigator;




























// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import TermsAndConditions from '../pages/TermsAndConditions';
// import StudyPlaceDetails from '../pages/StudyPlaceDetails';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const DrawerScreens = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: 280,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
//   </Drawer.Navigator>
// );

// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
//     <Stack.Screen name="AboutUs" component={AboutUs} />
//     <Stack.Screen name="ContactUs" component={ContactUs} />
//     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
//   </Stack.Navigator>
// );

// const AppNavigator = () => (
//   <NavigationContainer>
//     <MainStack />
//   </NavigationContainer>
// );

// export default AppNavigator;







// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import TermsAndConditions from '../pages/TermsAndConditions';
// import StudyPlaceDetails from '../pages/StudyPlaceDetails';
// import LoginSignupScreen from '../screens/LoginSignupScreen';
// import ProfileScreen from '../screens/ProfileScreen';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// // Drawer Navigation with Login/Signup and Profile
// const DrawerScreens = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: 280,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
//     <Drawer.Screen name="Admin Profile" component={ProfileScreen} />
//     <Drawer.Screen name="Logout" component={LoginSignupScreen} />
//   </Drawer.Navigator>
// );

// // Stack Navigation for Other Pages
// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
//     <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
//     <Stack.Screen name="AboutUs" component={AboutUs} />
//     <Stack.Screen name="ContactUs" component={ContactUs} />
//     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
//   </Stack.Navigator>
// );

// // Main App Navigator
// const AppNavigator = () => (
//   <NavigationContainer>
//     <MainStack />
//   </NavigationContainer>
// );

// export default AppNavigator;










// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import TermsAndConditions from '../pages/TermsAndConditions';
// import StudyPlaceDetails from '../pages/StudyPlaceDetails';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const DrawerScreens = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: 280,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
//   </Drawer.Navigator>
// );

// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
//     <Stack.Screen name="AboutUs" component={AboutUs} />
//     <Stack.Screen name="ContactUs" component={ContactUs} />
//     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
//   </Stack.Navigator>
// );

// const AppNavigator = () => <MainStack />;

// export default AppNavigator;









// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import TermsAndConditions from '../pages/TermsAndConditions';
// import StudyPlaceDetails from '../pages/StudyPlaceDetails';
// import LoginSignupScreen from '../screens/LoginSignupScreen';
// import ProfileScreen from '../screens/ProfileScreen';

// // Drawer Navigator
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// // Drawer Screens
// const DrawerScreens = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: 280,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
//     <Drawer.Screen name="Admin Profile" component={ProfileScreen} />
//     <Drawer.Screen name="Logout" component={LoginSignupScreen} />
//   </Drawer.Navigator>
// );

// // Stack Navigator
// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
//     <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
//     <Stack.Screen name="AboutUs" component={AboutUs} />
//     <Stack.Screen name="ContactUs" component={ContactUs} />
//     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
//   </Stack.Navigator>
// );

// // Main App Navigator
// const AppNavigator = () => (
//   <NavigationContainer>
//     <MainStack />
//   </NavigationContainer>
// );

// export default AppNavigator;











// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import TermsAndConditions from '../pages/TermsAndConditions';
// import StudyPlaceDetails from '../pages/StudyPlaceDetails';
// import LoginSignupScreen from '../screens/LoginSignupScreen';
// import ProfileScreen from '../screens/ProfileScreen';

// // Drawer Navigator
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// // Drawer Screens
// const DrawerScreens = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: 280,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
//     <Drawer.Screen name="Admin Profile" component={ProfileScreen} />
//     <Drawer.Screen name="Logout" component={LoginSignupScreen} />
//   </Drawer.Navigator>
// );

// // Stack Navigator
// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
//     <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
//     <Stack.Screen name="AboutUs" component={AboutUs} />
//     <Stack.Screen name="ContactUs" component={ContactUs} />
//     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
//   </Stack.Navigator>
// );

// // Main App Navigator
// const AppNavigator = () => (
//   <NavigationContainer>
//     <MainStack />
//   </NavigationContainer>
// );

// export default AppNavigator;







// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import TermsAndConditions from '../pages/TermsAndConditions';
// import StudyPlaceDetails from '../pages/StudyPlaceDetails';
// import LoginSignupScreen from '../screens/LoginSignupScreen';
// import ProfileScreen from '../screens/ProfileScreen';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const DrawerScreens = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: 280,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
//     <Drawer.Screen name="Profile" component={ProfileScreen} />
//     <Drawer.Screen 
//       name="Logout" 
//       component={LoginSignupScreen} 
//       listeners={({ navigation }) => ({
//         tabPress: (e) => {
//           e.preventDefault();
//           // Add logout logic here (e.g., clear AsyncStorage, reset state)
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'LoginSignup' }],
//           });
//         },
//       })}
//     />
//   </Drawer.Navigator>
// );

// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
//     <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
//     <Stack.Screen name="AboutUs" component={AboutUs} />
//     <Stack.Screen name="ContactUs" component={ContactUs} />
//     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
//   </Stack.Navigator>
// );

// const AppNavigator = () => (
//   <NavigationContainer>
//     <MainStack />
//   </NavigationContainer>
// );

// export default AppNavigator;











import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import screens
import HomeScreen from "../screens/HomeScreen";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import StudyPlaceDetails from "../pages/StudyPlaceDetails";
import LoginSignupScreen from '../screens/LoginSignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AdminDashboard from '../screens/AdminDashboard';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const UserDrawerScreens = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#fff',
        width: 280,
      },
    }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="StudyPlaceDetails" component={StudyPlaceDetails} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen 
      name="Logout" 
      component={LoginSignupScreen} 
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          // Add logout logic here (e.g., clear AsyncStorage, reset state)
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginSignup' }],
          });
        },
      })}
    />
  </Drawer.Navigator>
);

const AdminDrawerScreens = () => (
  <Drawer.Navigator
    initialRouteName="AdminDashboard"
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#fff',
        width: 280,
      },
    }}
  >
    <Drawer.Screen name="AdminDashboard" component={AdminDashboard} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen 
      name="Logout" 
      component={LoginSignupScreen} 
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          // Add logout logic here (e.g., clear AsyncStorage, reset state)
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginSignup' }],
          });
        },
      })}
    />
  </Drawer.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
    <Stack.Screen name="UserDrawer" component={UserDrawerScreens} />
    <Stack.Screen name="AdminDrawer" component={AdminDrawerScreens} />
    <Stack.Screen name="AboutUs" component={AboutUs} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default AppNavigator;

