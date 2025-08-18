import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import engineeringColleges from '../data/engineeringColleges.json';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;
const ITEM_WIDTH = (width - 60) / 2;

const EngineeringSection = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    loadEngineeringColleges();
  }, []);

  const loadEngineeringColleges = async () => {
    try {
      // Simulate loading from scraped data
      setTimeout(() => {
        setColleges(engineeringColleges);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error loading engineering colleges:', error);
      setLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadEngineeringColleges();
    setRefreshing(false);
  };

  const handleCollegePress = (college) => {
    navigation.navigate('CollegeDetails', { college });
  };

  const renderCollegeCard = (college) => (
    <TouchableOpacity
      key={college.id}
      style={styles.collegeCard}
      onPress={() => handleCollegePress(college)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={styles.cardGradient}
      >
        <View style={styles.collegeHeader}>
          <Image
            source={{ uri: college.logo }}
            style={styles.collegeLogo}
            resizeMode="contain"
          />
          <View style={styles.collegeInfo}>
            <Text style={styles.collegeName} numberOfLines={2}>
              {college.name}
            </Text>
            <Text style={styles.collegeLocation}>
              📍 {college.location}
            </Text>
          </View>
        </View>

        <View style={styles.collegeStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Rating</Text>
            <Text style={styles.statValue}>⭐ {college.rating}/5</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Rank</Text>
            <Text style={styles.statValue}>#{college.nationalRank}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Fees</Text>
            <Text style={styles.statValue}>{college.fees}</Text>
          </View>
        </View>

        <View style={styles.placementInfo}>
          <Text style={styles.placementTitle}>💼 Placements</Text>
          <Text style={styles.placementDetails}>
            Avg: {college.avgPackage} | Highest: {college.highestPackage}
          </Text>
          <Text style={styles.placementRate}>
            Placement Rate: {college.placementRate}%
          </Text>
        </View>

        <View style={styles.coursesContainer}>
          <Text style={styles.coursesTitle}>📚 Courses Offered:</Text>
          <View style={styles.coursesList}>
            {college.courses.slice(0, 3).map((course, index) => (
              <View key={index} style={styles.courseChip}>
                <Text style={styles.courseText}>{course}</Text>
              </View>
            ))}
            {college.courses.length > 3 && (
              <Text style={styles.moreCourses}>+{college.courses.length - 3} more</Text>
            )}
          </View>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.viewDetails}>View Details →</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderFeaturedCollege = (college) => (
    <TouchableOpacity
      key={college.id}
      style={styles.featuredCard}
      onPress={() => handleCollegePress(college)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.featuredGradient}
      >
        <View style={styles.featuredContent}>
          <Image
            source={{ uri: college.logo }}
            style={styles.featuredLogo}
            resizeMode="contain"
          />
          <View style={styles.featuredInfo}>
            <Text style={styles.featuredName}>{college.name}</Text>
            <Text style={styles.featuredLocation}>{college.location}</Text>
            <View style={styles.featuredStats}>
              <Text style={styles.featuredRating}>⭐ {college.rating}/5</Text>
              <Text style={styles.featuredRank}>Rank #{college.nationalRank}</Text>
            </View>
            <Text style={styles.featuredPackage}>
              Highest: {college.highestPackage}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#667eea" />
        <Text style={styles.loadingText}>Loading Engineering Colleges...</Text>
      </View>
    );
  }

  const topColleges = colleges.filter(college => 
    ['IIT Bombay', 'IIT Delhi', 'IIT Kharagpur', 'IIT Kanpur', 'IIT Roorkee'].some(name => 
      college.name.includes(name)
    )
  );

  const otherColleges = colleges.filter(college => 
    !['IIT Bombay', 'IIT Delhi', 'IIT Kharagpur', 'IIT Kanpur', 'IIT Roorkee'].some(name => 
      college.name.includes(name)
    )
  );

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.header}>
        <Text style={styles.headerTitle}>🏗️ Engineering Section</Text>
        <Text style={styles.headerSubtitle}>
          Top Engineering Colleges in India
        </Text>
        <Text style={styles.headerCount}>
          {colleges.length} Colleges Available
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Featured IITs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Premier IITs</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredScroll}
          >
            {topColleges.map(renderFeaturedCollege)}
          </ScrollView>
        </View>

        {/* All Engineering Colleges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📋 All Engineering Colleges</Text>
          <View style={styles.collegesList}>
            {otherColleges.map(renderCollegeCard)}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 10,
  },
  headerCount: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#667eea',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  featuredScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  featuredCard: {
    width: CARD_WIDTH - 40,
    marginRight: 15,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  featuredGradient: {
    padding: 20,
  },
  featuredContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginRight: 15,
  },
  featuredInfo: {
    flex: 1,
  },
  featuredName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  featuredLocation: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 5,
  },
  featuredStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  featuredRating: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  featuredRank: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  featuredPackage: {
    fontSize: 11,
    color: '#fff',
    opacity: 0.9,
  },
  collegesList: {
    gap: 15,
  },
  collegeCard: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardGradient: {
    padding: 20,
  },
  collegeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  collegeLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    marginRight: 15,
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  collegeLocation: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  collegeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  placementInfo: {
    marginBottom: 15,
  },
  placementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  placementDetails: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 3,
  },
  placementRate: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: '600',
  },
  coursesContainer: {
    marginBottom: 15,
  },
  coursesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  coursesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  courseChip: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  courseText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: '500',
  },
  moreCourses: {
    fontSize: 12,
    color: '#7f8c8d',
    alignSelf: 'center',
    marginLeft: 5,
  },
  cardFooter: {
    alignItems: 'flex-end',
  },
  viewDetails: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: 'bold',
  },
});

export default EngineeringSection;