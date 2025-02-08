// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   ScrollView, 
//   TouchableOpacity,
//   Image,
//   FlatList 
// } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// const filters = {
//   streams: ['Engineering', 'Medical', 'Management', 'Arts', 'Science', 'Commerce'],
//   degrees: ['B.Tech', 'MBBS', 'MBA', 'BA', 'BSc', 'BCom'],
//   fees: ['Under 1L', '1-2L', '2-5L', 'Above 5L'],
//   rating: ['4+ Rating', '3+ Rating', '2+ Rating']
// };

// const StudyPlaceDetails = ({ route }) => {
//   const { place } = route.params;
//   const [selectedFilters, setSelectedFilters] = useState({
//     streams: [],
//     degrees: [],
//     fees: [],
//     rating: []
//   });

//   const toggleFilter = (type, value) => {
//     setSelectedFilters(prev => ({
//       ...prev,
//       [type]: prev[type].includes(value) 
//         ? prev[type].filter(item => item !== value)
//         : [...prev[type], value]
//     }));
//   };

//   const renderFilterSection = (title, type, options) => (
//     <View style={styles.filterSection}>
//       <Text style={styles.filterTitle}>{title}</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {options.map((option) => (
//           <TouchableOpacity
//             key={option}
//             style={[
//               styles.filterChip,
//               selectedFilters[type].includes(option) && styles.activeFilterChip
//             ]}
//             onPress={() => toggleFilter(type, option)}
//           >
//             <Text style={[
//               styles.filterChipText,
//               selectedFilters[type].includes(option) && styles.activeFilterChipText
//             ]}>
//               {option}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={place.icon} style={styles.placeIcon} />
//         <View style={styles.headerInfo}>
//           <Text style={styles.placeName}>{place.name}</Text>
//           <Text style={styles.statsText}>
//             {place.colleges} Colleges • {place.courses} Courses
//           </Text>
//         </View>
//       </View>

//       <ScrollView style={styles.filtersContainer}>
//         {renderFilterSection('Streams', 'streams', filters.streams)}
//         {renderFilterSection('Degrees', 'degrees', filters.degrees)}
//         {renderFilterSection('Fees', 'fees', filters.fees)}
//         {renderFilterSection('Rating', 'rating', filters.rating)}
//       </ScrollView>

//       {/* Add your college list/table here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   placeIcon: {
//     width: 50,
//     height: 50,
//     marginRight: 16,
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   placeName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   statsText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   filtersContainer: {
//     flex: 1,
//   },
//   filterSection: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   filterTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 12,
//   },
//   filterChip: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     backgroundColor: '#f0f0f0',
//     marginRight: 8,
//   },
//   activeFilterChip: {
//     backgroundColor: '#007AFF',
//   },
//   filterChipText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   activeFilterChipText: {
//     color: '#fff',
//   },
// });

// export default StudyPlaceDetails; 








import React, { useState, useEffect, useCallback } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const filters = {
  streams: ['Engineering', 'Medical', 'Management', 'Arts', 'Science', 'Commerce'],
  degrees: ['B.Tech', 'MBBS', 'MBA', 'BA', 'BSc', 'BCom'],
  fees: ['Under 1L', '1-2L', '2-5L', 'Above 5L'],
  rating: ['4+ Rating', '3+ Rating', '2+ Rating']
};

const defaultPlace = {
  name: 'All Universities',
  icon: 'https://example.com/default-icon.png',
  colleges: 'Many',
  courses: 'Various'
};

const StudyPlaceDetails = ({ route, navigation }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    streams: [],
    degrees: [],
    fees: [],
    rating: []
  });
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const place = route?.params?.place || defaultPlace;

  const fetchUniversities = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://universities.hipolabs.com/search?country=India');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
      setError('Failed to load universities. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  useFocusEffect(
    useCallback(() => {
      fetchUniversities();
    }, [fetchUniversities])
  );

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

  const renderUniversity = ({ item }) => (
    <TouchableOpacity 
      style={styles.universityItem}
      onPress={() => navigation.navigate('UniversityDetails', { university: item })}
    >
      <Text style={styles.universityName}>{item.name}</Text>
      <Text style={styles.universityDetails}>{item.country}</Text>
    </TouchableOpacity>
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchUniversities();
  }, [fetchUniversities]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: place.icon }} style={styles.placeIcon} />
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

      {loading && !refreshing ? (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchUniversities}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={universities}
          renderItem={renderUniversity}
          keyExtractor={(item) => item.name}
          style={styles.universitiesList}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No universities found</Text>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
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
    borderRadius: 25,
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
    maxHeight: 200,
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  universitiesList: {
    flex: 1,
  },
  universityItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  universityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  universityDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyListText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StudyPlaceDetails;

