import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const studyPlaces = [
  {
    id: 1,
    name: 'Delhi NCR',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/2.png',
    // colleges: 500,
    // courses: 1200
  },
  {
    id: 2,
    name: 'Bangalore',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/1.png',
    // colleges: 450,
    // courses: 1000
  },
  {
    id: 3,
    name: 'Hyderabad',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/3.png',
    // colleges: 380,
    // courses: 950
  },
  {
    id: 4,
    name: 'Pune',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/4.png',
    // colleges: 320,
    // courses: 850
  },
  {
    id: 5,
    name: 'Mumbai',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/6.png',
    // colleges: 420,
    // courses: 1100
  },
  {
    id: 6,
    name: 'Chennai',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/5.png',
    // colleges: 350,
    // courses: 900
  },
  {
    id: 7,
    name: 'Kolkata',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/8.png',
    // colleges: 300,
    // courses: 800
  },
  {
    id: 8,
    name: 'Bhopal',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/7.png',
    // colleges: 180,
    // courses: 600
  },
  {
    id: 9,
    name: 'Indore',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/9.png',
    // colleges: 150,
    // courses: 500
  },
  {
    id: 10,
    name: 'Nagpur',
    icon: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/10.png',
    // colleges: 120,
    // courses: 450
  }
];

const TopStudyPlaces = () => {
  const navigation = useNavigation();

  const handlePlacePress = (place) => {
    navigation.navigate('StudyPlaceDetails', { place });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Study Places</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {studyPlaces.map((place) => (
          <TouchableOpacity
            key={place.id}
            style={styles.placeCard}
            onPress={() => handlePlacePress(place)}
          >
            <View style={styles.iconContainer}>
              <Image 
                source={{ uri: place.icon }}
                style={styles.placeIcon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.placeName}>{place.name}</Text>
            <View style={styles.statsContainer}>
             {/*  <Text style={styles.statsText}>{place.colleges} Colleges</Text>
              <Text style={styles.statsText}>{place.courses} Courses</Text> */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scrollContent: {
    paddingRight: 16,
  },
  placeCard: {
    width: 180,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  placeIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  placeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  statsContainer: {
    alignItems: 'center',
  },
  statsText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default TopStudyPlaces;
