import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real plant science college data
const plantScienceColleges = [
  {
    id: 'plant-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Plant Science', 'Ph.D. Plant Science'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Plant Science is the premier center for plant research in India. It offers specialized programs in plant physiology, plant breeding, plant biochemistry, and molecular biology with state-of-the-art research facilities.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier agricultural research institute',
      'State-of-the-art plant research facilities',
      'International collaborations for plant science research',
      'Leader in developing improved plant varieties',
      'Strong focus on climate-resilient crop development'
    ],
    specializations: ['Plant Breeding', 'Plant Physiology', 'Plant Biochemistry', 'Molecular Biology']
  },
  {
    id: 'plant-2',
    name: 'University of Delhi, Department of Plant Molecular Biology',
    location: 'New Delhi',
    rating: 4.8,
    courses: ['M.Sc. Plant Molecular Biology', 'Ph.D. Plant Molecular Biology'],
    fees: 'INR 20,000 - 60,000 per annum',
    ranking: 2,
    nirf: 'Top 5 in Science',
    description: 'The Department of Plant Molecular Biology at the University of Delhi is a Center of Advanced Study in Plant Molecular Biology and Biotechnology. It offers cutting-edge education in various aspects of plant molecular biology and genomics.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cf/University_of_Delhi.png',
    highlights: [
      'Center of Advanced Study in Plant Molecular Biology',
      'State-of-the-art genomics and proteomics facilities',
      'Strong focus on stress biology and plant-environment interactions',
      'International collaborations with leading research institutes',
      'Excellent publication record in high-impact journals'
    ],
    specializations: ['Plant Genomics', 'Stress Biology', 'Plant Development', 'Molecular Breeding']
  },
  {
    id: 'plant-3',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7,
    courses: ['B.Sc. Agriculture with Plant Science Specialization', 'M.Sc. Plant Science', 'Ph.D. Plant Science'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 3,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Plant Sciences specializes in tropical plant biology and offers comprehensive education in plant breeding, genetics, physiology, and biochemistry with a focus on crops suitable for southern India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on tropical plant biology',
      'Strong focus on drought and salt tolerance in plants',
      'Advanced studies on plant-microbe interactions',
      'Pioneer in developing climate-resilient crop varieties',
      'Excellent facilities for plant phenotyping and genomics'
    ],
    specializations: ['Tropical Plant Breeding', 'Plant Stress Physiology', 'Plant-Microbe Interactions', 'Plant Secondary Metabolites']
  },
  {
    id: 'plant-4',
    name: 'Banaras Hindu University (BHU)',
    location: 'Varanasi, Uttar Pradesh',
    rating: 4.7,
    courses: ['M.Sc. Plant Science', 'Ph.D. Plant Science'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 4,
    nirf: 'Top 15 in Science',
    description: 'BHU\'s Department of Plant Science is known for its comprehensive research in plant biology, covering areas from plant physiology to molecular biology. It has strong expertise in medicinal plants and plant-environment interactions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Institute_of_Agricultural_Sciences%2C_BHU_Logo.svg/220px-Institute_of_Agricultural_Sciences%2C_BHU_Logo.svg.png',
    highlights: [
      'Strong focus on medicinal plant research',
      'Excellent facilities for plant metabolomics',
      'Research on sacred plants of Varanasi region',
      'Advanced studies on plant-environment interactions',
      'Interdisciplinary approach to plant science'
    ],
    specializations: ['Medicinal Plants', 'Plant Metabolomics', 'Plant-Environment Interactions', 'Plant Conservation']
  },
  {
    id: 'plant-5',
    name: 'National Centre for Biological Sciences (NCBS)',
    location: 'Bangalore, Karnataka',
    rating: 4.7,
    courses: ['Integrated Ph.D. in Plant Biology', 'Ph.D. in Plant Science'],
    fees: 'INR 25,000 - 60,000 per annum',
    ranking: 5,
    nirf: 'Not Ranked',
    description: 'NCBS is a premier research institution offering cutting-edge education in plant biology. The center is known for its fundamental research in plant developmental biology, plant-environment interactions, and evolutionary plant biology.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/29/NCBS_logo.png',
    highlights: [
      'World-class research facilities for plant biology',
      'Strong focus on fundamental research in plant science',
      'International faculty with excellent publication record',
      'Interdisciplinary approach to plant research',
      'Excellent funding for plant biology research'
    ],
    specializations: ['Plant Developmental Biology', 'Plant-Environment Interactions', 'Evolutionary Plant Biology', 'Plant Cell Biology']
  },
  {
    id: 'plant-6',
    name: 'Centre for Cellular and Molecular Biology (CCMB)',
    location: 'Hyderabad, Telangana',
    rating: 4.6,
    courses: ['Ph.D. in Plant Molecular Biology', 'Post-Doctoral Programs in Plant Science'],
    fees: 'INR 20,000 - 50,000 per annum',
    ranking: 6,
    nirf: 'Not Ranked',
    description: 'CCMB offers specialized research programs in plant molecular biology and biotechnology. The center is known for its cutting-edge research in plant genomics, proteomics, and developmental biology.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CCMB_India_logo.png/220px-CCMB_India_logo.png',
    highlights: [
      'State-of-the-art facilities for plant molecular research',
      'Strong focus on plant genomics and proteomics',
      'International collaborations for advanced research',
      'Excellent publication record in high-impact journals',
      'Strong industry connections for translational research'
    ],
    specializations: ['Plant Genomics', 'Plant Proteomics', 'Plant Developmental Biology', 'Plant Biotechnology']
  },
  {
    id: 'plant-7',
    name: 'Jawaharlal Nehru University (JNU)',
    location: 'New Delhi',
    rating: 4.6,
    courses: ['M.Sc. Plant Biology', 'Ph.D. Plant Biology'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 7,
    nirf: 'Top 10 in Science',
    description: 'JNU\'s School of Life Sciences offers specialized programs in plant biology with a focus on plant-environment interactions, plant stress physiology, and plant molecular biology. It has strong expertise in plant adaptation to changing climate.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Jawaharlal_Nehru_University_logo.svg/220px-Jawaharlal_Nehru_University_logo.svg.png',
    highlights: [
      'Strong focus on plant-environment interactions',
      'Advanced research on plant adaptation to climate change',
      'Excellent facilities for plant stress physiology',
      'Interdisciplinary approach to plant research',
      'Strong international collaborations'
    ],
    specializations: ['Plant Stress Physiology', 'Plant-Environment Interactions', 'Plant Molecular Biology', 'Climate Change Biology']
  },
  {
    id: 'plant-8',
    name: 'University of Hyderabad',
    location: 'Hyderabad, Telangana',
    rating: 4.5,
    courses: ['M.Sc. Plant Biology & Biotechnology', 'Ph.D. Plant Sciences'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 8,
    nirf: 'Top 20 in Science',
    description: 'The Department of Plant Sciences at the University of Hyderabad offers comprehensive education in plant biology and biotechnology. It has strong expertise in plant genetics, molecular biology, and plant biotechnology.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/University_of_Hyderabad_Logo.svg/220px-University_of_Hyderabad_Logo.svg.png',
    highlights: [
      'Comprehensive curriculum in plant biology',
      'Strong focus on plant biotechnology applications',
      'Advanced research on plant genetic diversity',
      'Excellent facilities for plant tissue culture',
      'Industry connections for biotechnology applications'
    ],
    specializations: ['Plant Genetics', 'Plant Biotechnology', 'Plant Tissue Culture', 'Plant Molecular Biology']
  }
];

const PlantScienceColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={plantScienceColleges}
        streamType="Plant Science"
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

export default PlantScienceColleges; 