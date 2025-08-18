import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';;

const { width } = Dimensions.get('window');

const CollegeList = ({ collegeData = [], streamType = 'Colleges' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [feeRange, setFeeRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('rank');

  // Extract unique states and cities
  const states = useMemo(() => {
    const stateSet = new Set(collegeData.map(college => college.state || 'Unknown'));
    return ['All', ...Array.from(stateSet).sort()];
  }, [collegeData]);

  const cities = useMemo(() => {
    if (selectedState === 'All') {
      const citySet = new Set(collegeData.map(college => college.city || 'Unknown'));
      return ['All', ...Array.from(citySet).sort()];
    } else {
      const citySet = new Set(
        collegeData
          .filter(college => (college.state || 'Unknown') === selectedState)
          .map(college => college.city || 'Unknown')
      );
      return ['All', ...Array.from(citySet).sort()];
    }
  }, [collegeData, selectedState]);

  // Filter and sort colleges
  const filteredColleges = useMemo(() => {
    let filtered = [...collegeData];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(college =>
        college.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.city?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // State filter
    if (selectedState !== 'All') {
      filtered = filtered.filter(college => (college.state || 'Unknown') === selectedState);
    }

    // City filter
    if (selectedCity !== 'All') {
      filtered = filtered.filter(college => (college.city || 'Unknown') === selectedCity);
    }

    // Fee range filter
    if (feeRange.min || feeRange.max) {
      filtered = filtered.filter(college => {
        const fees = parseFloat(college.fees?.replace(/[^\d.]/g, '') || 0);
        const min = parseFloat(feeRange.min) || 0;
        const max = parseFloat(feeRange.max) || Infinity;
        return fees >= min && fees <= max;
      });
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return (a.rank || 999) - (b.rank || 999);
        case 'name':
          return (a.name || '').localeCompare(b.name || '');
        case 'fees':
          return parseFloat(a.fees?.replace(/[^\d.]/g, '') || 0) - parseFloat(b.fees?.replace(/[^\d.]/g, '') || 0);
        case 'placement':
          return parseFloat(b.placement?.replace(/[^\d.]/g, '') || 0) - parseFloat(a.placement?.replace(/[^\d.]/g, '') || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [collegeData, searchQuery, selectedState, selectedCity, feeRange, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setSelectedState('All');
    setSelectedCity('All');
    setFeeRange({ min: '', max: '' });
    setSortBy('rank');
    setSearchQuery('');
  };

  // Render college card
  const renderCollegeCard = ({ item }) => {
    const isMobile = width < 768;
    
    if (isMobile) {
      return (
        <TouchableOpacity style={styles.mobileCard}>
          <View style={styles.mobileCardHeader}>
            <Text style={styles.mobileRank}>#{item.rank || 'N/A'}</Text>
          </View>
          
          <Text style={styles.mobileCollegeName} numberOfLines={2}>
            {item.name || 'College Name'}
          </Text>
          
          <Text style={styles.mobileCollegeLocation} numberOfLines={1}>
            {item.location || item.city || 'Location not specified'}
          </Text>
          
          <View style={styles.mobileInfoRow}>
            <Text style={styles.mobileInfoLabel}>Fees:</Text>
            <Text style={styles.mobileInfoValue}>{item.fees || 'N/A'}</Text>
          </View>
          
          <View style={styles.mobileInfoRow}>
            <Text style={styles.mobileInfoLabel}>Placement:</Text>
            <Text style={styles.mobileInfoValue}>{item.placement || 'N/A'}</Text>
          </View>
          
          <View style={styles.mobileInfoRow}>
            <Text style={styles.mobileInfoLabel}>Rating:</Text>
            <Text style={styles.mobileInfoValue}>{item.rating || 'N/A'}/5</Text>
          </View>
          
          <View style={styles.mobileRatingContainer}>
            <Ionicons name="star" size={16} color="#ff9800" />
            <Text style={styles.mobileRatingText}>{item.rating || 'N/A'}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.rank}>#{item.rank || 'N/A'}</Text>
          {item.logo && (
            <Image
              source={{ uri: item.logo }}
              style={styles.logo}
              resizeMode="contain"
            />
          )}
        </View>
        
        <View style={styles.cardContent}>
          <Text style={styles.collegeName} numberOfLines={2}>
            {item.name || 'College Name'}
          </Text>
          <Text style={styles.location} numberOfLines={1}>
            {item.location || item.city || 'Location not specified'}
          </Text>
          
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Fees</Text>
              <Text style={styles.detailValue}>{item.fees || 'N/A'}</Text>
            </View>
            
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Placement</Text>
              <Text style={styles.detailValue}>{item.placement || 'N/A'}</Text>
            </View>
            
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Rating</Text>
              <Text style={styles.detailValue}>{item.rating || 'N/A'}/5</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{streamType} Colleges</Text>
        <Text style={styles.count}>{filteredColleges.length} colleges found</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search colleges..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilters(true)}
        >
          <Ionicons name="filter" size={20} color="#fff" />
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredColleges}
        renderItem={renderCollegeCard}
        keyExtractor={(item, index) => `${item.id || index}`}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No colleges found</Text>
          </View>
        }
      />

      {/* Filter Modal */}
      <Modal
        visible={showFilters}
        animationType="slide"
        transparent
        onRequestClose={() => setShowFilters(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Colleges</Text>
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.filterLabel}>State</Text>
              <View style={styles.pickerContainer}>
                {states.map(state => (
                  <TouchableOpacity
                    key={state}
                    style={[styles.optionItem, selectedState === state && styles.selectedOption]}
                    onPress={() => setSelectedState(state)}
                  >
                    <Text style={styles.optionText}>{state}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.filterLabel}>City</Text>
              <View style={styles.pickerContainer}>
                {cities.map(city => (
                  <TouchableOpacity
                    key={city}
                    style={[styles.optionItem, selectedCity === city && styles.selectedOption]}
                    onPress={() => setSelectedCity(city)}
                  >
                    <Text style={styles.optionText}>{city}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.filterLabel}>Fee Range (Lakhs)</Text>
              <View style={styles.feeRangeContainer}>
                <TextInput
                  style={[styles.filterInput, styles.feeInput]}
                  placeholder="Min"
                  value={feeRange.min}
                  onChangeText={(text) => setFeeRange({ ...feeRange, min: text })}
                  keyboardType="numeric"
                />
                <Text style={styles.toText}>to</Text>
                <TextInput
                  style={[styles.filterInput, styles.feeInput]}
                  placeholder="Max"
                  value={feeRange.max}
                  onChangeText={(text) => setFeeRange({ ...feeRange, max: text })}
                  keyboardType="numeric"
                />
              </View>

              <Text style={styles.filterLabel}>Sort By</Text>
              <View style={styles.pickerContainer}>
                {['rank', 'name', 'fees', 'placement'].map(option => (
                  <TouchableOpacity
                    key={option}
                    style={[styles.optionItem, sortBy === option && styles.selectedOption]}
                    onPress={() => setSortBy(option)}
                  >
                    <Text style={styles.optionText}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={resetFilters}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setShowFilters(false)}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 8,
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  count: {
    fontSize: 13,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066cc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 10,
    padding: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    flexDirection: 'row',
  },
  cardHeader: {
    marginRight: 16,
    alignItems: 'center',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 8,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardContent: {
    flex: 1,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  filterInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
  },
  feeRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  feeInput: {
    flex: 1,
    marginBottom: 0,
  },
  toText: {
    marginHorizontal: 8,
    color: '#666',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    maxHeight: 150,
  },
  optionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#e6f2ff',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resetButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#0066cc',
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Mobile styles
  mobileCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 10,
    padding: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  mobileCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  mobileRank: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  mobileCollegeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  mobileCollegeLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  mobileInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  mobileInfoLabel: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
  mobileInfoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  mobileRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  mobileRatingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ff9800',
    marginLeft: 4,
  },
});

export default React.memo(CollegeList);