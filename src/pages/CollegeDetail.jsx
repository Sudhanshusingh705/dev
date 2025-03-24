import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CollegeDetail = ({ route, navigation }) => {
  const { college } = route.params; // Get the college data passed from the previous screen

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#FFA500" />
      </TouchableOpacity>

      <View style={styles.collegeInfo}>
        <Image source={{ uri: college.logo }} style={styles.collegeLogo} />
        <Text style={styles.collegeName}>{college.name}</Text>
      </View>

      <View style={styles.authorContainer}>
        <AntDesign name="user" size={16} color="#FFA500" />
        <Text style={styles.authorText}>Author: Sudhanshu Singh</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.collegeDetails}>Fees: {college.fees}</Text>
        <Text style={styles.collegeDetails}>Avg Package: {college.avgPackage}</Text>
        <Text style={styles.collegeDetails}>Ranking: {college.ranking}</Text>
        <Text style={styles.collegeDetails}>Location: {college.location}</Text>
        <Text style={styles.collegeDetails}>Accreditation: {college.accreditation.join(', ')}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Courses Offered</Text>
        {college.courses.map((course, index) => (
          <Text key={index} style={styles.courseDetails}>
            - {course.name} ({course.duration}): {course.fees}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
  },
  collegeInfo: {
    padding: 16,
    alignItems: 'flex-start',
  },
  collegeLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  collegeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  authorText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  section: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  collegeDetails: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  courseDetails: {
    fontSize: 14,
    color: '#444',
    marginLeft: 10,
  },
});

export default CollegeDetail; 