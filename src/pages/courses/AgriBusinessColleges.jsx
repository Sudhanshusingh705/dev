import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agri-business college data
const agriBusinessColleges = [
  {
    id: 'agb-1',
    name: 'Indian Institute of Management (IIM) Ahmedabad',
    location: 'Ahmedabad, Gujarat',
    rating: 4.9,
    courses: ['MBA in Agribusiness', 'Executive Program in Food and Agribusiness Management'],
    fees: 'INR 23,00,000 - 28,00,000 for full program',
    ranking: 1,
    nirf: 'Rank 1 in Management',
    description: 'IIM Ahmedabad\'s Centre for Management in Agriculture was established in 1963 and is the oldest specialized center focusing on the agriculture and food sector. It offers specialized programs in agribusiness management through its flagship MBA program.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Indian_Institute_of_Management_Ahmedabad_logo.png/220px-Indian_Institute_of_Management_Ahmedabad_logo.png',
    highlights: [
      'Distinguished faculty specializing in agricultural economics and agribusiness',
      'State-of-the-art research facilities and case studies',
      'Strong industry connections with leading agribusiness companies',
      'Regular agribusiness conferences and seminars',
      'Excellent placement record in the agricultural business sector'
    ],
    specializations: ['Food Supply Chain Management', 'Agricultural Marketing', 'Agri-input Management', 'Agricultural Policy']
  },
  {
    id: 'agb-2',
    name: 'National Institute of Agricultural Marketing (NIAM)',
    location: 'Jaipur, Rajasthan',
    rating: 4.8,
    courses: ['PGDM (Agri-Business Management)', 'Executive PGDM in Agricultural Marketing'],
    fees: 'INR 7,00,000 - 10,00,000 for full program',
    ranking: 2,
    nirf: 'Not Ranked',
    description: 'NIAM is an autonomous organization under the Ministry of Agriculture and Farmers Welfare. It specializes in agricultural marketing and agribusiness management, offering postgraduate and executive programs for professionals in the agriculture sector.',
    imageUrl: 'https://www.ccsniam.gov.in/images/niam_logo.jpg',
    highlights: [
      'National level institute focused solely on agricultural marketing',
      'Strong government linkages and policy influence',
      'Specialized training for agricultural marketing professionals',
      'Regular industry interactions and market exposure',
      'Emphasis on practical market intelligence and research'
    ],
    specializations: ['Agricultural Marketing', 'Commodity Trading', 'Food Retail Management', 'Export-Import Management']
  },
  {
    id: 'agb-3',
    name: 'Symbiosis Institute of International Business (SIIB)',
    location: 'Pune, Maharashtra',
    rating: 4.7,
    courses: ['MBA (Agri-Business Management)', 'PG Diploma in Agri-Business Management'],
    fees: 'INR 14,00,000 - 18,00,000 for full program',
    ranking: 3,
    nirf: 'Top 100 in Management',
    description: 'SIIB offers a specialized MBA in Agri-Business that focuses on international agricultural trade, food processing, and agribusiness management. The institute has strong international collaborations and industry connections.',
    imageUrl: 'https://www.siib.ac.in/assets/images/siib-logo.png',
    highlights: [
      'Focus on international agribusiness and trade',
      'Strong emphasis on sustainable business practices',
      'International exposure through exchange programs',
      'Regular industry interactions and guest lectures',
      'State-of-the-art infrastructure and learning resources'
    ],
    specializations: ['International Agricultural Trade', 'Food Processing Management', 'Agri-Supply Chain Management', 'Agricultural Retail']
  },
  {
    id: 'agb-4',
    name: 'College of Agribusiness Management, GBPUAT',
    location: 'Pantnagar, Uttarakhand',
    rating: 4.6,
    courses: ['MBA (Agribusiness Management)', 'PhD in Agribusiness Management'],
    fees: 'INR 2,50,000 - 4,00,000 for full program',
    ranking: 4,
    nirf: 'Not Ranked',
    description: 'The College of Agribusiness Management at G.B. Pant University was established in 1996 as one of the first dedicated agribusiness management programs in India. It combines agricultural science with management principles.',
    imageUrl: 'https://www.gbpuat.ac.in/images/univ_logo.png',
    highlights: [
      'First dedicated agribusiness management program in India',
      'Located within a premier agricultural university',
      'Integration of agricultural science with management education',
      'Strong focus on rural entrepreneurship and development',
      'Extensive field exposure and practical training'
    ],
    specializations: ['Farm Management', 'Agricultural Marketing', 'Rural Finance', 'Agri-Input Management']
  },
  {
    id: 'agb-5',
    name: 'International Agribusiness Management Institute (IABMI)',
    location: 'Anand, Gujarat',
    rating: 4.5,
    courses: ['MBA (Agribusiness Management)', 'PhD in Agribusiness Management'],
    fees: 'INR 3,00,000 - 5,00,000 for full program',
    ranking: 5,
    nirf: 'Not Ranked',
    description: 'IABMI operates under Anand Agricultural University and focuses on developing managerial talent for the food and agribusiness sector. Located in the milk capital of India, it has strong connections with dairy cooperatives and agribusiness companies.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Anand_Agricultural_University_Logo.svg/220px-Anand_Agricultural_University_Logo.svg.png',
    highlights: [
      'Located in the hub of dairy cooperative movement (Anand)',
      'Strong focus on dairy business management',
      'Close association with Amul and other cooperatives',
      'Practical exposure to agribusiness operations',
      'Regular industry interactions and internships'
    ],
    specializations: ['Dairy Business Management', 'Food Processing', 'Cooperative Management', 'Agricultural Marketing']
  },
  {
    id: 'agb-6',
    name: 'School of Agribusiness and Rural Management, RNTU',
    location: 'Bhopal, Madhya Pradesh',
    rating: 4.4,
    courses: ['MBA (Agribusiness Management)', 'BBA (Agribusiness Management)'],
    fees: 'INR 2,00,000 - 4,00,000 for full program',
    ranking: 6,
    nirf: 'Not Ranked',
    description: 'The School of Agribusiness and Rural Management at Rabindranath Tagore University offers specialized programs in agribusiness management with a focus on entrepreneurship development in the agricultural sector.',
    imageUrl: 'https://rntu.ac.in/images/rntu-logo.png',
    highlights: [
      'Strong focus on agri-entrepreneurship',
      'Specialized courses on warehouse management and logistics',
      'Emphasis on technology integration in agribusiness',
      'Industry-oriented curriculum with practical training',
      'Regular field visits and industry exposure'
    ],
    specializations: ['Agri-Entrepreneurship', 'Warehouse Management', 'Agricultural Finance', 'Farm Mechanization Business']
  },
  {
    id: 'agb-7',
    name: 'Agribusiness Management Institute, MPUAT',
    location: 'Udaipur, Rajasthan',
    rating: 4.3,
    courses: ['MBA (Agribusiness Management)', 'PhD in Agribusiness Management'],
    fees: 'INR 2,00,000 - 3,50,000 for full program',
    ranking: 7,
    nirf: 'Not Ranked',
    description: 'The Agribusiness Management Institute at Maharana Pratap University of Agriculture and Technology offers specialized management education focused on the agricultural sector in arid and semi-arid regions.',
    imageUrl: 'http://www.mpuat.ac.in/images/logo.jpg',
    highlights: [
      'Specialization in agribusiness for arid and semi-arid regions',
      'Focus on water resource management and dry-land farming business',
      'Strong emphasis on agricultural export management',
      'Regular industry interactions and field visits',
      'Practical training in agribusiness operations'
    ],
    specializations: ['Dryland Agribusiness', 'Water Resource Management', 'Agricultural Export', 'Agri-Tourism']
  },
  {
    id: 'agb-8',
    name: 'Department of Agribusiness Management, SVPUAT',
    location: 'Meerut, Uttar Pradesh',
    rating: 4.2,
    courses: ['MBA (Agribusiness Management)', 'PhD in Agribusiness Management'],
    fees: 'INR 1,50,000 - 3,00,000 for full program',
    ranking: 8,
    nirf: 'Not Ranked',
    description: 'The Department of Agribusiness Management at Sardar Vallabhbhai Patel University of Agriculture and Technology offers specialized management education for the agricultural sector with a focus on the Western Uttar Pradesh region.',
    imageUrl: 'https://svbpmeerut.ac.in/wp-content/uploads/2020/06/svbpuat-logo.png',
    highlights: [
      'Focus on sugarcane and wheat value chain management',
      'Specialized courses on agricultural input business',
      'Strong emphasis on rural marketing',
      'Regular industry interactions and field visits',
      'Practical training in agribusiness operations'
    ],
    specializations: ['Sugarcane Value Chain', 'Wheat Value Chain', 'Agricultural Input Business', 'Rural Marketing']
  }
];

const AgriBusinessColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriBusinessColleges}
        streamType="Agri-Business"
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

export default AgriBusinessColleges; 