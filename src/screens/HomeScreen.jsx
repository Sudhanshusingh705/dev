import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Text,
  Dimensions,
  Animated,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StudyGoal from '../pages/StudyGoal';
import ExploreProgram from '../pages/ExploreProgram';
import Top10Colleges from '../pages/Top10Colleges';
import TopUniversities from '../pages/TopUniversities';
import CollegeRanking from '../pages/CollegeRanking';
import TopStudyPlaces from '../pages/TopStudyPlaces';
import ExploreCourses from '../pages/ExploreCourses';
import CbscXII from '../pages/CbscXII';
import CbscX from '../pages/CbscX';
import TopExams from '../pages/TopExams';
import Admission2025 from '../pages/Admission2025';
import StudyAbroad from '../pages/StudyAbroad';
import TopCourses from '../pages/TopCourses';
import LatestNewsAndStories from '../pages/LatestNewsAndStories';
import LatestNotification from '../pages/LatestNotification';
import Newsletter from '../pages/Newsletter';

const { width } = Dimensions.get('window');
const HERO_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 60;

// Mock data for search suggestions and results
const searchSuggestions = [
  { id: '1', type: 'popular', text: 'Top Engineering Colleges' },
  { id: '2', type: 'popular', text: 'MBBS Colleges in Delhi' },
  { id: '3', type: 'popular', text: 'MBA Colleges' },
  { id: '4', type: 'popular', text: 'JEE Exam 2025' },
  { id: '5', type: 'popular', text: 'NEET Preparation' },
];

