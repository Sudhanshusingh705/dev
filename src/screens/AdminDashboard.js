import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  RefreshControl,
  Alert,
  StatusBar,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SessionManager } from '../utils/secureStorage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Card, Button, Divider, Avatar } from '@rneui/themed';
import { API_BASE_URL, ENDPOINTS, createAuthHeader } from '../api';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.75;

const AdminDashboard = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const mainScreenOpacity = useRef(new Animated.Value(1)).current;
  const [adminData, setAdminData] = useState({
    name: 'Admin User',
    email: 'admin@test.com',
  });

  // Dashboard stats
  const [stats, setStats] = useState({
    totalColleges: 450,
    totalCourses: 230,
    totalStudents: 2500,
    totalAdmissions: 860,
    newSignups: 125,
    pendingApplications: 42,
  });

  // Demo data for charts
  const admissionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Admissions'],
  };

  const coursePopularityData = {
    labels: ['Engineering', 'Medical', 'MBA', 'Arts', 'Science'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  const pieChartData = [
    {
      name: 'Engineering',
      students: 520,
      color: '#FF5733',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Medical',
      students: 380,
      color: '#33FF57',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'MBA',
      students: 280,
      color: '#3357FF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Arts',
      students: 220,
      color: '#F333FF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Science',
      students: 190,
      color: '#FF33A8',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  const sections = [
    { name: 'Profile', screen: 'Profile', icon: 'account-circle' },
    { name: 'Newsletter', screen: 'NewsletterSubscriptions', icon: 'email' },
    { name: 'College Listings', screen: 'CollegeListing', icon: 'school' },
    { name: 'Courses Listings', screen: 'CoursesListing', icon: 'book-open-variant' },
    { name: 'Admissions', screen: 'AdmissionsListing', icon: 'clipboard-text' },
    { name: 'Exams', screen: 'ExamsListing', icon: 'file-document-outline' },
    { name: 'Notifications', screen: 'NotificationsListing', icon: 'bell-outline' },
    { name: 'Programs', screen: 'ProgramsListing', icon: 'view-list' },
    { name: 'College Rankings', screen: 'CollegeRankingListing', icon: 'trophy-outline' },
    { name: 'Study Abroad', screen: 'StudyAbroadListing', icon: 'airplane' },
  ];

  useEffect(() => {
    loadAdminProfile();
  }, []);

  // Add a helper to check if API is available
  const isAPIAvailable = async () => {
    try {
      console.log('Checking API availability...');
      
      // First check network connectivity
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        console.log('Network not connected');
        return false;
      }
      
      // Try an unauthenticated request first
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      try {
        const response = await fetch(`${API_BASE_URL}/status`, {
          method: 'GET',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response && response.ok) {
          console.log('API is available (unauthenticated)');
          return true;
        }
      } catch (error) {
        console.log('Unauthenticated API check failed, trying authenticated');
        clearTimeout(timeoutId);
        // Continue to try authenticated request
      }
      
      // If unauthenticated fails, try with authentication
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        console.log('No auth token available');
        return false;
      }
      
      const controller2 = new AbortController();
      const timeoutId2 = setTimeout(() => controller2.abort(), 3000);
      
      try {
        const response = await fetch(`${API_BASE_URL}${ENDPOINTS.GET_USER_PROFILE}`, {
          method: 'GET',
          headers: {
            ...createAuthHeader(token),
            'Accept': 'application/json'
          },
          signal: controller2.signal
        });
        
        clearTimeout(timeoutId2);
        
        if (response && (response.ok || response.status === 401 || response.status === 403)) {
          // Even auth errors mean the API is available
          console.log('API is available (authenticated)');
          return true;
        }
      } catch (error) {
        clearTimeout(timeoutId2);
        console.log('Authenticated API check failed');
      }
      
      console.log('API not available after both checks');
      return false;
    } catch (error) {
      console.log('Error checking API:', error);
      return false;
    }
  }

  // Update loadAdminProfile to check for stored userName
  const loadAdminProfile = async () => {
    try {
      setLoading(true);
      const sessionData = await SessionManager.getSession();
      const token = sessionData?.token;
      const userRole = sessionData?.userData?.role;
      const lastLoginTime = sessionData?.userData?.lastLogin;
      // Get stored user name from secure storage
      const storedUserName = sessionData?.userData?.name;
      
      // Format last login time
      const formatLoginTime = (timestamp) => {
        if (!timestamp) return new Date().toLocaleString();
        try {
          return new Date(timestamp).toLocaleString();
        } catch (e) {
          return new Date().toLocaleString();
        }
      };
      
      if (token && userRole === 'Admin') {
        // For mock token, use cached profile data with real timestamp
        if (token === 'mock-admin-token') {
          console.log('Using mock admin profile data with real timestamp');
          setAdminData({
            name: storedUserName || 'Admin User',
            email: 'admin@example.com',
            lastLogin: formatLoginTime(lastLoginTime),
          });
          setLoading(false);
          return;
        }
        
        // Try to get cached profile data first
        const cachedAdminData = await AsyncStorage.getItem('adminProfileCache');
        
        if (cachedAdminData) {
          const profileData = JSON.parse(cachedAdminData);
          console.log('Using cached admin profile data');
          setAdminData({
            name: storedUserName || profileData.name || 'Admin User',
            email: profileData.email || 'admin@example.com',
            lastLogin: profileData.lastLogin ? formatLoginTime(profileData.lastLogin) : formatLoginTime(lastLoginTime),
          });
          setLoading(false);
          
          // Check if API is available before trying to refresh
          const apiAvailable = await isAPIAvailable();
          if (!apiAvailable) {
            console.log('API not available, using cached data only');
            return;
          }
        }
        
        // Try to fetch updated profile data from API
        try {
          console.log('Fetching admin profile from API...');
          const response = await fetch(`${API_BASE_URL}${ENDPOINTS.GET_ADMIN_PROFILE}`, {
            method: 'GET',
            headers: {
              ...createAuthHeader(token),
              'Accept': 'application/json'
            },
          });
          
          if (response.status === 401 || response.status === 403) {
            console.log('Authentication error fetching admin profile');
            // Use cached or default data
            const defaultName = storedUserName || 'Admin User';
            setAdminData({
              name: defaultName,
              email: 'admin@example.com',
              lastLogin: formatLoginTime(lastLoginTime),
            });
            setLoading(false);
            return;
          }
          
          if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
          }
          
          const data = await response.json();
          console.log('Admin profile data received:', data);
          
          // Create a formatted profile object
          const profileData = {
            name: data.user?.name || storedUserName || 'Admin User',
            email: data.user?.email || 'admin@example.com',
            lastLogin: formatLoginTime(data.user?.lastLogin || lastLoginTime),
          };
          
          // Update state
          setAdminData(profileData);
          
          // Cache the profile data
          await AsyncStorage.setItem('adminProfileCache', JSON.stringify(profileData));
          // Update the stored user name if it's different
          if (profileData.name && (!storedUserName || storedUserName !== profileData.name)) {
            await AsyncStorage.setItem('userName', profileData.name);
          }
          
        } catch (error) {
          console.log('Error fetching admin profile:', error);
          // Use cached or default data if API call fails
          setAdminData({
            name: storedUserName || 'Admin User',
            email: 'admin@example.com',
            lastLogin: formatLoginTime(lastLoginTime),
          });
        }
      } else {
        // Not admin or no token, use default data
        setAdminData({
          name: storedUserName || 'Admin User',
          email: 'admin@example.com',
          lastLogin: formatLoginTime(lastLoginTime),
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading admin profile:', error);
      // Use default values on error
      setAdminData({
        name: 'Admin User',
        email: 'admin@example.com',
        lastLogin: new Date().toLocaleString(),
      });
      setLoading(false);
    }
  };

  const handleNavigation = (screenName) => {
    closeDrawer();
    // Navigation delay to ensure drawer closes first
    setTimeout(() => {
      navigation.navigate(screenName);
    }, 300);
  };

  const handleLogout = async () => {
    closeDrawer();
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            setLoading(true);
            try {
              await SessionManager.destroySession();
              
              // Navigate to login screen
              navigation.reset({
                index: 0,
                routes: [{ name: 'LoginSignup' }],
              });
            } catch (error) {
              console.error('Error during logout:', error);
              Alert.alert('Error', 'Failed to logout. Please try again.');
            } finally {
              setLoading(false);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      
      // Check API availability
      const apiAvailable = await isAPIAvailable();
      if (!apiAvailable) {
        console.log('API not available, cannot refresh data');
        setRefreshing(false);
        return;
      }
      
      // Get auth token
      const token = await AsyncStorage.getItem('authToken');
      
      // Refresh dashboard stats
      try {
        const response = await fetch(`${API_BASE_URL}${ENDPOINTS.DASHBOARD_STATS}`, {
          method: 'GET',
          headers: {
            ...createAuthHeader(token),
            'Accept': 'application/json'
          }
        });
        
        if (response.status === 401 || response.status === 403) {
          console.log('Authentication error fetching dashboard stats');
        } else if (response.ok) {
          const data = await response.json();
          console.log('Dashboard stats refreshed:', data);
          
          // Update stats with real data if available
          setStats({
            totalColleges: data.totalColleges || stats.totalColleges,
            totalCourses: data.totalCourses || stats.totalCourses,
            totalStudents: data.totalStudents || stats.totalStudents,
            totalAdmissions: data.totalAdmissions || stats.totalAdmissions,
            newSignups: data.newSignups || stats.newSignups,
            pendingApplications: data.pendingApplications || stats.pendingApplications,
          });
        }
      } catch (error) {
        console.log('Error refreshing dashboard stats:', error);
      }
      
      // Refresh admin profile
      await loadAdminProfile();
      
      setRefreshing(false);
      
    } catch (error) {
      console.error('Error during refresh:', error);
      setRefreshing(false);
    }
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(mainScreenOpacity, {
        toValue: 0.4,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: -DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(mainScreenOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setDrawerOpen(false);
    });
  };

  // Add the same helper function from ProfileScreen.js for gender detection
  const isLikelyFemale = (name) => {
    if (!name) return false;
    
    const femaleName = name.toLowerCase();
    
    // Common female name endings
    const femaleEndings = ['a', 'e', 'i', 'ie', 'y', 'ah', 'na', 'la', 'ine', 'een'];
    // Common explicit female names
    const femaleNames = [
      'mary', 'elizabeth', 'patricia', 'jennifer', 'linda', 'barbara', 'susan', 'jessica',
      'sarah', 'karen', 'lisa', 'nancy', 'betty', 'margaret', 'sandra', 'ashley',
      'kimberly', 'emily', 'donna', 'michelle', 'dorothy', 'carol', 'amanda', 'melissa',
      'deborah', 'stephanie', 'rebecca', 'laura', 'sharon', 'cynthia', 'kathleen', 'amy',
      'anna', 'sophia', 'emma', 'olivia', 'ava', 'isabella', 'mia', 'abigail', 'charlotte'
    ];
    
    // Check for exact matches in common female names
    const nameParts = femaleName.split(' ');
    const firstName = nameParts[0];
    
    if (femaleNames.includes(firstName)) {
      return true;
    }
    
    // Check name endings
    for (const ending of femaleEndings) {
      if (firstName.endsWith(ending)) {
        return true;
      }
    }
    
    return false;
  };

  // Import the local avatar images
  const maleAvatar = require('../assets/man.png');
  const femaleAvatar = require('../assets/woman.png');

  // Add a function to get time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Processing...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#0066cc" barStyle="light-content" />
      
      {/* Side Drawer */}
      <Animated.View 
        style={[
          styles.drawer, 
          { transform: [{ translateX }] }
        ]}
      >
        <View style={styles.drawerHeader}>
          <Avatar
            rounded
            size={70}
            source={isLikelyFemale(adminData.name) ? femaleAvatar : maleAvatar}
            containerStyle={styles.drawerAvatar}
          />
          <Text style={styles.drawerName}>{adminData.name}</Text>
          <Text style={styles.drawerEmail}>{adminData.email}</Text>
        </View>
        
        <ScrollView style={styles.drawerContent}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
              style={styles.drawerItem}
            onPress={() => handleNavigation(section.screen)}
            >
              <Icon name={section.icon} size={24} color="#333" />
              <Text style={styles.drawerItemText}>{section.name}</Text>
            </TouchableOpacity>
          ))}
          
          <Divider style={styles.drawerDivider} />
          
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={handleLogout}
          >
            <Icon name="logout" size={24} color="#dc3545" />
            <Text style={[styles.drawerItemText, { color: '#dc3545' }]}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
      
      {/* Overlay to close drawer when clicked outside */}
      {drawerOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeDrawer}
        />
      )}
      
      {/* Main Content */}
      <Animated.View 
        style={[
          styles.mainContent,
          { opacity: mainScreenOpacity }
        ]}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
                <Icon name="menu" size={24} color="#fff" />
              </TouchableOpacity>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Admin Dashboard</Text>
                <Text style={styles.subHeaderText}>{adminData.name}</Text>
              </View>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile')} 
                style={styles.profileButton}
              >
                <Avatar
                  rounded
                  size={36}
                  source={isLikelyFemale(adminData.name) ? femaleAvatar : maleAvatar}
                  containerStyle={styles.headerAvatar}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Icon name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* Greeting message */}
          <View style={styles.greetingCard}>
            <View style={styles.greetingContent}>
              <Icon name="hand-wave" size={24} color="#0066cc" style={styles.greetingIcon} />
              <View style={styles.greetingTextContainer}>
                <Text style={styles.greetingText}>
                  {getTimeBasedGreeting()}, {adminData.name}
                </Text>
                <Text style={styles.welcomeText}>
                  Welcome back to Search My College
                </Text>
                <Text style={styles.lastLoginText}>
                  Last login: {adminData.lastLogin}
                </Text>
              </View>
            </View>
          </View>
          
          {/* Quick Stats Cards in rows of two */}
          <View style={styles.statsRow}>
            <Card containerStyle={styles.statCard}>
              <View style={styles.statContent}>
                <Icon name="school" size={30} color="#0066cc" />
                <View style={styles.statTextContainer}>
                  <Text style={styles.statValue}>{stats.totalColleges}</Text>
                  <Text style={styles.statLabel}>Total Colleges</Text>
                </View>
              </View>
            </Card>
            
            <Card containerStyle={styles.statCard}>
              <View style={styles.statContent}>
                <Icon name="book-open-variant" size={30} color="#28a745" />
                <View style={styles.statTextContainer}>
                  <Text style={styles.statValue}>{stats.totalCourses}</Text>
                  <Text style={styles.statLabel}>Active Courses</Text>
                </View>
              </View>
            </Card>
          </View>
          
          <View style={styles.statsRow}>
            <Card containerStyle={styles.statCard}>
              <View style={styles.statContent}>
                <Icon name="account-group" size={30} color="#fd7e14" />
                <View style={styles.statTextContainer}>
                  <Text style={styles.statValue}>{stats.totalStudents}</Text>
                  <Text style={styles.statLabel}>Total Students</Text>
                </View>
              </View>
            </Card>
            
            <Card containerStyle={styles.statCard}>
              <View style={styles.statContent}>
                <Icon name="clipboard-text" size={30} color="#dc3545" />
                <View style={styles.statTextContainer}>
                  <Text style={styles.statValue}>{stats.pendingApplications}</Text>
                  <Text style={styles.statLabel}>Pending</Text>
                </View>
              </View>
            </Card>
          </View>

          {/* Line Chart */}
          <Card containerStyle={styles.chartCard}>
            <Card.Title>Monthly Admissions</Card.Title>
            <Card.Divider />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <LineChart
                data={admissionData}
                width={Math.max(width - 40, 350)} 
                height={220}
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#0066cc',
                  },
                }}
                bezier
                style={styles.chartStyle}
              />
            </ScrollView>
          </Card>

          {/* Bar Chart */}
          <Card containerStyle={styles.chartCard}>
            <Card.Title>Course Popularity</Card.Title>
            <Card.Divider />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BarChart
                data={coursePopularityData}
                width={Math.max(width - 40, 350)}
                height={220}
                yAxisLabel=""
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(40, 167, 69, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={styles.chartStyle}
              />
            </ScrollView>
          </Card>

          {/* Pie Chart */}
          <Card containerStyle={styles.chartCard}>
            <Card.Title>Student Distribution</Card.Title>
            <Card.Divider />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <PieChart
                data={pieChartData}
                width={Math.max(width - 40, 350)}
                height={220}
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="students"
                backgroundColor="transparent"
                paddingLeft="15"
                center={[10, 0]}
                absolute
              />
            </ScrollView>
          </Card>

          <View style={styles.footer}>
            <Button
              title="Logout"
              onPress={handleLogout}
              buttonStyle={styles.logoutFullButton}
              icon={<Icon name="logout" size={20} color="#fff" style={{ marginRight: 10 }} />}
            />
      </View>
    </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 15,
    padding: 5,
  },
  headerTextContainer: {
    marginLeft: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#e6e6e6',
  },
  logoutButton: {
    padding: 5,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  drawerHeader: {
    backgroundColor: '#0066cc',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  drawerAvatar: {
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  drawerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  drawerEmail: {
    fontSize: 14,
    color: '#e6e6e6',
  },
  drawerContent: {
    paddingTop: 15,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  drawerDivider: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  mainContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 30,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  statCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statTextContainer: {
    marginLeft: 10,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  chartCard: {
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  chartStyle: {
    borderRadius: 10,
    marginVertical: 8,
  },
  footer: {
    marginTop: 20,
  },
  logoutFullButton: {
    backgroundColor: '#dc3545',
    borderRadius: 10,
    padding: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  profileButton: {
    marginRight: 15,
  },
  headerAvatar: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  greetingCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#0066cc',
  },
  greetingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingIcon: {
    marginRight: 15,
  },
  greetingTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  lastLoginText: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
});

export default AdminDashboard;

