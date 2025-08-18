import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';;
import { generateCollegeData } from '../../data/collegeData';

const MCAColleges = ({ navigation }) => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  // Extract unique states and cities from data
  const getStates = () => {
    const states = [...new Set(colleges.map(college => college.location.split(', ')[1]))].sort();
    return states.filter(state => state && state.trim() !== '');
  };

  const getCities = () => {
    const cities = [...new Set(colleges.map(college => college.location.split(', ')[0]))].sort();
    return cities.filter(city => city && city.trim() !== '');
  };

  useEffect(() => {
    // Generate MCA college data
    const data = generateCollegeData('MCA');
    setColleges(data);
    setFilteredColleges(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = [...colleges];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(college => 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply location filters
    if (activeFilters.state) {
      filtered = filtered.filter(college => 
        college.location.includes(activeFilters.state)
      );
    }

    if (activeFilters.city) {
      filtered = filtered.filter(college => 
        college.location.includes(activeFilters.city)
      );
    }

    // Apply sorting
    if (sortBy === 'highestFees') {
      filtered.sort((a, b) => {
        const feesA = parseInt(a.fees.replace(/[₹,]/g, ''));
        const feesB = parseInt(b.fees.replace(/[₹,]/g, ''));
        return feesB - feesA;
      });
    } else if (sortBy === 'lowestFees') {
      filtered.sort((a, b) => {
        const feesA = parseInt(a.fees.replace(/[₹,]/g, ''));
        const feesB = parseInt(b.fees.replace(/[₹,]/g, ''));
        return feesA - feesB;
      });
    } else if (sortBy === 'ranking') {
      filtered.sort((a, b) => parseInt(a.nationalRank) - parseInt(b.nationalRank));
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredColleges(filtered);
  }, [searchQuery, activeFilters, sortBy, colleges]);

  const handleFilter = (type, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? null : value
    }));
  };

  const handleSort = (type) => {
    setSortBy(prev => prev === type ? null : type);
  };

  const formatFees = (fees) => {
    return fees.replace('₹', '₹ ');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={[styles.star, i <= rating && styles.starFilled]}>
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
        <Text style={styles.loadingText}>Loading MCA Colleges...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#0066cc" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>MCA Colleges</Text>
        <Text style={styles.subtitle}>{filteredColleges.length} Colleges Found</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search colleges by name or location..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <AntDesign name="search1" size={20} color="#666" style={styles.searchIcon} />
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>State</Text>
            <View style={styles.filterOptions}>
              {getStates().slice(0, 8).map(state => (
                <TouchableOpacity
                  key={state}
                  style={[
                    styles.filterOption,
                    activeFilters.state === state && styles.activeFilter
                  ]}
                  onPress={() => handleFilter('state', state)}
                >
                  <Text style={[
                    styles.filterText,
                    activeFilters.state === state && styles.activeFilterText
                  ]}>{state}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>City</Text>
            <View style={styles.filterOptions}>
              {getCities().slice(0, 8).map(city => (
                <TouchableOpacity
                  key={city}
                  style={[
                    styles.filterOption,
                    activeFilters.city === city && styles.activeFilter
                  ]}
                  onPress={() => handleFilter('city', city)}
                >
                  <Text style={[
                    styles.filterText,
                    activeFilters.city === city && styles.activeFilterText
                  ]}>{city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.sortContainer}>
        <Text style={styles.sortTitle}>Sort by:</Text>
        <View style={styles.sortOptions}>
          {[
            { key: 'ranking', label: 'Ranking' },
            { key: 'rating', label: 'Rating' },
            { key: 'lowestFees', label: 'Lowest Fees' },
            { key: 'highestFees', label: 'Highest Fees' },
          ].map(sort => (
            <TouchableOpacity
              key={sort.key}
              style={[
                styles.sortButton,
                sortBy === sort.key && styles.activeSort
              ]}
              onPress={() => handleSort(sort.key)}
            >
              <Text style={[
                styles.sortText,
                sortBy === sort.key && styles.activeSortText
              ]}>
                {sort.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.collegesContainer}>
        {filteredColleges.map(college => (
          <TouchableOpacity 
            key={college.id} 
            style={styles.collegeCard}
            onPress={() => navigation.navigate('CollegeDetails', { college })}
          >
            <View style={styles.collegeHeader}>
              <Image 
                source={{ uri: college.logo }} 
                style={styles.collegeLogo}
              />
              <View style={styles.collegeInfo}>
                <Text style={styles.collegeName}>{college.name}</Text>
                <Text style={styles.collegeLocation}>{college.location}</Text>
              </View>
            </View>

            <View style={styles.collegeStats}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>National Rank</Text>
                <Text style={styles.statValue}>#{college.nationalRank}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Rating</Text>
                <View style={styles.ratingContainer}>
                  {renderStars(college.rating)}
                  <Text style={styles.ratingText}>{college.rating}</Text>
                </View>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Fees</Text>
                <Text style={styles.statValue}>{formatFees(college.fees)}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Avg Package</Text>
                <Text style={styles.statValue}>{college.avgPackage}</Text>
              </View>
            </View>

            <View style={styles.collegeFooter}>
              <Text style={styles.established}>
                Established: {college.establishedYear}
              </Text>
              <Text style={styles.reviews}>
                {college.reviewCount} reviews
              </Text>
            </View>
          </TouchableOpacity>
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

export default MCAColleges;
