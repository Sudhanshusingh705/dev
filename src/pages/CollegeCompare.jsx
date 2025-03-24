import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Sample college data - In a real app, this would be fetched from an API
const collegeData = {
  BTechColleges: {
    name: 'IIT Delhi',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/iit.jpeg',
    location: 'New Delhi, Delhi',
    ranking: '#1 for Engineering',
    fees: '₹2.2 Lakhs/year',
    placement: '98% with avg. 25 LPA',
    highestPackage: '1.8 Cr/annum',
    acceptanceRate: '0.8%',
    facultyRatio: '1:12',
    facilities: ['Library', 'Labs', 'Sports', 'Hostel', 'Medical', 'Cafeteria'],
    courses: ['Computer Science', 'Electrical', 'Mechanical', 'Civil', 'Chemical'],
    rating: 4.9,
  },
  MBAColleges: {
    name: 'IIM Ahmedabad',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/iim.png',
    location: 'Ahmedabad, Gujarat',
    ranking: '#1 for MBA',
    fees: '₹23 Lakhs (2 years)',
    placement: '100% with avg. 28 LPA',
    highestPackage: '1.2 Cr/annum',
    acceptanceRate: '1.2%',
    facultyRatio: '1:10',
    facilities: ['Library', 'Auditorium', 'Sports', 'Hostel', 'Cafeteria'],
    courses: ['General Management', 'Finance', 'Marketing', 'HR', 'Operations'],
    rating: 4.8,
  },
  MBBSColleges: {
    name: 'AIIMS Delhi',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/aiims.png',
    location: 'New Delhi, Delhi',
    ranking: '#1 for Medical',
    fees: '₹1.5 Lakhs/year',
    placement: '100% with residency options',
    highestPackage: 'Government scales',
    acceptanceRate: '0.5%',
    facultyRatio: '1:8',
    facilities: ['Hospital', 'Labs', 'Library', 'Hostel', 'Research Centers'],
    courses: ['MBBS', 'Specializations in all medical fields'],
    rating: 5.0,
  },
  MTechColleges: {
    name: 'IIT Bombay',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/iit-bombay.png',
    location: 'Mumbai, Maharashtra',
    ranking: '#1 for M.Tech',
    fees: '₹2.0 Lakhs/year',
    placement: '95% with avg. 18 LPA',
    highestPackage: '1.5 Cr/annum',
    acceptanceRate: '2%',
    facultyRatio: '1:10',
    facilities: ['Advanced Labs', 'Research Centers', 'Library', 'Hostel'],
    courses: ['Computer Science', 'Electronics', 'Civil', 'Chemical', 'Material Science'],
    rating: 4.8,
  },
  BComColleges: {
    name: 'SRCC Delhi',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/srcc.jpeg',
    location: 'New Delhi, Delhi',
    ranking: '#1 for Commerce',
    fees: '₹25,000/year',
    placement: '90% with avg. 10 LPA',
    highestPackage: '30 LPA',
    acceptanceRate: '3%',
    facultyRatio: '1:25',
    facilities: ['Library', 'Computer Lab', 'Auditorium', 'Sports'],
    courses: ['B.Com (Hons)', 'Economics', 'Finance', 'Accounting'],
    rating: 4.7,
  },
  BScColleges: {
    name: 'St. Stephen\'s College',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/stephens.png',
    location: 'New Delhi, Delhi',
    ranking: '#1 for Science',
    fees: '₹30,000/year',
    placement: '85% with avg. 8 LPA',
    highestPackage: '25 LPA',
    acceptanceRate: '5%',
    facultyRatio: '1:20',
    facilities: ['Labs', 'Library', 'Sports', 'Cafeteria'],
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    rating: 4.6,
  },
  BCAColleges: {
    name: 'Christ University',
    logo: 'https://searchmycolleges.com/wp-content/uploads/2024/12/christ.png',
    location: 'Bangalore, Karnataka',
    ranking: '#1 for BCA',
    fees: '₹1.8 Lakhs/year',
    placement: '92% with avg. 6 LPA',
    highestPackage: '20 LPA',
    acceptanceRate: '10%',
    facultyRatio: '1:18',
    facilities: ['Computer Labs', 'Library', 'Sports', 'Cafeteria'],
    courses: ['BCA', 'BCA with Data Science', 'BCA with AI'],
    rating: 4.5,
  },
};

const CollegeCompare = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    if (route.params?.colleges) {
      // In a real app, you'd fetch data for each college from an API
      const collegesList = route.params.colleges.map(collegeType => {
        return {
          type: collegeType,
          ...collegeData[collegeType]
        };
      });
      
      setColleges(collegesList);
      setLoading(false);
    }
  }, [route.params]);

  const renderComparisonTable = () => {
    return (
      <View style={styles.comparisonContainer}>
        {/* Headers */}
        <View style={styles.headerRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Criteria</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Image 
                source={{ uri: college.logo }} 
                style={styles.collegeLogo} 
                resizeMode="contain"
              />
              <Text style={styles.collegeName} numberOfLines={2}>{college.name}</Text>
            </View>
          ))}
        </View>

        {/* Comparison Rows */}
        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Location</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.location}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Ranking</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.ranking}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Fees</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.fees}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Placement</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.placement}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Highest Package</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.highestPackage}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Acceptance Rate</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.acceptanceRate}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Faculty Ratio</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText}>{college.facultyRatio}</Text>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Rating</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{college.rating}</Text>
                <Icon name="star" size={16} color="#FFC107" />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.comparisonRow}>
          <View style={styles.criteriaColumn}>
            <Text style={styles.criteriaText}>Courses</Text>
          </View>
          {colleges.map((college, index) => (
            <View key={index} style={styles.collegeColumn}>
              <Text style={styles.valueText} numberOfLines={3}>
                {college.courses.slice(0, 3).join(', ')}
                {college.courses.length > 3 ? ' +more' : ''}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>College Comparison</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0066cc" />
            <Text style={styles.loadingText}>Loading comparison data...</Text>
          </View>
        ) : colleges.length > 0 ? (
          <View style={styles.content}>
            <Text style={styles.subtitle}>Compare {colleges.length} colleges side by side</Text>
            {renderComparisonTable()}
            
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply to Selected Colleges</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.resetButton}
                onPress={() => navigation.navigate("UserDrawer", { screen: "BrowseCategories" })}
              >
                <Text style={styles.resetButtonText}>Reset Comparison</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Icon name="information-outline" size={48} color="#999" />
            <Text style={styles.emptyText}>No colleges selected for comparison</Text>
            <TouchableOpacity 
              style={styles.browseButton}
              onPress={() => navigation.navigate("UserDrawer", { screen: "BrowseCategories" })}
            >
              <Text style={styles.browseButtonText}>Browse Colleges</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 16,
    ...Platform.select({
      android: {
        paddingTop: 20,
      },
    }),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: 300,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    minHeight: 300,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  browseButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  comparisonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f7fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  comparisonRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  criteriaColumn: {
    width: 120,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  collegeColumn: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  collegeLogo: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  collegeName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  criteriaText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  valueText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 3,
  },
  actionButtonsContainer: {
    marginVertical: 20,
  },
  applyButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resetButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CollegeCompare; 