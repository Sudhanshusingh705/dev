import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const filters = {
  stream: ['All', 'Engineering', 'Medical', 'Arts', 'Commerce', 'Science'],
  state: ['All', 'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'UP'],
  city: ['All', 'New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune'],
  programType: ['All', 'Full Time', 'Part Time', 'Distance'],
  collegeType: ['All', 'Government', 'Private', 'Deemed'],
  courseType: ['All', 'Regular', 'Integrated', 'Dual Degree'],
  agency: ['All', 'NAAC', 'NBA', 'NIRF'],
  entranceExam: ['All', 'JEE Main', 'NEET', 'CAT', 'GATE', 'GMAT'],
  avgFees: ['All', 'Under 1 Lakh', '1-2 Lakh', '2-5 Lakh', 'Above 5 Lakh']
};

const collegeData = [
  {
    id: 1,
    rank: 1,
    name: 'IIT Bombay',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/iitb.png',
    fees: '2,30,700',
    avgPackage: '23,50,000',
    highestPackage: '1,00,00,000',
    ranking: '#118th/1400',
    userReviews: '4.4/5',
    accreditation: ['NAAC A++', 'NBA', 'NIRF'],
    location: 'Mumbai, Maharashtra',
    approvedBy: ['AICTE', 'UGC'],
    courses: [
      {
        name: 'B.Tech Computer Science',
        duration: '4 Years',
        fees: '2,30,700/Year',
        eligibility: 'JEE Advanced 2024 Cutoff: 68'
      }
    ],
    expanded: false
  },
  {
    id: 2,
    rank: 2,
    name: 'IIT Delhi',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/iitd.png',
    fees: '2,28,650',
    avgPackage: '25,82,000',
    highestPackage: '2,00,00,000',
    ranking: '#150th/1400',
    userReviews: '4.3/5',
    accreditation: ['NAAC A++', 'NBA', 'NIRF'],
    location: 'New Delhi, Delhi',
    approvedBy: ['AICTE', 'UGC'],
    courses: [
      {
        name: 'B.Tech + M.Tech Mathematics and Computing',
        duration: '5 Years',
        fees: '2,28,650/Year',
        eligibility: 'JEE Advanced 2024 Cutoff: 417'
      }
    ],
    expanded: false
  },
  {
    id: 3,
    rank: 3,
    name: 'IIT Madras',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/iitm.png',
    fees: '2,42,000',
    avgPackage: '21,48,000',
    highestPackage: '1,98,00,000',
    ranking: '#227th/1400',
    userReviews: '4.3/5',
    accreditation: ['NAAC A++', 'NBA', 'NIRF'],
    location: 'Chennai, Tamil Nadu',
    approvedBy: ['AICTE', 'UGC'],
    courses: [
      {
        name: 'B.Tech Artificial Intelligence',
        duration: '4 Years',
        fees: '2,42,000/Year',
        eligibility: 'JEE Advanced 2024 Cutoff: 419'
      }
    ],
    expanded: false
  },
  {
    id: 4,
    rank: 4,
    name: 'IIT Kanpur',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/iitk.png',
    fees: '2,35,800',
    avgPackage: '22,55,000',
    highestPackage: '1,90,00,000',
    ranking: '#245th/1400',
    userReviews: '4.2/5',
    accreditation: ['NAAC A++', 'NBA', 'NIRF'],
    location: 'Kanpur, Uttar Pradesh',
    approvedBy: ['AICTE', 'UGC'],
    courses: [
      {
        name: 'B.Tech Mechanical Engineering',
        duration: '4 Years',
        fees: '2,35,800/Year',
        eligibility: 'JEE Advanced 2024 Cutoff: 425'
      }
    ],
    expanded: false
  },
  {
    id: 5,
    rank: 5,
    name: 'IIT Kharagpur',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/iitkgp.png',
    fees: '2,38,900',
    avgPackage: '20,85,000',
    highestPackage: '1,85,00,000',
    ranking: '#312th/1400',
    userReviews: '4.1/5',
    accreditation: ['NAAC A++', 'NBA', 'NIRF'],
    location: 'Kharagpur, West Bengal',
    approvedBy: ['AICTE', 'UGC'],
    courses: [
      {
        name: 'B.Tech Electronics Engineering',
        duration: '4 Years',
        fees: '2,38,900/Year',
        eligibility: 'JEE Advanced 2024 Cutoff: 445'
      }
    ],
    expanded: false
  },
  {
    id: 6,
    rank: 6,
    name: 'BITS Pilani',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/bits.png',
    fees: '5,45,000',
    avgPackage: '19,85,000',
    highestPackage: '1,75,00,000',
    ranking: '#425th/1400',
    userReviews: '4.0/5',
    accreditation: ['NAAC A+', 'NBA', 'NIRF'],
    location: 'Pilani, Rajasthan',
    approvedBy: ['UGC'],
    courses: [
      {
        name: 'B.E. Computer Science',
        duration: '4 Years',
        fees: '5,45,000/Year',
        eligibility: 'BITSAT 2024 Score: 340'
      }
    ],
    expanded: false
  },
  // Continue with more colleges...
  {
    id: 20,
    rank: 20,
    name: 'VIT Vellore',
    logo: 'https://blogs.searchmycolleges.com/wp-content/uploads/2025/01/vit.png',
    fees: '4,85,000',
    avgPackage: '12,50,000',
    highestPackage: '45,00,000',
    ranking: '#851th/1400',
    userReviews: '3.8/5',
    accreditation: ['NAAC A+', 'NBA'],
    location: 'Vellore, Tamil Nadu',
    approvedBy: ['AICTE', 'UGC'],
    courses: [
      {
        name: 'B.Tech Software Engineering',
        duration: '4 Years',
        fees: '4,85,000/Year',
        eligibility: 'VITEEE 2024 Rank < 15000'
      }
    ],
    expanded: false
  }
];

const CourseContent = ({ route }) => {
  const { courseType, courseData } = route.params;
  const [colleges, setColleges] = useState(collegeData);
  const [selectedFilters, setSelectedFilters] = useState({
    stream: 'All',
    state: 'All',
    city: 'All',
    programType: 'All',
    collegeType: 'All',
    courseType: 'All',
    agency: 'All',
    entranceExam: 'All',
    avgFees: 'All'
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [page, setPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [showFilters, setShowFilters] = useState(false);
  const navigation = useNavigation();

  const handleSort = (type) => {
    setSortBy(type);
    let sortedData = [...colleges];
    
    switch(type) {
      case 'popularity':
        sortedData.sort((a, b) => a.rank - b.rank);
        break;
      case 'highestFees':
        sortedData.sort((a, b) => parseInt(b.fees.replace(/,/g, '')) - parseInt(a.fees.replace(/,/g, '')));
        break;
      case 'lowestFees':
        sortedData.sort((a, b) => parseInt(a.fees.replace(/,/g, '')) - parseInt(b.fees.replace(/,/g, '')));
        break;
      case 'highestPackage':
        sortedData.sort((a, b) => parseInt(b.avgPackage.replace(/,/g, '')) - parseInt(a.avgPackage.replace(/,/g, '')));
        break;
      case 'rating':
        sortedData.sort((a, b) => parseFloat(b.userReviews) - parseFloat(a.userReviews));
        break;
    }
    
    setColleges(sortedData);
  };

  const handleFilter = (type, value) => {
    const newFilters = { ...selectedFilters, [type]: value };
    setSelectedFilters(newFilters);
    
    let filteredData = collegeData;
    
    // Apply all active filters
    Object.entries(newFilters).forEach(([filterType, filterValue]) => {
      if (filterValue !== 'All') {
        switch(filterType) {
          case 'state':
            filteredData = filteredData.filter(college => 
              college.location.includes(filterValue)
            );
            break;
          case 'city':
            filteredData = filteredData.filter(college => 
              college.location.includes(filterValue)
            );
            break;
          case 'agency':
            filteredData = filteredData.filter(college => 
              college.accreditation.includes(filterValue)
            );
            break;
          case 'avgFees':
            const fees = parseInt(college.fees.replace(/,/g, ''));
            switch(filterValue) {
              case 'Under 1 Lakh':
                filteredData = filteredData.filter(college => fees < 100000);
                break;
              case '1-2 Lakh':
                filteredData = filteredData.filter(college => fees >= 100000 && fees < 200000);
                break;
              case '2-5 Lakh':
                filteredData = filteredData.filter(college => fees >= 200000 && fees < 500000);
                break;
              case 'Above 5 Lakh':
                filteredData = filteredData.filter(college => fees >= 500000);
                break;
            }
            break;
          // Add more filter cases as needed
        }
      }
    });
    
    setColleges(filteredData);
    setPage(0); // Reset to first page when filtering
  };

  const toggleExpand = (id) => {
    const updatedColleges = colleges.map(college => 
      college.id === id ? {...college, expanded: !college.expanded} : college
    );
    setColleges(updatedColleges);
  };

  const handleCollegePress = (college) => {
    navigation.navigate('CollegeDetail', { college });
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

      {/* Filter Button */}
      <TouchableOpacity 
        style={styles.filterButton}
        onPress={() => setShowFilters(!showFilters)}
      >
        <MaterialIcons name="filter-list" size={24} color="#007AFF" />
        <Text style={styles.filterButtonText}>Filters</Text>
      </TouchableOpacity>

      {/* Collapsible Filter Section */}
      {showFilters && (
        <View style={styles.filtersWrapper}>
          <View style={styles.filterRow}>
            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>Stream</Text>
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedFilters.stream}
                  onValueChange={(value) => handleFilter('stream', value)}
                  style={styles.pickerStyle}
                  itemStyle={{ 
                    height: 50,
                    fontSize: 16,
                  }}
                  dropdownIconColor="#007AFF"
                >
                  {filters.stream.map(item => (
                    <Picker.Item 
                      key={item} 
                      label={item} 
                      value={item}
                      style={{
                        fontSize: 16,
                        color: '#333',
                      }} 
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>State</Text>
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedFilters.state}
                  onValueChange={(value) => handleFilter('state', value)}
                  style={styles.pickerStyle}
                >
                  {filters.state.map(item => (
                    <Picker.Item key={item} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          {/* Add more filter rows similarly */}
        </View>
      )}

      {/* Sorting Section */}
      <View style={styles.sortingWrapper}>
        <Text style={styles.sortingLabel}>Sort By:</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.sortingScroll}
        >
          <TouchableOpacity 
            style={[styles.sortChip, sortBy === 'popularity' && styles.activeSortChip]}
            onPress={() => handleSort('popularity')}
          >
            <Text style={[styles.sortChipText, sortBy === 'popularity' && styles.activeSortChipText]}>
              Popularity
            </Text>
          </TouchableOpacity>
          {/* Add other sorting options */}
        </ScrollView>
      </View>

      {/* College Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <View style={styles.headerCell}><Text style={styles.headerText}>Rank</Text></View>
          <View style={[styles.headerCell, { flex: 2 }]}><Text style={styles.headerText}>College</Text></View>
          <View style={styles.headerCell}><Text style={styles.headerText}>Fees</Text></View>
          <View style={styles.headerCell}><Text style={styles.headerText}>Placement</Text></View>
        </View>

        {colleges
          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
          .map(college => (
            <TouchableOpacity 
              key={college.id}
              style={styles.tableRow}
              onPress={() => handleCollegePress(college)}
            >
              <View style={styles.cell}>
                <Text style={styles.rankText}>#{college.rank}</Text>
              </View>
              <View style={[styles.cell, { flex: 2 }]}>
                <View style={styles.collegeInfo}>
                  <Image 
                    source={{ uri: college.logo }} 
                    style={styles.collegeLogo}
                  />
                  <View style={styles.collegeDetails}>
                    <Text style={styles.collegeName}>{college.name}</Text>
                    <Text style={styles.collegeLocation}>{college.location}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cell}>
                <Text style={styles.feesText}>₹{college.fees}</Text>
                <Text style={styles.perYear}>/year</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.placementText}>₹{college.avgPackage}</Text>
                <Text style={styles.avgPackage}>Avg. Package</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>

      {/* Pagination */}
      <View style={styles.paginationWrapper}>
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(colleges.length / itemsPerPage)}
          onPageChange={setPage}
          label={`${page + 1} of ${Math.ceil(colleges.length / itemsPerPage)}`}
          showFastPaginationControls
          numberOfItemsPerPage={itemsPerPage}
        />
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  filterButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  filtersWrapper: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    zIndex: 1000,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    zIndex: 1000,
  },
  filterGroup: {
    flex: 1,
    marginHorizontal: 8,
    zIndex: 1000,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
  },
  pickerStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#495057',
    marginBottom: 8,
  },
  sortingWrapper: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sortingLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  sortingScroll: {
    flexDirection: 'row',
    gap: 8,
  },
  sortChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    marginRight: 8,
  },
  activeSortChip: {
    backgroundColor: '#007AFF',
  },
  sortChipText: {
    color: '#666',
  },
  activeSortChipText: {
    color: '#fff',
  },
  tableContainer: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerCell: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#495057',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 8,
  },
  collegeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collegeLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  collegeDetails: {
    flex: 1,
  },
  collegeName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#212529',
    marginBottom: 4,
  },
  collegeLocation: {
    fontSize: 12,
    color: '#6c757d',
  },
  rankText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  feesText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212529',
  },
  perYear: {
    fontSize: 12,
    color: '#6c757d',
  },
  placementText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#28a745',
  },
  avgPackage: {
    fontSize: 12,
    color: '#6c757d',
  },
  paginationWrapper: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default CourseContent; 