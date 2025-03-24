import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const filters = {
  stream: ['Engineering', 'Medical', 'Arts', 'Commerce', 'Science'],
  state: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'UP'],
  city: ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune'],
  course: ['B.Tech', 'MBA', 'B.Sc', 'M.Sc', 'BA'], // Add more courses as needed
  programType: ['Full Time', 'Part Time', 'Distance'],
  collegeType: ['Government', 'Private', 'Deemed'],
  agency: ['NAAC', 'NBA', 'NIRF']
};

const collegeData = [
  {
    id: 1,
    rank: 1,
    name: 'IIT Delhi',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=43&w=43&mode=stretch',
    fees: '2.5L/year',
    placement: '25 LPA',
    ranking: 'NIRF 1',
    stream: 'Engineering',
    state: 'Delhi',
    city: 'New Delhi',
    course: 'B.Tech'
  },
  // Add more college data...
];

const CourseCollegeList = ({ route, navigation }) => {
  const { courseType } = route.params;
  const [activeFilters, setActiveFilters] = useState({});
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (type, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSort = (type) => {
    setSortBy(type);
  };

  const sortedColleges = () => {
    let sortedData = [...collegeData];

    if (sortBy === 'highestFees') {
      sortedData.sort((a, b) => parseInt(b.fees.replace(/L\/year/, '').replace(/,/g, '')) - parseInt(a.fees.replace(/L\/year/, '').replace(/,/g, '')));
    } else if (sortBy === 'lowestFees') {
      sortedData.sort((a, b) => parseInt(a.fees.replace(/L\/year/, '').replace(/,/g, '')) - parseInt(b.fees.replace(/L\/year/, '').replace(/,/g, '')));
    }

    return sortedData;
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#FFA500" />
      </TouchableOpacity>

      <View style={styles.authorContainer}>
        <AntDesign name="user" size={16} color="#FFA500" />
        <Text style={styles.authorText}>Author: Sudhanshu Singh</Text>
      </View>

      <Text style={styles.title}>Colleges for {courseType}</Text>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search colleges..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        <View style={styles.filterGroup}>
          <Text style={styles.filterTitle}>Stream</Text>
          <View style={styles.filterOptions}>
            {filters.stream.map(value => (
              <TouchableOpacity
                key={value}
                style={[styles.filterOption, activeFilters.stream === value && styles.activeFilter]}
                onPress={() => handleFilter('stream', value)}
              >
                <Text style={styles.filterOptionText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterTitle}>State</Text>
          <View style={styles.filterOptions}>
            {filters.state.map(value => (
              <TouchableOpacity
                key={value}
                style={[styles.filterOption, activeFilters.state === value && styles.activeFilter]}
                onPress={() => handleFilter('state', value)}
              >
                <Text style={styles.filterOptionText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* New Filter Row for City and Course */}
        <View style={styles.filterGroup}>
          <Text style={styles.filterTitle}>City</Text>
          <View style={styles.filterOptions}>
            {filters.city.map(value => (
              <TouchableOpacity
                key={value}
                style={[styles.filterOption, activeFilters.city === value && styles.activeFilter]}
                onPress={() => handleFilter('city', value)}
              >
                <Text style={styles.filterOptionText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterTitle}>Course</Text>
          <View style={styles.filterOptions}>
            {filters.course.map(value => (
              <TouchableOpacity
                key={value}
                style={[styles.filterOption, activeFilters.course === value && styles.activeFilter]}
                onPress={() => handleFilter('course', value)}
              >
                <Text style={styles.filterOptionText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.sortContainer}>
        <TouchableOpacity 
          style={styles.sortButton}
          onPress={() => handleSort('highestFees')}
        >
          <Text style={styles.sortButtonText}>High Fees</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.sortButton}
          onPress={() => handleSort('lowestFees')}
        >
          <Text style={styles.sortButtonText}>Low Fees</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>CD Rank</Text>
          <Text style={styles.headerCell}>College</Text>
          <Text style={styles.headerCell}>Fees</Text>
          <Text style={styles.headerCell}>Placement</Text>
          <Text style={styles.headerCell}>Ranking</Text>
        </View>

        {sortedColleges().map(college => (
          <View key={college.id} style={styles.tableRow}>
            <Text style={styles.cell}>{college.rank}</Text>
            <View style={styles.collegeCell}>
              <Image 
                source={{ uri: college.logo }}
                style={styles.collegeLogo}
              />
              <Text style={styles.collegeName}>{college.name}</Text>
            </View>
            <Text style={styles.cell}>{college.fees}</Text>
            <Text style={styles.cell}>{college.placement}</Text>
            <Text style={styles.cell}>{college.ranking}</Text>
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
  backButton: {
    padding: 16,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  authorText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  searchContainer: {
    padding: 16,
    paddingTop: 0,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  filtersContainer: {
    paddingHorizontal: 16,
  },
  filterGroup: {
    marginRight: 16,
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
  },
  activeFilter: {
    backgroundColor: '#007AFF',
  },
  filterOptionText: {
    fontSize: 14,
    color: '#666',
  },
  sortContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  sortButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  sortButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  tableContainer: {
    padding: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  collegeCell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  collegeLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  collegeName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});

export default CourseCollegeList; 