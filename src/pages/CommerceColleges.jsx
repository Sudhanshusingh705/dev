import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import commerceCollegesData from '../data/commerceColleges.json';
import CollegeCard from '../components/CollegeCard';

const CommerceColleges = ({ navigation }) => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setColleges(commerceCollegesData);
    setFilteredColleges(commerceCollegesData);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = [...colleges];

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchText.toLowerCase()) ||
        college.location.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by state
    if (selectedState) {
      filtered = filtered.filter(college => college.state === selectedState);
    }

    // Filter by city
    if (selectedCity) {
      filtered = filtered.filter(college => college.city === selectedCity);
    }

    // Sort colleges
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'fees':
          return a.fees - b.fees;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredColleges(filtered);
  }, [searchText, selectedState, selectedCity, sortBy, colleges]);

  const getStates = () => {
    const states = [...new Set(colleges.map(college => college.state))];
    return states.sort();
  };

  const getCities = () => {
    const cities = [...new Set(colleges
      .filter(college => !selectedState || college.state === selectedState)
      .map(college => college.city))];
    return cities.sort();
  };

  const formatFees = (fees) => {
    if (fees >= 100000) {
      return `₹${(fees / 100000).toFixed(1)}L`;
    }
    return `₹${fees.toLocaleString()}`;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Text key={i} style={styles.star}>★</Text>);
    }
    if (hasHalfStar) {
      stars.push(<Text key="half" style={styles.star}>☆</Text>);
    }

    return stars;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading Commerce Colleges...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Commerce Colleges</Text>
        <Text style={styles.subtitle}>Explore top commerce colleges across India</Text>
      </View>

      <View style={styles.filtersContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges by name or location..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedState}
            onValueChange={(value) => {
              setSelectedState(value);
              setSelectedCity('');
            }}
            style={styles.picker}
          >
            <Picker.Item label="All States" value="" />
            {getStates().map(state => (
              <Picker.Item key={state} label={state} value={state} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCity}
            onValueChange={setSelectedCity}
            style={styles.picker}
            enabled={!selectedState || getCities().length > 0}
          >
            <Picker.Item label="All Cities" value="" />
            {getCities().map(city => (
              <Picker.Item key={city} label={city} value={city} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sortBy}
            onValueChange={setSortBy}
            style={styles.picker}
          >
            <Picker.Item label="Sort by Rating" value="rating" />
            <Picker.Item label="Sort by Fees" value="fees" />
            <Picker.Item label="Sort by Name" value="name" />
          </Picker>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {filteredColleges.length} colleges found
        </Text>

        {filteredColleges.map((college, index) => (
          <CollegeCard
            key={index}
            college={college}
            formatFees={formatFees}
            renderStars={renderStars}
            onPress={() => navigation.navigate('CollegeDetails', { college })}
          />
        ))}

        {filteredColleges.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>
              No commerce colleges found matching your criteria.
            </Text>
            <Text style={styles.noResultsSubtext}>
              Try adjusting your search or filters.
            </Text>
          </View>
        )}
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
    backgroundColor: '#fff',
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
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  filtersContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  searchInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  picker: {
    height: 45,
  },
  resultsContainer: {
    padding: 15,
  },
  resultsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  noResultsContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  noResultsText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#999',
  },
  star: {
    color: '#FFD700',
    fontSize: 16,
  },
});

export default CommerceColleges;