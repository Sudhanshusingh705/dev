import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CollegeDetails = ({ route }) => {
  const navigation = useNavigation();
  const { college } = route.params;

  const handleWebsite = () => {
    Linking.openURL(college.website);
  };

  const handleCall = () => {
    Linking.openURL(`tel:${college.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${college.email}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with College Image */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={{ uri: college.image }}
          style={styles.collegeImage}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.collegeName}>{college.name}</Text>
          <Text style={styles.location}>{college.city}, {college.state}</Text>
        </View>
      </View>

      {/* Quick Info Cards */}
      <View style={styles.quickInfoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>CD Rank</Text>
          <Text style={styles.infoValue}>{college.cdRank}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>NIRF Ranking</Text>
          <Text style={styles.infoValue}>{college.ranking}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Avg Package</Text>
          <Text style={styles.infoValue}>{college.placement}</Text>
        </View>
      </View>

      {/* Detailed Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.overviewGrid}>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>National Rank</Text>
            <Text style={styles.overviewValue}>#{college.nationalRank}</Text>
          </View>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>Rating</Text>
            <Text style={styles.overviewValue}>★ {college.rating}/5</Text>
          </View>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>Reviews</Text>
            <Text style={styles.overviewValue}>{college.reviewCount}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Course Type:</Text>
          <Text style={styles.detailValue}>{college.courseType}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Course Duration:</Text>
          <Text style={styles.detailValue}>{college.courseDuration}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Course Fees:</Text>
          <Text style={styles.detailValue}>₹ {college.fees}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Placement Statistics</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Average Package:</Text>
          <Text style={[styles.detailValue, styles.packageValue]}>₹ {college.avgPackage}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Highest Package:</Text>
          <Text style={[styles.detailValue, styles.packageValue]}>₹ {college.highestPackage}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Placement Rate:</Text>
          <Text style={styles.detailValue}>{college.placementRate}%</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Established:</Text>
          <Text style={styles.detailValue}>{college.establishedYear}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Campus Size:</Text>
          <Text style={styles.detailValue}>{college.campusSize}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Total Faculty:</Text>
          <Text style={styles.detailValue}>{college.facultyCount}</Text>
        </View>
      </View>

      {/* Contact Buttons */}
      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactButton} onPress={handleWebsite}>
          <Icon name="language" size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Visit Website</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={handleCall}>
          <Icon name="phone" size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
          <Icon name="email" size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    left: 16,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  collegeImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
  },
  collegeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  quickInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  infoCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minWidth: width / 3.5,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  overviewGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overviewItem: {
    flex: 1,
    alignItems: 'center',
  },
  overviewLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  overviewValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
    flex: 2,
  },
  packageValue: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  contactButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CollegeDetails; 