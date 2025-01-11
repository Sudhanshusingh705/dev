import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const AboutUs = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header View */}
      <View style={styles.header}>
        {/* Title */}
        <Text style={styles.title}>ABOUT SEARCHMYCOLLEGE</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          SearchMyCollege is your trusted partner in navigating the complex world of higher education.
          Founded with a vision to simplify the college search process, we have been helping students
          find their ideal educational institutions since our inception.
        </Text>

        <Text style={styles.paragraph}>
          Our mission is to empower students with comprehensive, accurate, and up-to-date information
          about colleges and universities across India. We believe that every student deserves access
          to quality education, and we're here to make that journey easier.
        </Text>

        <Text style={styles.paragraph}>With a team of dedicated education experts, we provide:</Text>

        <View style={styles.bulletPoints}>
          {bulletPoints.map((point, index) => (
            <Text key={index} style={styles.bulletPoint}>• {point}</Text>
          ))}
        </View>

        <Text style={styles.paragraph}>
          At SearchMyCollege, we're more than just a search engine - we're your educational allies,
          committed to helping you make informed decisions about your academic future.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const bulletPoints = [
  'Detailed college profiles and rankings',
  'Admission guidance and application support',
  'Career counseling services',
  'Scholarship information',
  'Educational news and updates',
];

const primaryColor = '#007AFF'; // Define your primary color here

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40, // Add padding to give proper space at the top
    paddingBottom: 15, // Add padding below the title
    paddingHorizontal: 20, // Horizontal padding for alignment
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Optional: Adds a subtle separator below the header
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: primaryColor,
    textTransform: 'uppercase', // Ensure the title is uppercase
    textAlign: 'center', // Center-align the title
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#555',
  },
  bulletPoints: {
    marginLeft: 20,
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
});

export default AboutUs;
