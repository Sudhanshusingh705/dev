import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import managementCollegesData from '../../data/managementColleges.json';
import CollegeList from '../../components/CollegeList';

const ManagementColleges = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Extract unique states and cities
  const states = useMemo(() => {
    const stateSet = new Set(managementCollegesData.map(college => 
      college.location.split(', ').pop()
    ));
    return ['All', ...Array.from(stateSet).sort()];
  }, []);

  const cities = useMemo(() => {
    if (selectedState === 'All') {
      const citySet = new Set(managementCollegesData.map(college => 
        college.location.split(', ')[0]
      ));
      return ['All', ...Array.from(citySet).sort()];
    } else {
      const citySet = new Set(managementCollegesData
        .filter(college => college.location.includes(selectedState))
        .map(college => college.location.split(', ')[0])
      );
      return ['All', ...Array.from(citySet).sort()];
    }
  }, [selectedState]);

  // Filter and sort colleges
  const filteredColleges = useMemo(() => {
    let filtered = managementCollegesData;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // State filter
    if (selectedState !== 'All') {
      filtered = filtered.filter(college =>
        college.location.includes(selectedState)
      );
    }

    // City filter
    if (selectedCity !== 'All') {
      filtered = filtered.filter(college =>
        college.location.startsWith(selectedCity)
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

    return filtered;
  }, [searchQuery, selectedState, selectedCity, sortBy]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.filterContainer} horizontal showsHorizontalScrollIndicator={false}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>State:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pickerScroll}>
            {states.map(state => (
              <TouchableOpacity
                key={state}
                style={[styles.filterButton, selectedState === state && styles.selectedFilter]}
                onPress={() => {
                  setSelectedState(state);
                  setSelectedCity('All');
                }}
              >
                <Text style={[styles.filterText, selectedState === state && styles.selectedFilterText]}>
                  {state}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>City:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pickerScroll}>
            {cities.map(city => (
              <TouchableOpacity
                key={city}
                style={[styles.filterButton, selectedCity === city && styles.selectedFilter]}
                onPress={() => setSelectedCity(city)}
              >
                <Text style={[styles.filterText, selectedCity === city && styles.selectedFilterText]}>
                  {city}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Sort:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pickerScroll}>
            {['name', 'fees', 'rating', 'ranking'].map(sort => (
              <TouchableOpacity
                key={sort}
                style={[styles.filterButton, sortBy === sort && styles.selectedFilter]}
                onPress={() => setSortBy(sort)}
              >
                <Text style={[styles.filterText, sortBy === sort && styles.selectedFilterText]}>
                  {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <CollegeList 
        collegeData={filteredColleges}
        streamType="Management"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#fff',
    minWidth: 200,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333',
  },
  pickerScroll: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  selectedFilter: {
    backgroundColor: '#0066cc',
    borderColor: '#0066cc',
  },
  filterText: {
    fontSize: 12,
    color: '#333',
  },
  selectedFilterText: {
    color: '#fff',
  },
});

export default ManagementColleges;