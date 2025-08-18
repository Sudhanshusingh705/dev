import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import CollegeList from '../../components/CollegeList';
import artsCollegesData from '../../data/artsColleges.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const AnimationColleges = () => {
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
          placeholder="Search Animation colleges by name, location, or specialization..."
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
        {filteredColleges.length} Animation colleges found
      </Text>

      {/* College List */}
      <CollegeList 
        collegeData={filteredColleges}
        streamType="Animation"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  filterToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  filterText: {
    marginLeft: 8,
    color: '#007bff',
    fontSize: 14,
    fontWeight: '600',
  },
  filtersContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginRight: 8,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 2,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  activeFilter: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#495057',
  },
  activeFilterText: {
    color: '#fff',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#6c757d',
  },
  resetButtonText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#fff',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  sortLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginRight: 8,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 2,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  activeSort: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  sortButtonText: {
    fontSize: 12,
    color: '#495057',
    marginRight: 4,
  },
  resultsCount: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic',
  },
});

export default AnimationColleges;