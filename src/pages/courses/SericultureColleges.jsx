import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real sericulture college data
const sericultureColleges = [
  {
    id: 'seri-1',
    name: 'Central Sericultural Research and Training Institute (CSRTI)',
    location: 'Mysuru, Karnataka',
    rating: 4.8,
    courses: ['Diploma in Sericulture', 'Certificate Course in Sericulture', 'M.Sc. in Sericulture (Affiliated to University of Mysore)'],
    fees: 'INR 10,000 - 25,000 per annum',
    ranking: 1,
    nirf: 'Not Ranked',
    description: 'CSRTI Mysuru is the premier institute for sericulture research and training in India. Established in 1961 under the Central Silk Board, it offers comprehensive education in all aspects of sericulture including mulberry cultivation, silkworm rearing, and silk reeling.',
    imageUrl: 'https://www.csrtimys.res.in/sites/default/files/CSRTI.jpg',
    highlights: [
      'Premier institute for sericulture research and training in India',
      'Advanced research facilities for mulberry and silkworm biology',
      'Comprehensive training programs for farmers and entrepreneurs',
      'Strong linkages with the sericulture industry',
      'Leading innovation in silk production technologies'
    ],
    specializations: ['Mulberry Cultivation', 'Silkworm Breeding', 'Silk Reeling Technology', 'Disease Management']
  },
  {
    id: 'seri-2',
    name: 'College of Sericulture, University of Agricultural Sciences',
    location: 'Chintamani, Karnataka',
    rating: 4.7,
    courses: ['B.Sc. in Sericulture', 'M.Sc. in Sericulture', 'Ph.D. in Sericulture'],
    fees: 'INR 15,000 - 35,000 per annum',
    ranking: 2,
    nirf: 'Not Ranked',
    description: 'The College of Sericulture at UAS Bangalore offers comprehensive degree programs in sericulture science. Located in a major silk-producing region, it provides education in mulberry cultivation, silkworm rearing, and silk production with strong industry connections.',
    imageUrl: 'https://uasbangalore.edu.in/assets/img/UASLogo.jpg',
    highlights: [
      'Dedicated college for sericulture education',
      'Located in major silk-producing region of Karnataka',
      'Strong research focus on mulberry improvement',
      'Comprehensive curriculum covering entire silk value chain',
      'Strong extension programs for sericulture farmers'
    ],
    specializations: ['Mulberry Improvement', 'Silkworm Pathology', 'Silk Quality Improvement', 'Post-Cocoon Technology']
  },
  {
    id: 'seri-3',
    name: 'Central Sericultural Research and Training Institute (CSRTI)',
    location: 'Berhampore, West Bengal',
    rating: 4.6,
    courses: ['Diploma in Sericulture', 'Certificate Course in Sericulture', 'Training Programs'],
    fees: 'INR 8,000 - 20,000 per annum',
    ranking: 3,
    nirf: 'Not Ranked',
    description: 'CSRTI Berhampore focuses on sericulture research and training suitable for Eastern and North-Eastern regions of India. It specializes in tropical tasar silkworm rearing, mulberry cultivation in humid climates, and disease management for silkworms.',
    imageUrl: 'https://csrtiber.res.in/images/csrti_logo.jpg',
    highlights: [
      'Premier institute for sericulture in Eastern India',
      'Specialization in tropical tasar silk production',
      'Research on sericulture technologies for high humidity regions',
      'Comprehensive training programs for farmers',
      'Strong focus on disease management in silkworm rearing'
    ],
    specializations: ['Tropical Tasar Silkworm', 'Mulberry Cultivation in Humid Climate', 'Disease Management', 'Silkworm Breeding']
  },
  {
    id: 'seri-4',
    name: 'College of Sericulture, Tamil Nadu Agricultural University',
    location: 'Hosur, Tamil Nadu',
    rating: 4.5,
    courses: ['B.Sc. in Sericulture', 'M.Sc. in Sericulture', 'Ph.D. in Sericulture'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Not Ranked',
    description: 'The College of Sericulture at TNAU focuses on sericulture education and research suitable for Southern India. It specializes in bivoltine silk production, mulberry cultivation in semi-arid regions, and mechanization in sericulture.',
    imageUrl: 'https://tnau.ac.in/wp-content/themes/tnau/assets/img/logo.png',
    highlights: [
      'Focus on sericulture practices for Southern India',
      'Research on bivoltine silkworm adaptation to tropical conditions',
      'Advanced studies on sericulture mechanization',
      'Strong industry connections with silk processing units',
      'Focus on entrepreneurship development in sericulture'
    ],
    specializations: ['Bivoltine Silkworm Rearing', 'Sericulture Mechanization', 'Mulberry Cultivation in Semi-Arid Regions', 'Silk Processing Technology']
  },
  {
    id: 'seri-5',
    name: 'Sericulture Research Institute',
    location: 'Srinagar, Jammu & Kashmir',
    rating: 4.4,
    courses: ['Diploma in Sericulture', 'Certificate Courses', 'Training Programs'],
    fees: 'INR 5,000 - 15,000 per annum',
    ranking: 5,
    nirf: 'Not Ranked',
    description: 'The Sericulture Research Institute in Srinagar specializes in temperate sericulture, focusing on bivoltine silkworm rearing suitable for the climatic conditions of Jammu & Kashmir. It has been instrumental in reviving the traditional silk industry of Kashmir.',
    imageUrl: 'https://jkseries.nic.in/images/logo.png',
    highlights: [
      'Specialization in temperate sericulture',
      'Research on bivoltine silkworm races for Kashmir climate',
      'Revival of traditional Kashmiri silk industry',
      'Integration of sericulture with Kashmir\'s rural economy',
      'Focus on quality silk production for traditional crafts'
    ],
    specializations: ['Temperate Sericulture', 'Bivoltine Silkworm Breeding', 'Winter Rearing Technologies', 'Traditional Silk Crafts']
  },
  {
    id: 'seri-6',
    name: 'Central Tasar Research and Training Institute',
    location: 'Ranchi, Jharkhand',
    rating: 4.4,
    courses: ['Diploma in Tasar Culture', 'Certificate Courses in Tasar Sericulture', 'Training Programs'],
    fees: 'INR 8,000 - 20,000 per annum',
    ranking: 6,
    nirf: 'Not Ranked',
    description: 'The Central Tasar Research and Training Institute specializes in tasar silk production, which involves rearing of wild silkworms on forest trees. It focuses on tribal development through tasar culture and sustainable forest-based livelihoods.',
    imageUrl: 'https://www.ctrti.res.in/sites/default/files/logo_0.jpg',
    highlights: [
      'Premier institute for tasar silk research',
      'Focus on tribal development through sericulture',
      'Research on host plant conservation and management',
      'Integration of sericulture with forest conservation',
      'Promotion of eco-friendly tasar silk production'
    ],
    specializations: ['Tasar Silkworm Ecology', 'Host Plant Management', 'Tribal Development', 'Wild Silk Technology']
  },
  {
    id: 'seri-7',
    name: 'Regional Sericulture Research Station',
    location: 'Jorhat, Assam',
    rating: 4.3,
    courses: ['Diploma in Muga and Eri Culture', 'Certificate Courses', 'Training Programs'],
    fees: 'INR 5,000 - 15,000 per annum',
    ranking: 7,
    nirf: 'Not Ranked',
    description: 'The Regional Sericulture Research Station in Jorhat specializes in muga and eri silk production, which are unique to Northeast India. It focuses on conservation of these indigenous silkworm species and development of sustainable rearing practices.',
    imageUrl: 'https://cmerti.res.in/images/logo.png',
    highlights: [
      'Specialization in indigenous muga and eri silkworms',
      'Conservation of native silkworm genetic resources',
      'Research on host plant diversity for wild silkworms',
      'Integration of traditional knowledge with modern science',
      'Promotion of eco-friendly sericulture practices'
    ],
    specializations: ['Muga Silkworm Rearing', 'Eri Silkworm Rearing', 'Host Plant Conservation', 'Indigenous Silk Processing']
  },
  {
    id: 'seri-8',
    name: 'Central Muga Eri Research and Training Institute',
    location: 'Lahdoigarh, Assam',
    rating: 4.3,
    courses: ['Diploma in Muga and Eri Culture', 'Certificate Courses', 'Training Programs'],
    fees: 'INR 8,000 - 20,000 per annum',
    ranking: 8,
    nirf: 'Not Ranked',
    description: 'CMERTI is dedicated to research and development of muga and eri silk, which are unique to Northeast India. The institute focuses on conservation of these indigenous silkworm species, host plant management, and development of improved rearing technologies.',
    imageUrl: 'https://cmerti.res.in/images/logo.png',
    highlights: [
      'Premier institute for muga and eri silk research',
      'Conservation of indigenous silkworm genetic resources',
      'Research on non-mulberry sericulture',
      'Strong focus on Northeastern traditional silk industry',
      'Development of technologies for quality improvement'
    ],
    specializations: ['Muga Silkworm Breeding', 'Eri Host Plant Management', 'Disease Management', 'Post-Cocoon Technology for Wild Silks']
  }
];

const SericultureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={sericultureColleges}
        streamType="Sericulture"
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

export default SericultureColleges; 