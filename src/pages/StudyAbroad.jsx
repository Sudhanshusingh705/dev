import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';;
import { useNavigation } from '@react-navigation/native';

const countryData = [
  {
    id: 1,
    country: 'USA',
    icon: 'https://www.shutterstock.com/image-vector/usa-america-set-circular-circle-600nw-2479083185.jpg',
    colleges: '1012',
    avgCost: '33.37 K USD/Year',
    checkColleges: 'Check 1012 Colleges',
    guides: [
      'Why Study in the USA?',
      'SOP for USA',
      'Exams for Studying in USA',
      'Post Study Opportunities in USA'
    ]
  },
  {
    id: 2,
    country: 'UK',
    icon: 'https://media.istockphoto.com/id/1324673683/vector/great-britain-flag-union-jack-round-logo-circle-icon-of-united-kingdom-flag-vector.jpg?s=612x612&w=0&k=20&c=Uebd1fcMXZ3QkOoVoOjteIXlej3KoTpEjqgnwEehk8g=',
    colleges: '170',
    avgCost: '21.75 K USD/Year',
    checkColleges: 'Check 170 Colleges',
    guides: [
      'Why Study in UK?',
      'SOP for UK',
      'UK Student VISA',
      'Cost to Study in UK'
    ]
  },
  {
    id: 3,
    country: 'Canada',
    icon: 'https://www.shutterstock.com/image-vector/canada-round-country-flag-circular-600nw-2102323963.jpg',
    colleges: '215',
    avgCost: '21.5 K USD/Year',
    checkColleges: 'Check 215 Colleges',
    guides: [
      'Why Study in Canada',
      'Top Universities to study',
      'SOP for Canada',
      'Work Study in Canada'
    ]
  },
  {
    id: 4,
    country: 'Australia',
    icon: 'https://media.istockphoto.com/id/1409313783/vector/australia-flag-round-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4Wu0Uo-mtUE0RiTpT49UMO1yBs1hi7QFYmF7_xp50JU=',
    colleges: '185',
    avgCost: '25.8 K USD/Year',
    checkColleges: 'Check 185 Colleges',
    guides: [
      'Why Study in Australia?',
      'SOP for Australia',
      'Student Visa Process',
      'Part-time Work Options'
    ]
  },
  {
    id: 5,
    country: 'Germany',
    icon: 'https://media.istockphoto.com/id/1059005644/vector/flag-of-germany-round-glossy-badge.jpg?s=612x612&w=0&k=20&c=c64gFo-wugMjdNt175zu1197BIdhQdwl0yu85m4oNOU=',
    colleges: '150',
    avgCost: '15.2 K USD/Year',
    checkColleges: 'Check 150 Colleges',
    guides: [
      'Why Study in Germany?',
      'German Education System',
      'Visa Requirements',
      'Free Education in Germany'
    ]
  },
  {
    id: 6,
    country: 'Ireland',
    icon: 'https://media.istockphoto.com/id/2156176817/vector/ireland-flag-irishman-flag-ireland-circle-flag.jpg?s=612x612&w=0&k=20&c=GhbfRdtDKAzmwTkoRZ_KuT7eDkunV4PdnQbrhXtp-uU=',
    colleges: '95',
    avgCost: '18.9 K USD/Year',
    checkColleges: 'Check 95 Colleges',
    guides: [
      'Why Study in Ireland?',
      'Irish Education System',
      'Student Visa Guide',
      'Post Study Work Visa'
    ]
  },
  {
    id: 7,
    country: 'New Zealand',
    icon: 'https://media.istockphoto.com/id/1492356409/vector/round-flag-of-new-zealand.jpg?s=612x612&w=0&k=20&c=Llb3k8FqNgSu_uuILAz_uN2TDX5-D4f7TgDz7nNJX3A=',
    colleges: '78',
    avgCost: '23.4 K USD/Year',
    checkColleges: 'Check 78 Colleges',
    guides: [
      'Why Study in New Zealand?',
      'Education System',
      'Visa Process',
      'Work While Studying'
    ]
  },
  {
    id: 8,
    country: 'Singapore',
    icon: 'https://img.freepik.com/premium-vector/round-flag-singapore-vector-illustration_739746-124.jpg',
    colleges: '65',
    avgCost: '28.5 K USD/Year',
    checkColleges: 'Check 65 Colleges',
    guides: [
      'Why Study in Singapore?',
      'Top Universities',
      'Visa Requirements',
      'Living in Singapore'
    ]
  },
  {
    id: 9,
    country: 'Netherlands',
    icon: 'https://cdn-icons-png.flaticon.com/512/323/323275.png',
    colleges: '85',
    avgCost: '16.8 K USD/Year',
    checkColleges: 'Check 85 Colleges',
    guides: [
      'Why Study in Netherlands?',
      'Dutch Education System',
      'Student Visa Guide',
      'Study in English'
    ]
  },
  {
    id: 10,
    country: 'France',
    icon: 'https://media.istockphoto.com/id/949014238/vector/france-flag-illustration.jpg?s=612x612&w=0&k=20&c=7eRs1otOtAxYrRsFU3lE3SCmpANUmArja_RJ_9w4O3Q=',
    colleges: '110',
    avgCost: '17.5 K USD/Year',
    checkColleges: 'Check 110 Colleges',
    guides: [
      'Why Study in France?',
      'French Education System',
      'Visa Process',
      'Language Requirements'
    ]
  }
];

const StudyAbroad = () => {
  const navigation = useNavigation();

  const handleCardPress = (country) => {
    navigation.navigate('StudyAbroadContent', {
      countryData: country
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Abroad</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {countryData.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card}
            onPress={() => handleCardPress(item)}
          >
            <View style={styles.cardHeader}>
              <Image 
                source={{ uri: item.icon }}
                style={styles.countryIcon}
                resizeMode="contain"
              />
              <View style={styles.headerContent}>
                <Text style={styles.countryName}>Study in {item.country}</Text>
                <TouchableOpacity style={styles.checkColleges}>
                  <Text style={styles.checkCollegesText}>{item.checkColleges}</Text>
                  <AntDesign name="right" size={14} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Ionicons name="school-outline" size={20} color="#666" />
                <View>
                  <Text style={styles.statValue}>{item.colleges}</Text>
                  <Text style={styles.statLabel}>No. Of Colleges</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <Ionicons name="cash-outline" size={20} color="#666" />
                <View>
                  <Text style={styles.statValue}>{item.avgCost}</Text>
                  <Text style={styles.statLabel}>Avg. Study Cost</Text>
                </View>
              </View>
            </View>

            <View style={styles.guidesSection}>
              <Text style={styles.guidesTitle}>Guides</Text>
              {item.guides.map((guide, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.guideItem}
                >
                  <Text style={styles.guideText}>{guide}</Text>
                  <AntDesign name="right" size={14} color="#666" />
                </TouchableOpacity>
              ))}
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
  scrollContent: {
    paddingRight: 16,
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryIcon: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eee',
  },
  headerContent: {
    flex: 1,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  checkColleges: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkCollegesText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  guidesSection: {
    gap: 12,
  },
  guidesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  guideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  guideText: {
    fontSize: 14,
    color: '#666',
  },
});

export default StudyAbroad;
