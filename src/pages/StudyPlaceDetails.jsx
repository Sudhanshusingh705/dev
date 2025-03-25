<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
=======
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
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

const { width } = Dimensions.get('window');

<<<<<<< HEAD
const StudyPlaceDetails = ({ route, navigation }) => {
  const { place } = route.params;
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    course: '',
    stream: '',
    fees: '',
    rating: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
=======
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
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

  const streams = [
    'Engineering',
    'Medical',
    'Management',
    'Arts',
    'Science',
    'Commerce',
    'Law'
  ];

  const courses = [
    'B.Tech',
    'MBBS',
    'MBA',
    'BBA',
    'B.Sc',
    'BA',
    'B.Com',
    'LLB'
  ];

  const feesRanges = [
    'Under ₹1 Lakh',
    '₹1-3 Lakhs',
    '₹3-5 Lakhs',
    '₹5-10 Lakhs',
    'Above ₹10 Lakhs'
  ];

  // Create dummy college data with full details
  const collegeData = Array(20).fill().map((_, index) => ({
    id: index + 1,
    name: `${place.name} College of ${index % 2 === 0 ? 'Engineering' : 'Management'} ${index + 1}`,
    location: `${place.name}, India`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    stream: ['Engineering', 'Management', 'Medical', 'Arts', 'Science'][Math.floor(Math.random() * 5)],
    course: ['B.Tech', 'MBA', 'MBBS', 'BBA', 'B.Sc'][Math.floor(Math.random() * 5)],
    fees: `₹${Math.floor(Math.random() * 5 + 2)} Lakhs`,
    seats: Math.floor(Math.random() * 100 + 60),
    approved: ['UGC', 'AICTE', 'NAAC-A++'][Math.floor(Math.random() * 3)],
    description: `One of the premier institutions in ${place.name}, known for excellence in education and research. The college offers state-of-the-art facilities and has a strong focus on practical learning and industry exposure.`,
    courses: [
      {
        name: 'B.Tech Computer Science',
        duration: '4 Years',
        fees: '₹4.5 Lakhs',
        seats: 120,
        eligibility: '10+2 with PCM'
      },
      {
        name: 'B.Tech Electronics',
        duration: '4 Years',
        fees: '₹4.2 Lakhs',
        seats: 60,
        eligibility: '10+2 with PCM'
      },
      {
        name: 'MBA',
        duration: '2 Years',
        fees: '₹8.5 Lakhs',
        seats: 180,
        eligibility: 'Graduation with 50%'
      },
      {
        name: 'BBA',
        duration: '3 Years',
        fees: '₹3.5 Lakhs',
        seats: 120,
        eligibility: '10+2 in any stream'
      }
    ],
    placements: {
      averagePackage: '₹8.5 LPA',
      highestPackage: '₹24 LPA',
      placementRate: '92%',
      recruiters: [
        'Google',
        'Microsoft',
        'Amazon',
        'IBM',
        'Infosys',
        'TCS',
        'Wipro',
        'Accenture'
      ]
    },
    facilities: [
      'Digital Library',
      'Sports Complex',
      'Research Labs',
      'Smart Classrooms',
      'Cafeteria',
      'Hostel Facilities',
      'Wi-Fi Campus',
      'Auditorium',
      'Medical Center',
      'Transportation'
    ],
    highlights: [
      'NAAC A++ Accredited',
      '100% Placement Assistance',
      'Industry Partnerships',
      'Research Centers',
      'International Collaborations',
      'Modern Infrastructure'
    ],
    stats: {
      students: '5000+',
      faculty: '200+',
      coursesOffered: '30+',
      researchPapers: '1000+'
    },
    contact: {
      phone: '8882855844',
      email: 'enquiry@searchmycollege.com',
      website: 'www.searchmycolleges.com',
      address: `${Math.floor(Math.random() * 100 + 1)}, Education Hub, ${place.name}, India`
    },
    images: [
      'https://example.com/college1.jpg',
      'https://example.com/college2.jpg',
      'https://example.com/college3.jpg'
    ],
    rankings: {
      nirf: Math.floor(Math.random() * 50 + 1),
      outlook: Math.floor(Math.random() * 50 + 1),
      indiaToday: Math.floor(Math.random() * 50 + 1)
    }
  }));

  const FilterSection = () => (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>Filters</Text>
      
      <Text style={styles.filterLabel}>Stream</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {streams.map((stream) => (
          <TouchableOpacity
            key={stream}
            style={[
              styles.filterChip,
              filters.stream === stream && styles.activeFilterChip
            ]}
            onPress={() => setFilters(prev => ({ ...prev, stream }))}
          >
            <Text style={[
              styles.filterChipText,
              filters.stream === stream && styles.activeFilterChipText
            ]}>{stream}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.filterLabel}>Course</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course}
            style={[
              styles.filterChip,
              filters.course === course && styles.activeFilterChip
            ]}
            onPress={() => setFilters(prev => ({ ...prev, course }))}
          >
            <Text style={[
              styles.filterChipText,
              filters.course === course && styles.activeFilterChipText
            ]}>{course}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.filterLabel}>Fees Range</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {feesRanges.map((range) => (
          <TouchableOpacity
            key={range}
            style={[
              styles.filterChip,
              filters.fees === range && styles.activeFilterChip
            ]}
            onPress={() => setFilters(prev => ({ ...prev, fees: range }))}
          >
            <Text style={[
              styles.filterChipText,
              filters.fees === range && styles.activeFilterChipText
            ]}>{range}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.clearFiltersButton}
        onPress={() => setFilters({ course: '', stream: '', fees: '', rating: '' })}
      >
        <Text style={styles.clearFiltersText}>Clear Filters</Text>
      </TouchableOpacity>
    </View>
  );

<<<<<<< HEAD
  const renderCollegeItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.collegeCard}
        onPress={() => navigation.navigate('CollegeDetails', { 
          college: item  // Pass the entire item object directly
        })}
      >
        <View style={styles.collegeHeader}>
          <Text style={styles.collegeName} numberOfLines={2}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        
        <View style={styles.collegeDetails}>
          <View style={styles.detailRow}>
            <MaterialIcons name="school" size={16} color="#666" />
            <Text style={styles.detailText}>{item.stream}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="book" size={16} color="#666" />
            <Text style={styles.detailText}>{item.course}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={16} color="#666" />
            <Text style={styles.detailText}>{item.fees}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="verified" size={16} color="#666" />
            <Text style={styles.detailText}>{item.approved}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.viewDetailsButton}
          onPress={() => navigation.navigate('CollegeDetails', { college: item })}  // Update this line too
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
          <AntDesign name="right" size={14} color="#007bff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const filteredColleges = collegeData.filter(college => {
    return (
      (!filters.stream || college.stream === filters.stream) &&
      (!filters.course || college.course === filters.course) &&
      (!filters.fees || college.fees.includes(filters.fees.match(/\d+/)?.[0] || ''))
    );
  });

  const paginatedColleges = filteredColleges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
