import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const examData = [
  {
    id: 1,
    name: 'NEET',
    type: 'Offline Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=44&w=44&mode=stretch',
    participatingColleges: '1242',
    examDate: 'June 23, 2024',
    examLevel: 'National'
  },
  {
    id: 2,
    name: 'JEE Advanced',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/iitm%20(1).jpg?h=44&w=44&mode=stretch',
    participatingColleges: '77',
    examDate: 'May 18, 2025',
    examLevel: 'National'
  },
  {
    id: 3,
    name: 'JEE Main',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA%20Logo.jpg?h=44&w=44&mode=stretch',
    participatingColleges: '1753',
    examDate: 'January 24, 2025',
    examLevel: 'National'
  },
  {
    id: 4,
    name: 'CAT',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/IIM-calcutta.png?h=44&w=44&mode=stretch',
    participatingColleges: '1242',
    examDate: 'November 24, 2024',
    examLevel: 'National'
  },
  {
    id: 5,
    name: 'GATE',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/GATE%202025%20Logo.png?h=44&w=44&mode=stretch',
    participatingColleges: '890',
    examDate: 'February 15, 2025',
    examLevel: 'National'
  },
  {
    id: 6,
    name: 'BITSAT',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/BITS%20Pilani%20Logo.png?h=44&w=44&mode=stretch',
    participatingColleges: '234',
    examDate: 'June 15, 2025',
    examLevel: 'National'
  },
  {
    id: 7,
    name: 'MAT',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/MAT%20Exam%20Logo.jpg?h=44&w=44&mode=stretch',
    participatingColleges: '678',
    examDate: 'May 5, 2025',
    examLevel: 'National'
  },
  {
    id: 8,
    name: 'XAT',
    type: 'Online Exam',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/XAT_0.jpg?h=44&w=44&mode=stretch',
    participatingColleges: '289',
    examDate: 'January 7, 2025',
    examLevel: 'National'
  }
];

const TopExams = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Exams</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {examData.map((exam) => (
          <View key={exam.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image 
                source={{ uri: exam.logo }}
                style={styles.examLogo}
                resizeMode="contain"
              />
              <View style={styles.headerTextContainer}>
                <Text style={styles.examType}>{exam.type}</Text>
                <Text style={styles.examName}>{exam.name}</Text>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Participating Colleges</Text>
                <Text style={styles.infoValue}>{exam.participatingColleges}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Exam Date</Text>
                <Text style={styles.infoValue}>{exam.examDate}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Exam Level</Text>
                <Text style={styles.infoValue}>{exam.examLevel}</Text>
              </View>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkText}>Application Process</Text>
                <AntDesign name="right" size={14} color="#666" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkText}>Exam Info</Text>
                <AntDesign name="right" size={14} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scrollContent: {
    paddingRight: 16,
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  examLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  examType: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  examName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  buttonsContainer: {
    marginTop: 8,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#666',
  }
});

export default TopExams;
