import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real applied agriculture college data
const appliedAgricultureColleges = [
  {
    id: 'appagri-1',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.9,
    courses: ['B.Sc. Agriculture', 'B.Tech. Agricultural Engineering', 'M.Sc. Agriculture'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU is known for its practical approach to agricultural education with a strong focus on field application. It offers specialized programs in farm management, agricultural technology, extension education, and agribusiness with excellent field demonstration facilities.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Leader in practical agricultural education',
      'State-of-the-art field demonstration units',
      'Strong industry collaborations',
      'Pioneer in developing farm technologies',
      'Excellent farmer training programs'
    ],
    specializations: ['Farm Management', 'Agricultural Technology', 'Extension Education', 'Agribusiness']
  },
  {
    id: 'appagri-2',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.8,
    courses: ['B.Sc. Agriculture', 'B.Tech. Agricultural Engineering', 'Diploma in Agriculture'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU offers application-oriented agricultural education with a focus on practical skills, farm management, and agricultural entrepreneurship. It has strong connections with farming communities and industries.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Application-oriented curriculum',
      'Strong focus on farm mechanization',
      'Advanced training in precision farming',
      'Pioneer in integrated farming systems',
      'Excellent agri-clinic and agribusiness training'
    ],
    specializations: ['Farm Mechanization', 'Precision Farming', 'Integrated Farming', 'Agri-Clinics']
  },
  {
    id: 'appagri-3',
    name: 'Sam Higginbottom University of Agriculture, Technology and Sciences',
    location: 'Prayagraj, Uttar Pradesh',
    rating: 4.7,
    courses: ['B.Sc. Agriculture', 'Diploma in Agriculture', 'Certificate Courses in Applied Agriculture'],
    fees: 'INR 25,000 - 80,000 per annum',
    ranking: 3,
    nirf: 'Top 30 in Agriculture',
    description: 'SHUATS offers hands-on agricultural education with a focus on sustainable practices, rural development, and agricultural entrepreneurship. It has extensive field laboratories and training centers.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Sam_Higginbottom_University_of_Agriculture%2C_Technology_and_Sciences_logo.svg/220px-Sam_Higginbottom_University_of_Agriculture%2C_Technology_and_Sciences_logo.svg.png',
    highlights: [
      'Comprehensive hands-on training',
      'Strong focus on sustainable agriculture',
      'Advanced training in agri-entrepreneurship',
      'Leader in rural development programs',
      'Excellent international collaborations'
    ],
    specializations: ['Sustainable Agriculture', 'Agri-Entrepreneurship', 'Rural Development', 'Integrated Farming']
  },
  {
    id: 'appagri-4',
    name: 'Anand Agricultural University',
    location: 'Anand, Gujarat',
    rating: 4.7,
    courses: ['B.Sc. Agriculture', 'Diploma in Agriculture', 'Certificate in Applied Agriculture'],
    fees: 'INR 10,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Top 20 in Agriculture',
    description: 'AAU is known for its practical approach to agricultural education with a strong focus on dairy farming, cooperative management, and agricultural extension. It has strong connections with farmers and industry.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Anand_Agricultural_University_Logo.svg/220px-Anand_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in cooperative management',
      'Strong focus on dairy farming',
      'Advanced training in agricultural extension',
      'Leader in farmer participatory research',
      'Excellent industry linkages'
    ],
    specializations: ['Dairy Farming', 'Cooperative Management', 'Agricultural Extension', 'Participatory Research']
  },
  {
    id: 'appagri-5',
    name: 'Dr. Rajendra Prasad Central Agricultural University',
    location: 'Pusa, Bihar',
    rating: 4.6,
    courses: ['B.Sc. Agriculture', 'Diploma in Agriculture', 'Vocational Courses in Agriculture'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 5,
    nirf: 'Top 25 in Agriculture',
    description: 'RPCAU offers application-oriented agricultural education with a focus on eastern India\'s farming systems, flood-prone agriculture, and integrated farming. It has strong extension networks in rural Bihar.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Dr._Rajendra_Prasad_Central_Agricultural_University_Logo.svg/220px-Dr._Rajendra_Prasad_Central_Agricultural_University_Logo.svg.png',
    highlights: [
      'Specialized in flood-prone agriculture',
      'Strong focus on eastern India farming systems',
      'Advanced training in water management',
      'Leader in community-based extension',
      'Excellent rural outreach programs'
    ],
    specializations: ['Flood-prone Agriculture', 'Water Management', 'Community Extension', 'Integrated Farming']
  },
  {
    id: 'appagri-6',
    name: 'National Academy of Agricultural Research Management (NAARM)',
    location: 'Hyderabad, Telangana',
    rating: 4.8,
    courses: ['PG Diploma in Agricultural Management', 'Certificate Courses in Agricultural Leadership'],
    fees: 'INR 50,000 - 100,000 per program',
    ranking: 'National Institute',
    nirf: 'N/A - Specialized Institute',
    description: 'NAARM offers specialized training in agricultural management, leadership, project management, and agribusiness with a focus on professional development for agricultural professionals.',
    imageUrl: 'https://naarm.org.in/naarm/images/home/naarm-main-building.jpg',
    highlights: [
      'India\'s premier agricultural management institute',
      'Strong focus on leadership development',
      'Advanced training in project management',
      'Leader in agribusiness incubation',
      'Excellent network with agricultural industries'
    ],
    specializations: ['Agricultural Management', 'Leadership Development', 'Project Management', 'Agribusiness Incubation']
  },
  {
    id: 'appagri-7',
    name: 'Krishi Vigyan Kendra Network (KVK)',
    location: 'Pan-India (700+ centers)',
    rating: 4.7,
    courses: ['Certificate Courses in Applied Agriculture', 'Vocational Training Programs', 'Skill Development Courses'],
    fees: 'Minimal fees / Government subsidized',
    ranking: 'Extension Network',
    nirf: 'N/A - Extension Network',
    description: 'The KVK Network provides application-oriented agricultural training at the grassroots level with a focus on skill development, technology transfer, and farmer education across India.',
    imageUrl: 'https://kvk.icar.gov.in/images/kvk.jpg',
    highlights: [
      'India\'s largest agricultural extension network',
      'Direct farmer training programs',
      'Practical demonstration of technologies',
      'Strong focus on local farming systems',
      'Excellent for practical skill development'
    ],
    specializations: ['Technology Transfer', 'Skill Development', 'Farmer Training', 'Local Farming Systems']
  },
  {
    id: 'appagri-8',
    name: 'National Institute of Agricultural Extension Management (MANAGE)',
    location: 'Hyderabad, Telangana',
    rating: 4.7,
    courses: ['PG Diploma in Agricultural Extension Management', 'Certificate Courses in Agripreneurship'],
    fees: 'INR 20,000 - 60,000 per program',
    ranking: 'National Institute',
    nirf: 'N/A - Specialized Institute',
    description: 'MANAGE specializes in agricultural extension education with a focus on technology transfer, entrepreneurship development, and management of extension systems for effective agricultural development.',
    imageUrl: 'https://www.manage.gov.in/images/manage-building.jpg',
    highlights: [
      'India\'s premier agricultural extension management institute',
      'Strong focus on agripreneurship',
      'Advanced training in technology transfer',
      'Leader in extension management systems',
      'Excellent agri-startup support programs'
    ],
    specializations: ['Extension Management', 'Agripreneurship', 'Technology Transfer', 'Agricultural Communication']
  }
];

const AppliedAgricultureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={appliedAgricultureColleges}
        streamType="Applied Agriculture"
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

export default AppliedAgricultureColleges; 