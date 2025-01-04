import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ExploreProgram = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const tabs = ['All', 'BE/B.Tech', 'MBA/PGDM', 'MBBS', 'ME/M.Tech', 'B.Sc', 'BA', 'B.Com', 'BCA'];

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
    
    // Group cards into pairs for 2x2 layout
    const rows = [];
    for (let i = 0; i < currentData.length; i += 2) {
      const row = currentData.slice(i, i + 2);
      rows.push(row);
    }

    return (
      <View style={styles.cardsContainer}>
        {rows.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.cardRow}>
            {row.map((item) => (
              <TouchableOpacity 
                key={item.id}
                style={styles.card}
                onPress={() => console.log(`Selected program: ${item.title}`)}
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
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#333',
  },
  tabsContainer: {
    marginBottom: 15,
    paddingHorizontal: 15,
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
    paddingHorizontal: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: width * 0.44, // Slightly less than half to account for margins
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
  },
  circularIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
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
    width: 35,
    height: 35,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
    color: '#333',
  },
  cardDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    lineHeight: 16,
  },
});

export default ExploreProgram;
