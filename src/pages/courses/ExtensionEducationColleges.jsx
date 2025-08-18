import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real extension education college data
const extensionEducationColleges = [
  {
    id: 'ext-1',
    name: 'National Institute of Agricultural Extension Management (MANAGE)',
    location: 'Hyderabad, Telangana',
    rating: 4.9,
    courses: ['Post Graduate Diploma in Agricultural Extension Management', 'Agricultural Extension Management Programs'],
    fees: 'INR 75,000 - 1,50,000 for full program',
    ranking: 1,
    nirf: 'Not Ranked',
    description: 'MANAGE is an autonomous organization under the Ministry of Agriculture, Government of India. It is a premier national institute focusing exclusively on agricultural extension management, providing specialized education and training.',
    imageUrl: 'https://www.manage.gov.in/images/manage-logo.png',
    highlights: [
      'India\'s premier institute for agricultural extension management',
      'State-of-the-art training infrastructure',
      'International collaborations for extension research',
      'Strong focus on technology-enabled extension services',
      'Extensive field-based training programs'
    ],
    specializations: ['Agricultural Extension Management', 'Extension Communication', 'ICT in Extension', 'Agri-entrepreneurship Development']
  },
  {
    id: 'ext-2',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.8,
    courses: ['M.Sc. Agricultural Extension', 'Ph.D. Agricultural Extension'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 2,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Agricultural Extension offers specialized programs in extension education with a focus on research, teaching, and training for effective agricultural knowledge transfer systems.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'Pioneer in agricultural extension research',
      'Strong focus on farmer-led extension approaches',
      'Extensive field research facilities',
      'International collaborations for extension research',
      'Leader in developing innovative extension methodologies'
    ],
    specializations: ['Extension Research Methods', 'Extension Program Planning', 'Extension Communication', 'Technology Transfer Systems']
  },
  {
    id: 'ext-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['B.Sc. Agriculture with Extension Specialization', 'M.Sc. Agricultural Extension', 'Ph.D. Agricultural Extension'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Agricultural Extension and Rural Sociology offers comprehensive education in extension with a focus on southern India\'s agricultural systems and rural development.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on extension systems for southern India',
      'Strong focus on ICT in agricultural extension',
      'Advanced studies on gender in agricultural extension',
      'Pioneer in participatory extension methodologies',
      'Extensive field laboratories for extension research'
    ],
    specializations: ['Rural Sociology', 'Extension Program Evaluation', 'Participatory Extension', 'ICT in Agricultural Extension']
  },
  {
    id: 'ext-4',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Extension Education', 'Ph.D. Agricultural Extension Education'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Extension Education specializes in agricultural extension systems for northern India. It has strong expertise in farm advisory services and technology transfer systems for intensive farming.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Pioneer in farm advisory service models',
      'Strong focus on technology transfer systems',
      'Advanced research on extension approaches for commercial farming',
      'Extensive field extension programs',
      'Leadership in mass media extension approaches'
    ],
    specializations: ['Farm Advisory Services', 'Mass Media in Extension', 'Adoption and Diffusion Research', 'Extension Program Management']
  },
  {
    id: 'ext-5',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.6,
    courses: ['M.Sc. Agricultural Extension', 'Ph.D. Agricultural Extension'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 5,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Agricultural Extension specializes in extension systems for diverse farming communities of Andhra Pradesh. It has strong expertise in participatory extension approaches and farmer field schools.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Pioneer in farmer field school approach',
      'Strong focus on participatory extension methods',
      'Advanced research on extension for rainfed farming',
      'Expertise in tribal agricultural extension',
      'Leadership in farmer-to-farmer extension models'
    ],
    specializations: ['Farmer Field Schools', 'Participatory Extension', 'Tribal Agricultural Extension', 'Communication Methods']
  },
  {
    id: 'ext-6',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['M.Sc. Agricultural Extension & Communication', 'Ph.D. Agricultural Extension & Communication'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 6,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Agricultural Communication offers specialized education in extension with a focus on hill agriculture and communication strategies for remote farming communities.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Specialized in extension for hill agriculture',
      'Strong focus on communication strategies for remote areas',
      'Advanced research on extension for fragile ecosystems',
      'Expertise in indigenous knowledge systems',
      'Leadership in community-based extension approaches'
    ],
    specializations: ['Extension for Hill Agriculture', 'Indigenous Knowledge Systems', 'Community Media', 'Participatory Communication']
  },
  {
    id: 'ext-7',
    name: 'Indira Gandhi Krishi Vishwavidyalaya (IGKV)',
    location: 'Raipur, Chhattisgarh',
    rating: 4.5,
    courses: ['M.Sc. Agricultural Extension', 'Ph.D. Agricultural Extension'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 7,
    nirf: 'Top 50 in Agriculture',
    description: 'IGKV\'s Department of Agricultural Extension offers specialized education in extension with a focus on tribal farming communities and extension systems for resource-poor farmers in central India.',
    imageUrl: 'https://igkv.ac.in/images/igkv/igkvlogo.png',
    highlights: [
      'Specialized in extension for tribal farming communities',
      'Strong focus on extension for resource-poor farmers',
      'Advanced research on indigenous knowledge documentation',
      'Expertise in extension for forest-based farming',
      'Leadership in grassroots extension approaches'
    ],
    specializations: ['Tribal Agricultural Extension', 'Indigenous Knowledge Systems', 'Participatory Rural Appraisal', 'Extension Program Planning']
  },
  {
    id: 'ext-8',
    name: 'Kerala Agricultural University (KAU)',
    location: 'Thrissur, Kerala',
    rating: 4.5,
    courses: ['M.Sc. Agricultural Extension', 'Ph.D. Agricultural Extension'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 8,
    nirf: 'Top 30 in Agriculture',
    description: 'KAU\'s Department of Agricultural Extension offers specialized education in extension with a focus on homestead farming, plantation crops, and community-based extension systems suitable for Kerala\'s unique agricultural landscape.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Kerala_Agricultural_University_Logo.svg/220px-Kerala_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in extension for homestead farming',
      'Strong focus on community-based extension systems',
      'Advanced research on extension for plantation crops',
      'Expertise in farmer collectives and cooperatives',
      'Leadership in group approach to extension'
    ],
    specializations: ['Homestead Farming Extension', 'Plantation Crops Extension', 'Group Approach to Extension', 'Farming Systems Research']
  }
];

const ExtensionEducationColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={extensionEducationColleges}
        streamType="Extension Education"
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

export default ExtensionEducationColleges; 