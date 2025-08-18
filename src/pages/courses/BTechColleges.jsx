import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';;
import engineeringColleges from '../../data/engineeringColleges.json';

const { width } = Dimensions.get('window');

const BTechColleges = ({ navigation }) => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  // Extract unique states and cities from data
  const states = [...new Set(engineeringColleges.map(college => college.location.split(', ')[1]))].sort();
  const cities = [...new Set(engineeringColleges.map(college => college.location.split(', ')[0]))].sort();

  useEffect(() => {
    // Filter for BTech/B.E colleges
    const btechColleges = engineeringColleges.filter(college => 
      college.courses.includes('Engineering') || 
      college.specializations.some(spec => ['CSE', 'EE', 'ME', 'CE', 'ECE', 'IT'].includes(spec))
    );
    
    setColleges(btechColleges);
    setFilteredColleges(btechColleges);
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
        <ActivityIndicator size="large" color="#FFA500" />
        <Text style={styles.loadingText}>Loading BTech Colleges...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#FFA500" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>B.Tech Engineering Colleges</Text>
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
              {states.slice(0, 8).map(state => (
                <TouchableOpacity
                  key={state}
                  style={[
                    styles.filterOption,
                    activeFilters.state === state && styles.activeFilter
                  ]}
                  onPress={() => handleFilter('state', state)}
                >
                  <Text style={styles.filterText}>{state}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>City</Text>
            <View style={styles.filterOptions}>
              {cities.slice(0, 8).map(city => (
                <TouchableOpacity
                  key={city}
                  style={[
                    styles.filterOption,
                    activeFilters.city === city && styles.activeFilter
                  ]}
                  onPress={() => handleFilter('city', city)}
                >
                  <Text style={styles.filterText}>{city}</Text>
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
        {filteredColleges.map((college, index) => (
          <TouchableOpacity
            key={college.id}
            style={styles.collegeCard}
            onPress={() => navigation.navigate('CollegeDetails', { college })}
          >
            <View style={styles.collegeHeader}>
              <Image 
                source={{ uri: college.logo }}
                style={styles.collegeLogo}
                resizeMode="contain"
              />
              <View style={styles.collegeInfo}>
                <Text style={styles.collegeName} numberOfLines={2}>
                  {college.name}
                </Text>
                <Text style={styles.collegeLocation}>
                  {college.location}
                </Text>
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
  backButton: {
    marginTop: 16,
    marginLeft: 16,
    padding: 8,
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

export default BTechColleges;
