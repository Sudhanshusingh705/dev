import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdminDashboard = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const sections = [
    { name: 'College Listings', screen: 'CollegeListing' },
    { name: 'Courses Listings', screen: 'CoursesListing' },
    { name: 'Admissions', screen: 'AdmissionsListing' },
    { name: 'Exams', screen: 'ExamsListing' },
    { name: 'Notifications', screen: 'NotificationsListing' },
    { name: 'Programs', screen: 'ProgramsListing' },
    { name: 'College Rankings', screen: 'CollegeRankingListing' },
    { name: 'Study Abroad', screen: 'StudyAbroadListing' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <View style={styles.cardContainer}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleNavigation(section.screen)}
          >
            <Text style={styles.cardText}>{section.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 100,
    backgroundColor: '#007bff',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AdminDashboard;

