import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import CollegeList from '../../components/CollegeList';
import artsCollegesData from '../../data/artsColleges.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const MassCommunicationColleges = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredColleges, setFilteredColleges] = useState(artsCollegesData);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique states and cities for filters
  const states = [...new Set(artsCollegesData.map(college => college.location.split(', ')[1]))].sort();
  const cities = [...new Set(artsCollegesData.map(college => college.location.split(', ')[0]))].sort();

  // Filter and sort colleges
  useEffect(() => {
    let filtered = artsCollegesData;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // State filter
    if (selectedState) {
      filtered = filtered.filter(college => college.location.includes(selectedState));
    }

    // City filter
    if (selectedCity) {
      filtered = filtered.filter(college => college.location.includes(selectedCity));
    }

    // Sorting
    filtered.sort((a, b) => {
      let valueA, valueB;
      
      switch (sortBy) {
        case 'name':
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case 'fees':
          valueA = parseInt(a.fees.replace(/[₹,]/g, ''));
          valueB = parseInt(b.fees.replace(/[₹,]/g, ''));
          break;
        case 'rating':
          valueA = a.rating;
          valueB = b.rating;
          break;
        case 'ranking':
          valueA = parseInt(a.nationalRank);
          valueB = parseInt(b.nationalRank);
          break;
        default:
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });

    setFilteredColleges(filtered);
  }, [searchQuery, selectedState, selectedCity, sortBy, sortOrder]);

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('');
    setSelectedCity('');
    setSortBy('name');
    setSortOrder('asc');
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Mass Communication colleges by name, location, or specialization..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Toggle */}
      <TouchableOpacity 
        style={styles.filterToggle}
        onPress={() => setShowFilters(!showFilters)}
      >
        <Icon name="filter-list" size={20} color="#007bff" />
        <Text style={styles.filterText}>{showFilters ? 'Hide Filters' : 'Show Filters'}</Text>
      </TouchableOpacity>

      {/* Filters */}
      {showFilters && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>State:</Text>
            <TouchableOpacity 
              style={[styles.filterButton, selectedState === '' && styles.activeFilter]}
              onPress={() => setSelectedState('')}
            >
              <Text style={styles.filterButtonText}>All</Text>
            </TouchableOpacity>
            {states.map(state => (
              <TouchableOpacity 
                key={state}
                style={[styles.filterButton, selectedState === state && styles.activeFilter]}
                onPress={() => setSelectedState(state)}
              >
                <Text style={styles.filterButtonText}>{state}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>City:</Text>
            <TouchableOpacity 
              style={[styles.filterButton, selectedCity === '' && styles.activeFilter]}
              onPress={() => setSelectedCity('')}
            >
              <Text style={styles.filterButtonText}>All</Text>
            </TouchableOpacity>
            {cities.map(city => (
              <TouchableOpacity 
                key={city}
                style={[styles.filterButton, selectedCity === city && styles.activeFilter]}
                onPress={() => setSelectedCity(city)}
              >
                <Text style={styles.filterButtonText}>{city}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity 
            style={styles.resetButton}
            onPress={resetFilters}
          >
            <Icon name="refresh" size={16} color="#fff" />
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Sort Options */}
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        {['name', 'fees', 'rating', 'ranking'].map(criteria => (
          <TouchableOpacity
            key={criteria}
            style={[styles.sortButton, sortBy === criteria && styles.activeSort]}
            onPress={() => handleSort(criteria)}
          >
            <Text style={styles.sortButtonText}>
              {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
            </Text>
            {sortBy === criteria && (
              <Icon name={sortOrder === 'asc' ? 'arrow-upward' : 'arrow-downward'} size={16} color="#fff" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Results Count */}
      <Text style={styles.resultsCount}>
        {filteredColleges.length} Mass Communication colleges found
      </Text>

      {/* College List */}
      <CollegeList 
        collegeData={filteredColleges}
        streamType="Mass Communication"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 10,
  },
  tryAgainText: {
    fontSize: 16,
    color: '#0066cc',
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});

export default MassCommunicationColleges;
