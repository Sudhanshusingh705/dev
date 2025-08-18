import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real rural studies college data
const ruralStudiesColleges = [
  {
    id: 'rural-1',
    name: 'Tata Institute of Social Sciences (TISS)',
    location: 'Mumbai, Maharashtra',
    rating: 4.9,
    courses: ['M.A. in Rural Development', 'M.A. in Social Work with Rural Communities', 'Ph.D. in Rural Studies'],
    fees: 'INR 60,000 - 1,20,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Social Sciences',
    description: 'TISS is a premier institute for social sciences research and education in India. Its Rural Development Centre focuses on interdisciplinary approaches to rural transformation, livelihood enhancement, and policy development for rural areas.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/TISS_Logo.svg/220px-TISS_Logo.svg.png',
    highlights: [
      'Premier institute for social sciences in India',
      'Strong focus on field-based learning and action research',
      'Interdisciplinary approach to rural development',
      'Extensive field presence across rural India',
      'Active collaborations with government and international organizations'
    ],
    specializations: ['Rural Governance', 'Tribal Development', 'Agrarian Studies', 'Rural Livelihoods']
  },
  {
    id: 'rural-2',
    name: 'Institute of Rural Management Anand (IRMA)',
    location: 'Anand, Gujarat',
    rating: 4.8,
    courses: ['Post Graduate Diploma in Rural Management', 'Fellow Programme in Rural Management', 'Executive Programs'],
    fees: 'INR 15,00,000 - 18,00,000 for full program',
    ranking: 2,
    nirf: 'Top 50 in Management',
    description: 'IRMA was founded in 1979 by Dr. Verghese Kurien, the father of White Revolution in India. The institute specializes in rural management education, focusing on cooperative development, rural livelihoods, and sustainable rural development.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/IRMA_logo.jpg/220px-IRMA_logo.jpg',
    highlights: [
      'India\'s premier institute exclusively focused on rural management',
      'Unique curriculum integrating village fieldwork with management education',
      'Strong alumni network in rural development sector',
      'Close association with AMUL and other successful rural cooperatives',
      'Focus on sustainable and inclusive rural development models'
    ],
    specializations: ['Cooperative Management', 'Rural Marketing', 'Rural Finance', 'Rural Institutions']
  },
  {
    id: 'rural-3',
    name: 'National Institute of Rural Development and Panchayati Raj (NIRDPR)',
    location: 'Hyderabad, Telangana',
    rating: 4.7,
    courses: ['Post Graduate Diploma in Rural Development Management', 'Post Graduate Diploma in Tribal Development Management', 'Certificate Programs in Panchayati Raj'],
    fees: 'INR 50,000 - 1,00,000 for full program',
    ranking: 3,
    nirf: 'Not Ranked',
    description: 'NIRDPR is an autonomous organization under the Ministry of Rural Development, Government of India. It focuses on training, research, and consultancy in rural development and governance through panchayati raj institutions.',
    imageUrl: 'https://www.nirdpr.org.in/images/nird-logo.png',
    highlights: [
      'Apex body for rural development in India',
      'Strong government linkages and policy influence',
      'Comprehensive training programs for rural development professionals',
      'Focus on panchayati raj and rural governance',
      'Extensive research and documentation on rural development models'
    ],
    specializations: ['Panchayati Raj', 'Rural Housing', 'Natural Resource Management', 'Rural Technology']
  },
  {
    id: 'rural-4',
    name: 'Xavier Institute of Social Service (XISS)',
    location: 'Ranchi, Jharkhand',
    rating: 4.6,
    courses: ['Post Graduate Diploma in Rural Management', 'Post Graduate Diploma in Social Management', 'Certificate Programs'],
    fees: 'INR 3,50,000 - 5,00,000 for full program',
    ranking: 4,
    nirf: 'Not Ranked',
    description: 'XISS is a premier institute for social management education in Eastern India. Established in 1973, it offers specialized programs in rural management focusing on tribal development, rural livelihoods, and natural resource management.',
    imageUrl: 'https://www.xiss.ac.in/assets/logo/logo.png',
    highlights: [
      'Strong focus on tribal and rural development in Eastern India',
      'Value-based management education with social orientation',
      'Extensive fieldwork and action research',
      'Strong alumni network in development sector',
      'Focus on marginalized communities and regions'
    ],
    specializations: ['Tribal Development', 'Forest-Based Livelihoods', 'Rural Marketing', 'Watershed Management']
  },
  {
    id: 'rural-5',
    name: 'Indira Gandhi National Open University (IGNOU)',
    location: 'New Delhi',
    rating: 4.5,
    courses: ['M.A. in Rural Development', 'Post Graduate Diploma in Rural Development', 'Certificate in Participatory Forest Management'],
    fees: 'INR 10,000 - 30,000 for full program',
    ranking: 5,
    nirf: 'Not Ranked for Rural Studies',
    description: 'IGNOU offers accessible and affordable distance education programs in rural development across India. Its School of Continuing Education focuses on rural development, agriculture, and allied sectors with a strong emphasis on practical knowledge.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/IGNOU_logo.svg/220px-IGNOU_logo.svg.png',
    highlights: [
      'Nationwide reach through distance education',
      'Affordable and accessible education in rural studies',
      'Practical-oriented curriculum with field components',
      'Flexibility in learning for working professionals',
      'Comprehensive study materials in multiple languages'
    ],
    specializations: ['Sustainable Development', 'Gender and Development', 'Participatory Planning', 'Rural Technology']
  },
  {
    id: 'rural-6',
    name: 'Center for Studies in Social Sciences, Calcutta',
    location: 'Kolkata, West Bengal',
    rating: 4.5,
    courses: ['M.Phil. in Rural Studies', 'Ph.D. in Rural Studies', 'Certificate Programs'],
    fees: 'INR 40,000 - 80,000 per annum',
    ranking: 6,
    nirf: 'Not Ranked for Rural Studies',
    description: 'The Centre for Studies in Social Sciences, Calcutta is an autonomous research institute focused on social science research. It has a strong focus on rural studies, agrarian relations, and development in Eastern India.',
    imageUrl: 'https://www.cssscal.org/images/csss_logo.png',
    highlights: [
      'Premier research institute for social sciences in Eastern India',
      'Strong focus on interdisciplinary research',
      'Extensive research on Bengal famine and agrarian relations',
      'Collaborative research with international universities',
      'Extensive library and archives on rural India'
    ],
    specializations: ['Agrarian Studies', 'Rural Politics', 'Land Relations', 'Rural-Urban Dynamics']
  },
  {
    id: 'rural-7',
    name: 'Gandhigram Rural Institute',
    location: 'Dindigul, Tamil Nadu',
    rating: 4.4,
    courses: ['M.A. in Rural Development', 'M.Sc. in Sustainable Rural Development', 'Ph.D. in Rural Studies'],
    fees: 'INR 20,000 - 50,000 per annum',
    ranking: 7,
    nirf: 'Not Ranked for Rural Studies',
    description: 'Gandhigram Rural Institute is a deemed university established in 1956 with a focus on rural development based on Gandhian principles. It offers comprehensive education in rural development, rural economics, and rural technology.',
    imageUrl: 'https://www.ruraluniv.ac.in/sites/default/files/GRI-Logo%20wo%20line.png',
    highlights: [
      'Based on Gandhian philosophy of rural development',
      'Strong focus on hands-on training and field exposure',
      'Integration of indigenous knowledge with modern science',
      'Focus on sustainable rural technologies',
      'Strong extension activities in surrounding villages'
    ],
    specializations: ['Rural Economics', 'Rural Technology', 'Village Industries', 'Rural Health']
  },
  {
    id: 'rural-8',
    name: 'College of Rural Studies, Sam Higginbottom University of Agriculture, Technology and Sciences',
    location: 'Allahabad, Uttar Pradesh',
    rating: 4.3,
    courses: ['B.Sc. in Rural Studies', 'M.Sc. in Rural Development', 'Ph.D. in Rural Development'],
    fees: 'INR 30,000 - 60,000 per annum',
    ranking: 8,
    nirf: 'Not Ranked for Rural Studies',
    description: 'The College of Rural Studies at SHUATS offers specialized education in rural development with a strong focus on agricultural extension, rural entrepreneurship, and community development. It emphasizes Christian values and service to rural communities.',
    imageUrl: 'https://www.shuats.edu.in/files/shuats-logo.jpg',
    highlights: [
      'Integration of agriculture with rural development',
      'Strong focus on rural entrepreneurship',
      'Faith-based approach to community development',
      'Extensive field work in surrounding rural areas',
      'Rural technology and innovation focus'
    ],
    specializations: ['Rural Entrepreneurship', 'Agricultural Extension', 'Community Development', 'Rural Technology']
  }
];

const RuralStudiesColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={ruralStudiesColleges}
        streamType="Rural Studies"
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

export default RuralStudiesColleges; 