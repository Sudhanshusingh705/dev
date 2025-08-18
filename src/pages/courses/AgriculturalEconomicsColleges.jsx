import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agricultural economics college data
const agriculturalEconomicsColleges = [
  {
    id: 'agecon-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Agricultural Economics', 'Ph.D. Agricultural Economics'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Agricultural Economics is the premier center for agricultural economic research in India. It offers specialized programs in farm management, agricultural policy, resource economics, and market analysis with state-of-the-art research facilities.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art econometrics laboratory',
      'International collaborations for economic research',
      'Leader in developing agricultural policy models',
      'Strong focus on farm income and sustainability'
    ],
    specializations: ['Agricultural Policy', 'Farm Management', 'Resource Economics', 'Market Analysis']
  },
  {
    id: 'agecon-2',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.8,
    courses: ['B.Sc. Agriculture with Economics Specialization', 'M.Sc. Agricultural Economics', 'Ph.D. Agricultural Economics'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Economics and Sociology specializes in farm economics, agricultural marketing, and rural development. It is known for its strong focus on Punjab\'s agricultural economy and policy analysis.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Leading research on farm household economics',
      'Strong focus on agricultural marketing',
      'Advanced studies on contract farming',
      'Pioneer in agricultural price analysis',
      'Excellent facilities for economic modeling'
    ],
    specializations: ['Farm Economics', 'Agricultural Marketing', 'Contract Farming', 'Price Analysis']
  },
  {
    id: 'agecon-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Economics', 'Ph.D. Agricultural Economics'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Agricultural Economics specializes in production economics, agricultural finance, and farm management. It is known for its research on southern India\'s agricultural value chains and risk management.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Pioneer in research on agricultural value chains',
      'Extensive agricultural market intelligence network',
      'Advanced studies on risk management',
      'Leading research on farmer producer organizations',
      'Strong focus on cost of cultivation studies'
    ],
    specializations: ['Production Economics', 'Agricultural Finance', 'Risk Management', 'Value Chain Analysis']
  },
  {
    id: 'agecon-4',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Economics', 'Ph.D. Agricultural Economics'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 4,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Agricultural Economics focuses on farm management, production economics, and agribusiness management. It is known for its comprehensive approach to agricultural economics and policy research.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Specialized in land economics',
      'Strong focus on production economics',
      'Advanced research on water resource economics',
      'Expertise in agricultural credit analysis',
      'Leading research on agricultural input management'
    ],
    specializations: ['Land Economics', 'Production Economics', 'Water Resource Economics', 'Agricultural Credit']
  },
  {
    id: 'agecon-5',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['M.Sc. Agricultural Economics', 'Ph.D. Agricultural Economics'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 5,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Agricultural Economics offers specialized programs in mountain agriculture economics, natural resource management, and agricultural development in hill regions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Leading research on hill farming economics',
      'Strong focus on natural resource valuation',
      'Advanced studies on mountain agriculture',
      'Pioneer in environmental economics',
      'Excellent facilities for spatial economic analysis'
    ],
    specializations: ['Hill Farming Economics', 'Natural Resource Economics', 'Environmental Economics', 'Mountain Agriculture']
  },
  {
    id: 'agecon-6',
    name: 'National Centre for Agricultural Economics and Policy Research (NCAP)',
    location: 'New Delhi',
    rating: 4.8,
    courses: ['Ph.D. Agricultural Economics', 'Post-doctoral Research'],
    fees: 'Fellowship and stipend basis',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'NCAP is a premier research institute dedicated exclusively to agricultural economics and policy research in India. It offers specialized research opportunities in policy analysis, agricultural growth, and food security.',
    imageUrl: 'https://www.ncap.res.in/upload/images/mainSite.jpg',
    highlights: [
      'India\'s dedicated agricultural economics research institute',
      'Strong focus on policy research',
      'Advanced studies on food security',
      'Leader in agricultural technology policy analysis',
      'Excellent network with global economics institutes'
    ],
    specializations: ['Agricultural Policy', 'Food Security', 'Agricultural Technology Policy', 'Institutional Economics']
  },
  {
    id: 'agecon-7',
    name: 'Institute of Economic Growth (IEG)',
    location: 'Delhi',
    rating: 4.7,
    courses: ['M.Phil. Agricultural Economics', 'Ph.D. Agricultural Economics'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 'Top Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'IEG\'s Agricultural Economics Research Unit is known for its interdisciplinary approach to agricultural and rural development studies. It offers specialized research in food policy, rural transformation, and agricultural growth.',
    imageUrl: 'https://www.iegindia.org/images/ieg-home.jpg',
    highlights: [
      'Interdisciplinary approach to agricultural economics',
      'Strong focus on rural transformation',
      'Advanced studies on food systems',
      'Leading research on agricultural labor markets',
      'Excellent network with international policy institutes'
    ],
    specializations: ['Food Policy', 'Rural Transformation', 'Agricultural Labor', 'Agricultural Growth']
  },
  {
    id: 'agecon-8',
    name: 'Indira Gandhi Institute of Development Research (IGIDR)',
    location: 'Mumbai, Maharashtra',
    rating: 4.7,
    courses: ['M.Sc. Economics with Agriculture Focus', 'Ph.D. Economics with Agriculture Specialization'],
    fees: 'INR 20,000 - 60,000 per annum',
    ranking: 'Top Economics Institute',
    nirf: 'N/A - Research Institute',
    description: 'IGIDR\'s Agricultural Economics program applies advanced economic methods to agricultural development issues. It is known for its rigorous quantitative approach to agricultural economics research.',
    imageUrl: 'http://www.igidr.ac.in/wp-content/themes/igidr/images/igidr-building.jpg',
    highlights: [
      'Advanced economic modeling of agricultural systems',
      'Strong focus on agricultural trade analysis',
      'Cutting-edge research on food price dynamics',
      'Leader in agricultural econometrics',
      'Excellent facilities for computational economics'
    ],
    specializations: ['Agricultural Trade', 'Food Price Analysis', 'Agricultural Econometrics', 'Development Economics']
  }
];

const AgriculturalEconomicsColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriculturalEconomicsColleges}
        streamType="Agricultural Economics"
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

export default AgriculturalEconomicsColleges; 