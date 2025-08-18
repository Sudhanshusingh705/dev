import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real horticulture college data
const horticultureColleges = [
  {
    id: 'hort-1',
    name: 'Indian Institute of Horticultural Research (IIHR)',
    location: 'Bengaluru, Karnataka',
    rating: 4.8,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Horticulture',
    description: 'Established in 1967, IIHR is a premier research institute under ICAR dedicated to research on fruits, vegetables, ornamental, medicinal and aromatic plants. It has developed over 300 improved varieties/hybrids of horticultural crops.',
    imageUrl: 'https://www.iihr.res.in/sites/default/files/styles/_575x390/public/2020-02/iihr-main-building.jpg',
    highlights: [
      'Premier institute for horticultural research in India',
      'State-of-the-art laboratories and experimental farms',
      'Over a dozen internationally recognized varieties developed',
      'Strong focus on sustainable horticulture practices',
      'Global collaborations for horticultural development'
    ],
    specializations: ['Fruit Science', 'Vegetable Science', 'Floriculture', 'Post-Harvest Technology']
  },
  {
    id: 'hort-2',
    name: 'College of Horticulture, Kerala Agricultural University',
    location: 'Thrissur, Kerala',
    rating: 4.7,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 12,000 - 35,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Horticulture',
    description: 'The College of Horticulture at KAU specializes in tropical horticultural crops, spices, plantation crops, and medicinal plants. It has been instrumental in developing horticultural practices suitable for Kerala\'s unique climate.',
    imageUrl: 'https://kau.in/sites/default/files/styles/banner_image_crop/public/2018-09/coh_11.JPG',
    highlights: [
      'Specialized in tropical horticulture',
      'Strong focus on spice crops research',
      'Advanced facilities for tissue culture and biotechnology',
      'Comprehensive curriculum covering all aspects of horticulture',
      'Strong industry linkages for student placement'
    ],
    specializations: ['Plantation Crops', 'Spices', 'Medicinal Plants', 'Tropical Fruits']
  },
  {
    id: 'hort-3',
    name: 'Dr. Y.S.R. Horticultural University',
    location: 'Venkataramannagudem, Andhra Pradesh',
    rating: 4.6,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Horticulture',
    description: 'Established in 2007, Dr. YSR Horticultural University is exclusively dedicated to horticultural education and research. It focuses on developing improved varieties of horticultural crops suitable for Andhra Pradesh\'s diverse agro-climatic zones.',
    imageUrl: 'https://www.drysrhu.edu.in/Images/Slider/drysrhu_banner.jpg',
    highlights: [
      'Dedicated horticultural university',
      'Strong focus on drip irrigation and precision farming',
      'Advanced research on mango, banana, and citrus crops',
      'Extensive network of research stations across Andhra Pradesh',
      'Industry-oriented curriculum with hands-on training'
    ],
    specializations: ['Fruit Science', 'Vegetable Science', 'Post-Harvest Technology', 'Floriculture']
  },
  {
    id: 'hort-4',
    name: 'University of Horticultural Sciences',
    location: 'Bagalkot, Karnataka',
    rating: 4.5,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 12,000 - 35,000 per annum',
    ranking: 4,
    nirf: 'Rank 4 in Horticulture',
    description: 'Established in 2009, UHS Bagalkot is dedicated to horticulture education, research, and extension activities in North Karnataka. It specializes in dry land horticulture and has developed several technologies for efficient water use in horticultural crops.',
    imageUrl: 'https://uhsbagalkot.edu.in/images/banner/slide1.jpg',
    highlights: [
      'Specialized in dry land horticulture',
      'Strong focus on pomegranate and grape research',
      'Advanced facilities for plant tissue culture',
      'Industry-academia partnerships for practical training',
      'Extensive research on protected cultivation techniques'
    ],
    specializations: ['Dry Land Horticulture', 'Pomology', 'Protected Cultivation', 'Post-Harvest Technology']
  },
  {
    id: 'hort-5',
    name: 'College of Horticulture, Dr. PDKV',
    location: 'Akola, Maharashtra',
    rating: 4.5,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 5,
    nirf: 'Rank 5 in Horticulture',
    description: 'The College of Horticulture at Dr. Panjabrao Deshmukh Krishi Vidyapeeth (PDKV) focuses on horticultural crops suitable for the Vidarbha region of Maharashtra. It has developed several technologies for citrus and vegetable cultivation in semi-arid regions.',
    imageUrl: 'https://pdkv.ac.in/wp-content/uploads/2020/06/CoH-Akola.jpg',
    highlights: [
      'Specialized in semi-arid horticulture',
      'Strong focus on citrus research',
      'Advanced facilities for vegetable breeding',
      'Comprehensive curriculum with hands-on training',
      'Strong industry linkages for student placement'
    ],
    specializations: ['Citrus Cultivation', 'Vegetable Science', 'Ornamental Horticulture', 'Fruit Science']
  },
  {
    id: 'hort-6',
    name: 'College of Horticulture and Forestry, CAU',
    location: 'Pasighat, Arunachal Pradesh',
    rating: 4.4,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 8,000 - 25,000 per annum',
    ranking: 6,
    nirf: 'Rank 6 in Horticulture',
    description: 'Established in 2001 under Central Agricultural University, this college specializes in horticultural crops suitable for the North-Eastern region of India. It has been instrumental in developing sustainable horticultural practices for hilly terrains.',
    imageUrl: 'https://www.cau.ac.in/sites/default/files/colleges/Passport%20college/COHF%20Pasighat/3A.jpg',
    highlights: [
      'Specialized in hill horticulture',
      'Strong focus on indigenous fruits of Northeast India',
      'Advanced research on organic horticulture',
      'Comprehensive curriculum with focus on regional needs',
      'Extensive outreach programs for tribal farmers'
    ],
    specializations: ['Hill Horticulture', 'Indigenous Fruits', 'Organic Horticulture', 'Medicinal Plants']
  },
  {
    id: 'hort-7',
    name: 'College of Horticulture, TNAU',
    location: 'Periyakulam, Tamil Nadu',
    rating: 4.4,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 7,
    nirf: 'Rank 7 in Horticulture',
    description: 'The College of Horticulture at TNAU Periyakulam specializes in horticultural crops suitable for Southern Tamil Nadu. It has been at the forefront of research on mango, banana, and vegetable crops, with several improved varieties to its credit.',
    imageUrl: 'https://tnau.ac.in/wp-content/uploads/2020/03/Capture.jpg',
    highlights: [
      'Specialized in tropical fruit crops',
      'Strong focus on mango and banana research',
      'Advanced facilities for vegetable breeding',
      'Comprehensive curriculum with industry exposure',
      'Strong focus on value addition and processing'
    ],
    specializations: ['Fruit Science', 'Vegetable Science', 'Floriculture', 'Post-Harvest Technology']
  },
  {
    id: 'hort-8',
    name: 'College of Horticulture, OUAT',
    location: 'Chiplima, Odisha',
    rating: 4.3,
    courses: ['B.Sc. Horticulture', 'M.Sc. Horticulture', 'Ph.D. Horticulture'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 8,
    nirf: 'Rank 8 in Horticulture',
    description: 'The College of Horticulture at Orissa University of Agriculture and Technology (OUAT) focuses on horticultural crops suitable for Odisha\'s diverse agro-climatic zones. It has developed several technologies for vegetable and fruit cultivation in coastal regions.',
    imageUrl: 'https://ouat.ac.in/wp-content/uploads/2020/07/10-1.jpg',
    highlights: [
      'Specialized in coastal horticulture',
      'Strong focus on cashew and coconut research',
      'Advanced facilities for vegetable breeding',
      'Comprehensive curriculum with hands-on training',
      'Extensive outreach programs for coastal farmers'
    ],
    specializations: ['Cashew and Coconut', 'Vegetable Science', 'Floriculture', 'Fruit Science']
  }
];

const HorticultureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={horticultureColleges}
        streamType="Horticulture"
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

export default HorticultureColleges; 