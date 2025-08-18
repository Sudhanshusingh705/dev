import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real soil science college data
const soilScienceColleges = [
  {
    id: 'soil-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Soil Science and Agricultural Chemistry', 'Ph.D. Soil Science'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Soil Science and Agricultural Chemistry is the premier center for soil research in India. It offers specialized programs in soil fertility, soil physics, soil microbiology, and soil chemistry with state-of-the-art laboratory facilities.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art soil testing laboratory',
      'International collaborations for soil research',
      'Leader in developing soil health management practices',
      'Strong focus on nutrient management'
    ],
    specializations: ['Soil Fertility', 'Soil Physics', 'Soil Microbiology', 'Nutrient Management']
  },
  {
    id: 'soil-2',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.8,
    courses: ['B.Sc. Agriculture with Soil Science Specialization', 'M.Sc. Soil Science', 'Ph.D. Soil Science'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Soil Science specializes in soil fertility, soil chemistry, and nutrient management. It is known for its strong focus on the soils of Punjab and sustainable agricultural practices.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Leading research on soil fertility management',
      'Strong focus on conservation agriculture',
      'Advanced studies on soil salinity management',
      'Pioneer in precision nutrient management',
      'Excellent facilities for soil analysis'
    ],
    specializations: ['Soil Fertility', 'Conservation Agriculture', 'Soil Salinity', 'Precision Nutrient Management']
  },
  {
    id: 'soil-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['M.Sc. Soil Science and Agricultural Chemistry', 'Ph.D. Soil Science'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Soil Science and Agricultural Chemistry specializes in tropical soil management, soil fertility, and soil conservation with a focus on the soils of southern India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Pioneer in research on tropical soil management',
      'Extensive soil survey and land use planning network',
      'Advanced studies on problem soils',
      'Leading research on soil carbon sequestration',
      'Strong focus on soil quality assessment'
    ],
    specializations: ['Tropical Soil Management', 'Problem Soils', 'Soil Carbon Sequestration', 'Soil Quality Assessment']
  },
  {
    id: 'soil-4',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.7,
    courses: ['M.Sc. Soil Science and Agricultural Chemistry', 'Ph.D. Soil Science'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 4,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Soil Science focuses on soil fertility management, soil conservation, and problem soil reclamation with a focus on the soils of Andhra Pradesh.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Specialized in black soil management',
      'Strong focus on soil and water conservation',
      'Advanced research on soil fertility evaluation',
      'Expertise in problem soil reclamation',
      'Leading research on soil biodiversity'
    ],
    specializations: ['Black Soil Management', 'Soil Conservation', 'Problem Soil Reclamation', 'Soil Biodiversity']
  },
  {
    id: 'soil-5',
    name: 'National Bureau of Soil Survey and Land Use Planning (NBSS&LUP)',
    location: 'Nagpur, Maharashtra',
    rating: 4.8,
    courses: ['M.Sc. Soil Science (in collaboration with universities)', 'Ph.D. Soil Science and Land Use Planning'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'NBSS&LUP is India\'s premier institute for soil survey, soil mapping, and land use planning. It offers specialized training in soil taxonomy, land evaluation, and GIS-based soil mapping.',
    imageUrl: 'https://nbsslup.in/wp-content/uploads/2022/05/nbsslup.jpg',
    highlights: [
      'India\'s nodal agency for soil survey',
      'World-class facilities for soil mapping',
      'Strong focus on digital soil mapping',
      'Leader in soil taxonomy and classification',
      'Excellent network with international soil science institutes'
    ],
    specializations: ['Soil Survey', 'Land Use Planning', 'Soil Classification', 'Digital Soil Mapping']
  },
  {
    id: 'soil-6',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['M.Sc. Soil Science', 'Ph.D. Soil Science'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 6,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Soil Science offers specialized programs in soil fertility, mountain soil management, and soil and water conservation in hill regions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Leading research on mountain soil management',
      'Strong focus on soil erosion control',
      'Advanced studies on hill soil fertility',
      'Pioneer in watershed management',
      'Excellent facilities for soil physics research'
    ],
    specializations: ['Mountain Soil Management', 'Soil Erosion Control', 'Watershed Management', 'Hill Soil Fertility']
  },
  {
    id: 'soil-7',
    name: 'Kerala Agricultural University (KAU)',
    location: 'Thrissur, Kerala',
    rating: 4.6,
    courses: ['M.Sc. Soil Science and Agricultural Chemistry', 'Ph.D. Soil Science'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 7,
    nirf: 'Top 20 in Agriculture',
    description: 'KAU\'s Department of Soil Science specializes in the management of lateritic soils, wetland soils, and acidic soils with a focus on soil fertility and sustainable soil management.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Kerala_Agricultural_University_Logo.svg/220px-Kerala_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in lateritic soil management',
      'Strong focus on acid soil reclamation',
      'Advanced research on wetland soil management',
      'Expertise in soil-plant-water relationships',
      'Leading research on soil microorganisms'
    ],
    specializations: ['Lateritic Soils', 'Acid Soil Reclamation', 'Wetland Soils', 'Soil Microbiology']
  },
  {
    id: 'soil-8',
    name: 'Central Soil Salinity Research Institute (CSSRI)',
    location: 'Karnal, Haryana',
    rating: 4.7,
    courses: ['Ph.D. Soil Science (in collaboration with universities)', 'Post-doctoral Research'],
    fees: 'Fellowship and stipend basis',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'CSSRI is a premier research institute focused on saline and alkaline soil management. It offers specialized research opportunities in salinity management, reclamation of sodic soils, and drainage engineering.',
    imageUrl: 'https://www.cssri.org/images/cssri.jpg',
    highlights: [
      'India\'s dedicated center for soil salinity research',
      'Strong focus on alkali soil reclamation',
      'Advanced facilities for soil remediation research',
      'Leader in development of salt-tolerant crop varieties',
      'Excellent network with international salinity management institutes'
    ],
    specializations: ['Soil Salinity Management', 'Sodic Soil Reclamation', 'Drainage Engineering', 'Salt-affected Soils']
  }
];

const SoilScienceColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={soilScienceColleges}
        streamType="Soil Science"
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

export default SoilScienceColleges; 