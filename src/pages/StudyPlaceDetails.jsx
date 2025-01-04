import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const filters = {
  streams: ['Engineering', 'Medical', 'Management', 'Arts', 'Science', 'Commerce'],
  degrees: ['B.Tech', 'MBBS', 'MBA', 'BA', 'BSc', 'BCom'],
  fees: ['Under 1L', '1-2L', '2-5L', 'Above 5L'],
  rating: ['4+ Rating', '3+ Rating', '2+ Rating']
};

const StudyPlaceDetails = ({ route }) => {
  const { place } = route.params;
  const [selectedFilters, setSelectedFilters] = useState({
    streams: [],
    degrees: [],
    fees: [],
    rating: []
  });

  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value) 
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const renderFilterSection = (title, type, options) => (
    <View style={styles.filterSection}>
      <Text style={styles.filterTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterChip,
              selectedFilters[type].includes(option) && styles.activeFilterChip
            ]}
            onPress={() => toggleFilter(type, option)}
          >
            <Text style={[
              styles.filterChipText,
              selectedFilters[type].includes(option) && styles.activeFilterChipText
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={place.icon} style={styles.placeIcon} />
        <View style={styles.headerInfo}>
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.statsText}>
            {place.colleges} Colleges • {place.courses} Courses
          </Text>
        </View>
      </View>

      <ScrollView style={styles.filtersContainer}>
        {renderFilterSection('Streams', 'streams', filters.streams)}
        {renderFilterSection('Degrees', 'degrees', filters.degrees)}
        {renderFilterSection('Fees', 'fees', filters.fees)}
        {renderFilterSection('Rating', 'rating', filters.rating)}
      </ScrollView>

      {/* Add your college list/table here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  placeIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statsText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  filtersContainer: {
    flex: 1,
  },
  filterSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: '#007AFF',
  },
  filterChipText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterChipText: {
    color: '#fff',
  },
});

export default StudyPlaceDetails; 