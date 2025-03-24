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
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Card, Button, Divider, Avatar } from '@rneui/themed';

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

  const loadAdminProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const userRole = await AsyncStorage.getItem('userRole');
      
      if (token && userRole === 'Admin') {
        // In a real app, you'd fetch admin profile data from API
        // For now we'll use mock data
        setAdminData({
          name: 'Admin User',
          email: 'admin@test.com',
          lastLogin: new Date().toLocaleString(),
        });
      }
    } catch (error) {
      console.error('Error loading admin profile:', error);
    }
  };

  const handleNavigation = (screen) => {
    closeDrawer();
    setTimeout(() => {
      navigation.navigate(screen);
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
              // Remove auth data
              await AsyncStorage.removeItem('authToken');
              await AsyncStorage.removeItem('userRole');
              
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate fetch data
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
            source={{ uri: `https://ui-avatars.com/api/?name=${adminData.name.replace(' ', '+')}&background=0D8ABC&color=fff` }}
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
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Icon name="logout" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
});

export default AdminDashboard;

