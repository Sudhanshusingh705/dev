import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ActivityIndicator, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';;
import artsCollegesData from '../../data/artsColleges.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const ArtsColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState({
    state: 'All',
    city: 'All',
  });
  const [sortBy, setSortBy] = useState('rank');

  useEffect(() => {
    const timer = setTimeout(() => {
      setColleges(artsCollegesData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      let filtered = [...colleges];

      if (searchQuery) {
        filtered = filtered.filter(college =>
          college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          college.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      if (activeFilters.state !== 'All') {
        filtered = filtered.filter(college =>
          college.location.split(',').pop().trim() === activeFilters.state
        );
      }

      if (activeFilters.city !== 'All') {
        filtered = filtered.filter(college =>
          college.location.split(',')[0].trim() === activeFilters.city
        );
      }

      filtered = filtered.map(college => ({
        ...college,
        rank: college.nationalRank,
        city: college.location.split(',')[0].trim(),
        state: college.location.split(',').pop().trim()
      }));

      switch (sortBy) {
        case 'rank':
          filtered.sort((a, b) => parseInt(a.rank || '999') - parseInt(b.rank || '999'));
          break;
        case 'fees':
          filtered.sort((a, b) => parseInt(a.fees.replace(/[₹,]/g, '')) - parseInt(b.fees.replace(/[₹,]/g, '')));
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'placement':
          filtered.sort((a, b) => b.placementRate - a.placementRate);
          break;
      }

      setFilteredColleges(filtered);
    }
  }, [colleges, searchQuery, activeFilters, sortBy, loading]);

  const getStates = () => {
    const states = [...new Set(colleges.map(college => college.location.split(',').pop().trim()))];
    return ['All', ...states.sort()];
  };

  const getCities = () => {
    if (activeFilters.state === 'All') {
      const cities = [...new Set(colleges.map(college => college.location.split(',')[0].trim()))];
      return ['All', ...cities.sort()];
    } else {
      const cities = [...new Set(colleges
        .filter(college => college.location.split(',').pop().trim() === activeFilters.state)
        .map(college => college.location.split(',')[0].trim()))];
      return ['All', ...cities.sort()];
    }
  };

  const formatFees = (fees) => {
    if (fees >= 100000) {
      return `₹${(fees / 100000).toFixed(1)}L`;
    }
    return `₹${fees.toLocaleString()}`;
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
        <ActivityIndicator size="large" color="#FFA500" />
        <Text style={styles.loadingText}>Loading arts colleges...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Arts Colleges</Text>
        <Text style={styles.subtitle}>
          {filteredColleges.length} colleges found
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges by name or location..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
      </View>

      <View style={styles.filtersContainer}>
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>State</Text>
          <View style={styles.filterOptions}>
            {getStates().map(state => (
              <TouchableOpacity
                key={state}
                style={[
                  styles.filterOption,
                  activeFilters.state === state && styles.activeFilter
                ]}
                onPress={() => setActiveFilters({
                  ...activeFilters,
                  state: state,
                  city: 'All'
                })}
              >
                <Text style={[
                  styles.filterText,
                  activeFilters.state === state && styles.activeFilterText
                ]}>
                  {state}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>City</Text>
          <View style={styles.filterOptions}>
            {getCities().map(city => (
              <TouchableOpacity
                key={city}
                style={[
                  styles.filterOption,
                  activeFilters.city === city && styles.activeFilter
                ]}
                onPress={() => setActiveFilters({
                  ...activeFilters,
                  city: city
                })}
              >
                <Text style={[
                  styles.filterText,
                  activeFilters.city === city && styles.activeFilterText
                ]}>
                  {city}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sortContainer}>
          <Text style={styles.sortTitle}>Sort by</Text>
          <View style={styles.sortOptions}>
            {[
              { key: 'rank', label: 'Ranking' },
              { key: 'fees', label: 'Fees' },
              { key: 'rating', label: 'Rating' },
              { key: 'placement', label: 'Placement' }
            ].map(option => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.sortButton,
                  sortBy === option.key && styles.activeSort
                ]}
                onPress={() => setSortBy(option.key)}
              >
                <Text style={[
                  styles.sortText,
                  sortBy === option.key && styles.activeSortText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.collegesContainer}>
        {filteredColleges.map(college => (
          <View key={college.id} style={styles.collegeCard}>
            <View style={styles.collegeHeader}>
              <Image
                source={{ uri: college.logo || 'https://via.placeholder.com/50' }}
                style={styles.collegeLogo}
              />
              <View style={styles.collegeInfo}>
                <Text style={styles.collegeName}>{college.name}</Text>
                <Text style={styles.collegeLocation}>{college.location}</Text>
              </View>
            </View>

            <View style={styles.collegeStats}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Rank</Text>
                <Text style={styles.statValue}>#{college.rank}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Fees</Text>
                <Text style={styles.statValue}>{formatFees(college.fees)}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Placement</Text>
                <Text style={styles.statValue}>{college.placementRate}%</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Rating</Text>
                <View style={styles.ratingContainer}>
                  {renderStars(college.rating)}
                  <Text style={styles.ratingText}>{college.rating}/5</Text>
                </View>
              </View>
            </View>

            <View style={styles.collegeFooter}>
              <Text style={styles.established}>
                Established: {college.established || 'N/A'}
              </Text>
              <Text style={styles.reviews}>{college.reviews || 0} reviews</Text>
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
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  searchContainer: {
    position: 'relative',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 45,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  filtersContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  filterSection: {
    marginRight: 16,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterOption: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  activeFilter: {
    backgroundColor: '#FFA500',
  },
  filterText: {
    fontSize: 12,
    color: '#333',
  },
  activeFilterText: {
    color: '#fff',
  },
  sortContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  sortTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sortButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  activeSort: {
    backgroundColor: '#007bff',
  },
  sortText: {
    fontSize: 12,
    color: '#333',
  },
  activeSortText: {
    color: '#fff',
  },
  collegesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  collegeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  collegeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  collegeLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  collegeLocation: {
    fontSize: 14,
    color: '#666',
  },
  collegeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
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
    color: '#FFD700',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
  },
  collegeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  established: {
    fontSize: 12,
    color: '#666',
  },
  reviews: {
    fontSize: 12,
    color: '#007bff',
  },
});

export default ArtsColleges;