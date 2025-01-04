import React, { useState, useRef } from 'react';
import { 
  View, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView, 
  ImageBackground, 
  TextInput,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  Animated
} from 'react-native';
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

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  const heroTranslateY = scrollY.interpolate({
    inputRange: [0, HERO_HEIGHT],
    outputRange: [0, -HERO_HEIGHT],
    extrapolate: 'clamp'
  });

  const heroOpacity = scrollY.interpolate({
    inputRange: [0, HERO_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.mainContainer}>
          <Animated.View 
            style={[
              styles.heroSection,
              {
                transform: [{ translateY: heroTranslateY }],
                opacity: heroOpacity,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1
              }
            ]}
          >
            <ImageBackground
              source={{ uri: 'https://searchmycolleges.com/wp-content/uploads/2024/12/Mobile.png' }}
              style={styles.heroBackground}
            >
              <View style={styles.heroContent}>
                <Text style={styles.heroTitle}>Find Your Perfect Educational Path</Text>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search for courses, colleges, or programs"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor="#666"
                  />
                </View>
              </View>
            </ImageBackground>
          </Animated.View>

          <Animated.ScrollView 
            style={styles.scrollView}
            contentContainerStyle={[
              styles.scrollContent,
              { paddingTop: HERO_HEIGHT }
            ]}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          >
            <StudyGoal />
            <ExploreProgram />
            <View style={styles.sectionDivider} />
            <View style={styles.latestNotificationSection}>
              <LatestNotification />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.top10Section}>
              <Top10Colleges />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.topUniversitiesSection}>
              <Text style={styles.sectionTitle}>Top Universities</Text>
              <TopUniversities />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.collegeRankingSection}>
              <CollegeRanking />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.topStudyPlacesSection}>
              <TopStudyPlaces />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.exploreCoursesSection}>
              <ExploreCourses />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.cbscSection}>
              <CbscXII />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.cbscSection}>
              <CbscX />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.topExamsSection}>
              <TopExams />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.admissionSection}>
              <Admission2025 />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.latestNewsSection}>
              <LatestNewsAndStories />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.studyAbroadSection}>
              <StudyAbroad />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.topCoursesSection}>
              <TopCourses />
            </View>
            <View style={styles.sectionDivider} />
            <View style={styles.newsletterSection}>
              <Newsletter />
            </View>
          </Animated.ScrollView>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  heroSection: {
    height: HERO_HEIGHT,
    width: '100%',
    backgroundColor: '#fff',
  },
  heroBackground: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  searchContainer: {
    width: '100%',
    maxWidth: 400,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  sectionDivider: {
    height: 8,
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
  },
  top10Section: {
    marginTop: 16,
    backgroundColor: '#fff',
  },
  topUniversitiesSection: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
    color: '#333',
  },
  collegeRankingSection: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  topStudyPlacesSection: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  exploreCoursesSection: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  cbscSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  topExamsSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  admissionSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  studyAbroadSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  topCoursesSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  section: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  latestNewsSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  latestNotificationSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  newsletterSection: {
    marginTop: 16,
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
});

export default HomeScreen;






