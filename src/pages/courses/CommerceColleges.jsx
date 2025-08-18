import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import CollegeCard from '../../components/CollegeCard';
import commerceCollegesData from '../../data/commerceColleges.json';

const CommerceColleges = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Get unique states and cities for filters
  const states = useMemo(() => {
    const stateSet = new Set();
    commerceCollegesData.forEach(college => {
      const state = college.location.split(', ').pop();
      if (state) stateSet.add(state);
    });
    return Array.from(stateSet).sort();
  }, []);

  const cities = useMemo(() => {
    const citySet = new Set();
    commerceCollegesData.forEach(college => {
      const city = college.location.split(', ')[0];
      if (city) citySet.add(city);
    });
    return Array.from(citySet).sort();
  }, []);

  const filteredAndSortedColleges = useMemo(() => {
    let filtered = commerceCollegesData.filter(college => {
      const matchesSearch = searchQuery === '' || 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (college.specializations && college.specializations.some(spec => 
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        ));

      const matchesState = selectedState === '' || 
        college.location.endsWith(`, ${selectedState}`);

      const matchesCity = selectedCity === '' || 
        college.location.startsWith(`${selectedCity}, `);

      return matchesSearch && matchesState && matchesCity;
    });

    // Sort colleges
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'fees':
          const feesA = parseInt(a.fees.replace(/[^0-9]/g, '')) || 0;
          const feesB = parseInt(b.fees.replace(/[^0-9]/g, '')) || 0;
          return feesA - feesB;
        case 'ranking':
          const rankA = parseInt(a.nationalRank) || 999;
          const rankB = parseInt(b.nationalRank) || 999;
          return rankA - rankB;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedState, selectedCity, sortBy]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges by name, location, or specialization..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>State:</Text>
        <TouchableOpacity style={styles.pickerContainer}>
          <Text style={styles.pickerText}>{selectedState || 'All States'}</Text>
          <View style={styles.pickerOptions}>
            <TouchableOpacity onPress={() => setSelectedState('')}>
              <Text style={[styles.pickerOption, !selectedState && styles.selectedOption]}>All States</Text>
            </TouchableOpacity>
            {states.map(state => (
              <TouchableOpacity key={state} onPress={() => setSelectedState(state)}>
                <Text style={[styles.pickerOption, selectedState === state && styles.selectedOption]}>{state}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>

        <Text style={styles.filterLabel}>City:</Text>
        <TouchableOpacity style={styles.pickerContainer}>
          <Text style={styles.pickerText}>{selectedCity || 'All Cities'}</Text>
          <View style={styles.pickerOptions}>
            <TouchableOpacity onPress={() => setSelectedCity('')}>
              <Text style={[styles.pickerOption, !selectedCity && styles.selectedOption]}>All Cities</Text>
            </TouchableOpacity>
            {cities.map(city => (
              <TouchableOpacity key={city} onPress={() => setSelectedCity(city)}>
                <Text style={[styles.pickerOption, selectedCity === city && styles.selectedOption]}>{city}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>

        <Text style={styles.filterLabel}>Sort by:</Text>
        <TouchableOpacity style={styles.pickerContainer}>
          <Text style={styles.pickerText}>
            {sortBy === 'rating' ? 'Rating' : sortBy === 'fees' ? 'Fees' : 'Ranking'}
          </Text>
          <View style={styles.pickerOptions}>
            <TouchableOpacity onPress={() => setSortBy('rating')}>
              <Text style={[styles.pickerOption, sortBy === 'rating' && styles.selectedOption]}>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortBy('fees')}>
              <Text style={[styles.pickerOption, sortBy === 'fees' && styles.selectedOption]}>Fees</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortBy('ranking')}>
              <Text style={[styles.pickerOption, sortBy === 'ranking' && styles.selectedOption]}>Ranking</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultsCount}>
        {filteredAndSortedColleges.length} colleges found
      </Text>

      <ScrollView style={styles.collegeList}>
        {filteredAndSortedColleges.map(college => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  filtersContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  pickerContainer: {
    marginBottom: 12,
  },
  pickerText: {
    fontSize: 16,
    color: '#0066cc',
    paddingVertical: 8,
  },
  pickerOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pickerOption: {
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    color: '#333',
  },
  selectedOption: {
    backgroundColor: '#0066cc',
    color: '#fff',
  },
  resultsCount: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  collegeList: {
    flex: 1,
    padding: 16,
  },
});

export default CommerceColleges;