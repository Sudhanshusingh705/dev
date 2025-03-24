import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const newsData = {
  'Exam Alerts': [
    {
      id: 1,
      title: 'CAT 2024 Slot 3 Question Paper DILR: Download PDF with Solutions',
      date: 'Jan 4, 2025',
      description: 'The CAT 2024 Slot 3 Question Paper For Data Interpretation And Logical Reasoning (DILR), Along With The Answer Key And Detailed Solutions...',
    },
    {
      id: 2,
      title: 'GATE 2025 Admit Card Release Date Postponed',
      date: 'Jan 3, 2025',
      description: 'The GATE 2025 Examination Conducted By IIT Has Revised The Release Date Of The GATE Admit Card...',
    },
    {
      id: 3,
      title: 'JEE Main 2025 Registration Last Date Extended',
      date: 'Jan 2, 2025',
      description: 'National Testing Agency Has Extended The Last Date For JEE Main 2025 Registration...',
    },
    {
      id: 4,
      title: 'NEET PG 2025 Application Process Begins',
      date: 'Jan 2, 2025',
      description: 'The National Board of Examinations Has Started The Application Process For NEET PG 2025...',
    },
    {
      id: 5,
      title: 'UPSC CSE 2025 Notification Released',
      date: 'Jan 1, 2025',
      description: 'Union Public Service Commission Has Released The Official Notification For Civil Services Examination 2025...',
    },
    {
      id: 6,
      title: 'XAT 2025 Registration Opens',
      date: 'Jan 1, 2025',
      description: 'XLRI Has Announced The Opening Of XAT 2025 Registration Process For MBA Aspirants...',
    },
  ],
  'College Alerts': [
    {
      id: 1,
      title: 'UCEED 2025: Admit Cards Out; Objections Can Be Filed Till Jan 8',
      date: 'Jan 3, 2025',
      description: 'The Indian Institute Of Technology (IIT) Bombay Has Released The Admit Cards For The Undergraduate Common Entrance Examination For Design...',
    },
    {
      id: 2,
      title: 'IIT Delhi Announces New Research Programs',
      date: 'Jan 2, 2025',
      description: 'Indian Institute of Technology Delhi Has Announced New Research Programs For The Academic Year 2025...',
    },
    {
      id: 3,
      title: 'MIT World Peace University Opens Admissions',
      date: 'Jan 2, 2025',
      description: 'MIT World Peace University Has Started Their Admission Process For Various UG And PG Programs...',
    },
    {
      id: 4,
      title: 'VIT University Scholarship Program 2025',
      date: 'Jan 1, 2025',
      description: 'Vellore Institute of Technology Announces Scholarship Programs For Meritorious Students...',
    },
    {
      id: 5,
      title: 'BITS Pilani Campus Expansion Project',
      date: 'Jan 1, 2025',
      description: 'BITS Pilani Announces Major Campus Expansion Project For Enhanced Learning Experience...',
    },
    {
      id: 6,
      title: 'NIT Trichy Research Collaboration',
      date: 'Dec 31, 2024',
      description: 'National Institute of Technology Trichy Announces International Research Collaboration...',
    },
  ],
  'Admission Alerts': [
    {
      id: 1,
      title: 'AMUEEE 2025: Registration Process Begins; Apply by Feb 15',
      date: 'Jan 3, 2025',
      description: 'Aligarh Muslim University (AMU) Started The Online Registration Process Today. Applications For Aligarh Muslim University Engineering...',
    },
    {
      id: 2,
      title: 'DU Admission 2025: CUET Registration Opens',
      date: 'Jan 2, 2025',
      description: 'Delhi University Announces CUET Registration Process For UG Admissions 2025...',
    },
    {
      id: 3,
      title: 'IIIT Delhi BTech Admissions 2025',
      date: 'Jan 2, 2025',
      description: 'IIIT Delhi Opens Applications For BTech Programs Through JEE Main 2025...',
    },
    {
      id: 4,
      title: 'IIM CAT 2024 Results Announced',
      date: 'Jan 1, 2025',
      description: 'Indian Institutes of Management Announce CAT 2024 Results For MBA Admissions...',
    },
    {
      id: 5,
      title: 'NIFT 2025 Application Process Begins',
      date: 'Jan 1, 2025',
      description: 'National Institute of Fashion Technology Starts Application Process For Design Programs...',
    },
    {
      id: 6,
      title: 'ISI Admission Test 2025 Notification',
      date: 'Dec 31, 2024',
      description: 'Indian Statistical Institute Releases Admission Test Notification For Various Programs...',
    },
  ],
};

const LatestNewsAndStories = () => {
  const [selectedTab, setSelectedTab] = useState('Exam Alerts');
  const navigation = useNavigation();

  const handleNewsPress = (news, category) => {
    navigation.navigate('NewsContent', {
      newsData: news,
      category: category
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest News & Stories</Text>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
      >
        {Object.keys(newsData).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[
              styles.tabText,
              selectedTab === tab && styles.activeTabText
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.newsContainer}
        contentContainerStyle={styles.newsContentContainer}
      >
        {newsData[selectedTab].map((news) => (
          <TouchableOpacity
            key={news.id}
            style={styles.newsCard}
            onPress={() => handleNewsPress(news, selectedTab)}
          >
            <Text style={styles.newsDate}>{news.date}</Text>
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsDescription} numberOfLines={3}>
              {news.description}
            </Text>
            <View style={styles.readMoreContainer}>
              <Text style={styles.readMoreText}>Read more</Text>
              <AntDesign name="right" size={14} color="#FFA500" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  tabsContainer: {
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#1976d2',
    borderColor: '#1976d2',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '500',
  },
  newsContainer: {
    flexGrow: 0,
  },
  newsContentContainer: {
    paddingRight: 16,
  },
  newsCard: {
    width: 300,
    marginRight: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  newsDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
});

export default LatestNewsAndStories;
