import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agricultural management college data
const agriManagementColleges = [
  {
    id: 'agm-1',
    name: 'Indian Institute of Management (IIM) Ahmedabad',
    location: 'Ahmedabad, Gujarat',
    rating: 4.9,
    courses: ['PG in Food and Agribusiness Management', 'MBA in Agribusiness', 'Executive Program in Agri-Food Business'],
    fees: 'INR 10,00,000 - 24,00,000 for full program',
    ranking: 1,
    nirf: 'Rank 1 in Management',
    description: 'IIM Ahmedabad offers specialized programs in Agribusiness Management through its Centre for Management in Agriculture (CMA), established in 1963. The centre focuses on research, teaching, and training in agricultural and rural management.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Indian_Institute_of_Management_Ahmedabad_logo.png/220px-Indian_Institute_of_Management_Ahmedabad_logo.png',
    highlights: [
      'Premier management institute in India with specialized agribusiness focus',
      'Strong industry connections for placements in agri-business sector',
      'World-class faculty with expertise in agricultural economics and management',
      'Case-based learning methodology with real-world agricultural business cases',
      'International collaborations with leading agricultural universities'
    ],
    specializations: ['Food Supply Chain Management', 'Agricultural Policy', 'Rural Marketing', 'Agri-Finance']
  },
  {
    id: 'agm-2',
    name: 'Institute of Rural Management Anand (IRMA)',
    location: 'Anand, Gujarat',
    rating: 4.8,
    courses: ['Post Graduate Diploma in Rural Management', 'Fellow Programme in Rural Management', 'Executive Programs'],
    fees: 'INR 15,00,000 - 18,00,000 for full program',
    ranking: 2,
    nirf: 'Top 50 in Management',
    description: 'IRMA was founded in 1979 by Dr. Verghese Kurien, the father of White Revolution in India. The institute specializes in rural and agricultural management education, focusing on cooperative management and rural development.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/IRMA_logo.jpg/220px-IRMA_logo.jpg',
    highlights: [
      'India\'s premier institute exclusively focused on rural management',
      'Unique curriculum integrating rural immersion with management education',
      'Strong alumni network in agricultural cooperatives and rural development',
      'Close association with AMUL and other successful agricultural cooperatives',
      'Focus on sustainable and inclusive agricultural business models'
    ],
    specializations: ['Cooperative Management', 'Rural Marketing', 'Agricultural Value Chains', 'Microfinance']
  },
  {
    id: 'agm-3',
    name: 'National Institute of Agricultural Extension Management (MANAGE)',
    location: 'Hyderabad, Telangana',
    rating: 4.7,
    courses: ['Post Graduate Diploma in Agricultural Extension Management', 'Diploma in Agricultural Extension Services for Input Dealers'],
    fees: 'INR 1,20,000 - 2,50,000 for full program',
    ranking: 3,
    nirf: 'Not Ranked',
    description: 'MANAGE is an autonomous organization under the Ministry of Agriculture, Government of India. It focuses on agricultural extension management, agri-business management, and entrepreneurship development in agriculture.',
    imageUrl: 'https://www.manage.gov.in/images/manage-logo.png',
    highlights: [
      'National level institute focused on agricultural extension and management',
      'Strong government support and linkages',
      'Specialized training for agricultural extension professionals',
      'Focus on policy formulation and implementation in agriculture',
      'Promotes agri-entrepreneurship and startups'
    ],
    specializations: ['Agricultural Extension', 'Agri-Entrepreneurship', 'Agri-Marketing', 'Natural Resource Management']
  },
  {
    id: 'agm-4',
    name: 'Indian Institute of Management (IIM) Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    rating: 4.7,
    courses: ['MBA-Agribusiness', 'Executive Programs in Food and Agribusiness', 'PhD in Agribusiness Management'],
    fees: 'INR 10,00,000 - 22,00,000 for full program',
    ranking: 4,
    nirf: 'Rank 4 in Management',
    description: 'IIM Lucknow offers specialized programs in Agribusiness Management and has a dedicated Centre for Food and Agribusiness Management. The institute focuses on developing management professionals for the agricultural and food sectors.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/IIM_Lucknow_Logo.svg/220px-IIM_Lucknow_Logo.svg.png',
    highlights: [
      'Specialized Centre for Food and Agribusiness Management',
      'Strong research focus on agricultural supply chains',
      'Industry partnerships with leading agribusiness companies',
      'International student exchange programs focused on agricultural management',
      'Regular agribusiness conclaves and seminars'
    ],
    specializations: ['Food Supply Chain', 'Agricultural Marketing', 'Farm Management', 'Agricultural Finance']
  },
  {
    id: 'agm-5',
    name: 'National Institute of Food Technology Entrepreneurship and Management (NIFTEM)',
    location: 'Sonipat, Haryana',
    rating: 4.6,
    courses: ['B.Tech (Food Technology and Management)', 'M.Tech (Food Technology and Management)', 'MBA (Food and Agri-Business Management)'],
    fees: 'INR 2,00,000 - 5,00,000 for full program',
    ranking: 5,
    nirf: 'Top 100 in Management',
    description: 'NIFTEM is a premier institute under the Ministry of Food Processing Industries. It offers specialized education in food technology and management, focusing on entrepreneurship development in the food processing sector.',
    imageUrl: 'https://niftem.ac.in/site/writereaddata/siteContent/logo.jpg',
    highlights: [
      'Specialized institute for food technology and management',
      'State-of-the-art food processing pilot plants',
      'Strong focus on entrepreneurship in food processing',
      'Industry-integrated curriculum with internships',
      'Government initiatives and startup incubation support'
    ],
    specializations: ['Food Processing Technology', 'Food Supply Chain Management', 'Food Safety and Quality', 'Food Business Entrepreneurship']
  },
  {
    id: 'agm-6',
    name: 'College of Agribusiness Management, GBPUAT',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.5,
    courses: ['MBA (Agribusiness)', 'PhD in Agribusiness Management'],
    fees: 'INR 1,50,000 - 3,00,000 for full program',
    ranking: 6,
    nirf: 'Not Ranked',
    description: 'The College of Agribusiness Management at G.B. Pant University of Agriculture and Technology was established in 1996 to develop management professionals for the agricultural sector. It was one of the first dedicated agribusiness management programs in India.',
    imageUrl: 'https://www.gbpuat.ac.in/images/univ_logo.png',
    highlights: [
      'First dedicated agribusiness management program in India',
      'Located within a premier agricultural university',
      'Strong focus on practical aspects of agribusiness',
      'Rural immersion programs for students',
      'Industry linkages for placements and projects'
    ],
    specializations: ['Agricultural Marketing', 'Commodity Trading', 'Farm Management', 'Rural Finance']
  },
  {
    id: 'agm-7',
    name: 'Xavier Institute of Management and Entrepreneurship (XIME)',
    location: 'Bangalore, Karnataka',
    rating: 4.4,
    courses: ['MBA with Agribusiness Specialization', 'Executive MBA in Agribusiness'],
    fees: 'INR 8,00,000 - 12,00,000 for full program',
    ranking: 7,
    nirf: 'Top 100 in Management',
    description: 'XIME offers specialized courses in Agribusiness Management, focusing on developing professionals for the growing agricultural business sector. The institute emphasizes ethical business practices and sustainable agricultural development.',
    imageUrl: 'https://www.xime.org/wp-content/themes/xime/assets/images/logo.png',
    highlights: [
      'Value-based management education with agribusiness focus',
      'Strong industry connections in food and agriculture sector',
      'International collaborations with agricultural universities',
      'Emphasis on entrepreneurship in agriculture',
      'Sustainable and ethical business practices'
    ],
    specializations: ['Agricultural Supply Chain', 'Rural Marketing', 'Agri-Entrepreneurship', 'Food Retail Management']
  },
  {
    id: 'agm-8',
    name: 'Symbiosis Institute of International Business (SIIB)',
    location: 'Pune, Maharashtra',
    rating: 4.4,
    courses: ['MBA (Agri-Business)', 'Post Graduate Programs in Agricultural Business'],
    fees: 'INR 12,00,000 - 15,00,000 for full program',
    ranking: 8,
    nirf: 'Top 100 in Management',
    description: 'SIIB offers a specialized MBA in Agri-Business, focusing on international agricultural trade, food processing, and agricultural business management. The institute has strong international collaborations for global exposure.',
    imageUrl: 'https://www.siib.ac.in/assets/images/siib-logo.png',
    highlights: [
      'Focus on international agribusiness and trade',
      'Global exposure through exchange programs',
      'Industry-relevant curriculum with practical training',
      'Strong alumni network in agribusiness sector',
      'Regular industry interactions and seminars'
    ],
    specializations: ['International Agricultural Trade', 'Food Processing Management', 'Agricultural Retail', 'Commodity Trading']
  }
];

const AgriManagementColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriManagementColleges}
        streamType="Agricultural Management"
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

export default AgriManagementColleges; 