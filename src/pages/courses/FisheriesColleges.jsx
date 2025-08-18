import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real fisheries science college data
const fisheriesColleges = [
  {
    id: 'fish-1',
    name: 'Central Institute of Fisheries Education (CIFE)',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 20,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Fisheries',
    description: 'CIFE is a deemed university under ICAR and the premier fisheries institution in India. Established in 1961, it offers specialized education in all aspects of fisheries science including aquaculture, fish processing, and fisheries management.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/CIFE_Mumbai_logo.png/220px-CIFE_Mumbai_logo.png',
    highlights: [
      'Premier fisheries education institute in India',
      'Advanced research facilities for fisheries and aquaculture',
      'Specialized training in all aspects of fisheries science',
      'Strong focus on sustainable fisheries management',
      'International collaborations for research and education'
    ],
    specializations: ['Aquaculture', 'Fish Processing Technology', 'Fisheries Resource Management', 'Aquatic Environment Management']
  },
  {
    id: 'fish-2',
    name: 'College of Fisheries, Kerala University of Fisheries and Ocean Studies (KUFOS)',
    location: 'Kochi, Kerala',
    rating: 4.7,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 2,
    nirf: 'Rank 2 in Fisheries',
    description: 'KUFOS is the first fisheries university in India, established in 2010. Located in the coastal city of Kochi, it offers specialized education in fisheries science, focusing on marine fisheries, aquaculture, and ocean studies.',
    imageUrl: 'https://kufos.ac.in/wp-content/uploads/2021/11/KUFOS-LOGO-PNG.png',
    highlights: [
      'First dedicated fisheries university in India',
      'Located in major fishing hub of Kerala',
      'Strong focus on marine fisheries and aquaculture',
      'Extensive research on coastal and marine ecosystems',
      'Advanced facilities for aquaculture research'
    ],
    specializations: ['Marine Fisheries', 'Coastal Aquaculture', 'Fish Processing', 'Fisheries Economics']
  },
  {
    id: 'fish-3',
    name: 'College of Fisheries, Karnataka Veterinary, Animal and Fisheries Sciences University',
    location: 'Mangalore, Karnataka',
    rating: 4.6,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 15,000 - 35,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Fisheries',
    description: 'Established in 1969, the College of Fisheries in Mangalore was the first fisheries college in India. Located on the west coast, it offers comprehensive education in fisheries science with special emphasis on marine fisheries and coastal aquaculture.',
    imageUrl: 'https://cofm.edu.in/assets/img/logo.png',
    highlights: [
      'First fisheries college in India',
      'Strategic location on the west coast for marine studies',
      'Advanced research facilities and training vessels',
      'Strong focus on practical training and industry exposure',
      'Pioneering research in marine biology and coastal ecosystems'
    ],
    specializations: ['Marine Fisheries', 'Coastal Aquaculture', 'Fish Processing Technology', 'Fisheries Engineering']
  },
  {
    id: 'fish-4',
    name: 'College of Fisheries Science, GADVASU',
    location: 'Ludhiana, Punjab',
    rating: 4.5,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 12,000 - 30,000 per annum',
    ranking: 4,
    nirf: 'Rank 4 in Fisheries',
    description: 'The College of Fisheries Science at Guru Angad Dev Veterinary and Animal Sciences University specializes in inland fisheries and aquaculture. It focuses on freshwater aquaculture systems suitable for northern India.',
    imageUrl: 'https://gadvasu.gov.in/images/LOGO_GADVASU.jpeg',
    highlights: [
      'Specialized in inland fisheries and freshwater aquaculture',
      'Located in major agricultural state of Punjab',
      'Focus on integration of aquaculture with agriculture',
      'Research on fish nutrition and disease management',
      'Strong extension programs for fish farmers'
    ],
    specializations: ['Inland Fisheries', 'Freshwater Aquaculture', 'Fish Breeding', 'Aquatic Animal Health']
  },
  {
    id: 'fish-5',
    name: 'College of Fisheries, Central Agricultural University',
    location: 'Tripura',
    rating: 4.5,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 10,000 - 25,000 per annum',
    ranking: 5,
    nirf: 'Rank 5 in Fisheries',
    description: 'The College of Fisheries under Central Agricultural University focuses on the unique fisheries resources of Northeast India. It specializes in hill stream fisheries, reservoir fisheries, and indigenous fish species of the region.',
    imageUrl: 'https://www.cofcau.nic.in/images/logo.png',
    highlights: [
      'Focus on fisheries resources of Northeast India',
      'Research on indigenous fish species conservation',
      'Specialized training in hill stream and reservoir fisheries',
      'Integration of traditional knowledge with modern science',
      'Strong extension programs for tribal communities'
    ],
    specializations: ['Hill Stream Fisheries', 'Indigenous Fish Conservation', 'Reservoir Fisheries', 'Community-Based Fisheries Management']
  },
  {
    id: 'fish-6',
    name: 'College of Fisheries, Dr. Rajendra Prasad Central Agricultural University',
    location: 'Dholi, Bihar',
    rating: 4.4,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 8,000 - 20,000 per annum',
    ranking: 6,
    nirf: 'Rank 6 in Fisheries',
    description: 'The College of Fisheries at Dr. Rajendra Prasad Central Agricultural University specializes in riverine fisheries and floodplain aquaculture. Located in the Gangetic plains, it focuses on the fisheries resources of the region.',
    imageUrl: 'https://rpcau.ac.in/images/logo.png',
    highlights: [
      'Focus on riverine fisheries and floodplain aquaculture',
      'Located in the fertile Gangetic plains',
      'Research on major carps and catfish culture',
      'Strong extension programs for fish farmers',
      'Integration with agriculture systems'
    ],
    specializations: ['Riverine Fisheries', 'Floodplain Aquaculture', 'Carp Culture', 'Integrated Fish Farming']
  },
  {
    id: 'fish-7',
    name: 'Faculty of Fishery Sciences, West Bengal University of Animal and Fishery Sciences',
    location: 'Kolkata, West Bengal',
    rating: 4.4,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 10,000 - 30,000 per annum',
    ranking: 7,
    nirf: 'Rank 7 in Fisheries',
    description: 'The Faculty of Fishery Sciences at WBUAFS specializes in inland and brackishwater fisheries. Located in West Bengal, a major fish producing state, it focuses on aquaculture in the Gangetic delta and Sundarbans region.',
    imageUrl: 'https://wbuafscl.ac.in/assets/img/logo-wbuafs.png',
    highlights: [
      'Focus on Gangetic delta and Sundarbans region fisheries',
      'Research on brackishwater aquaculture',
      'Strong programs in fish processing and value addition',
      'Integration of traditional knowledge with modern science',
      'Extensive network with local fish farming communities'
    ],
    specializations: ['Brackishwater Aquaculture', 'Estuarine Fisheries', 'Fish Processing', 'Sundarbans Ecosystem Management']
  },
  {
    id: 'fish-8',
    name: 'College of Fisheries, Orissa University of Agriculture and Technology',
    location: 'Rangeilunda, Odisha',
    rating: 4.3,
    courses: ['B.F.Sc (Bachelor of Fisheries Science)', 'M.F.Sc (Master of Fisheries Science)', 'Ph.D in Fisheries Science'],
    fees: 'INR 8,000 - 25,000 per annum',
    ranking: 8,
    nirf: 'Rank 8 in Fisheries',
    description: 'The College of Fisheries at OUAT specializes in coastal and freshwater fisheries. Located near Chilika Lake, Asia\'s largest brackishwater lagoon, it offers unique opportunities for research and education in diverse aquatic ecosystems.',
    imageUrl: 'https://ouat.nic.in/sites/default/files/ouat-logo.png',
    highlights: [
      'Proximity to Chilika Lake for ecological studies',
      'Focus on coastal aquaculture and marine fisheries',
      'Research on shrimp and brackishwater fish culture',
      'Strong extension programs for coastal communities',
      'Integration with agricultural systems'
    ],
    specializations: ['Coastal Aquaculture', 'Brackishwater Fisheries', 'Shrimp Farming', 'Fisheries Economics']
  }
];

const FisheriesColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={fisheriesColleges}
        streamType="Fisheries Science"
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

export default FisheriesColleges; 