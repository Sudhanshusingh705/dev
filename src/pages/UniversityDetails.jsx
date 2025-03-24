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
  Alert,
  Platform
} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 280;

const UniversityDetails = ({ route, navigation }) => {
  const { university } = route.params;
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

  const handleShare = async () => {
    try {
      const message = `Check out ${university.name}\n` +
                     `Rating: ${university.rating}\n` +
                     `Location: ${university.location}\n` +
                     `Contact: ${university.contact.phone}\n` +
                     `Email: ${university.contact.email}\n` +
                     `Website: ${university.contact.website}`;
                     
      if (Platform.OS === 'android') {
        await Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}`);
      } else {
        await Linking.openURL(`sms:&body=${encodeURIComponent(message)}`);
      }
    } catch (error) {
      Alert.alert(
        'Share',
        'Could not share the university details. Please try again later.'
      );
    }
  };

  const renderHeader = () => (
    <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
      <ImageBackground
        source={{ uri: university.background }}
        style={styles.headerImage}
        resizeMode="cover"
        onError={(e) => console.log('Image loading error:', e.nativeEvent.error)}
      >
        <Animated.View style={[styles.headerOverlay, { opacity: imageOpacity }]}>
          <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
        </Animated.View>
        <View style={styles.headerContent}>
          <Image 
            source={{ uri: university.logo }} 
            style={styles.logo}
            onError={(e) => console.log('Logo loading error:', e.nativeEvent.error)}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.universityName}>{university.name}</Text>
            <View style={styles.locationRow}>
              <MaterialIcons name="location-on" size={16} color="#fff" />
              <Text style={styles.location}>{university.location}</Text>
            </View>
            <View style={styles.ratingRow}>
              <AntDesign name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{university.rating}</Text>
              <Text style={styles.reviews}>{university.reviews}</Text>
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
        onPress={() => Linking.openURL(`tel:${university.contact.phone}`)}
      >
        <MaterialIcons name="phone" size={24} color="#007AFF" />
        <Text style={styles.actionText}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => Linking.openURL(`mailto:${university.contact.email}`)}
      >
        <MaterialIcons name="email" size={24} color="#007AFF" />
        <Text style={styles.actionText}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => Linking.openURL(`https://${university.contact.website}`)}
      >
        <MaterialIcons name="language" size={24} color="#007AFF" />
        <Text style={styles.actionText}>Website</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={handleShare}
      >
        <MaterialIcons name="share" size={24} color="#007AFF" />
        <Text style={styles.actionText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>About University</Text>
            <Text style={styles.description}>{university.overview?.description || 'Description not available'}</Text>
            
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <MaterialIcons name="history" size={24} color="#007AFF" />
                <Text style={styles.infoLabel}>Established</Text>
                <Text style={styles.infoValue}>{university.overview?.established || 'N/A'}</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialIcons name="category" size={24} color="#007AFF" />
                <Text style={styles.infoLabel}>Type</Text>
                <Text style={styles.infoValue}>{university.overview?.type || 'N/A'}</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialIcons name="landscape" size={24} color="#007AFF" />
                <Text style={styles.infoLabel}>Campus</Text>
                <Text style={styles.infoValue}>{university.overview?.campus || 'N/A'}</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialIcons name="verified" size={24} color="#007AFF" />
                <Text style={styles.infoLabel}>Recognition</Text>
                <Text style={styles.infoValue}>{university.overview?.recognition || 'N/A'}</Text>
              </View>
            </View>
          </View>
        );

      case 'courses':
        return (
          <View style={styles.tabContent}>
            {(university.courses || []).map((course, index) => (
              <View key={index} style={styles.courseCard}>
                <Text style={styles.courseName}>{course.name || 'Course Name N/A'}</Text>
                <View style={styles.courseDetails}>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="timer" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Duration: {course.duration || 'N/A'}</Text>
                  </View>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="attach-money" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Fees: {course.fees || 'N/A'}</Text>
                  </View>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="people" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Seats: {course.seats || 'N/A'}</Text>
                  </View>
                  <View style={styles.courseDetailItem}>
                    <MaterialIcons name="school" size={16} color="#666" />
                    <Text style={styles.courseDetailText}>Eligibility: {course.eligibility || 'N/A'}</Text>
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
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{university.placements?.averagePackage || 'N/A'}</Text>
                <Text style={styles.statLabel}>Average Package</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{university.placements?.highestPackage || 'N/A'}</Text>
                <Text style={styles.statLabel}>Highest Package</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{university.placements?.placementStats?.placed || 'N/A'}</Text>
                <Text style={styles.statLabel}>Students Placed</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Top Recruiters</Text>
            <View style={styles.recruitersGrid}>
              {(university.placements?.topRecruiters || []).map((recruiter, index) => (
                <View key={index} style={styles.recruiterItem}>
                  <MaterialIcons name="business" size={24} color="#007AFF" />
                  <Text style={styles.recruiterName}>{recruiter}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case 'facilities':
        return (
          <View style={styles.tabContent}>
            {(university.facilities || []).map((facility, index) => (
              <View key={index} style={styles.facilityCard}>
                <MaterialIcons name={facility.icon || 'check-circle'} size={24} color="#007AFF" />
                <View style={styles.facilityInfo}>
                  <Text style={styles.facilityName}>{facility.name || 'N/A'}</Text>
                  <Text style={styles.facilityDescription}>{facility.description || 'No description available'}</Text>
                </View>
              </View>
            ))}
          </View>
        );

      default:
        return null;
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
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.tabsContainer}
          >
            {['overview', 'courses', 'placements', 'facilities'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 100,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  titleContainer: {
    flex: 1,
  },
  universityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
  rating: {
    color: '#fff',
    marginLeft: 4,
    marginRight: 8,
    fontSize: 14,
  },
  reviews: {
    color: '#fff',
    fontSize: 12,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  tabsContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#666',
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
  },
  tabContent: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  infoItem: {
    width: '50%',
    padding: 10,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  courseCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  courseDetailText: {
    marginLeft: 8,
    color: '#666',
  },
  placementStats: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    margin: 5,
    borderRadius: 10,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  recruitersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  recruiterItem: {
    width: '50%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recruiterName: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  facilityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 10,
  },
  facilityInfo: {
    marginLeft: 15,
    flex: 1,
  },
  facilityName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  facilityDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default UniversityDetails; 