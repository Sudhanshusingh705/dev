import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  ImageBackground,
  Animated,
  Alert
} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 280;

const CollegeDetails = ({ route, navigation }) => {
  // Safely extract college data with fallbacks
  const college = route.params?.college || {};
  
  // Set default values for all potentially missing properties
  const collegeData = {
    name: college.name || 'College Name',
    location: college.location || 'Location not available',
    rating: college.rating || '4.0',
    description: college.description || 'No description available for this college.',
    highlights: college.highlights || [
      'AICTE Approved',
      'Well-equipped labs and library',
      'Experienced faculty',
      'Good placement record'
    ],
    stats: college.stats || {
      establishedYear: college.establishedYear || '1990',
      campusSize: college.campusSize || '50 acres',
      totalStudents: '5000+',
      facultyCount: college.facultyCount || '200+'
    },
    courses: college.courses || [
      {
        name: college.courseType || 'B.Tech',
        duration: '4 Years',
        fees: college.fees || '₹ 2,00,000 per year',
        seats: '60',
        eligibility: '10+2 with PCM'
      }
    ],
    placements: {
      avgPackage: college.avgPackage || '₹ 6,00,000',
      highestPackage: college.highestPackage || '₹ 12,00,000',
      placementRate: college.placementRate || '85%',
      recruiters: ['Amazon', 'Microsoft', 'TCS', 'Infosys', 'Wipro']
    },
    facilities: [
      { name: 'Library', icon: 'library-books' },
      { name: 'Labs', icon: 'laptop' },
      { name: 'Hostel', icon: 'home' },
      { name: 'Sports', icon: 'sports-basketball' },
      { name: 'Cafeteria', icon: 'restaurant' },
      { name: 'Wifi', icon: 'wifi' }
    ]
  };

  const scrollY = new Animated.Value(0);
  const [activeTab, setActiveTab] = useState('overview');

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 2],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2],
    outputRange: [1, 0.2],
    extrapolate: 'clamp',
  });

  const contactInfo = {
    phone: college.contact?.phone || '8882855844',
    email: college.contact?.email || 'enquiry@searchmycollege.com',
    website: college.website || 'www.searchmycolleges.com'
  };

  const handleCall = () => {
    Linking.openURL(`tel:${contactInfo.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${contactInfo.email}`);
  };

  const handleWebsite = () => {
    Linking.openURL(`https://${contactInfo.website}`);
  };

  const handleShare = async () => {
    try {
      const message = `Check out ${collegeData.name}\n` +
                     `Rating: ${collegeData.rating}\n` +
                     `Location: ${collegeData.location}\n` +
                     `Contact: ${contactInfo.phone}\n` +
                     `Email: ${contactInfo.email}\n` +
                     `Website: ${contactInfo.website}`;
                     
      await Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}`);
    } catch (error) {
      // If WhatsApp is not installed, try SMS
      try {
        await Linking.openURL(`sms:?body=${encodeURIComponent(message)}`);
      } catch (smsError) {
        // If both fail, show an alert
        Alert.alert(
          'Share',
          'Could not share the college details. Please try again later.'
        );
      }
    }
  };

  const renderHeader = () => (
    <Animated.View
      style={[
        styles.header,
        { transform: [{ translateY: headerTranslateY }] }
      ]}
    >
      <ImageBackground
        source={{ uri: 'https://example.com/college-banner.jpg' }}
        style={styles.headerImage}
      >
        <Animated.View style={[styles.headerOverlay, { opacity: imageOpacity }]}>
          <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
        </Animated.View>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Image 
              source={{ uri: 'https://example.com/college-logo.png' }}
              style={styles.logo}
            />
          </View>
          <View style={styles.collegeInfo}>
            <Text style={styles.collegeName}>{collegeData.name}</Text>
            <View style={styles.locationRow}>
              <MaterialIcons name="location-on" size={16} color="#fff" />
              <Text style={styles.location}>{collegeData.location}</Text>
            </View>
            <View style={styles.ratingRow}>
              <View style={styles.ratingBadge}>
                <AntDesign name="star" size={16} color="#FFD700" />
                <Text style={styles.rating}>{collegeData.rating}</Text>
              </View>
              <Text style={styles.ratingText}>College Rating</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );

  const renderQuickActions = () => (
    <View style={styles.quickActions}>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={handleCall}
      >
        <View style={[styles.actionIcon, { backgroundColor: '#28a745' }]}>
          <MaterialIcons name="phone" size={22} color="#fff" />
        </View>
        <Text style={styles.actionText}>Call Now</Text>
        <Text style={styles.contactDetail}>{contactInfo.phone}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={handleEmail}
      >
        <View style={[styles.actionIcon, { backgroundColor: '#dc3545' }]}>
          <MaterialIcons name="mail" size={22} color="#fff" />
        </View>
        <Text style={styles.actionText}>Email</Text>
        <Text style={styles.contactDetail} numberOfLines={1}>
          {contactInfo.email}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={handleWebsite}
      >
        <View style={[styles.actionIcon, { backgroundColor: '#007bff' }]}>
          <MaterialIcons name="language" size={22} color="#fff" />
        </View>
        <Text style={styles.actionText}>Website</Text>
        <Text style={styles.contactDetail} numberOfLines={1}>
          {contactInfo.website}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={handleShare}
      >
        <View style={[styles.actionIcon, { backgroundColor: '#17a2b8' }]}>
          <MaterialIcons name="share" size={22} color="#fff" />
        </View>
        <Text style={styles.actionText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTabs = () => (
    <View style={styles.tabsContainer}>
      {['Overview', 'Courses', 'Placements', 'Facilities'].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab.toLowerCase() && styles.activeTab
          ]}
          onPress={() => setActiveTab(tab.toLowerCase())}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab.toLowerCase() && styles.activeTabText
          ]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>About College</Text>
            <Text style={styles.description}>{collegeData.description}</Text>

            <Text style={styles.sectionTitle}>Highlights</Text>
            <View style={styles.highlightsList}>
              {collegeData.highlights.map((highlight, index) => (
                <View key={index} style={styles.highlightItem}>
                  <MaterialIcons name="check-circle" size={20} color="#28a745" />
                  <Text style={styles.highlightText}>{highlight}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Key Statistics</Text>
            <View style={styles.statsGrid}>
              {Object.entries(collegeData.stats).map(([key, value]) => (
                <View key={key} style={styles.statItem}>
                  <Text style={styles.statValue}>{value}</Text>
                  <Text style={styles.statLabel}>{key.replace(/([A-Z])/g, ' $1').trim()}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case 'courses':
        return (
          <View style={styles.tabContent}>
            {collegeData.courses.map((course, index) => (
              <View key={index} style={styles.courseCard}>
                <Text style={styles.courseName}>{course.name}</Text>
                <View style={styles.courseDetails}>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="timer" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Duration: {course.duration}</Text>
                  </View>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="attach-money" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Fees: {course.fees}</Text>
                  </View>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="people" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Seats: {course.seats}</Text>
                  </View>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="school" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Eligibility: {course.eligibility}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        );

      case 'placements':
        return (
          <View style={styles.tabContent}>
            <View style={styles.placementStats}>
              <View style={styles.placementStatItem}>
                <Text style={styles.placementStatValue}>{collegeData.placements.avgPackage}</Text>
                <Text style={styles.placementStatLabel}>Average Package</Text>
              </View>
              <View style={styles.placementStatItem}>
                <Text style={styles.placementStatValue}>{collegeData.placements.highestPackage}</Text>
                <Text style={styles.placementStatLabel}>Highest Package</Text>
              </View>
              <View style={styles.placementStatItem}>
                <Text style={styles.placementStatValue}>{collegeData.placements.placementRate}</Text>
                <Text style={styles.placementStatLabel}>Placement Rate</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Top Recruiters</Text>
            <View style={styles.recruitersList}>
              {collegeData.placements.recruiters.map((recruiter, index) => (
                <View key={index} style={styles.recruiterItem}>
                  <MaterialIcons name="business" size={20} color="#007bff" />
                  <Text style={styles.recruiterText}>{recruiter}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case 'facilities':
        return (
          <View style={styles.tabContent}>
            <View style={styles.facilitiesList}>
              {collegeData.facilities.map((facility, index) => (
                <View key={index} style={styles.facilityItem}>
                  <MaterialIcons name={facility.icon} size={24} color="#28a745" />
                  <Text style={styles.facilityText}>{facility.name}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      default:
        return <View />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {renderHeader()}
        <View style={styles.content}>
          {renderQuickActions()}
          {renderTabs()}
          {renderTabContent()}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  headerContent: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  rating: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
  },
  quickActions: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 1,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  actionText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },
  contactDetail: {
    fontSize: 10,
    color: '#666',
    width: '100%',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0066cc',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  tabContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    marginTop: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    marginBottom: 16,
  },
  highlightsList: {
    marginBottom: 16,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  highlightText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  statItem: {
    width: '50%',
    padding: 8,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textTransform: 'capitalize',
  },
  courseCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#0066cc',
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  courseDetails: {},
  courseDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseDetailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
  placementStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  placementStatItem: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 8,
  },
  placementStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 4,
  },
  placementStatLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  recruitersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recruiterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 12,
  },
  recruiterText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
  facilitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 16,
  },
  facilityText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
});

export default CollegeDetails; 