=======
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
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1

  return (
    <View style={styles.container}>
      <View style={styles.header}>
<<<<<<< HEAD
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{place.name} Colleges</Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Ionicons name="filter" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{filteredColleges.length}</Text>
          <Text style={styles.statLabel}>Colleges</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{courses.length}</Text>
          <Text style={styles.statLabel}>Courses</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{streams.length}</Text>
          <Text style={styles.statLabel}>Streams</Text>
=======
        <Image source={{ uri: place.icon }} style={styles.placeIcon} />
        <View style={styles.headerInfo}>
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.statsText}>
            {place.colleges} Colleges • {place.courses} Courses
          </Text>
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
        </View>
      </View>

      {showFilters && <FilterSection />}

<<<<<<< HEAD
      <FlatList
        data={paginatedColleges}
        renderItem={renderCollegeItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.collegeList}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>No colleges found matching your filters</Text>
        }
      />

      <View style={styles.pagination}>
        <TouchableOpacity 
          style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
          onPress={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          <AntDesign name="left" size={16} color={currentPage === 1 ? "#999" : "#333"} />
        </TouchableOpacity>
        
        <Text style={styles.pageText}>
          Page {currentPage} of {totalPages}
        </Text>
        
        <TouchableOpacity 
          style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
          onPress={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        >
          <AntDesign name="right" size={16} color={currentPage === totalPages ? "#999" : "#333"} />
        </TouchableOpacity>
      </View>
=======
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
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
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
    borderBottomColor: '#eee',
  },
<<<<<<< HEAD
  backButton: {
    padding: 8,
=======
  placeIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 40,
  },
  filterButton: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
<<<<<<< HEAD
  filterContainer: {
=======
  filtersContainer: {
    maxHeight: 200,
  },
  filterSection: {
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  filterScroll: {
    marginBottom: 8,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    marginBottom: 8,
  },
  activeFilterChip: {
    backgroundColor: '#007bff',
  },
  filterChipText: {
    fontSize: 13,
    color: '#666',
  },
  activeFilterChipText: {
    color: '#fff',
  },
<<<<<<< HEAD
  clearFiltersButton: {
    alignSelf: 'flex-start',
    marginTop: 8,
    padding: 8,
  },
  clearFiltersText: {
    color: '#007bff',
    fontSize: 14,
  },
  collegeList: {
    padding: 16,
  },
  collegeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  collegeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  collegeName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff9e6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  collegeDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  viewDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 8,
  },
  viewDetailsText: {
    color: '#007bff',
    fontSize: 14,
    marginRight: 4,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  pageButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginHorizontal: 8,
  },
  disabledButton: {
    borderColor: '#eee',
    backgroundColor: '#f5f5f5',
  },
  pageText: {
    fontSize: 14,
    color: '#666',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 32,
=======
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
>>>>>>> ad079fda7bf718d0903344cad2504f58cdec37f1
  },
});

export default StudyPlaceDetails;

