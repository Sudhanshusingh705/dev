import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agronomy college data
const agronomyColleges = [
  {
    id: 'agrn-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Agronomy is the premier center for agronomic research in India. It offers specialized programs in crop production, resource management, and sustainable farming systems with state-of-the-art research facilities.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art field research facilities',
      'International collaborations for agronomic research',
      'Leader in developing resource-efficient crop production technologies',
      'Strong focus on precision agriculture and digital farming'
    ],
    specializations: ['Cropping Systems', 'Nutrient Management', 'Conservation Agriculture', 'Precision Farming']
  },
  {
    id: 'agrn-2',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.8,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Agronomy is renowned for its research on crop production in irrigated farming systems. It has been instrumental in developing agronomic practices that led to the Green Revolution in Punjab.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Pioneer in agronomic research for the Green Revolution',
      'Extensive research facilities for field experiments',
      'Strong focus on rice-wheat cropping systems',
      'Leading research on resource conservation technologies',
      'Advanced studies on crop residue management'
    ],
    specializations: ['Irrigation Management', 'Rice-Wheat Systems', 'Resource Conservation', 'Weed Management']
  },
  {
    id: 'agrn-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Agronomy specializes in crop production systems suitable for southern India. It has strong expertise in tropical agriculture, dryland farming, and sustainable production systems.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on tropical crop production systems',
      'Strong focus on dryland agronomy',
      'Advanced studies on organic farming systems',
      'Innovative research on intercropping systems',
      'Pioneer in developing agronomic practices for climate resilience'
    ],
    specializations: ['Tropical Agronomy', 'Dryland Farming', 'Organic Farming', 'Climate-Smart Agriculture']
  },
  {
    id: 'agrn-4',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.6,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 4,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Agronomy specializes in crop production systems for the diverse agro-climatic zones of Andhra Pradesh. It has strong expertise in rainfed farming, rice-based cropping systems, and coastal agriculture.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Specialized research on rice-based cropping systems',
      'Strong focus on coastal agriculture',
      'Advanced studies on rainfed farming systems',
      'Pioneer in developing mechanized crop production technologies',
      'Leading research on crop diversification for sustainable farming'
    ],
    specializations: ['Rice-Based Systems', 'Coastal Agronomy', 'Rainfed Farming', 'Farm Mechanization']
  },
  {
    id: 'agrn-5',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 5,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Agronomy is renowned for its research on hill agriculture and temperate crop production. It has strong expertise in sustainable farming systems for the Himalayan region.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Pioneer in agronomic research for hill agriculture',
      'Extensive experimental farms at different altitudes',
      'Strong focus on conservation agriculture in hill slopes',
      'Advanced studies on agroforestry systems',
      'Leading research on organic farming in hill ecosystems'
    ],
    specializations: ['Hill Agriculture', 'Temperate Crop Production', 'Agroforestry', 'Organic Farming']
  },
  {
    id: 'agrn-6',
    name: 'Banaras Hindu University (BHU)',
    location: 'Varanasi, Uttar Pradesh',
    rating: 4.5,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 6,
    nirf: 'Top 15 in Agriculture',
    description: 'BHU\'s Department of Agronomy is known for its research on sustainable crop production systems for the Indo-Gangetic plains. It has strong expertise in conservation agriculture, integrated farming systems, and organic farming.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Institute_of_Agricultural_Sciences%2C_BHU_Logo.svg/220px-Institute_of_Agricultural_Sciences%2C_BHU_Logo.svg.png',
    highlights: [
      'Leading research on conservation agriculture',
      'Strong focus on crop diversification',
      'Advanced studies on integrated farming systems',
      'Pioneer in developing agronomic practices for organic farming',
      'Innovative research on crop residue management'
    ],
    specializations: ['Conservation Agriculture', 'Integrated Farming Systems', 'Organic Farming', 'Residue Management']
  },
  {
    id: 'agrn-7',
    name: 'Chaudhary Charan Singh Haryana Agricultural University (CCSHAU)',
    location: 'Hisar, Haryana',
    rating: 4.5,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 7,
    nirf: 'Top 20 in Agriculture',
    description: 'CCSHAU\'s Department of Agronomy is renowned for its research on dryland farming and wheat-based cropping systems. It has strong expertise in water-efficient crop production and conservation agriculture.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/CCS_HAU_HISAR_MAIN_BUILDING.jpg/800px-CCS_HAU_HISAR_MAIN_BUILDING.jpg',
    highlights: [
      'Pioneer in agronomic research for dryland farming',
      'Extensive research on wheat-based cropping systems',
      'Strong focus on water-efficient crop production',
      'Advanced studies on conservation agriculture',
      'Leading research on salinity management in crops'
    ],
    specializations: ['Dryland Farming', 'Wheat-Based Systems', 'Water Management', 'Salinity Management']
  },
  {
    id: 'agrn-8',
    name: 'Mahatma Phule Krishi Vidyapeeth (MPKV)',
    location: 'Rahuri, Maharashtra',
    rating: 4.4,
    courses: ['B.Sc. Agriculture with Agronomy Specialization', 'M.Sc. Agronomy', 'Ph.D. Agronomy'],
    fees: 'INR 8,000 - 30,000 per annum',
    ranking: 8,
    nirf: 'Top 25 in Agriculture',
    description: 'MPKV\'s Department of Agronomy specializes in dryland farming and rainfed agriculture. It has strong expertise in developing water-efficient cropping systems for drought-prone areas of Maharashtra.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MPKV_Rahuri_Campus.jpg/800px-MPKV_Rahuri_Campus.jpg',
    highlights: [
      'Leading research on dryland agriculture',
      'Strong focus on watershed-based farming systems',
      'Advanced studies on drought-resistant cropping patterns',
      'Pioneer in developing intercropping systems for rainfed areas',
      'Innovative research on protective irrigation techniques'
    ],
    specializations: ['Dryland Agriculture', 'Watershed Management', 'Intercropping Systems', 'Protective Irrigation']
  }
];

const AgronomyColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agronomyColleges}
        streamType="Agronomy"
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

export default AgronomyColleges; 