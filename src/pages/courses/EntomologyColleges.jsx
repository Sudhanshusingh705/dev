import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real entomology college data
const entomologyColleges = [
  {
    id: 'ento-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Entomology is the premier center for insect research in India. It offers specialized programs in insect taxonomy, pest management, insect ecology, and biological control with state-of-the-art research facilities.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art insect systematics laboratory',
      'International collaborations for entomological research',
      'Leader in developing IPM strategies for major crops',
      'Strong focus on molecular entomology'
    ],
    specializations: ['Insect Taxonomy', 'IPM', 'Molecular Entomology', 'Biological Control']
  },
  {
    id: 'ento-2',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.8,
    courses: ['B.Sc. Agriculture with Entomology Specialization', 'M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Agricultural Entomology specializes in tropical insect pests and offers comprehensive education in pest diagnosis, management, and biological control with a focus on crops of southern India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on tropical insect pests',
      'Strong focus on natural enemy conservation',
      'Advanced studies on insecticide resistance management',
      'Pioneer in developing IPM packages for tropical crops',
      'Excellent facilities for molecular entomology'
    ],
    specializations: ['Tropical Insect Pests', 'Insecticide Resistance', 'Biological Control', 'IPM']
  },
  {
    id: 'ento-3',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Entomology specializes in field crop pests and has strong expertise in wheat pests, rice pests, and cotton bollworms. It is known for its research on insecticides and integrated pest management.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Pioneer in research on cotton bollworm management',
      'Extensive field pest monitoring network',
      'Advanced studies on insecticide resistance',
      'Leading research on pest forecasting systems',
      'Strong focus on stored grain pests'
    ],
    specializations: ['Field Crop Pests', 'Insecticide Research', 'Pest Forecasting', 'Stored Grain Pests']
  },
  {
    id: 'ento-4',
    name: 'Kerala Agricultural University (KAU)',
    location: 'Thrissur, Kerala',
    rating: 4.7,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 4,
    nirf: 'Top 20 in Agriculture',
    description: 'KAU\'s Department of Entomology specializes in pests of plantation crops, spices, and tropical fruits. It has strong expertise in biological control and insect ecology.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Kerala_Agricultural_University_Logo.svg/220px-Kerala_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in plantation crop pests',
      'Strong focus on coconut and arecanut pests',
      'Advanced research on tropical fruit pests',
      'Expertise in natural enemy conservation',
      'Leading research on biological control agents'
    ],
    specializations: ['Plantation Crop Pests', 'Biocontrol', 'Insect Ecology', 'Tropical Fruit Pests']
  },
  {
    id: 'ento-5',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.6,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 5,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Entomology specializes in pests of pulses, rice, and cotton. It has strong expertise in host plant resistance, pheromone technology, and IPM strategies.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Leading research on rice pest management',
      'Strong focus on pulse crop pests',
      'Advanced studies on pheromone technology',
      'Pioneer in host plant resistance research',
      'Excellent facilities for insect rearing'
    ],
    specializations: ['Rice Pests', 'Pulse Crop Pests', 'Host Plant Resistance', 'Pheromone Technology']
  },
  {
    id: 'ento-6',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 6,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Entomology offers specialized education in insect pests of hill crops and temperate fruits. It has strong expertise in forest entomology and pollinator conservation.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Specialized in hill crop pests',
      'Strong focus on temperate fruit pests',
      'Advanced research on forest entomology',
      'Expertise on pollinator conservation',
      'Leading research on high-altitude insect ecology'
    ],
    specializations: ['Hill Crop Pests', 'Forest Entomology', 'Pollinator Conservation', 'Fruit Pests']
  },
  {
    id: 'ento-7',
    name: 'Assam Agricultural University',
    location: 'Jorhat, Assam',
    rating: 4.5,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 7,
    nirf: 'Top 30 in Agriculture',
    description: 'AAU\'s Department of Entomology specializes in pests of tea, rice, and subtropical fruits. It has strong expertise in insect biodiversity conservation and biological control in high rainfall areas.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Assam_Agricultural_University_Logo.png',
    highlights: [
      'Expertise in tea pest management',
      'Leading research on pests in high rainfall conditions',
      'Advanced studies on insect biodiversity',
      'Pioneer in biocontrol for Northeast India',
      'Strong focus on indigenous pest management practices'
    ],
    specializations: ['Tea Pests', 'Rice Pests', 'Insect Biodiversity', 'Biocontrol in High Rainfall Areas']
  },
  {
    id: 'ento-8',
    name: 'Dr. Y.S. Parmar University of Horticulture and Forestry',
    location: 'Solan, Himachal Pradesh',
    rating: 4.5,
    courses: ['M.Sc. Entomology', 'Ph.D. Entomology'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 8,
    nirf: 'Top 40 in Agriculture',
    description: 'Dr. Y.S. Parmar University\'s Department of Entomology specializes in pests of horticultural crops and forest trees. It has strong expertise in apple insect pests, stored product pests, and apiculture.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Dr._Y.S._Parmar_University_of_Horticulture_and_Forestry_logo.png',
    highlights: [
      'Specialized in horticultural crop pests',
      'Strong focus on apple insect pests',
      'Advanced research on forest insect pests',
      'Expertise in apiculture and pollination',
      'Leading research on beneficial insects'
    ],
    specializations: ['Apple Pests', 'Forest Insect Pests', 'Apiculture', 'Stored Product Pests']
  }
];

const EntomologyColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={entomologyColleges}
        streamType="Entomology"
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

export default EntomologyColleges; 