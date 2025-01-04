import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const courseData = {
  Bachelors: [
    {
      id: 1,
      name: 'B.Com General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '69.39 K',
      colleges: '6740'
    },
    {
      id: 2,
      name: 'BCA General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.47 L',
      colleges: '5173'
    },
    {
      id: 3,
      name: 'BA General',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '45.39 K',
      colleges: '4012'
    },
    {
      id: 4,
      name: 'B.Tech',
      type: 'Full Time',
      duration: '4 Years',
      avgFees: '2.75 L',
      colleges: '3890'
    },
    {
      id: 5,
      name: 'BBA',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.85 L',
      colleges: '3567'
    },
    {
      id: 6,
      name: 'B.Sc',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '55.25 K',
      colleges: '4521'
    }
  ],
  Masters: [
    {
      id: 1,
      name: 'MBA General',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '2.85 L',
      colleges: '5240'
    },
    {
      id: 2,
      name: 'M.Tech',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '1.95 L',
      colleges: '3150'
    },
    {
      id: 3,
      name: 'MCA',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '1.65 L',
      colleges: '2890'
    },
    {
      id: 4,
      name: 'M.Com',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '75.50 K',
      colleges: '3450'
    },
    {
      id: 5,
      name: 'MA',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '55.75 K',
      colleges: '3980'
    },
    {
      id: 6,
      name: 'M.Sc',
      type: 'Full Time',
      duration: '2 Years',
      avgFees: '85.25 K',
      colleges: '4120'
    }
  ],
  Doctorate: [
    {
      id: 1,
      name: 'Ph.D in Management',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '3.25 L',
      colleges: '2150'
    },
    {
      id: 2,
      name: 'Ph.D in Engineering',
      type: 'Full Time',
      duration: '3-5 Years',
      avgFees: '2.95 L',
      colleges: '1850'
    },
    {
      id: 3,
      name: 'Ph.D in Science',
      type: 'Full Time',
      duration: '3-4 Years',
      avgFees: '2.45 L',
      colleges: '2250'
    },
    {
      id: 4,
      name: 'Ph.D in Arts',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '1.95 L',
      colleges: '1950'
    },
    {
      id: 5,
      name: 'Ph.D in Commerce',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '2.15 L',
      colleges: '1750'
    },
    {
      id: 6,
      name: 'Ph.D in Computer Science',
      type: 'Full Time',
      duration: '3-4 Years',
      avgFees: '2.75 L',
      colleges: '1650'
    }
  ],
  Diploma: [
    {
      id: 1,
      name: 'Diploma in Engineering',
      type: 'Full Time',
      duration: '3 Years',
      avgFees: '85.39 K',
      colleges: '5559'
    },
    {
      id: 2,
      name: 'Diploma in Business',
      type: 'Full Time',
      duration: '1 Year',
      avgFees: '75.50 K',
      colleges: '3250'
    },
    {
      id: 3,
      name: 'Diploma in IT',
      type: 'Full Time',
      duration: '1 Year',
      avgFees: '65.75 K',
      colleges: '2950'
    },
    {
      id: 4,
      name: 'Diploma in Hotel Management',
      type: 'Full Time',
      duration: '18 Months',
      avgFees: '95.25 K',
      colleges: '2450'
    },
    {
      id: 5,
      name: 'Diploma in Fashion Design',
      type: 'Full Time',
      duration: '1 Year',
      avgFees: '1.25 L',
      colleges: '1850'
    },
    {
      id: 6,
      name: 'Diploma in Digital Marketing',
      type: 'Full Time',
      duration: '6 Months',
      avgFees: '55.50 K',
      colleges: '2150'
    }
  ],
  Certification: [
    {
      id: 1,
      name: 'Digital Marketing',
      type: 'Full Time',
      duration: '6 Months',
      avgFees: '45.50 K',
      colleges: '3245'
    },
    {
      id: 2,
      name: 'Web Development',
      type: 'Full Time',
      duration: '4 Months',
      avgFees: '35.75 K',
      colleges: '2850'
    },
    {
      id: 3,
      name: 'Data Science',
      type: 'Full Time',
      duration: '6 Months',
      avgFees: '55.25 K',
      colleges: '2450'
    },
    {
      id: 4,
      name: 'Cloud Computing',
      type: 'Full Time',
      duration: '3 Months',
      avgFees: '40.50 K',
      colleges: '1950'
    },
    {
      id: 5,
      name: 'Artificial Intelligence',
      type: 'Full Time',
      duration: '6 Months',
      avgFees: '65.75 K',
      colleges: '1750'
    },
    {
      id: 6,
      name: 'Cyber Security',
      type: 'Full Time',
      duration: '4 Months',
      avgFees: '50.25 K',
      colleges: '2150'
    }
  ]
};

const ExploreCourses = () => {
  const [selectedTab, setSelectedTab] = useState('Bachelors');
  const tabs = ['Bachelors', 'Masters', 'Doctorate', 'Diploma', 'Certification'];

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
            onPress={() => {/* Handle course selection */}}
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
