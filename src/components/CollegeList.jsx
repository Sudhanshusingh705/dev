import React, { useState, useCallback, memo, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
  ScrollView,
  TextInput,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Memoized row component for better performance
const TableRow = memo(({ item, index }) => {
  const navigation = useNavigation();
  
  const handlePress = useCallback(() => {
    navigation.navigate('CollegeDetails', { college: item });
  }, [item, navigation]);
  
  return (
    <TouchableOpacity 
      style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
      onPress={handlePress}
    >
      <View style={[styles.cell, styles.rankCell]}>
        <Text style={styles.rankText}>#{item.rank}</Text>
      </View>
      
      <View style={[styles.cell, styles.collegeCell]}>
        <Text style={styles.collegeName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.location} numberOfLines={1}>{item.location}</Text>
        <Text style={styles.approvals} numberOfLines={1}>{item.approvals}</Text>
      </View>
      
      <View style={[styles.cell, styles.feesCell]}>
        <Text style={styles.fees}>₹{item.fees}</Text>
        <Text style={styles.feesDetail} numberOfLines={1}>{item.courseType}</Text>
        <Text style={styles.feesDetail} numberOfLines={1}>- {item.feesPeriod}</Text>
      </View>
      
      <View style={[styles.cell, styles.placementCell]}>
        <Text style={styles.placementLabel}>Average Package</Text>
        <Text style={styles.placement}>₹{item.avgPackage}</Text>
        <Text style={styles.highestPackage}>₹{item.highestPackage}</Text>
        <Text style={styles.placementDetail}>Highest Package</Text>
      </View>
      
      <View style={[styles.cell, styles.reviewCell]}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.ratingScale}>/5</Text>
        </View>
        <Text style={styles.reviewCount}>Based on {item.reviewCount} reviews</Text>
      </View>
      
      <View style={[styles.cell, styles.rankingCell]}>
        <Text style={styles.ranking}>#{item.nationalRank}</Text>
        <Text style={styles.rankingDetail}>in India {item.rankingYear}</Text>
      </View>
    </TouchableOpacity>
  );
});

// Memoized header component
const TableHeader = memo(() => (
  <View style={styles.tableHeader}>
    <View style={[styles.headerCell, styles.rankCell]}>
      <Text style={styles.headerText}>CD Rank</Text>
    </View>
    <View style={[styles.headerCell, styles.collegeCell]}>
      <Text style={styles.headerText}>Colleges</Text>
    </View>
    <View style={[styles.headerCell, styles.feesCell]}>
      <Text style={styles.headerText}>Course Fees</Text>
    </View>
    <View style={[styles.headerCell, styles.placementCell]}>
      <Text style={styles.headerText}>Placement</Text>
    </View>
    <View style={[styles.headerCell, styles.reviewCell]}>
      <Text style={styles.headerText}>User Reviews</Text>
    </View>
    <View style={[styles.headerCell, styles.rankingCell]}>
      <Text style={styles.headerText}>Ranking</Text>
    </View>
  </View>
));

