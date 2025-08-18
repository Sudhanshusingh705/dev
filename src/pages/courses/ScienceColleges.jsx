import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import CollegeCard from '../../components/CollegeCard';
import scienceCollegesData from '../../data/scienceColleges.json';

const ScienceColleges = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [filteredColleges, setFilteredColleges] = useState(scienceCollegesData);

  // Get unique states and cities for filter dropdowns
  const states = ['All', ...new Set(scienceCollegesData.map(college => 
    college.location.split(', ')[1] || college.location.split(', ')[0]
  ))];
  
  const cities = ['All', ...new Set(scienceCollegesData.map(college => 
    college.location.split(', ')[0]
  ))];

  useEffect(() => {
    let filtered = scienceCollegesData;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(college => 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.specializations.some(spec => 
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Filter by state
    if (selectedState !== 'All') {
      filtered = filtered.filter(college => 
        college.location.includes(selectedState)
      );
    }

    // Filter by city
    if (selectedCity !== 'All') {
      filtered = filtered.filter(college => 
        college.location.startsWith(selectedCity)
      );
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'fees':
          const aFees = parseInt(a.fees.replace(/[^0-9]/g, ''));
          const bFees = parseInt(b.fees.replace(/[^0-9]/g, ''));
          return aFees - bFees;
        case 'ranking':
          return parseInt(a.nationalRank) - parseInt(b.nationalRank);
        default:
          return 0;
      }
    });

    setFilteredColleges(filtered);
  }, [searchQuery, selectedState, selectedCity, sortBy]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filtersContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        <View style={styles.filterRow}>
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>State:</Text>
            <View style={styles.pickerContainer}>
              {states.map(state => (
                <TouchableOpacity
                  key={state}
                  style={[styles.filterOption, selectedState === state && styles.selectedFilter]}
                  onPress={() => setSelectedState(state)}
                >
                  <Text style={[styles.filterText, selectedState === state && styles.selectedFilterText]}>
                    {state}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>City:</Text>
            <View style={styles.pickerContainer}>
              {cities.map(city => (
                <TouchableOpacity
                  key={city}
                  style={[styles.filterOption, selectedCity === city && styles.selectedFilter]}
                  onPress={() => setSelectedCity(city)}
                >
                  <Text style={[styles.filterText, selectedCity === city && styles.selectedFilterText]}>
                    {city}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Sort by:</Text>
            <View style={styles.pickerContainer}>
              {['rating', 'fees', 'ranking'].map(sort => (
                <TouchableOpacity
                  key={sort}
                  style={[styles.filterOption, sortBy === sort && styles.selectedFilter]}
                  onPress={() => setSortBy(sort)}
                >
                  <Text style={[styles.filterText, sortBy === sort && styles.selectedFilterText]}>
                    {sort.charAt(0).toUpperCase() + sort.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          Found {filteredColleges.length} colleges
        </Text>
        
        {filteredColleges.map(college => (
          <CollegeCard key={college.id} college={college} />
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
  filtersContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  filterRow: {
    gap: 15,
  },
  filterItem: {
    marginBottom: 10,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  filterOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#f9f9f9',
  },
  selectedFilter: {
    backgroundColor: '#0066cc',
    borderColor: '#0066cc',
  },
  filterText: {
    fontSize: 12,
    color: '#666',
  },
  selectedFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultsContainer: {
    padding: 10,
  },
  resultsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default ScienceColleges;