// Sample search data (in a real app, this would come from an API)
const mockSearchData = {
  colleges: [
    { id: 'c1', name: 'IIT Bombay', location: 'Mumbai, Maharashtra', type: 'college' },
    { id: 'c2', name: 'IIT Delhi', location: 'New Delhi, Delhi', type: 'college' },
    { id: 'c3', name: 'AIIMS Delhi', location: 'New Delhi, Delhi', type: 'college' },
    { id: 'c4', name: 'Delhi University', location: 'New Delhi, Delhi', type: 'university' },
  ],
  courses: [
    { id: 'co1', name: 'B.Tech Computer Science', type: 'course' },
    { id: 'co2', name: 'MBA Finance', type: 'course' },
    { id: 'co3', name: 'MBBS', type: 'course' },
    { id: 'co4', name: 'B.Sc Physics', type: 'course' },
  ],
  exams: [
    { id: 'e1', name: 'JEE Main 2025', date: 'January 2025', type: 'exam' },
    { id: 'e2', name: 'NEET 2025', date: 'May 2025', type: 'exam' },
    { id: 'e3', name: 'CAT 2025', date: 'November 2025', type: 'exam' },
  ],
  cities: [
    { id: 'ci1', name: 'Delhi', type: 'city' },
    { id: 'ci2', name: 'Mumbai', type: 'city' },
    { id: 'ci3', name: 'Bangalore', type: 'city' },
  ],
  states: [
    { id: 's1', name: 'Maharashtra', type: 'state' },
    { id: 's2', name: 'Karnataka', type: 'state' },
    { id: 's3', name: 'Tamil Nadu', type: 'state' },
  ],
  notifications: [
    { id: 'n1', title: 'JEE Main 2025 Registration Open', date: '12 Jan 2025', type: 'notification' },
    { id: 'n2', title: 'NEET 2025 Syllabus Released', date: '15 Feb 2025', type: 'notification' },
  ],
  news: [
    { id: 'ne1', title: 'New Education Policy Updates', date: '05 Jan 2025', type: 'news' },
    { id: 'ne2', title: 'Top 10 Colleges in India for 2025', date: '20 Jan 2025', type: 'news' },
  ],
  streams: [
    { id: 'st1', name: 'Engineering', type: 'stream' },
    { id: 'st2', name: 'Medical', type: 'stream' },
    { id: 'st3', name: 'Commerce', type: 'stream' },
    { id: 'st4', name: 'Arts', type: 'stream' },
  ]
};

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const scrollY = new Animated.Value(0);
  const navigation = useNavigation();
  const searchInputRef = useRef(null);

  // Add scroll configuration
  const scrollConfig = {
    damping: 0.85, // Reduces scroll momentum
    tension: 300,   // Controls scroll resistance
  };

  const heroTranslateY = scrollY.interpolate({
    inputRange: [0, HERO_HEIGHT],
    outputRange: [0, -HERO_HEIGHT/2],
    extrapolate: 'clamp',
  });

  // Function to handle search query changes
  const handleSearchChange = (text) => {
    setSearchQuery(text);
    if (text.length > 0) {
      setIsSearching(true);
      searchData(text);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  // Function to search data based on query
  const searchData = (query) => {
    // In a real app, this would be an API call
    // For now, we'll filter our mock data
    const results = [];
    
    // Search in colleges
    mockSearchData.colleges.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase()) || 
          item.location.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          subtitle: item.location,
          icon: 'school'
        });
      }
    });
    
    // Search in courses
    mockSearchData.courses.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          subtitle: 'Course',
          icon: 'menu-book'
        });
      }
    });
    
    // Search in exams
    mockSearchData.exams.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          subtitle: `Exam Date: ${item.date}`,
          icon: 'assignment'
        });
      }
    });
    
    // Search in cities
    mockSearchData.cities.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          subtitle: 'City',
          icon: 'location-city'
        });
      }
    });
    
    // Search in states
    mockSearchData.states.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          subtitle: 'State',
          icon: 'map'
        });
      }
    });
    
    // Search in notifications
    mockSearchData.notifications.forEach(item => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          name: item.title,
          subtitle: `Posted: ${item.date}`,
          icon: 'notifications'
        });
      }
    });
    
    // Search in news
    mockSearchData.news.forEach(item => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          name: item.title,
          subtitle: `Published: ${item.date}`,
          icon: 'article'
        });
      }
    });
    
    // Search in streams
    mockSearchData.streams.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          ...item,
          subtitle: 'Stream',
          icon: 'category'
        });
      }
    });
    
    // Update state with results
    setSearchResults(results);
  };

  // Handle search result click
  const handleResultPress = (item) => {
    setShowSearchModal(false);
    setSearchFocused(false);
    setSearchQuery('');
    
    // Navigate based on result type
    switch(item.type) {
      case 'college':
        navigation.navigate('CollegeDetails', { id: item.id, name: item.name });
        break;
      case 'university':
        navigation.navigate('UniversityDetailsPage', { id: item.id, name: item.name });
        break;
      case 'course':
        navigation.navigate('CourseContent', { course: item.name });
        break;
      case 'exam':
        navigation.navigate('ExamContent', { exam: item.name });
        break;
      case 'city':
      case 'state':
        navigation.navigate('UserDrawer', { 
          screen: 'BrowseCategories', 
          params: { location: item.name, type: item.type } 
        });
        break;
      case 'notification':
        navigation.navigate('NotificationDetail', { id: item.id, title: item.name });
        break;
      case 'news':
        navigation.navigate('NewsContent', { id: item.id, title: item.name });
        break;
      case 'stream':
        navigation.navigate('UserDrawer', { 
          screen: 'BrowseCategories', 
          params: { filter: item.name.toLowerCase() } 
        });
        break;
      default:
        console.log('Unknown item type:', item.type);
    }
  };

  // Handle suggestion press
  const handleSuggestionPress = (suggestion) => {
    setSearchQuery(suggestion.text);
    searchData(suggestion.text);
  };

  // Render search results
  const renderSearchResult = ({ item }) => (
    <TouchableOpacity
      style={styles.searchResultItem}
      onPress={() => handleResultPress(item)}
    >
      <Icon name={item.icon} size={24} color="#007bff" style={styles.resultIcon} />
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultTitle}>{item.name}</Text>
        <Text style={styles.resultSubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  // Render search suggestions
  const renderSearchSuggestion = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionPress(item)}
    >
      <Icon name="search" size={16} color="#666" style={styles.suggestionIcon} />
      <Text style={styles.suggestionText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        
        {/* Main Content */}
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate={0.92}
          bounces={true}
          bouncesZoom={true}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { 
              useNativeDriver: true,
              throttle: 16,
            }
          )}
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollView}
          overScrollMode="never"
        >
          {/* Hero Section */}
          <Animated.View
            style={[
              styles.heroSection,
              {
                transform: [{ translateY: heroTranslateY }],
              },
            ]}
          >
            <ImageBackground
              source={{ uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/Mobile.png' }}
              style={styles.heroBackground}
              resizeMode="cover"
            >
              <View style={styles.heroContent}>
                <Text 
                  style={styles.heroTitle}
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                >
                  Find Your Perfect Educational Path
                </Text>
                <View style={styles.searchContainer}>
                  <TouchableOpacity 
                    style={styles.searchInputWrapper}
                    activeOpacity={0.9}
                    onPress={() => setShowSearchModal(true)}
                  >
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                    <Text style={styles.searchPlaceholder}>
                      Search colleges, courses, exams, cities...
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </Animated.View>

          {/* Content Sections */}
          <View style={styles.sectionsContainer}>
            <Section component={StudyGoal} />
            <Section component={ExploreProgram} />
            <Divider />
            <Section component={LatestNotification} />
            <Divider />
            <Section component={Top10Colleges} />
            <Divider />
            <Section component={TopUniversities} />
            <Divider />
            <Section component={CollegeRanking} />
            <Divider />
            <Section component={TopStudyPlaces} />
            <Divider />
            <Section component={ExploreCourses} />
            <Divider />
            <Section component={CbscXII} />
            <Divider />
            <Section component={CbscX} />
            <Divider />
            <Section component={TopExams} />
            <Divider />
            <Section component={Admission2025} />
            <Divider />
            <Section component={LatestNewsAndStories} />
            <Divider />
            <Section component={StudyAbroad} />
            <Divider />
            <Section component={TopCourses} />
            <Divider />
            <Section component={Newsletter} />
          </View>
        </Animated.ScrollView>
        <Footer scrollY={scrollY} />

        {/* Search Modal */}
        <Modal
          visible={showSearchModal}
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            setShowSearchModal(false);
            setSearchFocused(false);
            setSearchQuery('');
          }}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => {
                  setShowSearchModal(false);
                  setSearchFocused(false);
                  setSearchQuery('');
                }}
              >
                <Icon name="arrow-back" size={24} color="#333" />
              </TouchableOpacity>
              <View style={styles.modalSearchContainer}>
                <Icon name="search" size={20} color="#666" style={styles.modalSearchIcon} />
                <TextInput
                  ref={searchInputRef}
                  style={styles.modalSearchInput}
                  placeholder="Search colleges, courses, exams, cities..."
                  value={searchQuery}
                  onChangeText={handleSearchChange}
                  autoFocus={true}
                  onFocus={() => setSearchFocused(true)}
                  placeholderTextColor="#666"
                  returnKeyType="search"
                />
                {searchQuery.length > 0 && (
                  <TouchableOpacity 
                    style={styles.clearButton}
                    onPress={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                  >
                    <Icon name="close" size={20} color="#666" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.modalContent}>
              {isSearching && searchResults.length === 0 ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#007bff" />
                  <Text style={styles.loadingText}>Searching...</Text>
                </View>
              ) : searchQuery.length > 0 ? (
                <FlatList
                  data={searchResults}
                  renderItem={renderSearchResult}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.resultsList}
                  ListEmptyComponent={
                    <View style={styles.noResultsContainer}>
                      <Icon name="search-off" size={48} color="#ccc" />
                      <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
                      <Text style={styles.noResultsSubtext}>Try a different search term or browse categories</Text>
                    </View>
                  }
                />
              ) : (
                <View style={styles.suggestionsContainer}>
                  <Text style={styles.suggestionsTitle}>Popular Searches</Text>
                  <FlatList
                    data={searchSuggestions}
                    renderItem={renderSearchSuggestion}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.suggestionsList}
                  />
                  
                  <View style={styles.searchCategoriesContainer}>
                    <Text style={styles.suggestionsTitle}>Search By Category</Text>
                    <View style={styles.categoriesGrid}>
                      <SearchCategory icon="school" title="Colleges" onPress={() => handleSearchChange("college")} />
                      <SearchCategory icon="menu-book" title="Courses" onPress={() => handleSearchChange("course")} />
                      <SearchCategory icon="assignment" title="Exams" onPress={() => handleSearchChange("exam")} />
                      <SearchCategory icon="location-city" title="Cities" onPress={() => handleSearchChange("city")} />
                      <SearchCategory icon="map" title="States" onPress={() => handleSearchChange("state")} />
                      <SearchCategory icon="category" title="Streams" onPress={() => handleSearchChange("stream")} />
                    </View>
                  </View>
                </View>
              )}
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

