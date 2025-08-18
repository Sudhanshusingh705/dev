import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, Image, ActivityIndicator, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';;
import designCollegesData from '../../data/designColleges.json';

const BDesColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    state: 'All',
    city: 'All'
  });
  const [sortBy, setSortBy] = useState('name');

  // Helper functions
  const getStates = (colleges) => {
    const states = ['All'];
    const stateSet = new Set();
    colleges.forEach(college => {
      const state = college.location.split(', ').pop();
      stateSet.add(state);
    });
    states.push(...Array.from(stateSet).sort());
    return states;
  };

  const getCities = (colleges, selectedState) => {
    const cities = ['All'];
    const citySet = new Set();
    
    const filtered = selectedState === 'All' 
      ? colleges 
      : colleges.filter(college => college.location.includes(selectedState));
    
    filtered.forEach(college => {
      const city = college.location.split(', ')[0];
      citySet.add(city);
    });
    cities.push(...Array.from(citySet).sort());
    return cities;
  };

  const formatFees = (fees) => {
    if (!fees || fees === 'N/A') return 'N/A';
    return fees.toString();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={16} color="#FFD700" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Ionicons key="half" name="star-half" size={16} color="#FFD700" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={16} color="#FFD700" />);
    }
    
    return <View style={{ flexDirection: 'row' }}>{stars}</View>;
  };

  useEffect(() => {
    const loadColleges = () => {
      setLoading(true);
      try {
        const bDesColleges = designCollegesData.filter(college => 
          college.courses && college.courses.some(course => 
            course.toLowerCase().includes('b.des') || 
            course.toLowerCase().includes('bachelor of design') ||
            course.toLowerCase().includes('b.des')
          )
        );
        setColleges(bDesColleges);
        setFilteredColleges(bDesColleges);
      } catch (error) {
        console.error('Error loading colleges:', error);
      } finally {
        setLoading(false);
      }
    };

    loadColleges();
  }, []);

  useEffect(() => {
    let filtered = [...colleges];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // State filter
    if (activeFilters.state !== 'All') {
      filtered = filtered.filter(college =>
        college.location.includes(activeFilters.state)
      );
    }

    // City filter
    if (activeFilters.city !== 'All') {
      filtered = filtered.filter(college =>
        college.location.startsWith(activeFilters.city)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'fees':
          return parseInt(a.fees.replace(/[₹,]/g, '')) - parseInt(b.fees.replace(/[₹,]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'ranking':
          return parseInt(a.nationalRank || '999') - parseInt(b.nationalRank || '999');
        default:
          return 0;
      }
    });

    setFilteredColleges(filtered);
  }, [searchQuery, activeFilters, sortBy, colleges]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Loading B.Des Colleges...</Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>B.Des Design Colleges</Text>
            <Text style={styles.headerSubtitle}>
              {filteredColleges.length} colleges found
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search colleges by name or location..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.filterContainer}
          >
            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>State</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {getStates(colleges).map(state => (
                  <TouchableOpacity
                    key={state}
                    style={[
                      styles.filterButton,
                      activeFilters.state === state && styles.activeFilterButton
                    ]}
                    onPress={() => {
                      setActiveFilters(prev => ({ ...prev, state, city: 'All' }));
                    }}
                  >
                    <Text style={[
                      styles.filterButtonText,
                      activeFilters.state === state && styles.activeFilterButtonText
                    ]}>
                      {state}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>City</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {getCities(colleges, activeFilters.state).map(city => (
                  <TouchableOpacity
                    key={city}
                    style={[
                      styles.filterButton,
                      activeFilters.city === city && styles.activeFilterButton
                    ]}
                    onPress={() => {
                      setActiveFilters(prev => ({ ...prev, city }));
                    }}
                  >
                    <Text style={[
                      styles.filterButtonText,
                      activeFilters.city === city && styles.activeFilterButtonText
                    ]}>
                      {city}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>Sort By</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[
                  { key: 'name', label: 'Name' },
                  { key: 'fees', label: 'Fees' },
                  { key: 'rating', label: 'Rating' },
                  { key: 'ranking', label: 'Ranking' }
                ].map(sort => (
                  <TouchableOpacity
                    key={sort.key}
                    style={[
                      styles.filterButton,
                      sortBy === sort.key && styles.activeFilterButton
                    ]}
                    onPress={() => setSortBy(sort.key)}
                  >
                    <Text style={[
                      styles.filterButtonText,
                      sortBy === sort.key && styles.activeFilterButtonText
                    ]}>
                      {sort.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </ScrollView>

          <ScrollView style={styles.content}>
            {filteredColleges.map((college, index) => (
              <View key={index} style={styles.collegeCard}>
                <View style={styles.collegeHeader}>
                  <View style={styles.collegeInfo}>
                    <Text style={styles.collegeName}>{college.name}</Text>
                    <Text style={styles.collegeLocation}>
                      <Ionicons name="location" size={14} color="#666" /> {college.location}
                    </Text>
                  </View>
                  <View style={styles.collegeRating}>
                    {renderStars(college.rating)}
                    <Text style={styles.ratingText}>{college.rating}/5</Text>
                  </View>
                </View>

                <View style={styles.collegeDetails}>
                  <View style={styles.detailRow}>
                    <Ionicons name="pricetag" size={16} color="#007bff" />
                    <Text style={styles.detailText}>
                      Fees: {formatFees(college.fees)}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Ionicons name="trophy" size={16} color="#FFD700" />
                    <Text style={styles.detailText}>
                      National Rank: {college.nationalRank || 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Ionicons name="school" size={16} color="#28a745" />
                    <Text style={styles.detailText}>
                      Courses: {college.courses.slice(0, 3).join(', ')}
                      {college.courses.length > 3 && '...'}
                    </Text>
                  </View>
                </View>

                <View style={styles.collegeFooter}>
                  <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  filterContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  filterSection: {
    marginRight: 20,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e9ecef',
    marginRight: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#007bff',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#495057',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  collegeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  collegeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
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
  collegeRating: {
    alignItems: 'flex-end',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  collegeDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#495057',
    marginLeft: 8,
  },
  collegeFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default BDesColleges;