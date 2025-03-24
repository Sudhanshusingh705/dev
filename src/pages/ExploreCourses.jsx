import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const courseData = {
  Bachelors: [
    {
      id: 1,
      name: 'B.Com General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '70.34 K',
      colleges: '6759'
    },
    {
      id: 2,
      name: 'B.Ed General',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '88.55 K',
      colleges: '5565'
    },
    {
      id: 3,
      name: 'BCA General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.48 L',
      colleges: '5192'
    },
    {
      id: 4,
      name: 'BA General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '46.02 K',
      colleges: '4060'
    },
    {
      id: 5,
      name: 'BBA General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.77 L',
      colleges: '3763'
    }
  ],
  Masters: [
    {
      id: 1,
      name: 'MBA General',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '2.61 L',
      colleges: '5775'
    },
    {
      id: 2,
      name: 'MCA',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '1.64 L',
      colleges: '3869'
    },
    {
      id: 3,
      name: 'M.Com General',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '51.39 K',
      colleges: '3212'
    },
    {
      id: 4,
      name: 'MBA Finance',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '2.51 L',
      colleges: '2828'
    },
    {
      id: 5,
      name: 'MBA Marketing',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '2.50 L',
      colleges: '2699'
    }
  ],
  Doctorate: [
    {
      id: 1,
      name: 'Ph.D in Chemistry',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.99 L',
      colleges: '1030'
    },
    {
      id: 2,
      name: 'Ph.D in Physics',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '2.02 L',
      colleges: '963'
    },
    {
      id: 3,
      name: 'Ph.D in Mathematics',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.98 L',
      colleges: '952'
    },
    {
      id: 4,
      name: 'Ph.D.',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '1.47 L',
      colleges: '845'
    },
    {
      id: 5,
      name: 'Ph.D Mechanical Engineering',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '2.32 L',
      colleges: '792'
    }
  ],
  Diploma: [
    {
      id: 1,
      name: 'Polytechnic Mechanical Engineering',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '98.85 K',
      colleges: '3744'
    },
    {
      id: 2,
      name: 'Polytechnic Civil Engineering',
      type: 'Full Time',
      duration: '3 Year',
      avgFees: '97.21 K',
      colleges: '3494'
    },
    {
      id: 3,
      name: 'Polytechnic Electrical Engineering',
      type: 'Full Time',
      duration: '3 Year',
      avgFees: '1.01 L',
      colleges: '2141'
    },
    {
      id: 4,
      name: 'D.Pharm Pharmacy',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '1.44 L',
      colleges: '2036'
    },
    {
      id: 5,
      name: 'Polytechnic Electronics & Communication',
      type: 'Full Time',
      duration: '3 Year',
      avgFees: '84.38 K',
      colleges: '1882'
    }
  ],
  Certification: [
    {
      id: 1,
      name: 'Certification French',
      type: 'Full Time',
      duration: '1 Year',
      avgFees: '9.24 K',
      colleges: '193'
    },
    {
      id: 2,
      name: 'Certification Fashion Design',
      type: 'Full Time',
      duration: '1 Year',
      avgFees: '77.32 K',
      colleges: '191'
    },
    {
      id: 3,
      name: 'Certification Web Designing',
      type: 'Full Time',
      duration: '1.6 Year',
      avgFees: '30.03 K',
      colleges: '188'
    },
    {
      id: 4,
      name: 'Certification Yoga',
      type: 'Full Time',
      duration: '1 Year',
      avgFees: '9.87 K',
      colleges: '182'
    },
    {
      id: 5,
      name: 'Certification Interior Design',
      type: 'Full Time',
      duration: '6 Months',
      avgFees: '83.26 K',
      colleges: '172'
    }
  ]
};

const ExploreCourses = () => {
  const [selectedTab, setSelectedTab] = useState('Bachelors');
  const tabs = ['Bachelors', 'Masters', 'Doctorate', 'Diploma', 'Certification'];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Courses</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
      >
        {tabs.map((tab) => (
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
        style={styles.cardsContainer}
      >
        {courseData[selectedTab]?.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.card}
            onPress={() => navigation.navigate('CourseDetails', { course })}
          >
            <Text style={styles.courseType}>{course.type}</Text>
            <Text style={styles.courseName}>{course.name}</Text>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Duration</Text>
              <Text style={styles.detailValue}>{course.duration}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Total Avg. Fees</Text>
              <Text style={styles.detailValue}>{course.avgFees}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Colleges</Text>
              <Text style={styles.detailValue}>{course.colleges}</Text>
            </View>

            <TouchableOpacity style={styles.overviewButton}>
              <Text style={styles.overviewButtonText}>Course Overview</Text>
              <AntDesign name="right" size={16} color="#666" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
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
  },
  activeTab: {
    backgroundColor: '#007AFF',
    borderWidth: 0,
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  cardsContainer: {
    marginLeft: -8,
  },
  card: {
    width: 280,
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  courseType: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  overviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  overviewButtonText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
});

export default ExploreCourses;
