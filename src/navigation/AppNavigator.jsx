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







import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomeScreen from "../screens/HomeScreen";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import StudyPlaceDetails from "../pages/StudyPlaceDetails";
import LoginSignupScreen from '../screens/LoginSignupScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
    <Drawer.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="BrowseCategories" 
      component={BrowseCategories}
      options={{
        title: "Browse Categories",
        drawerIcon: ({ color, size }) => (
          <Icon name="view-grid" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="TopUniversities" 
      component={TopUniversities}
      options={{
        title: "Top Universities/Colleges",
        drawerIcon: ({ color, size }) => (
          <Icon name="school" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="TopCourses" 
      component={TopCourses}
      options={{
        title: "Top Courses",
        drawerIcon: ({ color, size }) => (
          <Icon name="book-open" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="Admission2025" 
      component={Admission2025}
      options={{
        title: "Admission 2025",
        drawerIcon: ({ color, size }) => (
          <Icon name="calendar-range" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="TopExams" 
      component={TopExams}
      options={{
        title: "Exams",
        drawerIcon: ({ color, size }) => (
          <Icon name="file-document-outline" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="LatestNotification" 
      component={LatestNotification}
      options={{
        title: "Latest Notification",
        drawerIcon: ({ color, size }) => (
          <Icon name="bell" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="account" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="Logout" 
      component={LoginSignupScreen} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="logout" size={size} color={color} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.reset({
            index: 0,
            routes: [{ 
              name: 'LoginSignup',
              params: { source: 'logout' }
            }],
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
    <Drawer.Screen 
      name="AdminDashboard" 
      component={AdminDashboard} 
      options={{
        title: "Admin Dashboard",
        drawerIcon: ({ color, size }) => (
          <Icon name="view-dashboard" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        title: "Admin Profile",
        drawerIcon: ({ color, size }) => (
          <Icon name="account-cog" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen 
      name="Logout" 
      component={LoginSignupScreen} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="logout" size={size} color={color} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.reset({
            index: 0,
            routes: [{ 
              name: 'LoginSignup',
              params: { source: 'logout' }
            }],
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
    <Stack.Screen 
      name="CourseDetails" 
      component={CourseDetails}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="CollegeDetail"
      component={CollegeDetail}
      options={{ headerShown: true }}
    />
    <Stack.Screen 
      name="CbseXIIContent" 
      component={CbseXIIContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="CbseXContent" 
      component={CbseXContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="AdmissionContent" 
      component={AdmissionContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="ExamContent" 
      component={ExamContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="NewsContent" 
      component={NewsContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="StudyAbroadContent" 
      component={StudyAbroadContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="CourseContent" 
      component={CourseContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="CourseCollegeList" 
      component={CourseCollegeList}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="StudyPlaceDetails" 
      component={StudyPlaceDetails}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="CollegeDetails" 
      component={CollegeDetails}
      options={{ 
        headerShown: true,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0066cc',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <Stack.Screen 
      name="UniversityDetailsPage" 
      component={UniversityDetailsPage}
      options={{ 
        headerShown: false
      }}
    />
    <Stack.Screen 
      name="NotificationDetail" 
      component={NotificationDetailScreen}
      options={{ 
        headerShown: false
      }}
    />
    <Stack.Screen 
      name="CollegeCompare" 
      component={CollegeCompare}
      options={{ 
        headerShown: false
      }}
    />

    {/* College pages */}
    <Stack.Screen name="BTechColleges" component={BTechColleges} />
    <Stack.Screen name="MBAColleges" component={MBAColleges} />
    <Stack.Screen name="MTechColleges" component={MTechColleges} />
    <Stack.Screen name="MBBSColleges" component={MBBSColleges} />
    <Stack.Screen name="BComColleges" component={BComColleges} />
    <Stack.Screen name="BScColleges" component={BScColleges} />
    <Stack.Screen name="BScNursingColleges" component={BScNursingColleges} />
    <Stack.Screen name="BCAColleges" component={BCAColleges} />
    <Stack.Screen name="MCAColleges" component={MCAColleges} />
    <Stack.Screen name="PharmacyColleges" component={PharmacyColleges} />
    <Stack.Screen name="ParaMedicalColleges" component={ParaMedicalColleges} />
    <Stack.Screen name="VeterinaryScienceColleges" component={VeterinaryScienceColleges} />
    <Stack.Screen name="ComputerApplicationColleges" component={ComputerApplicationColleges} />
    <Stack.Screen name="DentalColleges" component={DentalColleges} />
    <Stack.Screen name="DesignColleges" component={DesignColleges} />
    <Stack.Screen name="EducationColleges" component={EducationColleges} />
    <Stack.Screen name="HotelManagementColleges" component={HotelManagementColleges} />
    <Stack.Screen name="LLBColleges" component={LLBColleges} />
    <Stack.Screen name="LLMColleges" component={LLMColleges} />
    <Stack.Screen name="MPharmColleges" component={MPharmColleges} />
    <Stack.Screen name="MPlanningColleges" component={MPlanningColleges} />
    <Stack.Screen name="MScColleges" component={MScColleges} />
    <Stack.Screen name="MassCommunicationColleges" component={MassCommunicationColleges} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default AppNavigator;

