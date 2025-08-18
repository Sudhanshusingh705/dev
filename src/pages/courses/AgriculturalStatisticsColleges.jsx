import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agricultural statistics college data
const agriculturalStatisticsColleges = [
  {
    id: 'agstat-1',
    name: 'Indian Agricultural Statistics Research Institute (IASRI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Agricultural Statistics', 'Ph.D. Agricultural Statistics'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'N/A - Specialized Research Institute',
    description: 'IASRI is India\'s premier institute for agricultural statistics research and education. It offers specialized programs in statistical genetics, forecasting, experimental designs, and statistical computing with state-of-the-art computational facilities.',
    imageUrl: 'https://www.iasri.res.in/images/iasri.jpg',
    highlights: [
      'India\'s premier agricultural statistics institute',
      'State-of-the-art computing facilities',
      'International collaborations for statistical research',
      'Leader in developing statistical software for agricultural research',
      'Strong focus on biometrical genetics'
    ],
    specializations: ['Statistical Genetics', 'Experimental Design', 'Forecasting Methods', 'Statistical Computing']
  },
  {
    id: 'agstat-2',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.8,
    courses: ['M.Sc. Agricultural Statistics', 'Ph.D. Agricultural Statistics'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Agricultural Statistics offers comprehensive education in statistical methods, experimental designs, and data analysis techniques for agricultural research.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'Strong integration with agricultural research',
      'Focus on field experiment design',
      'Advanced statistical modeling for crop yields',
      'Pioneer in sampling techniques for agricultural surveys',
      'Excellent facilities for statistical computing'
    ],
    specializations: ['Experimental Design', 'Survey Sampling', 'Statistical Modeling', 'Agricultural Data Analysis']
  },
  {
    id: 'agstat-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Statistics', 'Ph.D. Agricultural Statistics'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Agricultural Statistics offers specialized education in statistical methods for agricultural research, econometrics, and forecasting with a focus on crops of southern India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on crop yield forecasting models',
      'Strong focus on agricultural econometrics',
      'Advanced studies on climate data analysis',
      'Pioneer in GIS applications in agriculture',
      'Strong focus on time series analysis'
    ],
    specializations: ['Yield Forecasting', 'Agricultural Econometrics', 'Climate Data Analysis', 'GIS Applications']
  },
  {
    id: 'agstat-4',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    courses: ['M.Sc. Agricultural Statistics', 'Ph.D. Agricultural Statistics'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Mathematics and Statistics offers specialized programs in statistical methods for agricultural research, time series analysis, and statistical computing with a focus on field crops.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Strong focus on experimental designs for field trials',
      'Advanced research on yield prediction models',
      'Expertise in multivariate analysis techniques',
      'Leading research on fertilizer response models',
      'Excellent facilities for statistical software training'
    ],
    specializations: ['Field Trial Design', 'Yield Prediction', 'Multivariate Analysis', 'Fertilizer Response Modeling']
  },
  {
    id: 'agstat-5',
    name: 'Bidhan Chandra Krishi Viswavidyalaya (BCKV)',
    location: 'Mohanpur, West Bengal',
    rating: 4.6,
    courses: ['M.Sc. Agricultural Statistics', 'Ph.D. Agricultural Statistics'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 5,
    nirf: 'Top 20 in Agriculture',
    description: 'BCKV\'s Department of Agricultural Statistics offers comprehensive education in statistical methods for agricultural research, survey design, and data analysis with a focus on eastern India\'s agricultural systems.',
    imageUrl: 'https://www.bckv.edu.in/images/bckv1.jpg',
    highlights: [
      'Specialized in sampling techniques for agricultural surveys',
      'Strong focus on statistical methods for crop cutting experiments',
      'Advanced studies on rainfall data analysis',
      'Pioneer in statistical modeling for pest forecasting',
      'Excellent training in statistical software packages'
    ],
    specializations: ['Survey Design', 'Crop Cutting Experiments', 'Rainfall Analysis', 'Pest Forecasting']
  },
  {
    id: 'agstat-6',
    name: 'National Statistical System Training Academy (NSSTA)',
    location: 'Greater Noida, Uttar Pradesh',
    rating: 4.7,
    courses: ['PG Diploma in Agricultural Statistics', 'Training Programs in Agricultural Statistics'],
    fees: 'Government sponsored / INR 50,000 - 100,000 for self-financed',
    ranking: 'National Training Institute',
    nirf: 'N/A - Training Institute',
    description: 'NSSTA offers specialized training in agricultural statistics, survey design, data analysis, and official statistics production with a focus on national agricultural statistics system.',
    imageUrl: 'https://www.mospi.gov.in/nssta/images/nssta.jpg',
    highlights: [
      'India\'s premier training institute for official statistics',
      'Strong focus on agricultural survey methodology',
      'Advanced training in data processing techniques',
      'Leader in crop area and production statistics',
      'Excellent facilities for hands-on statistical training'
    ],
    specializations: ['Agricultural Surveys', 'Official Statistics', 'Data Processing', 'Crop Statistics']
  },
  {
    id: 'agstat-7',
    name: 'Indian Institute of Technology (IIT Kanpur)',
    location: 'Kanpur, Uttar Pradesh',
    rating: 4.8,
    courses: ['M.Tech. with specialization in Agricultural Statistics', 'Ph.D. with Agricultural Statistics focus'],
    fees: 'INR 50,000 - 200,000 per annum',
    ranking: 'Top Technical Institute',
    nirf: 'Top 5 in Engineering',
    description: 'IIT Kanpur\'s Department of Mathematics and Statistics offers advanced programs in statistical methods with applications to agricultural research, environmental monitoring, and precision agriculture.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/220px-IIT_Kanpur_Logo.svg.png',
    highlights: [
      'Strong focus on advanced statistical modeling',
      'Cutting-edge research on machine learning for agriculture',
      'Advanced studies on remote sensing data analysis',
      'Leader in computational statistics',
      'Excellent facilities for high-performance computing'
    ],
    specializations: ['Advanced Modeling', 'Machine Learning Applications', 'Remote Sensing Analysis', 'Computational Statistics']
  },
  {
    id: 'agstat-8',
    name: 'Indian Statistical Institute (ISI)',
    location: 'Kolkata, West Bengal',
    rating: 4.9,
    courses: ['M.Stat. with Agricultural Statistics specialization', 'Ph.D. with Agricultural Statistics focus'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 'Premier Statistical Institute',
    nirf: 'N/A - Specialized Institute',
    description: 'ISI offers world-class education in statistical theory and methods with applications to agricultural research, survey design, econometrics, and data science.',
    imageUrl: 'https://www.isical.ac.in/~webmaster/images/logo.png',
    highlights: [
      'India\'s premier institution for statistical education',
      'Strong theoretical foundation in statistics',
      'Advanced research on statistical inference',
      'Leader in survey methodology',
      'Excellent facilities for statistical computing and data science'
    ],
    specializations: ['Statistical Theory', 'Survey Methodology', 'Statistical Inference', 'Data Science Applications']
  }
];

const AgriculturalStatisticsColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriculturalStatisticsColleges}
        streamType="Agricultural Statistics"
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

export default AgriculturalStatisticsColleges; 