// Filter modal component
const FilterModal = memo(({ visible, onClose, filters, setFilters, applyFilters, cityOptions, courseOptions }) => {
  const [localFilters, setLocalFilters] = useState({ ...filters });

  useEffect(() => {
    setLocalFilters({ ...filters });
  }, [filters, visible]);

  const updateFilter = (key, value) => {
    setLocalFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    setFilters(localFilters);
    applyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      college: '',
      city: '',
      minFees: '',
      maxFees: '',
      course: '',
    };
    setLocalFilters(resetFilters);
    setFilters(resetFilters);
    applyFilters(resetFilters);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filter Colleges</Text>

          <Text style={styles.filterLabel}>College Name</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Search by college name"
            value={localFilters.college}
            onChangeText={(text) => updateFilter('college', text)}
          />

          <Text style={styles.filterLabel}>City</Text>
          <View style={styles.pickerContainer}>
            <ScrollView style={styles.optionsScroll}>
              <TouchableOpacity 
                key="all-cities" 
                style={[
                  styles.optionItem,
                  !localFilters.city ? styles.selectedOption : null
                ]}
                onPress={() => updateFilter('city', '')}
              >
                <Text style={styles.optionText}>All Cities</Text>
              </TouchableOpacity>
              {cityOptions.map((city, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={[
                    styles.optionItem,
                    localFilters.city === city ? styles.selectedOption : null
                  ]}
                  onPress={() => updateFilter('city', city)}
                >
                  <Text style={styles.optionText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Text style={styles.filterLabel}>Course Type</Text>
          <View style={styles.pickerContainer}>
            <ScrollView style={styles.optionsScroll}>
              <TouchableOpacity 
                key="all-courses" 
                style={[
                  styles.optionItem,
                  !localFilters.course ? styles.selectedOption : null
                ]}
                onPress={() => updateFilter('course', '')}
              >
                <Text style={styles.optionText}>All Courses</Text>
              </TouchableOpacity>
              {courseOptions.map((course, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={[
                    styles.optionItem,
                    localFilters.course === course ? styles.selectedOption : null
                  ]}
                  onPress={() => updateFilter('course', course)}
                >
                  <Text style={styles.optionText}>{course}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Text style={styles.filterLabel}>Fees Range (₹)</Text>
          <View style={styles.feeRangeContainer}>
            <TextInput
              style={[styles.filterInput, styles.feeInput]}
              placeholder="Min"
              value={localFilters.minFees}
              onChangeText={(text) => updateFilter('minFees', text)}
              keyboardType="numeric"
            />
            <Text style={styles.toText}>to</Text>
            <TextInput
              style={[styles.filterInput, styles.feeInput]}
              placeholder="Max"
              value={localFilters.maxFees}
              onChangeText={(text) => updateFilter('maxFees', text)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

const CollegeList = ({ collegeData, streamType }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(collegeData || []);
  const [filters, setFilters] = useState({
    college: '',
    city: '',
    minFees: '',
    maxFees: '',
    course: '',
  });
  
  // Extract filter options
  const cityOptions = useMemo(() => {
    if (!collegeData) return [];
    // Add major Indian cities that might not be in the current dataset
    const majorCities = [
      'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
      'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
      'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
      'Visakhapatnam', 'Vadodara', 'Patna', 'Ghaziabad', 'Ludhiana',
      'Coimbatore', 'Kochi', 'Bhubaneswar', 'Guwahati', 'Chandigarh'
    ];
    
    // Extract cities from college data
    const citiesFromData = collegeData.map(college => 
      college.location.split(',')[0].trim()
    );
    
    // Combine both lists and remove duplicates
    const allCities = [...new Set([...majorCities, ...citiesFromData])];
    
    // Sort alphabetically
    return allCities.sort();
  }, [collegeData]);

  const courseOptions = useMemo(() => {
    if (!collegeData) return [];
    
    // Add common course types that might not be in the current dataset
    const commonCourseTypes = [
      'BE/B.Tech', 'ME/M.Tech', 'BCA', 'MCA', 'B.Sc', 
      'M.Sc', 'BBA', 'MBA/PGDM', 'B.Com', 'M.Com',
      'BA', 'MA', 'BFA', 'MFA', 'B.Arch', 'M.Arch',
      'MBBS', 'MD', 'BDS', 'B.Pharm', 'LLB', 'LLM',
      'B.Ed', 'M.Ed', 'PhD', 'Diploma', 'Certificate',
      'B.Des', 'M.Des', 'BHM', 'BJMC', 'MJMC'
    ];
    
    // Extract course types from college data
    const coursesFromData = collegeData.map(college => college.courseType);
    
    // Combine both lists and remove duplicates
    const allCourses = [...new Set([...commonCourseTypes, ...coursesFromData])];
    
    // Sort alphabetically
    return allCourses.sort();
  }, [collegeData]);

  // Apply filters to data
  const applyFilters = useCallback((filterValues) => {
    if (!collegeData) return;
    
    let result = [...collegeData];
    
    if (filterValues.college) {
      result = result.filter(college => 
        college.name.toLowerCase().includes(filterValues.college.toLowerCase())
      );
    }
    
    if (filterValues.city) {
      result = result.filter(college => 
        college.location.toLowerCase().includes(filterValues.city.toLowerCase())
      );
    }
    
    if (filterValues.course) {
      result = result.filter(college => 
        college.courseType.toLowerCase() === filterValues.course.toLowerCase()
      );
    }
    
    if (filterValues.minFees) {
      const minFeesValue = parseFloat(filterValues.minFees);
      if (!isNaN(minFeesValue)) {
        result = result.filter(college => {
          const feesValue = parseFloat(college.fees.replace(/,/g, ''));
          return !isNaN(feesValue) && feesValue >= minFeesValue;
        });
      }
    }
    
    if (filterValues.maxFees) {
      const maxFeesValue = parseFloat(filterValues.maxFees);
      if (!isNaN(maxFeesValue)) {
        result = result.filter(college => {
          const feesValue = parseFloat(college.fees.replace(/,/g, ''));
          return !isNaN(feesValue) && feesValue <= maxFeesValue;
        });
      }
    }
    
    setFilteredData(result);
  }, [collegeData]);
  
  // Update dimensions on screen rotation
  useEffect(() => {
    const updateLayout = () => {
      setScreenWidth(Dimensions.get('window').width);
    };
    
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      // Remove event listener on cleanup
      // Note: This depends on your React Native version
      if (Dimensions.removeEventListener) {
        Dimensions.removeEventListener('change', updateLayout);
      }
    };
  }, []);
  
  // Initialize filtered data when collegeData changes
  useEffect(() => {
    setFilteredData(collegeData || []);
  }, [collegeData]);
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Reset filters on refresh
    const resetFilters = {
      college: '',
      city: '',
      minFees: '',
      maxFees: '',
      course: '',
    };
    setFilters(resetFilters);
    setFilteredData(collegeData || []);
    
    // Simulate a refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [collegeData]);

  // Item separator for better list performance
  const ItemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);
  
  // Extract key for FlatList optimization
  const keyExtractor = useCallback((item) => item.id.toString(), []);
  
  // Render item function
  const renderItem = useCallback(({ item, index }) => (
    <TableRow item={item} index={index} />
  ), []);

  if (!collegeData || collegeData.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Loading colleges...</Text>
      </View>
    );
  }

  // Use ScrollView if screen is smaller than needed table width
  const needsHorizontalScroll = screenWidth < 720;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{streamType} Colleges</Text>
        <View style={styles.filterSection}>
          <TouchableOpacity 
            style={styles.filterButton} 
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
          {Object.values(filters).some(val => val !== '') && (
            <TouchableOpacity 
              style={styles.clearButton} 
              onPress={() => {
                const resetFilters = {
                  college: '',
                  city: '',
                  minFees: '',
                  maxFees: '',
                  course: '',
                };
                setFilters(resetFilters);
                applyFilters(resetFilters);
              }}
            >
              <Text style={styles.clearButtonText}>Clear Filters</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {filteredData.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No colleges match your filters</Text>
          <TouchableOpacity 
            style={styles.resetButton} 
            onPress={() => {
              const resetFilters = {
                college: '',
                city: '',
                minFees: '',
                maxFees: '',
                course: '',
              };
              setFilters(resetFilters);
              applyFilters(resetFilters);
            }}
          >
            <Text style={styles.resetButtonText}>Reset Filters</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {needsHorizontalScroll ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <View style={styles.tableContainerWithWidth}>
                <TableHeader />
                
                <FlatList
                  data={filteredData}
                  renderItem={renderItem}
                  keyExtractor={keyExtractor}
                  ItemSeparatorComponent={ItemSeparatorComponent}
                  initialNumToRender={10}
                  maxToRenderPerBatch={20}
                  windowSize={10}
                  removeClippedSubviews={true}
                  refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
                  getItemLayout={(data, index) => (
                    { length: 130, offset: 130 * index, index }
                  )}
                  contentContainerStyle={styles.listContainer}
                />
              </View>
            </ScrollView>
          ) : (
            <View style={styles.tableContainer}>
              <TableHeader />
              
              <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparatorComponent}
                initialNumToRender={10}
                maxToRenderPerBatch={20}
                windowSize={10}
                removeClippedSubviews={true}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                getItemLayout={(data, index) => (
                  { length: 130, offset: 130 * index, index }
                )}
                contentContainerStyle={styles.listContainer}
              />
            </View>
          )}
        </>
      )}
      
      <FilterModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
        cityOptions={cityOptions}
        courseOptions={courseOptions}
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
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  clearButtonText: {
    color: '#666',
  },
  tableContainer: {
    flex: 1,
    width: '100%',
  },
  tableContainerWithWidth: {
    flex: 1,
    width: 720, // Fixed width for horizontal scroll
  },
  listContainer: {
    flexGrow: 1,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#a7d1d2',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    height: 130,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  evenRow: {
    backgroundColor: '#fff',
  },
  oddRow: {
    backgroundColor: '#f9f9f9',
  },
  cell: {
    padding: 8,
    justifyContent: 'center',
  },
  rankCell: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  collegeCell: {
    width: 180,
    paddingHorizontal: 10,
  },
  feesCell: {
    width: 120,
    paddingHorizontal: 5,
  },
  placementCell: {
    width: 150,
    paddingHorizontal: 5,
  },
  reviewCell: {
    width: 100,
    alignItems: 'center',
  },
  rankingCell: {
    width: 110,
    alignItems: 'center',
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  collegeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  approvals: {
    fontSize: 12,
    color: '#888',
  },
  fees: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  feesDetail: {
    fontSize: 12,
    color: '#666',
  },
  placementLabel: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  placement: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 8,
  },
  placementDetail: {
    fontSize: 10,
    color: '#666',
  },
  highestPackage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc107',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingScale: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 2,
  },
  reviewCount: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  ranking: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  rankingDetail: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
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
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    maxHeight: '80%',
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
    color: '#444',
  },
  filterInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  applyButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#666',
  },
  closeButton: {
    marginTop: 16,
    padding: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#666',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 16,
  },
  optionsScroll: {
    maxHeight: 120,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#e6f2ff',
  },
  optionText: {
    fontSize: 14,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
});

export default React.memo(CollegeList); 