// Search Category Component
const SearchCategory = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
    <View style={styles.categoryIconContainer}>
      <Icon name={icon} size={24} color="#007bff" />
    </View>
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

// Section Component
const Section = ({ component: Component, title }) => (
  <View style={[styles.section]}>
    {title && <Text style={styles.sectionTitle}>{title}</Text>}
    <Component />
  </View>
);

// Divider Component
const Divider = () => <View style={styles.sectionDivider} />;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  heroSection: {
    height: HERO_HEIGHT,
    width: '100%',
    marginBottom: 20,
  },
  heroBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 15,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  searchContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  searchInputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  sectionsContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionDivider: {
    height: 4,
    backgroundColor: '#f5f5f5',
  },
  
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  modalSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 10,
    height: 45,
  },
  modalSearchIcon: {
    marginRight: 10,
  },
  modalSearchInput: {
    flex: 1,
    fontSize: 16,
    height: 45,
  },
  clearButton: {
    padding: 8,
  },
  modalContent: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  resultsList: {
    padding: 15,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultIcon: {
    marginRight: 15,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  resultSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  suggestionsContainer: {
    flex: 1,
    padding: 15,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  suggestionsList: {
    paddingBottom: 20,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  suggestionIcon: {
    marginRight: 15,
  },
  suggestionText: {
    fontSize: 15,
    color: '#333',
  },
  searchCategoriesContainer: {
    marginTop: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noResultsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginTop: 15,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen;
