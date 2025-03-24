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
import AdminDashboard from '../screens/AdminDashboard';
import CourseDetails from '../pages/CourseDetails';
import CbseXIIContent from '../pages/CbseXIIContent';
import CbseXContent from '../pages/CbseXContent';
import AdmissionContent from '../pages/AdmissionContent';
import ExamContent from '../pages/ExamContent';
import NewsContent from '../pages/NewsContent';
import StudyAbroadContent from '../pages/StudyAbroadContent';
import CourseContent from '../pages/CourseContent';
import CourseCollegeList from '../pages/CourseCollegeList';
import CollegeDetail from '../pages/CollegeDetail';
import CollegeDetails from '../pages/CollegeDetails';
import BrowseCategories from '../pages/BrowseCategories';
import UniversityDetailsPage from '../pages/UniversityDetailsPage';
import NotificationDetailScreen from '../pages/NotificationDetailScreen';
import CollegeCompare from '../pages/CollegeCompare';
import TopUniversities from '../pages/TopUniversities';
import TopCourses from '../pages/TopCourses';
import Admission2025 from '../pages/Admission2025';
import TopExams from '../pages/TopExams';
import LatestNotification from '../pages/LatestNotification';

// Import college pages
import BTechColleges from '../pages/courses/BTechColleges.jsx';
import MBAColleges from '../pages/courses/MBAColleges.jsx';
import MTechColleges from '../pages/courses/MTechColleges.jsx';
import MBBSColleges from '../pages/courses/MBBSColleges.jsx';
import BComColleges from '../pages/courses/BComColleges.jsx';
import BScColleges from '../pages/courses/BScColleges.jsx';
import BScNursingColleges from '../pages/courses/BScNursingColleges.jsx';
import BCAColleges from '../pages/courses/BCAColleges.jsx';
import MCAColleges from '../pages/courses/MCAColleges.jsx';
import PharmacyColleges from '../pages/courses/PharmacyColleges.jsx';
import ParaMedicalColleges from '../pages/courses/ParaMedicalColleges.jsx';
import VeterinaryScienceColleges from '../pages/courses/VeterinaryScienceColleges.jsx';
import ComputerApplicationColleges from '../pages/courses/ComputerApplicationColleges.jsx';
import DentalColleges from '../pages/courses/DentalColleges.jsx';
import DesignColleges from '../pages/courses/DesignColleges.jsx';
import EducationColleges from '../pages/courses/EducationColleges.jsx';
import HotelManagementColleges from '../pages/courses/HotelManagementColleges.jsx';
import LLBColleges from '../pages/courses/LLBColleges.jsx';
import LLMColleges from '../pages/courses/LLMColleges.jsx';
import MPharmColleges from '../pages/courses/MPharmColleges.jsx';
import MPlanningColleges from '../pages/courses/MPlanningColleges.jsx';
import MScColleges from '../pages/courses/MScColleges.jsx';
import MassCommunicationColleges from '../pages/courses/MassCommunicationColleges.jsx';

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

