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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';;

const { width } = Dimensions.get('window');

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
  const [loading, setLoading] = useState(true);
  const [allColleges, setAllColleges] = useState([]);
  const itemsPerPage = 10;

  const streams = [
    'Engineering',
    'Medical',
    'Management',
    'Arts',
    'Science',
    'Commerce',
    'Law',
    'Agriculture',
    'Animation',
    'Architecture',
    'Aviation',
    'Dental',
    'Design',
    'Education',
    'Hotel Management',
    'Mass Communication',
    'Paramedical',
    'Pharmacy',
    'Science',
    'Veterinary',
    'Vocational'
  ];

  const courses = [
    'B.Tech',
    'MBBS',
    'MBA',
    'BBA',
    'B.Sc',
    'BA',
    'B.Com',
    'LLB',
    'B.Arch',
    'B.Des',
    'BHM',
    'B.Pharm',
    'BAMS',
    'BHMS',
    'BDS',
    'BVSc',
    'BPT',
    'B.Ed'
  ];

  const feesRanges = [
    'Under ₹1 Lakh',
    '₹1-3 Lakhs',
    '₹3-5 Lakhs',
    '₹5-10 Lakhs',
    'Above ₹10 Lakhs'
  ];

  // Load all colleges from JSON files
  useEffect(() => {
    loadAllColleges();
  }, [place]);

  const loadAllColleges = () => {
    setLoading(true);
    
    const jsonFiles = [
      require('../data/agricultureColleges.json'),
      require('../data/animationColleges.json'),
      require('../data/architectureColleges.json'),
      require('../data/artsColleges.json'),
      require('../data/aviationColleges.json'),
      require('../data/commerceColleges.json'),
      require('../data/computerColleges.json'),
      require('../data/dentalColleges.json'),
      require('../data/designColleges.json'),
      require('../data/educationColleges.json'),
      require('../data/engineeringColleges.json'),
      require('../data/hotelmanagementColleges.json'),
      require('../data/lawColleges.json'),
      require('../data/managementColleges.json'),
      require('../data/masscommunicationColleges.json'),
      require('../data/medicalColleges.json'),
      require('../data/paramedicalColleges.json'),
      require('../data/pharmacyColleges.json'),
      require('../data/scienceColleges.json'),
      require('../data/veterinaryColleges.json'),
      require('../data/vocationalColleges.json')
    ];

    let combinedColleges = [];
    
    jsonFiles.forEach(file => {
      if (file && Array.isArray(file)) {
        combinedColleges = [...combinedColleges, ...file];
      }
    });

    // Filter colleges by city
    const cityColleges = combinedColleges.filter(college => 
      college.location && 
      college.location.toLowerCase().includes(place.name.toLowerCase())
    );

    setAllColleges(cityColleges);
    setLoading(false);
  };

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

  const renderCollegeItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.collegeCard}
        onPress={() => navigation.navigate('CollegeDetails', { 
          college: item  // Pass the entire item object directly
        })}
      >
        <View style={styles.collegeHeader}>
          <Text style={styles.collegeName} numberOfLines={2}>{item.name || 'College Name'}</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating || '4.0'}</Text>
          </View>
        </View>
        
        <View style={styles.collegeDetails}>
          <View style={styles.detailRow}>
            <MaterialIcons name="school" size={16} color="#666" />
            <Text style={styles.detailText}>{item.stream || 'General'}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="book" size={16} color="#666" />
            <Text style={styles.detailText}>{item.course || item.type || 'Various'}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={16} color="#666" />
            <Text style={styles.detailText}>{item.fees || 'Contact for Fees'}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="verified" size={16} color="#666" />
            <Text style={styles.detailText}>{item.approved || 'UGC Approved'}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.viewDetailsButton}
          onPress={() => navigation.navigate('CollegeDetails', { college: item })}
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
          <AntDesign name="right" size={14} color="#007bff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const filteredColleges = allColleges.filter(college => {
    let matches = true;
    
    if (filters.stream && college.stream !== filters.stream) {
      matches = false;
    }
    
    if (filters.course && college.course && !college.course.includes(filters.course)) {
      matches = false;
    }
    
    if (filters.rating && parseFloat(college.rating) < parseFloat(filters.rating)) {
      matches = false;
    }
    
    if (filters.fees && college.fees) {
      const feesValue = parseInt(college.fees.toString().replace('₹', '').replace(' Lakhs', '').replace(/,/g, ''));
      switch(filters.fees) {
        case 'Under ₹1 Lakh':
          if (feesValue >= 1) matches = false;
          break;
        case '₹1-3 Lakhs':
          if (feesValue < 1 || feesValue > 3) matches = false;
          break;
        case '₹3-5 Lakhs':
          if (feesValue < 3 || feesValue > 5) matches = false;
          break;
        case '₹5-10 Lakhs':
          if (feesValue < 5 || feesValue > 10) matches = false;
          break;
        case 'Above ₹10 Lakhs':
          if (feesValue <= 10) matches = false;
          break;
      }
    }
    
    return matches;
  });

  const totalPages = Math.max(1, Math.ceil(filteredColleges.length / itemsPerPage));
  const paginatedColleges = filteredColleges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
        </View>
      </View>

      {showFilters && <FilterSection />}

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Loading colleges for {place.name}...</Text>
        </View>
      ) : (
        <>
          <Text style={styles.resultsText}>
            Found {filteredColleges.length} colleges in {place.name}
          </Text>
          {paginatedColleges.length > 0 ? (
            <FlatList
              data={paginatedColleges}
              renderItem={renderCollegeItem}
              keyExtractor={item => (item.id || Math.random()).toString()}
              contentContainerStyle={styles.collegeList}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <MaterialIcons name="school" size={64} color="#ccc" />
              <Text style={styles.emptyTitle}>No colleges found</Text>
              <Text style={styles.emptyText}>
                We couldn't find any colleges in {place.name}. Try adjusting your filters or check other cities.
              </Text>
            </View>
          )}
        </>
      )}

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
  backButton: {
    padding: 8,
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
  filterContainer: {
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  resultsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
});

export default StudyPlaceDetails;

