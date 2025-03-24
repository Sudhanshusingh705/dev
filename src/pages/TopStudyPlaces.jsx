import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const studyPlaces = [
  {
    id: 1,
    name: 'Delhi NCR',
    icon: 'https://cdn-icons-png.freepik.com/256/2322/2322277.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 500,
    // courses: 1200
  },
  {
    id: 2,
    name: 'Bangalore',
    icon: 'https://cdn-icons-png.freepik.com/256/10706/10706892.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 450,
    // courses: 1000
  },
  {
    id: 3,
    name: 'Hyderabad',
    icon: 'https://cdn-icons-png.freepik.com/256/1235/1235736.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 380,
    // courses: 950
  },
  {
    id: 4,
    name: 'Pune',
    icon: 'https://cdn-icons-png.freepik.com/256/5337/5337579.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 320,
    // courses: 850
  },
  {
    id: 5,
    name: 'Mumbai',
    icon: 'https://cdn-icons-png.freepik.com/256/10195/10195887.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 420,
    // courses: 1100
  },
  {
    id: 6,
    name: 'Chennai',
    icon: 'https://cdn-icons-png.freepik.com/256/1282/1282334.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 350,
    // courses: 900
  },
  {
    id: 7,
    name: 'Kolkata',
    icon: 'https://cdn-icons-png.freepik.com/256/1354/1354311.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 300,
    // courses: 800
  },
  {
    id: 8,
    name: 'Bhopal',
    icon: 'https://cdn-icons-png.freepik.com/256/898/898112.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 180,
    // courses: 600
  },
  {
    id: 9,
    name: 'Indore',
    icon: 'https://cdn-icons-png.freepik.com/256/4294/4294958.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 150,
    // courses: 500
  },
  {
    id: 10,
    name: 'Nagpur',
    icon: 'https://cdn-icons-png.freepik.com/256/9342/9342080.png?uid=R123767660&ga=GA1.1.422920070.1741165168&semt=ais_hybrid',
    // colleges: 120,
    // courses: 450
  }
];

const TopStudyPlaces = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top Study Places</Text>
      <View style={styles.gridContainer}>
        {studyPlaces.map((place) => (
          <TouchableOpacity
            key={place.id}
            style={styles.placeCard}
            onPress={() => navigation.navigate('StudyPlaceDetails', { place })}
          >
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: place.icon }}
                style={styles.placeIcon}
                resizeMode="contain"
              />
            </View>
            <Text numberOfLines={1} style={styles.placeName}>{place.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#333',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 12,
  },
  placeCard: {
    width: '22%',
    minWidth: 75,
    aspectRatio: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  placeIcon: {
    width: 25,
    height: 25,
    tintColor: '#ffffff',
  },
  placeName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});

export default TopStudyPlaces;
