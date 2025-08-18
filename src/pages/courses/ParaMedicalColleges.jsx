import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';;
import paramedicalColleges from '../../data/paramedicalColleges.json';

const ParaMedicalColleges = ({ navigation }) => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [activeFilters, setActiveFilters] = useState({
    state: null,
    city: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const data = paramedicalColleges;
        setColleges(data);
        setFilteredColleges(data);
      } catch (error) {
        console.error('Error loading paramedical colleges:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...colleges];

    if (searchQuery) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeFilters.state) {
      filtered = filtered.filter(college => college.state === activeFilters.state);
    }

    if (activeFilters.city) {
      filtered = filtered.filter(college => college.city === activeFilters.city);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'fees':
          return parseInt(a.fees.replace(/[^0-9]/g, '')) - parseInt(b.fees.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.established - a.established;
        default:
          return 0;
      }
    });

    setFilteredColleges(filtered);
  }, [colleges, searchQuery, activeFilters, sortBy]);

  const getStates = () => {
    const states = [...new Set(colleges.map(college => college.state))].sort();
    return states.filter(state => state && state.trim() !== '');
  };

  const getCities = () => {
    const cities = [...new Set(colleges.map(college => college.city))].sort();
    return cities.filter(city => city && city.trim() !== '');
  };

  const handleFilter = (type, value) => {
    setActiveFilters(prev => ({ ...prev, [type]: value }));
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const formatFees = (fees) => {
    const num = parseInt(fees.replace(/[^0-9]/g, ''));
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)}L`;
    } else if (num >= 1000) {
      return `₹${(num / 1000).toFixed(0)}K`;
    }
    return `₹${num}`;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={[styles.star, i <= rating ? styles.starFilled : null]}>
          ★
        </Text>
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Loading paramedical colleges...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Paramedical Colleges</Text>
        <Text style={styles.subtitle}>{filteredColleges.length} colleges found</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges by name or location..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <AntDesign style={styles.searchIcon} name="search1" size={20} color="#666" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>State</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterOptions}>
            {getStates().map(state => (
              <TouchableOpacity
                key={state}
                style={[styles.filterOption, activeFilters.state === state && styles.activeFilter]}
                onPress={() => handleFilter('state', state)}
              >
                <Text style={[styles.filterText, activeFilters.state === state && { color: '#fff' }]}>
                  {state}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>City</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterOptions}>
            {getCities().map(city => (
              <TouchableOpacity
                key={city}
                style={[styles.filterOption, activeFilters.city === city && styles.activeFilter]}
                onPress={() => handleFilter('city', city)}
              >
                <Text style={[styles.filterText, activeFilters.city === city && { color: '#fff' }]}>
                  {city}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.sortContainer}>
        <Text style={styles.sortTitle}>Sort by</Text>
        <View style={styles.sortOptions}>
          {[
            { key: 'name', label: 'Name' },
            { key: 'fees', label: 'Fees' },
            { key: 'rating', label: 'Rating' },
            { key: 'year', label: 'Established' },
          ].map(option => (
            <TouchableOpacity
              key={option.key}
              style={[styles.sortButton, sortBy === option.key && styles.activeSort]}
              onPress={() => handleSort(option.key)}
            >
              <Text style={[styles.sortText, sortBy === option.key && styles.activeSortText]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.collegesContainer}>
        {filteredColleges.map(college => (
          <View key={college.id} style={styles.collegeCard}>
            <View style={styles.collegeHeader}>
              <Image
                source={{ uri: college.logo }}
                style={styles.collegeLogo}
                resizeMode="cover"
              />
              <View style={styles.collegeInfo}>
                <Text style={styles.collegeName}>{college.name}</Text>
                <Text style={styles.collegeLocation}>{college.location}</Text>
              </View>
            </View>

            <View style={styles.collegeStats}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Fees</Text>
                <Text style={styles.statValue}>{formatFees(college.fees)}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Rating</Text>
                <View style={styles.ratingContainer}>
                  {renderStars(college.rating)}
                  <Text style={styles.ratingText}>{college.rating}</Text>
                </View>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Courses</Text>
                <Text style={styles.statValue}>{college.courses}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Type</Text>
                <Text style={styles.statValue}>{college.type}</Text>
              </View>
            </View>

            <View style={styles.collegeFooter}>
              <Text style={styles.established}>Est. {college.established}</Text>
              <Text style={styles.reviews}>{college.reviews} reviews</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  headerContainer: {
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    position: 'relative',
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  searchIcon: {
    position: 'absolute',
    right: 35,
    top: 35,
  },
  filtersContainer: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterSection: {
    marginRight: 20,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginLeft: 20,
  },
  filterOptions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  filterOption: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeFilter: {
    backgroundColor: '#0066cc',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  sortContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sortTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sortButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    marginBottom: 8,
  },
  activeSort: {
    backgroundColor: '#0066cc',
  },
  sortText: {
    fontSize: 14,
    color: '#666',
  },
  activeSortText: {
    color: '#fff',
  },
  collegesContainer: {
    padding: 20,
  },
  collegeCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  collegeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  collegeLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  collegeLocation: {
    fontSize: 14,
    color: '#666',
  },
  collegeStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statItem: {
    width: '48%',
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 14,
    color: '#ddd',
  },
  starFilled: {
    color: '#ff9500',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  collegeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  established: {
    fontSize: 12,
    color: '#666',
  },
  reviews: {
    fontSize: 12,
    color: '#0066cc',
  },
});

export default ParaMedicalColleges;
