import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';;
import { useNavigation } from '@react-navigation/native';

// Import college data
import engineeringColleges from '../data/engineeringColleges.json';
import medicalColleges from '../data/medicalColleges.json';
import managementColleges from '../data/managementColleges.json';
import artsColleges from '../data/artsColleges.json';
import scienceColleges from '../data/scienceColleges.json';
import commerceColleges from '../data/commerceColleges.json';
import lawColleges from '../data/lawColleges.json';
import educationColleges from '../data/educationColleges.json';

const courseLinks = [
  {
    id: 1,
    title: 'BE/B.Tech',
    description: 'Bachelor of Engineering/Technology',
    duration: '4 Years',
    data: engineeringColleges,
    category: 'engineering'
  },
  {
    id: 2,
    title: 'BA',
    description: 'Bachelor of Arts',
    duration: '3 Years',
    data: artsColleges,
    category: 'arts'
  },
  {
    id: 3,
    title: 'B.Sc',
    description: 'Bachelor of Science',
    duration: '3 Years',
    data: scienceColleges,
    category: 'science'
  },
  {
    id: 4,
    title: 'MBA/PGDM',
    description: 'Master of Business Administration',
    duration: '2 Years',
    data: managementColleges,
    category: 'management'
  },
  {
    id: 5,
    title: 'M.Sc',
    description: 'Master of Science',
    duration: '2 Years',
    data: scienceColleges,
    category: 'science'
  },
  {
    id: 6,
    title: 'ME/M.Tech',
    description: 'Master of Engineering/Technology',
    duration: '2 Years',
    data: engineeringColleges,
    category: 'engineering'
  },
  {
    id: 7,
    title: 'MA',
    description: 'Master of Arts',
    duration: '2 Years',
    data: artsColleges,
    category: 'arts'
  },
  {
    id: 8,
    title: 'Polytechnic',
    description: 'Diploma in Engineering',
    duration: '3 Years',
    data: engineeringColleges,
    category: 'engineering'
  },
  {
    id: 9,
    title: 'BE/B.Tech Lateral',
    description: 'Lateral Entry Engineering',
    duration: '3 Years',
    data: engineeringColleges,
    category: 'engineering'
  },
  {
    id: 10,
    title: 'M.Phil/Ph.D in Science',
    description: 'Research in Science',
    duration: '3-5 Years',
    data: scienceColleges,
    category: 'science'
  },
  {
    id: 11,
    title: 'B.Com',
    description: 'Bachelor of Commerce',
    duration: '3 Years',
    data: commerceColleges,
    category: 'commerce'
  },
  {
    id: 12,
    title: 'MD/MS/MDS',
    description: 'Medical Postgraduate',
    duration: '3 Years',
    data: medicalColleges,
    category: 'medical'
  },
  {
    id: 13,
    title: 'M.Phil/Ph.D in Arts',
    description: 'Research in Arts',
    duration: '3-5 Years',
    data: artsColleges,
    category: 'arts'
  },
  {
    id: 14,
    title: 'BBA/BMS',
    description: 'Bachelor of Business Administration',
    duration: '3 Years',
    data: managementColleges,
    category: 'management'
  },
  {
    id: 15,
    title: 'B.Ed',
    description: 'Bachelor of Education',
    duration: '2 Years',
    data: educationColleges,
    category: 'education'
  },
  {
    id: 16,
    title: 'MBBS',
    description: 'Bachelor of Medicine & Surgery',
    duration: '5.5 Years',
    data: medicalColleges,
    category: 'medical'
  }
];

const TopCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    setSelectedCourse(course);
    setShowDetails(true);
  };

  const renderCollegeTable = (colleges) => {
    return (
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.collegeLogoHeader]}>Logo</Text>
          <Text style={[styles.tableHeaderText, styles.collegeNameHeader]}>College Name</Text>
          <Text style={[styles.tableHeaderText, styles.locationHeader]}>Location</Text>
          <Text style={[styles.tableHeaderText, styles.feesHeader]}>Fees</Text>
          <Text style={[styles.tableHeaderText, styles.ratingHeader]}>Rating</Text>
          <Text style={[styles.tableHeaderText, styles.rankHeader]}>Rank</Text>
        </View>
        
        {colleges.map((college, index) => (
          <View key={college.id} style={styles.tableRow}>
            <View style={[styles.tableCell, styles.collegeLogoCell]}>
              {college.logo ? (
                <Image 
                  source={{ uri: college.logo }} 
                  style={styles.logoImage}
                />
              ) : (
                <View style={styles.logoPlaceholder}>
                  <Text style={styles.logoText}>🏛️</Text>
                </View>
              )}
            </View>
            <Text style={[styles.tableCell, styles.collegeNameCell]}>{college.name}</Text>
            <Text style={[styles.tableCell, styles.locationCell]}>{college.location}</Text>
            <Text style={[styles.tableCell, styles.feesCell]}>{college.fees}</Text>
            <Text style={[styles.tableCell, styles.ratingCell]}>{college.rating}★</Text>
            <Text style={[styles.tableCell, styles.rankCell]}>#{college.nationalRank || college.ranking}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Courses</Text>
      
      {!showDetails ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.linksContainer}>
            {courseLinks.map((course) => (
              <TouchableOpacity
              key={course.id}
              style={styles.courseButton}
              onPress={() => handleCoursePress(course)}
            >
              <View style={styles.courseContent}>
                <View style={styles.courseTextContainer}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <Text style={styles.courseDescription}>{course.description}</Text>
                  <Text style={styles.courseDuration}>{course.duration}</Text>
                </View>
                <AntDesign name="right" size={16} color="#666" />
              </View>
            </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setShowDetails(false)}
          >
            <AntDesign name="arrowleft" size={24} color="#007AFF" />
            <Text style={styles.backText}>Back to Courses</Text>
          </TouchableOpacity>
          
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>{selectedCourse.title}</Text>
            <Text style={styles.detailsDescription}>{selectedCourse.description}</Text>
            <Text style={styles.detailsDuration}>Duration: {selectedCourse.duration}</Text>
            
            <Text style={styles.sectionTitle}>Top Colleges</Text>
            {renderCollegeTable(selectedCourse.data)}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    paddingHorizontal: 16,
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
  },
  linksContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 15,
    marginBottom: 12,
    width: '48%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  courseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  courseDuration: {
    fontSize: 11,
    color: '#999',
  },
  activeCourseButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  
  // Details styles
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 8,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detailsDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  detailsDuration: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 20,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 10,
  },
  
  // Table styles
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tableCell: {
    fontSize: 11,
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  
  // Column widths
  collegeLogoHeader: { flex: 1, textAlign: 'center' },
  collegeLogoCell: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  collegeNameHeader: { flex: 2.5, textAlign: 'left', paddingLeft: 8 },
  collegeNameCell: { flex: 2.5, textAlign: 'left', paddingLeft: 8, fontWeight: '500' },
  locationHeader: { flex: 1.5, textAlign: 'left' },
  locationCell: { flex: 1.5, textAlign: 'left' },
  feesHeader: { flex: 1, textAlign: 'center' },
  feesCell: { flex: 1, textAlign: 'center', fontWeight: '500' },
  ratingHeader: { flex: 0.8, textAlign: 'center' },
  ratingCell: { flex: 0.8, textAlign: 'center', color: '#ff9800' },
  rankHeader: { flex: 0.8, textAlign: 'center' },
  rankCell: { flex: 0.8, textAlign: 'center', fontWeight: '600', color: '#007AFF' },
  logoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 16,
  },
});

export default TopCourses;
