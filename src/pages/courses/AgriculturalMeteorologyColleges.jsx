import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agricultural meteorology college data
const agriculturalMeteorologyColleges = [
  {
    id: 'agmet-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Agricultural Meteorology', 'Ph.D. Agricultural Meteorology'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Agricultural Physics offers specialized education in agricultural meteorology, micrometeorology, and climate change studies with state-of-the-art weather monitoring facilities and climate modeling capabilities.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier institution for agricultural meteorology',
      'Advanced weather monitoring network',
      'International collaborations for climate research',
      'Leader in developing weather-based advisories',
      'Strong focus on climate risk management'
    ],
    specializations: ['Micrometeorology', 'Climate Change', 'Weather Forecasting', 'Crop-Weather Relationships']
  },
  {
    id: 'agmet-2',
    name: 'India Meteorological Department - Agrimet Division',
    location: 'Pune, Maharashtra',
    rating: 4.8,
    courses: ['PG Diploma in Agricultural Meteorology', 'Certificate Courses in Agrometeorology'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 'Operational Agency',
    nirf: 'N/A - Operational Agency',
    description: 'IMD\'s Agrimet Division offers specialized training in operational agricultural meteorology, weather forecasting, and agro-advisory services with a focus on applying meteorological knowledge to agricultural decision making.',
    imageUrl: 'https://mausam.imd.gov.in/imd_latest/contents/assets/images/imd-logo.png',
    highlights: [
      'India\'s operational weather forecasting agency',
      'Strong focus on district-level agromet advisories',
      'Advanced weather monitoring infrastructure',
      'Leader in weather-based crop insurance',
      'Extensive network of automated weather stations'
    ],
    specializations: ['Weather Forecasting', 'Agromet Advisory Services', 'Crop Insurance', 'Weather Monitoring']
  },
  {
    id: 'agmet-3',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Meteorology', 'Ph.D. Agricultural Meteorology'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Climate Change and Agricultural Meteorology offers comprehensive education in agroclimatology, crop-weather modeling, and climate change impacts with a focus on northwestern India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Pioneer in crop-weather relationships for wheat and rice',
      'Extensive agroclimatic data analysis capabilities',
      'Advanced studies on climate change impacts',
      'Leading research on weather-based irrigation scheduling',
      'Strong focus on heat stress management'
    ],
    specializations: ['Crop-Weather Modeling', 'Irrigation Scheduling', 'Heat Stress Management', 'Climate Change Impacts']
  },
  {
    id: 'agmet-4',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Meteorology', 'Ph.D. Agricultural Meteorology'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Agronomy offers specialized programs in agricultural meteorology, crop modeling, and monsoon prediction with a focus on southern India\'s climate.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Specialized in monsoon dynamics',
      'Strong focus on drought monitoring',
      'Advanced studies on rainfall forecasting',
      'Pioneer in crop-weather analysis for plantation crops',
      'Excellent facilities for microclimatic studies'
    ],
    specializations: ['Monsoon Prediction', 'Drought Monitoring', 'Rainfall Forecasting', 'Microclimate Analysis']
  },
  {
    id: 'agmet-5',
    name: 'Central Research Institute for Dryland Agriculture (CRIDA)',
    location: 'Hyderabad, Telangana',
    rating: 4.8,
    courses: ['M.Sc. Agricultural Meteorology (in collaboration with universities)', 'Ph.D. Agricultural Meteorology'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'CRIDA offers specialized education in dryland agricultural meteorology, drought monitoring, and climate risk management with a focus on rainfed farming systems.',
    imageUrl: 'https://www.crida.in/images/crida.jpg',
    highlights: [
      'India\'s leading institute for dryland agricultural research',
      'Advanced drought monitoring systems',
      'Strong focus on climate resilient agriculture',
      'Leader in rainfall analysis for rainfed regions',
      'Excellent facilities for climate impact assessment'
    ],
    specializations: ['Dryland Meteorology', 'Drought Monitoring', 'Climate Resilient Agriculture', 'Rainfall Analysis']
  },
  {
    id: 'agmet-6',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['M.Sc. Agrometeorology', 'Ph.D. Agrometeorology'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 6,
    nirf: 'Rank 4 in Agriculture',
    description: 'G.B. Pant University offers specialized education in mountain agricultural meteorology, climate change in Himalayan regions, and weather-based crop planning for hill agriculture.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'Specialized in mountain meteorology',
      'Strong focus on orographic rainfall patterns',
      'Advanced studies on climate change in Himalayas',
      'Pioneer in weather risk management for hill agriculture',
      'Excellent facilities for high-altitude weather monitoring'
    ],
    specializations: ['Mountain Meteorology', 'Orographic Rainfall', 'Himalayan Climate Change', 'High-altitude Weather']
  },
  {
    id: 'agmet-7',
    name: 'National Centre for Medium Range Weather Forecasting (NCMRWF)',
    location: 'Noida, Uttar Pradesh',
    rating: 4.8,
    courses: ['Research Programs in Agricultural Meteorology', 'Training in Weather Forecasting'],
    fees: 'Research Fellowship basis',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'NCMRWF offers specialized research and training in numerical weather prediction, medium-range forecasting, and applications of weather models in agriculture.',
    imageUrl: 'https://www.ncmrwf.gov.in/images/ncmrwf.jpg',
    highlights: [
      'India\'s premier numerical weather prediction center',
      'State-of-the-art high-performance computing facilities',
      'Advanced training in weather model applications',
      'Leader in ensemble prediction systems',
      'Strong focus on application of forecasts to agriculture'
    ],
    specializations: ['Numerical Weather Prediction', 'Medium-Range Forecasting', 'Ensemble Prediction', 'Model Applications']
  },
  {
    id: 'agmet-8',
    name: 'Kerala Agricultural University (KAU)',
    location: 'Thrissur, Kerala',
    rating: 4.6,
    courses: ['M.Sc. Agricultural Meteorology', 'Ph.D. Agricultural Meteorology'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 8,
    nirf: 'Top 20 in Agriculture',
    description: 'KAU offers specialized education in tropical agricultural meteorology, monsoon dynamics, and extreme weather events with a focus on plantation crops and high rainfall regions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Kerala_Agricultural_University_Logo.svg/220px-Kerala_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in tropical meteorology',
      'Strong focus on extreme rainfall events',
      'Advanced studies on southwest monsoon',
      'Pioneer in weather analysis for plantation crops',
      'Excellent facilities for high rainfall monitoring'
    ],
    specializations: ['Tropical Meteorology', 'Extreme Weather', 'Monsoon Dynamics', 'High Rainfall Agriculture']
  }
];

const AgriculturalMeteorologyColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriculturalMeteorologyColleges}
        streamType="Agricultural Meteorology"
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

export default AgriculturalMeteorologyColleges; 