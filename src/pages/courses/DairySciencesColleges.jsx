import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real dairy sciences college data
const dairySciencesColleges = [
  {
    id: 'dairy-1',
    name: 'National Dairy Research Institute (NDRI)',
    location: 'Karnal, Haryana',
    rating: 4.9,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology', 'Ph.D. Dairy Science'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Dairy Science',
    description: 'NDRI is India\'s premier institute for dairy research and education, established in 1923. It offers comprehensive programs in dairy technology, dairy microbiology, dairy chemistry, and dairy economics with state-of-the-art research facilities.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/NDRI_logo.jpg',
    highlights: [
      'India\'s premier dairy research institute',
      'State-of-the-art dairy processing facilities',
      'International collaborations for dairy research',
      'Leader in developing improved dairy technologies',
      'Strong focus on value-added dairy products research'
    ],
    specializations: ['Dairy Technology', 'Dairy Microbiology', 'Dairy Chemistry', 'Dairy Economics']
  },
  {
    id: 'dairy-2',
    name: 'Anand Agricultural University - SMC College of Dairy Science',
    location: 'Anand, Gujarat',
    rating: 4.8,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology', 'Ph.D. Dairy Science'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Dairy Science',
    description: 'SMC College of Dairy Science at Anand Agricultural University is located in India\'s milk capital. It offers specialized education in dairy technology and dairy processing with strong connections to Amul and the cooperative dairy sector.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Anand_Agricultural_University_Logo.svg/220px-Anand_Agricultural_University_Logo.svg.png',
    highlights: [
      'Located in India\'s milk capital - Anand',
      'Strong connection with Amul and dairy cooperatives',
      'Excellent dairy processing facilities',
      'Pioneer in cooperative dairy education',
      'Strong focus on dairy product development'
    ],
    specializations: ['Dairy Technology', 'Dairy Engineering', 'Dairy Product Development', 'Dairy Business Management']
  },
  {
    id: 'dairy-3',
    name: 'SRS Institute of Dairy Technology, KVAFSU',
    location: 'Bengaluru, Karnataka',
    rating: 4.7,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology', 'Ph.D. Dairy Science'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Dairy Science',
    description: 'SRS Institute of Dairy Technology under Karnataka Veterinary, Animal and Fisheries Sciences University offers specialized education in dairy technology with a focus on southern India\'s dairy sector. It has strong expertise in indigenous dairy products.',
    imageUrl: 'https://www.kvafsu.edu.in/images/logo.png',
    highlights: [
      'Specialized in dairy sciences for South Indian dairy sector',
      'Strong focus on indigenous dairy products',
      'Advanced research on dairy starter cultures',
      'Excellent dairy processing facilities',
      'Strong industry connections with Karnataka Milk Federation'
    ],
    specializations: ['Dairy Technology', 'Indigenous Dairy Products', 'Dairy Microbiology', 'Dairy Engineering']
  },
  {
    id: 'dairy-4',
    name: 'College of Dairy Technology, SVVU',
    location: 'Tirupati, Andhra Pradesh',
    rating: 4.6,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 4,
    nirf: 'Rank 4 in Dairy Science',
    description: 'The College of Dairy Technology at Sri Venkateswara Veterinary University offers comprehensive education in dairy technology with a focus on processing and product development for the dairy industry in Andhra Pradesh.',
    imageUrl: 'https://www.svvu.edu.in/images/logo-new.png',
    highlights: [
      'Specialized in dairy technology for Andhra Pradesh',
      'Strong focus on dairy product development',
      'Advanced dairy processing laboratory',
      'Close association with Andhra Pradesh dairy industry',
      'Focus on entrepreneurship in dairy sector'
    ],
    specializations: ['Dairy Processing', 'Dairy Product Development', 'Dairy Engineering', 'Dairy Business Management']
  },
  {
    id: 'dairy-5',
    name: 'College of Dairy Science and Technology, GADVASU',
    location: 'Ludhiana, Punjab',
    rating: 4.6,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology', 'Ph.D. Dairy Science'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 5,
    nirf: 'Rank 5 in Dairy Science',
    description: 'The College of Dairy Science and Technology at Guru Angad Dev Veterinary and Animal Sciences University offers specialized education in dairy technology with a focus on the dairy industry in Punjab and northern India.',
    imageUrl: 'https://gadvasu.gov.in/images/LOGO_GADVASU.jpeg',
    highlights: [
      'Specialized in dairy technology for North Indian dairy sector',
      'Strong focus on mechanized dairy processing',
      'Advanced research on buffalo milk processing',
      'Excellent dairy product development facilities',
      'Strong industry connections with Punjab dairy cooperatives'
    ],
    specializations: ['Buffalo Milk Technology', 'Dairy Processing Automation', 'Dairy Product Development', 'Dairy Quality Assurance']
  },
  {
    id: 'dairy-6',
    name: 'College of Dairy Technology, MAFSU',
    location: 'Warud (Pusad), Maharashtra',
    rating: 4.5,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 6,
    nirf: 'Not Ranked',
    description: 'The College of Dairy Technology under Maharashtra Animal and Fishery Sciences University offers specialized education in dairy technology with a focus on the dairy industry in Maharashtra. It has strong expertise in dairy product development.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/38/Maharashtra_Animal_%26_Fishery_Sciences_University_logo.png',
    highlights: [
      'Specialized in dairy technology for Western India',
      'Strong focus on traditional dairy products',
      'Advanced research on dairy starter cultures',
      'Excellent dairy processing facilities',
      'Strong industry connections with Maharashtra dairy cooperatives'
    ],
    specializations: ['Dairy Product Development', 'Traditional Dairy Products', 'Dairy Microbiology', 'Dairy Business Management']
  },
  {
    id: 'dairy-7',
    name: 'College of Dairy and Food Science Technology, RAJUVAS',
    location: 'Udaipur, Rajasthan',
    rating: 4.4,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology'],
    fees: 'INR 8,000 - 30,000 per annum',
    ranking: 7,
    nirf: 'Not Ranked',
    description: 'The College of Dairy and Food Science Technology at Rajasthan University of Veterinary and Animal Sciences offers specialized education in dairy technology with a focus on the dairy industry in Rajasthan. It has strong expertise in desert area dairy technology.',
    imageUrl: 'http://www.rajuvas.org/images/rajuvas-logo.png',
    highlights: [
      'Specialized in dairy technology for arid regions',
      'Strong focus on camel milk processing',
      'Advanced research on dairy product shelf-life extension',
      'Research on traditional Rajasthani dairy products',
      'Focus on water-efficient dairy processing'
    ],
    specializations: ['Camel Milk Technology', 'Desert Dairy Technology', 'Traditional Dairy Products', 'Water-Efficient Processing']
  },
  {
    id: 'dairy-8',
    name: 'College of Dairy Technology, WBUAFS',
    location: 'Mohanpur, West Bengal',
    rating: 4.4,
    courses: ['B.Tech Dairy Technology', 'M.Tech Dairy Technology'],
    fees: 'INR 8,000 - 30,000 per annum',
    ranking: 8,
    nirf: 'Not Ranked',
    description: 'The College of Dairy Technology at West Bengal University of Animal and Fishery Sciences offers specialized education in dairy technology with a focus on the dairy industry in eastern India. It has strong expertise in indigenous dairy products of Eastern India.',
    imageUrl: 'https://wbuafscl.ac.in/assets/img/logo-wbuafs.png',
    highlights: [
      'Specialized in dairy technology for Eastern India',
      'Strong focus on indigenous Bengali dairy products',
      'Advanced research on dairy product shelf-life',
      'Research on traditional sweetened dairy products',
      'Focus on small-scale dairy processing units'
    ],
    specializations: ['Bengali Dairy Products', 'Sweetened Dairy Products', 'Small-scale Dairy Processing', 'Dairy Entrepreneurship']
  }
];

const DairySciencesColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={dairySciencesColleges}
        streamType="Dairy Sciences"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DairySciencesColleges; 