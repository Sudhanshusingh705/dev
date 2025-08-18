import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agriculture college data
const agricultureColleges = [
  {
    id: 'agri-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 12,000 - 35,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'Established in 1905, IARI is India\'s premier national Institute for agricultural research, education, and extension. Also known as Pusa Institute, it has played a crucial role in the Green Revolution and continues to be at the forefront of agricultural innovation.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'Deemed University status since 1958',
      'State-of-the-art research facilities',
      'Home to over 50 specialized research centers',
      '100% placement record for postgraduate students',
      'International collaborations with over 20 countries'
    ],
    specializations: ['Plant Breeding', 'Soil Science', 'Agricultural Engineering', 'Plant Pathology']
  },
  {
    id: 'agri-2',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.8,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Agriculture',
    description: 'Established in 1962, PAU has played a vital role in bringing the Green Revolution to Punjab and increasing food grain production in India. It is known for its strong research in crop improvement and agricultural technology.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'One of the largest agricultural universities in Asia',
      'Pioneer in agricultural research in India',
      'Over 300 released varieties of crops',
      'Strong industry linkages and extension services',
      'Comprehensive curriculum with hands-on training'
    ],
    specializations: ['Crop Improvement', 'Agronomy', 'Soil Science', 'Agricultural Economics']
  },
  {
    id: 'agri-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'Founded in 1906, TNAU is one of the oldest agricultural institutions in India. It has been instrumental in developing agriculture in South India and is known for its research on drought-resistant crops and sustainable agriculture.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'ISO 9001:2015 certified institution',
      'Specializes in tropical agriculture',
      'Strong focus on water management and irrigation',
      'Advanced research in biotechnology and crop improvement',
      'Extensive network of regional research stations'
    ],
    specializations: ['Plant Breeding', 'Horticulture', 'Agricultural Entomology', 'Agricultural Economics']
  },
  {
    id: 'agri-4',
    name: 'G.B. Pant University of Agriculture and Technology',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 8,000 - 25,000 per annum',
    ranking: 4,
    nirf: 'Rank 4 in Agriculture',
    description: 'Established in 1960, it was the first agricultural university in India. Modeled after American land-grant universities, it has a large campus with extensive research farms and is renowned for its contributions to the Green Revolution.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GBPUAT.jpg',
    highlights: [
      'First agricultural university in India',
      'Campus spread over 10,000 acres',
      'Strong alumni network in agriculture sector',
      'Comprehensive agricultural education ecosystem',
      'Pioneer in developing high-yielding crop varieties'
    ],
    specializations: ['Agronomy', 'Plant Pathology', 'Agricultural Engineering', 'Soil Science']
  },
  {
    id: 'agri-5',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.6,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 5,
    nirf: 'Rank 5 in Agriculture',
    description: 'Named after the famous parliamentarian Acharya N.G. Ranga, this university was established in 1964. It specializes in dryland agriculture and has developed several improved crop varieties suitable for rain-fed farming.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Expertise in dryland agriculture',
      'Extensive network of research stations across Andhra Pradesh',
      'Strong focus on sustainable agriculture',
      'Advanced research in water conservation techniques',
      'Close collaboration with farmers through extension programs'
    ],
    specializations: ['Dryland Agriculture', 'Crop Improvement', 'Agricultural Extension', 'Plant Pathology']
  },
  {
    id: 'agri-6',
    name: 'Kerala Agricultural University (KAU)',
    location: 'Thrissur, Kerala',
    rating: 4.5,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 12,000 - 35,000 per annum',
    ranking: 6,
    nirf: 'Rank 6 in Agriculture',
    description: 'Established in 1971, KAU is the principal instrument of Kerala state for providing human resources, skills, and technology for sustainable agricultural development. It specializes in plantation crops, spices, and tropical agriculture.',
    imageUrl: 'https://kau.in/sites/default/files/images/main_building.jpg',
    highlights: [
      'Leader in tropical agriculture research',
      'Specialized in plantation crops and spices',
      'Strong focus on organic farming methods',
      'Extensive research on homestead farming systems',
      'Pioneer in developing farming systems for high rainfall areas'
    ],
    specializations: ['Plantation Crops', 'Tropical Agriculture', 'Horticulture', 'Agricultural Economics']
  },
  {
    id: 'agri-7',
    name: 'Chaudhary Charan Singh Haryana Agricultural University (CCSHAU)',
    location: 'Hisar, Haryana',
    rating: 4.5,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 8,000 - 25,000 per annum',
    ranking: 7,
    nirf: 'Rank 7 in Agriculture',
    description: 'Established in 1970, CCSHAU is a premier institution for agricultural education in North India. It has made significant contributions to agricultural research, especially in wheat and rice varieties suitable for the region.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/CCS_HAU_HISAR_MAIN_BUILDING.jpg/800px-CCS_HAU_HISAR_MAIN_BUILDING.jpg',
    highlights: [
      'Leader in wheat and rice research',
      'Strong focus on agricultural mechanization',
      'Extensive agricultural extension network',
      'Developed several widely adopted crop varieties',
      'Advanced research facilities for crop improvement'
    ],
    specializations: ['Crop Improvement', 'Agricultural Engineering', 'Soil Science', 'Plant Protection']
  },
  {
    id: 'agri-8',
    name: 'Mahatma Phule Krishi Vidyapeeth (MPKV)',
    location: 'Rahuri, Maharashtra',
    rating: 4.4,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 8,
    nirf: 'Rank 8 in Agriculture',
    description: 'Founded in 1968, MPKV is focused on agricultural research and education in the drought-prone areas of Maharashtra. It has developed several farming technologies suitable for rain-fed agriculture and water-scarce regions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MPKV_Rahuri_Campus.jpg/800px-MPKV_Rahuri_Campus.jpg',
    highlights: [
      'Specializes in dryland agriculture',
      'Strong focus on water management',
      'Pioneer in developing drought-resistant crop varieties',
      'Extensive outreach programs for farmers',
      'Research focus on climate-resilient agriculture'
    ],
    specializations: ['Dryland Agriculture', 'Horticulture', 'Agricultural Engineering', 'Agronomy']
  },
  {
    id: 'agri-9',
    name: 'Dr. Rajendra Prasad Central Agricultural University',
    location: 'Pusa, Bihar',
    rating: 4.4,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 8,000 - 25,000 per annum',
    ranking: 9,
    nirf: 'Rank 9 in Agriculture',
    description: 'Formerly known as Rajendra Agricultural University, it was established in 1970 and upgraded to Central Agricultural University in 2016. It specializes in research on crops suitable for the flood-prone regions of North Bihar.',
    imageUrl: 'https://rpcau.ac.in/images/infra/main4.jpg',
    highlights: [
      'Expertise in flood-resistant crop varieties',
      'Strong focus on integrated farming systems',
      'Advanced research on climate change adaptation',
      'Specialized programs on water management',
      'Extensive network of Krishi Vigyan Kendras'
    ],
    specializations: ['Crop Science', 'Water Management', 'Agricultural Extension', 'Soil Science']
  },
  {
    id: 'agri-10',
    name: 'University of Agricultural Sciences (UAS)',
    location: 'Bangalore, Karnataka',
    rating: 4.3,
    courses: ['B.Sc. Agriculture', 'M.Sc. Agriculture', 'Ph.D. Agriculture'],
    fees: 'INR 12,000 - 35,000 per annum',
    ranking: 10,
    nirf: 'Rank 10 in Agriculture',
    description: 'Established in 1964, UAS Bangalore is a premier institution for agricultural education and research in South India. It has made significant contributions to the development of horticulture and sericulture in Karnataka.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/UAS%2C_Bangalore.JPG/800px-UAS%2C_Bangalore.JPG',
    highlights: [
      'Leader in horticultural and sericulture research',
      'Strong focus on organic farming',
      'Advanced research in agricultural biotechnology',
      'Specialized programs in forestry and environmental sciences',
      'Extensive outreach programs for farmers'
    ],
    specializations: ['Horticulture', 'Sericulture', 'Agricultural Biotechnology', 'Environmental Sciences']
  }
];

const AgricultureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agricultureColleges}
        streamType="Agriculture"
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

export default AgricultureColleges; 