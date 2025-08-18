import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real plant pathology college data
const plantPathologyColleges = [
  {
    id: 'path-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Plant Pathology is the premier center for plant disease research in India. It offers specialized programs in mycology, virology, bacteriology, and nematology with state-of-the-art research facilities for disease diagnostics and management.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art plant disease diagnostic facilities',
      'International collaborations for plant pathology research',
      'Leader in developing disease-resistant crop varieties',
      'Strong focus on molecular plant pathology'
    ],
    specializations: ['Mycology', 'Plant Virology', 'Bacteriology', 'Nematology']
  },
  {
    id: 'path-2',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.8,
    courses: ['B.Sc. Agriculture with Plant Pathology Specialization', 'M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Plant Pathology specializes in tropical plant diseases and offers comprehensive education in disease diagnosis, management, and biological control with a focus on crops of southern India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on tropical plant diseases',
      'Strong focus on biological control methods',
      'Advanced studies on induced disease resistance',
      'Pioneer in developing IPM packages for tropical crops',
      'Excellent facilities for molecular plant pathology'
    ],
    specializations: ['Tropical Plant Diseases', 'Biological Control', 'Induced Disease Resistance', 'Integrated Disease Management']
  },
  {
    id: 'path-3',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Plant Pathology specializes in diseases of field crops and has strong expertise in wheat rusts, rice diseases, and cotton pathogens. It is known for its research on fungicides and integrated disease management.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Pioneer in research on wheat rust diseases',
      'Extensive field disease monitoring network',
      'Advanced studies on fungicide resistance',
      'Leading research on disease forecasting systems',
      'Strong focus on epidemiological studies'
    ],
    specializations: ['Wheat Diseases', 'Rice Diseases', 'Fungicide Research', 'Disease Epidemiology']
  },
  {
    id: 'path-4',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.7,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Plant Pathology offers specialized education in diseases of hill crops and temperate fruit trees. It has strong expertise in forest pathology and mushroom diseases.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Specialized in diseases of hill crops',
      'Strong focus on temperate fruit tree diseases',
      'Advanced research on forest pathology',
      'Expertise on mushroom diseases and their management',
      'Leading research on biocontrol agents for hill regions'
    ],
    specializations: ['Hill Crop Diseases', 'Forest Pathology', 'Mushroom Diseases', 'Fruit Tree Pathology']
  },
  {
    id: 'path-5',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.6,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 5,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Plant Pathology specializes in diseases of pulses, oilseeds, and rice. It has strong expertise in soil-borne diseases, post-harvest pathogens, and integrated disease management.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Leading research on pulse crop diseases',
      'Strong focus on soil-borne pathogens',
      'Advanced studies on post-harvest diseases',
      'Pioneer in integrated disease management for rainfed crops',
      'Excellent facilities for disease diagnostics'
    ],
    specializations: ['Pulse Crop Diseases', 'Soil-borne Pathogens', 'Post-harvest Diseases', 'Rice Diseases']
  },
  {
    id: 'path-6',
    name: 'Assam Agricultural University',
    location: 'Jorhat, Assam',
    rating: 4.6,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 6,
    nirf: 'Top 30 in Agriculture',
    description: 'AAU\'s Department of Plant Pathology specializes in diseases of plantation crops and subtropical fruits. It has strong expertise in disease management under high rainfall conditions and molecular diagnostics.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Assam_Agricultural_University_Logo.png',
    highlights: [
      'Expertise in tea plantation diseases',
      'Leading research on diseases under high rainfall conditions',
      'Advanced studies on citrus diseases',
      'Pioneer in integrated disease management for North East India',
      'Strong focus on molecular diagnostics'
    ],
    specializations: ['Tea Diseases', 'Citrus Diseases', 'Diseases in High Rainfall Areas', 'Molecular Diagnostics']
  },
  {
    id: 'path-7',
    name: 'Kerala Agricultural University (KAU)',
    location: 'Thrissur, Kerala',
    rating: 4.5,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 7,
    nirf: 'Top 20 in Agriculture',
    description: 'KAU\'s Department of Plant Pathology specializes in diseases of spices, plantation crops, and tropical fruits. It has strong expertise in biological control and fungal taxonomy.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Kerala_Agricultural_University_Logo.svg/220px-Kerala_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in diseases of spice crops',
      'Strong focus on plantation crop diseases',
      'Advanced research on tropical fruit diseases',
      'Expertise in fungal taxonomy and identification',
      'Leading research on biological control agents'
    ],
    specializations: ['Spice Crop Diseases', 'Plantation Crop Diseases', 'Tropical Fruit Diseases', 'Biological Control']
  },
  {
    id: 'path-8',
    name: 'Dr. Y.S. Parmar University of Horticulture and Forestry',
    location: 'Solan, Himachal Pradesh',
    rating: 4.5,
    courses: ['M.Sc. Plant Pathology', 'Ph.D. Plant Pathology'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 8,
    nirf: 'Top 40 in Agriculture',
    description: 'Dr. Y.S. Parmar University\'s Department of Plant Pathology specializes in diseases of horticultural crops and forest trees. It has strong expertise in mushroom diseases, apple pathology, and ornamental plant diseases.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Dr._Y.S._Parmar_University_of_Horticulture_and_Forestry_logo.png',
    highlights: [
      'Specialized in horticultural crop diseases',
      'Strong focus on apple pathology',
      'Advanced research on mushroom diseases',
      'Expertise in diseases of ornamental plants',
      'Leading research on forest tree diseases'
    ],
    specializations: ['Apple Pathology', 'Mushroom Diseases', 'Ornamental Plant Diseases', 'Forest Tree Pathology']
  }
];

const PlantPathologyColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={plantPathologyColleges}
        streamType="Plant Pathology"
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

export default PlantPathologyColleges; 