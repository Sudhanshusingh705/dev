import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const PADDING_HORIZONTAL = 20;
const CARD_GAP = 16;
// Recalculate card width accounting for padding and gap
const CARD_WIDTH = (width - (PADDING_HORIZONTAL * 2) - CARD_GAP) / 2;

const ExploreProgram = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const navigation = useNavigation();

  const tabs = ['All', 'BE/B.Tech', 'MBA/PGDM', 'MBBS', 'ME/M.Tech', 'B.Sc', 'BA', 'B.Com', 'BCA'];

  // Define navigation mappings for cards
  // Each tab has 4 cards with specific navigation parameters
  // Format: 'id': { params: {/* parameters */} }
  // All cards now navigate to BrowseCategories in UserDrawer with different parameters
  const cardNavigation = {
    // All tab - General exploration options
    '1': { params: { filter: 'ranking' } }, // Ranking
    '2': { params: {} }, // Find Colleges
    '3': { params: { compare: true } }, // Compare Colleges
    '4': { params: { filter: 'exams' } }, // Exams

    // BE/B.Tech tab - Engineering focused options
    '5': { params: { filter: 'engineering', ranking: true } }, // Top Engineering Colleges
    '6': { params: { filter: 'engineering', exam: 'JEE Main' } }, // JEE Preparation
    '7': { params: { filter: 'engineering' } }, // Engineering Specializations
    '8': { params: { filter: 'engineering', sortBy: 'placement' } }, // Campus Placements

    // MBA/PGDM tab - Management focused options
    '9': { params: { filter: 'management', ranking: true } }, // Top B-Schools
    '10': { params: { filter: 'management', exam: 'CAT' } }, // CAT Preparation
    '11': { params: { filter: 'management' } }, // MBA Specializations
    '12': { params: { filter: 'management', sortBy: 'placement' } }, // Corporate Placements

    // MBBS tab - Medical focused options
    '13': { params: { filter: 'medical', ranking: true } }, // Top Medical Colleges
    '14': { params: { filter: 'medical', exam: 'NEET' } }, // NEET Preparation
    '15': { params: { filter: 'medical' } }, // Medical Specializations
    '16': { params: { filter: 'medical', sortBy: 'ranking' } }, // Residency Programs

    // ME/M.Tech tab - Postgraduate Engineering options
    '17': { params: { filter: 'pg-engineering', ranking: true } }, // Top PG Engineering
    '18': { params: { filter: 'pg-engineering', exam: 'GATE' } }, // GATE Preparation
    '19': { params: { filter: 'pg-engineering', research: true } }, // Research Opportunities
    '20': { params: { filter: 'pg-engineering', sortBy: 'ranking' } }, // Industry Collaborations

    // B.Sc tab - Science focused options
    '21': { params: { filter: 'science', ranking: true } }, // Top Science Colleges
    '22': { params: { filter: 'science' } }, // Science Streams
    '23': { params: { filter: 'research' } }, // Research Projects
    '24': { params: { filter: 'science', sortBy: 'ranking' } }, // Career Prospects

    // BA tab - Arts focused options
    '25': { params: { filter: 'arts', ranking: true } }, // Top Arts Colleges
    '26': { params: { filter: 'humanities' } }, // Humanities Subjects
    '27': { params: { filter: 'liberal-arts' } }, // Liberal Arts
    '28': { params: { filter: 'arts', sortBy: 'ranking' } }, // Career Options

    // B.Com tab - Commerce focused options
    '29': { params: { filter: 'commerce', ranking: true } }, // Top Commerce Colleges
    '30': { params: { filter: 'finance' } }, // Accounting & Finance
    '31': { params: { filter: 'business' } }, // Business Studies
    '32': { params: { filter: 'commerce', sortBy: 'ranking' } }, // Career Opportunities

    // BCA tab - Computer Applications focused options
    '33': { params: { filter: 'computer-applications', ranking: true } }, // Top BCA Colleges
    '34': { params: { filter: 'programming' } }, // Programming
    '35': { params: { filter: 'software' } }, // Software Development
    '36': { params: { filter: 'computer-applications', sortBy: 'ranking' } }, // IT Industry
  };

  // Handle card press events
  const handleCardPress = (id) => {
    console.log(`Card pressed: ${id} in tab: ${selectedTab}`);
    
    try {
      const navigationConfig = cardNavigation[id];
      
      if (navigationConfig) {
        // All cards now navigate to BrowseCategories through UserDrawer
        navigation.navigate("UserDrawer", { 
          screen: "BrowseCategories",
          params: navigationConfig.params || {}
        });
        
        console.log(`Navigating to BrowseCategories with params:`, navigationConfig.params || {});
      } else {
        // Fallback if card ID not found in navigation mapping
        console.warn(`No navigation config found for card ID: ${id}`);
        Alert.alert('Navigation', 'Exploring this category...');
        navigation.navigate("UserDrawer", { screen: "BrowseCategories" });
      }
    } catch (error) {
      // Error handling
      console.error(`Navigation error for card ${id}:`, error);
      Alert.alert('Navigation Error', 'There was a problem navigating. Please try again.');
      // Fallback navigation
      navigation.navigate("UserDrawer", { screen: "BrowseCategories" });
    }
  };

  const programsData = {
    'All': [
      { id: '1', title: 'Ranking', description: 'College ranked based on real data', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '2', title: 'Find Colleges', description: 'Discover 19000+ colleges via preferences', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '3', title: 'Compare Colleges', description: 'Compare on the basis of rank, fees, etc.', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '4', title: 'Exams', description: 'Know more about your exams', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'BE/B.Tech': [
      { id: '5', title: 'Top Engineering Colleges', description: 'Explore top engineering institutions', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '6', title: 'JEE Preparation', description: 'Prepare for JEE Main and Advanced', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '7', title: 'Engineering Specializations', description: 'Discover various engineering fields', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '8', title: 'Campus Placements', description: 'Engineering placement statistics', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'MBA/PGDM': [
      { id: '9', title: 'Top B-Schools', description: 'Explore top management institutions', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '10', title: 'CAT Preparation', description: 'Prepare for CAT exam', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '11', title: 'MBA Specializations', description: 'Discover various MBA fields', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '12', title: 'Corporate Placements', description: 'MBA placement statistics', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'MBBS': [
      { id: '13', title: 'Top Medical Colleges', description: 'Explore top medical institutions', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '14', title: 'NEET Preparation', description: 'Prepare for NEET exam', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '15', title: 'Medical Specializations', description: 'Discover various medical fields', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '16', title: 'Residency Programs', description: 'Explore residency opportunities', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'ME/M.Tech': [
      { id: '17', title: 'Top PG Engineering', description: 'Top PG engineering colleges', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '18', title: 'GATE Preparation', description: 'Prepare for GATE exam', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '19', title: 'Research Opportunities', description: 'Discover research prospects', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '20', title: 'Industry Collaborations', description: 'Explore industry partnerships', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'B.Sc': [
      { id: '21', title: 'Top Science Colleges', description: 'Explore top science institutions', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '22', title: 'Science Streams', description: 'Discover various science streams', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '23', title: 'Research Projects', description: 'Explore undergraduate research', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '24', title: 'Career Prospects', description: 'Explore career options', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'BA': [
      { id: '25', title: 'Top Arts Colleges', description: 'Explore top arts institutions', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '26', title: 'Humanities Subjects', description: 'Discover humanities fields', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '27', title: 'Liberal Arts', description: 'Explore liberal arts education', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '28', title: 'Career Options', description: 'Explore career paths after BA', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'B.Com': [
      { id: '29', title: 'Top Commerce Colleges', description: 'Explore commerce colleges', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '30', title: 'Accounting & Finance', description: 'Learn accounting & finance', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '31', title: 'Business Studies', description: 'Explore business subjects', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '32', title: 'Career Opportunities', description: 'Explore job prospects', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
    'BCA': [
      { id: '33', title: 'Top BCA Colleges', description: 'Explore top BCA institutions', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/ranking.png' },
      { id: '34', title: 'Programming', description: 'Learn programming languages', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/findcollege.png' },
      { id: '35', title: 'Software Development', description: 'Learn software development', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/compare.png' },
      { id: '36', title: 'IT Industry', description: 'Explore IT industry trends', icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/exam.png' },
    ],
  };

  const renderProgramCards = () => {
    const currentData = programsData[selectedTab] || [];
    console.log(`Rendering cards for tab: ${selectedTab}`);
    
    const rows = [];
    for (let i = 0; i < currentData.length; i += 2) {
      const row = currentData.slice(i, i + 2);
      rows.push(row);
    }

    return (
      <View style={styles.cardsContainer}>
        {rows.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.cardRow}>
            {row.map((item, index) => (
              <TouchableOpacity 
                key={item.id}
                style={styles.card}
                onPress={() => {
                  console.log(`Card clicked: ${item.title} (ID: ${item.id}) in tab: ${selectedTab}`);
                  handleCardPress(item.id);
                }}
              >
                <View style={styles.circularIcon}>
                  <Image 
                    source={{ uri: item.icon }} 
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Explore Programs</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContentContainer}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {renderProgramCards()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: PADDING_HORIZONTAL,
    color: '#333',
    alignSelf: 'flex-start',
  },
  tabsContainer: {
    marginBottom: 15,
    width: '100%',
  },
  tabsContentContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
  },
  cardsContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    width: '100%',
    paddingHorizontal: 0,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
    width: '48%',
    minHeight: 160,
  },
  circularIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    width: 32,
    height: 32,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 6,
  },
  cardDescription: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
    lineHeight: 18,
    paddingHorizontal: 6,
  },
});

export default ExploreProgram;
