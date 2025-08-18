import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agricultural biotechnology college data
const agriculturalBiotechnologyColleges = [
  {
    id: 'agbt-1',
    name: 'National Agri-Food Biotechnology Institute (NABI)',
    location: 'Mohali, Punjab',
    rating: 4.9,
    courses: ['M.Sc. in Agricultural Biotechnology', 'Ph.D. in Agricultural Biotechnology'],
    fees: 'INR 40,000 - 80,000 per annum',
    ranking: 1,
    nirf: 'Not Ranked',
    description: 'NABI is a premier institute under the Department of Biotechnology, Government of India. It focuses on agricultural and food biotechnology research and education with state-of-the-art facilities for genomics, proteomics, and metabolomics.',
    imageUrl: 'https://nabi.res.in/wp-content/themes/nabi/images/logo.png',
    highlights: [
      'First institute dedicated to agri-food biotechnology in India',
      'State-of-the-art research facilities for molecular biology research',
      'Interdisciplinary approach to agricultural biotechnology',
      'Strong international collaborations for research and education',
      'Focus on translational research with industry connections'
    ],
    specializations: ['Crop Improvement', 'Food Biotechnology', 'Nutritional Enhancement', 'Molecular Breeding']
  },
  {
    id: 'agbt-2',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.8,
    courses: ['B.Tech in Agricultural Biotechnology', 'M.Tech in Agricultural Biotechnology', 'Ph.D. in Agricultural Biotechnology'],
    fees: 'INR 25,000 - 70,000 per annum',
    ranking: 2,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Centre for Plant Molecular Biology and Biotechnology is a leading research center for agricultural biotechnology in South India. It offers specialized education in crop improvement, molecular breeding, and genetic engineering.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Premier agricultural university with strong biotechnology focus',
      'Advanced research facilities for molecular biology and genetic engineering',
      'Strong focus on drought and salt tolerance research',
      'Industry collaborations for translational research',
      'Active technology transfer programs for farmers'
    ],
    specializations: ['Crop Improvement', 'Molecular Breeding', 'Genomics', 'Genetic Engineering']
  },
  {
    id: 'agbt-3',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.8,
    courses: ['M.Sc. in Molecular Biology and Biotechnology', 'Ph.D. in Agricultural Biotechnology'],
    fees: 'INR 20,000 - 60,000 per annum',
    ranking: 3,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Molecular Biology and Biotechnology is a leading center for agricultural biotechnology research in India. It offers specialized education in molecular breeding, genomics, and genetic engineering for crop improvement.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art facilities for molecular biology research',
      'Strong focus on developing transgenic crops and molecular markers',
      'International collaborations for advanced research',
      'Leading center for intellectual property in agricultural biotechnology'
    ],
    specializations: ['Molecular Breeding', 'Transgenic Development', 'Molecular Diagnostics', 'Genomics']
  },
  {
    id: 'agbt-4',
    name: 'Indira Gandhi Agricultural University (IGKV)',
    location: 'Raipur, Chhattisgarh',
    rating: 4.7,
    courses: ['B.Sc. Agricultural Biotechnology', 'M.Sc. Agricultural Biotechnology', 'Ph.D. Agricultural Biotechnology'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 4,
    nirf: 'Top 50 in Agriculture',
    description: 'IGKV offers specialized programs in agricultural biotechnology with a focus on rice biotechnology and stress tolerance. The university has a dedicated Center for Agricultural Biotechnology with modern research facilities.',
    imageUrl: 'https://igkv.ac.in/images/igkv/igkvlogo.png',
    highlights: [
      'Specialized focus on rice biotechnology',
      'Research on stress tolerance in crops of central India',
      'Modern facilities for tissue culture and molecular biology',
      'Strong extension programs for technology transfer',
      'Emphasis on biotechnology for tribal agriculture'
    ],
    specializations: ['Rice Biotechnology', 'Stress Tolerance', 'Molecular Diagnostics', 'Tissue Culture']
  },
  {
    id: 'agbt-5',
    name: 'University of Agricultural Sciences (UAS)',
    location: 'Bangalore, Karnataka',
    rating: 4.6,
    courses: ['M.Sc. Agricultural Biotechnology', 'Ph.D. Agricultural Biotechnology'],
    fees: 'INR 20,000 - 50,000 per annum',
    ranking: 5,
    nirf: 'Top 20 in Agriculture',
    description: 'UAS Bangalore\'s Department of Biotechnology offers specialized education in agricultural biotechnology with a focus on horticultural crops, plantation crops, and medicinal plants. It has strong expertise in molecular breeding and genomics.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/UAS%2C_Bangalore.JPG/800px-UAS%2C_Bangalore.JPG',
    highlights: [
      'Focus on biotechnology for horticultural and plantation crops',
      'Strong research on molecular characterization of germplasm',
      'Modern facilities for genomics and transcriptomics',
      'Industry collaborations for translational research',
      'Focus on commercialization of biotechnology products'
    ],
    specializations: ['Horticultural Biotechnology', 'Plantation Crop Improvement', 'Medicinal Plant Biotechnology', 'Molecular Breeding']
  },
  {
    id: 'agbt-6',
    name: 'Anand Agricultural University (AAU)',
    location: 'Anand, Gujarat',
    rating: 4.6,
    courses: ['B.Tech Biotechnology', 'M.Sc. Agricultural Biotechnology', 'Ph.D. Agricultural Biotechnology'],
    fees: 'INR 18,000 - 45,000 per annum',
    ranking: 6,
    nirf: 'Top 30 in Agriculture',
    description: 'AAU\'s Department of Agricultural Biotechnology offers specialized education in plant biotechnology, molecular breeding, and genetic engineering. It has strong expertise in biotechnology for dairy and food science.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Anand_Agricultural_University_Logo.svg/220px-Anand_Agricultural_University_Logo.svg.png',
    highlights: [
      'Integration of dairy biotechnology with plant biotechnology',
      'Strong focus on biotechnology for food processing',
      'Modern facilities for molecular biology research',
      'Industry collaborations for product development',
      'Focus on entrepreneurship in biotechnology'
    ],
    specializations: ['Food Biotechnology', 'Dairy Biotechnology', 'Molecular Breeding', 'Genetic Engineering']
  },
  {
    id: 'agbt-7',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.5,
    courses: ['M.Sc. Molecular Biology and Biotechnology', 'Ph.D. Agricultural Biotechnology'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 7,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University\'s Department of Molecular Biology and Genetic Engineering offers specialized education in agricultural biotechnology with a focus on hill crops and stress tolerance. It has strong expertise in genetic engineering and molecular diagnostics.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Focused research on hill crops and stress tolerance',
      'Strong expertise in molecular diagnostics of plant pathogens',
      'Modern facilities for transgenic research',
      'Integration of bioinformatics with molecular biology',
      'Focus on technology transfer to hill farmers'
    ],
    specializations: ['Hill Crop Biotechnology', 'Molecular Diagnostics', 'Stress Tolerance', 'Transgenic Development']
  },
  {
    id: 'agbt-8',
    name: 'Assam Agricultural University',
    location: 'Jorhat, Assam',
    rating: 4.4,
    courses: ['M.Sc. Agricultural Biotechnology', 'Ph.D. Agricultural Biotechnology'],
    fees: 'INR 12,000 - 35,000 per annum',
    ranking: 8,
    nirf: 'Top 50 in Agriculture',
    description: 'Assam Agricultural University\'s Department of Agricultural Biotechnology offers specialized education in biotechnology for northeastern crops. It has strong expertise in biodiversity conservation, molecular characterization, and genetic improvement of indigenous crops.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Assam_Agricultural_University_Logo.png',
    highlights: [
      'Focus on biotechnology for northeastern crop diversity',
      'Research on molecular characterization of indigenous germplasm',
      'Expertise in stress tolerance for high rainfall regions',
      'Integration of traditional knowledge with modern biotechnology',
      'Focus on conservation of crop genetic resources'
    ],
    specializations: ['Biodiversity Conservation', 'Indigenous Crop Improvement', 'Stress Tolerance', 'Molecular Characterization']
  }
];

const AgriculturalBiotechnologyColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriculturalBiotechnologyColleges}
        streamType="Agricultural Biotechnology"
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

export default AgriculturalBiotechnologyColleges; 