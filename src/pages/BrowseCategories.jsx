import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BrowseCategories = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState('');
  const [filteredStreams, setFilteredStreams] = useState([]);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedColleges, setSelectedColleges] = useState([]);

  const streams = [
    { name: 'B.Tech', icon: 'laptop', type: 'MaterialCommunityIcons', component: 'BTechColleges', category: 'engineering', ranking: 'top' },
    { name: 'MBA', icon: 'chart-line', type: 'MaterialCommunityIcons', component: 'MBAColleges', category: 'management', ranking: 'top' },
    { name: 'M.Tech', icon: 'cog', type: 'FontAwesome', component: 'MTechColleges', category: 'engineering', subcategory: 'pg-engineering' },
    { name: 'MBBS', icon: 'medical-bag', type: 'MaterialCommunityIcons', component: 'MBBSColleges', category: 'medical', ranking: 'top' },
    { name: 'B.Com', icon: 'calculator', type: 'MaterialCommunityIcons', component: 'BComColleges', category: 'commerce', ranking: 'top' },
    { name: 'B.Sc', icon: 'flask', type: 'FontAwesome', component: 'BScColleges', category: 'science', ranking: 'top' },
    { name: 'B.Sc (Nursing)', icon: 'hospital-user', type: 'FontAwesome5', component: 'BScNursingColleges', category: 'medical' },
    { name: 'BCA', icon: 'desktop-classic', type: 'MaterialCommunityIcons', component: 'BCAColleges', category: 'programming', subcategory: 'software' },
    { name: 'MCA', icon: 'code', type: 'FontAwesome', component: 'MCAColleges', category: 'programming', subcategory: 'software' },
    { name: 'Pharmacy', icon: 'pill', type: 'MaterialCommunityIcons', component: 'PharmacyColleges', category: 'medical' },
    { name: 'Para Medical', icon: 'ambulance', type: 'FontAwesome', component: 'ParaMedicalColleges', category: 'medical' },
    { name: 'Veterinary Science', icon: 'paw', type: 'FontAwesome', component: 'VeterinaryScienceColleges', category: 'medical' },
    { name: 'Computer Application', icon: 'desktop', type: 'FontAwesome', component: 'ComputerApplicationColleges', category: 'programming' },
    { name: 'Dental', icon: 'tooth', type: 'MaterialCommunityIcons', component: 'DentalColleges', category: 'medical' },
    { name: 'Design', icon: 'palette', type: 'MaterialCommunityIcons', component: 'DesignColleges', category: 'arts', subcategory: 'liberal-arts' },
    { name: 'Education', icon: 'school', type: 'MaterialCommunityIcons', component: 'EducationColleges', category: 'humanities' },
    { name: 'Hotel Management', icon: 'food-fork-drink', type: 'MaterialCommunityIcons', component: 'HotelManagementColleges', category: 'business' },
    { name: 'LLB', icon: 'gavel', type: 'MaterialCommunityIcons', component: 'LLBColleges', category: 'humanities' },
    { name: 'LLM', icon: 'scale-balance', type: 'MaterialCommunityIcons', component: 'LLMColleges', category: 'humanities' },
    { name: 'M.Pharm', icon: 'pill', type: 'MaterialCommunityIcons', component: 'MPharmColleges', category: 'medical' },
    { name: 'M.Planning', icon: 'city', type: 'MaterialCommunityIcons', component: 'MPlanningColleges', category: 'engineering', subcategory: 'pg-engineering' },
    { name: 'M.Sc', icon: 'microscope', type: 'MaterialCommunityIcons', component: 'MScColleges', category: 'science', subcategory: 'research' },
    { name: 'Mass Communication', icon: 'newspaper', type: 'MaterialCommunityIcons', component: 'MassCommunicationColleges', category: 'arts' }
  ];

  // Apply filters based on route params
  useEffect(() => {
    let results = [...streams];
    
    if (route.params) {
      // Handle filter parameter
      if (route.params.filter) {
        const filter = route.params.filter.toLowerCase();
        results = results.filter(stream => 
          stream.category === filter || 
          stream.subcategory === filter ||
          (filter === 'ranking' && stream.ranking === 'top')
        );
      }
      
      // Set compare mode if specified
      if (route.params.compare) {
        setCompareMode(true);
      }
    }
    
    // Apply search text filter if any
    if (searchText) {
      results = results.filter(stream => 
        stream.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    
    setFilteredStreams(results);
  }, [route.params, searchText]);

  const renderIcon = (stream) => {
    switch (stream.type) {
      case 'MaterialCommunityIcons':
        return <Icon name={stream.icon} size={24} color="#333" />;
      case 'FontAwesome':
        return <FontAwesome name={stream.icon} size={24} color="#333" />;
      case 'FontAwesome5':
        return <FontAwesome5 name={stream.icon} size={24} color="#333" />;
      case 'Ionicons':
        return <Ionicons name={stream.icon} size={24} color="#333" />;
      default:
        return null;
    }
  };
  
  const handleStreamPress = (stream) => {
    if (compareMode) {
      // In compare mode, add/remove college from comparison
      if (selectedColleges.includes(stream.component)) {
        setSelectedColleges(selectedColleges.filter(s => s !== stream.component));
      } else {
        if (selectedColleges.length < 3) { // Limit to comparing 3 colleges
          setSelectedColleges([...selectedColleges, stream.component]);
        }
      }
    } else {
      // Normal navigation
      navigation.navigate(stream.component);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Courses by Name"
          placeholderTextColor="#666"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      
      {compareMode && (
        <View style={styles.compareBar}>
          <Text style={styles.compareText}>Select up to 3 courses to compare</Text>
          <Text style={styles.selectedCount}>{selectedColleges.length}/3 selected</Text>
          
          {selectedColleges.length >= 2 && (
            <TouchableOpacity 
              style={styles.compareButton}
              onPress={() => navigation.navigate('CollegeCompare', { colleges: selectedColleges })}
            >
              <Text style={styles.compareButtonText}>Compare</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      
      <Text style={styles.heading}>
        {route.params?.filter ? 
          `Browse ${route.params.filter.charAt(0).toUpperCase() + route.params.filter.slice(1)}` : 
          'Browse Categories'}
      </Text>
      
      <ScrollView style={styles.scrollView}>
        {filteredStreams.length > 0 ? (
          filteredStreams.map((stream, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.streamItem, 
                compareMode && selectedColleges.includes(stream.component) && styles.selectedStream
              ]}
              onPress={() => handleStreamPress(stream)}
            >
              <View style={styles.iconContainer}>
                {renderIcon(stream)}
              </View>
              <View style={styles.streamInfo}>
                <Text style={styles.streamName}>{stream.name}</Text>
                <Icon name="chevron-right" size={24} color="#666" />
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResults}>No courses found matching your criteria</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  streamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedStream: {
    backgroundColor: '#e6f2ff',
    borderRadius: 8,
    borderBottomColor: '#cce6ff',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: 16,
  },
  streamInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  streamName: {
    fontSize: 16,
    color: '#333',
  },
  noResults: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
  compareBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  compareText: {
    fontSize: 14,
    color: '#0066cc',
    flex: 1,
  },
  selectedCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
    marginHorizontal: 12,
  },
  compareButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  compareButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BrowseCategories; 