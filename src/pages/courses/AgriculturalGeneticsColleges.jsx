import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';

// Real agricultural genetics college data
const agriculturalGeneticsColleges = [
  {
    id: 'aggene-1',
    name: 'Indian Agricultural Research Institute (IARI)',
    location: 'New Delhi',
    rating: 4.9,
    courses: ['M.Sc. Genetics and Plant Breeding', 'Ph.D. Genetics and Plant Breeding'],
    fees: 'INR 15,000 - 50,000 per annum',
    ranking: 1,
    nirf: 'Rank 1 in Agriculture',
    description: 'IARI\'s Division of Genetics offers world-class education in plant genetics, molecular breeding, and crop improvement. It is known for developing numerous high-yielding and disease-resistant crop varieties that have revolutionized Indian agriculture.',
    imageUrl: 'https://www.iari.res.in/files/images/main-building.jpg',
    highlights: [
      'India\'s premier institute for agricultural genetics research',
      'State-of-the-art molecular breeding facilities',
      'International collaborations for genomics research',
      'Leader in developing improved crop varieties',
      'Strong focus on wheat and rice genetics'
    ],
    specializations: ['Plant Breeding', 'Molecular Genetics', 'Crop Improvement', 'Genomics']
  },
  {
    id: 'aggene-2',
    name: 'Tamil Nadu Agricultural University (TNAU)',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.8,
    courses: ['B.Sc. Agriculture with Genetics Specialization', 'M.Sc. Genetics and Plant Breeding', 'Ph.D. Genetics and Plant Breeding'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 2,
    nirf: 'Rank 3 in Agriculture',
    description: 'TNAU\'s Department of Plant Breeding and Genetics is known for its comprehensive programs in crop improvement, molecular breeding, and genetic engineering with a focus on pulses, millets, and rice.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TNAU_Main_Building.jpg/800px-TNAU_Main_Building.jpg',
    highlights: [
      'Leading research on pulse crop genetics',
      'Strong focus on millet improvement',
      'Advanced studies on drought tolerance genetics',
      'Pioneer in molecular marker development',
      'Excellent facilities for genomic selection'
    ],
    specializations: ['Pulse Crop Genetics', 'Millet Improvement', 'Drought Tolerance', 'Molecular Markers']
  },
  {
    id: 'aggene-3',
    name: 'Punjab Agricultural University (PAU)',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    courses: ['M.Sc. Genetics and Plant Breeding', 'Ph.D. Genetics and Plant Breeding'],
    fees: 'INR 15,000 - 40,000 per annum',
    ranking: 3,
    nirf: 'Rank 2 in Agriculture',
    description: 'PAU\'s Department of Plant Breeding and Genetics has pioneered wheat and rice breeding in India and offers specialized programs in cereal crop improvement, molecular genetics, and conservation of plant genetic resources.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thapar_university.jpg/800px-Thapar_university.jpg',
    highlights: [
      'Pioneer in wheat and rice breeding in India',
      'Extensive germplasm collection and conservation',
      'Advanced studies on biofortification',
      'Leading research on disease resistance genetics',
      'Strong focus on quality improvement in cereals'
    ],
    specializations: ['Cereal Crop Breeding', 'Disease Resistance', 'Biofortification', 'Germplasm Conservation']
  },
  {
    id: 'aggene-4',
    name: 'National Bureau of Plant Genetic Resources (NBPGR)',
    location: 'New Delhi',
    rating: 4.8,
    courses: ['M.Sc. Plant Genetic Resources', 'Ph.D. Plant Genetic Resources'],
    fees: 'INR 15,000 - 45,000 per annum',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'NBPGR is India\'s premier institute for plant genetic resources conservation and research. It offers specialized education in germplasm collection, characterization, conservation, and utilization for crop improvement.',
    imageUrl: 'https://www.nbpgr.ernet.in/images/nbpgr.jpg',
    highlights: [
      'India\'s nodal agency for plant genetic resources',
      'World-class cryopreservation facilities',
      'Strong focus on germplasm characterization',
      'Leader in plant quarantine and biosafety',
      'Excellent network with international gene banks'
    ],
    specializations: ['Germplasm Conservation', 'Plant Quarantine', 'Genetic Resource Utilization', 'Cryopreservation']
  },
  {
    id: 'aggene-5',
    name: 'Bidhan Chandra Krishi Viswavidyalaya (BCKV)',
    location: 'Mohanpur, West Bengal',
    rating: 4.6,
    courses: ['M.Sc. Genetics and Plant Breeding', 'Ph.D. Genetics and Plant Breeding'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 5,
    nirf: 'Top 20 in Agriculture',
    description: 'BCKV\'s Department of Genetics and Plant Breeding offers comprehensive education in crop improvement, molecular breeding, and genetic engineering with a focus on rice, vegetables, and oilseed crops.',
    imageUrl: 'https://www.bckv.edu.in/images/bckv1.jpg',
    highlights: [
      'Leading research on rice genetics in eastern India',
      'Strong focus on vegetable crop improvement',
      'Advanced studies on oilseed genetics',
      'Pioneer in mutation breeding',
      'Excellent facilities for marker-assisted selection'
    ],
    specializations: ['Rice Genetics', 'Vegetable Breeding', 'Mutation Breeding', 'Oilseed Improvement']
  },
  {
    id: 'aggene-6',
    name: 'Acharya N.G. Ranga Agricultural University (ANGRAU)',
    location: 'Guntur, Andhra Pradesh',
    rating: 4.6,
    courses: ['M.Sc. Genetics and Plant Breeding', 'Ph.D. Genetics and Plant Breeding'],
    fees: 'INR 10,000 - 35,000 per annum',
    ranking: 6,
    nirf: 'Top 10 in Agriculture',
    description: 'ANGRAU\'s Department of Genetics and Plant Breeding specializes in rice breeding, molecular genetics, and biotic stress resistance breeding with a focus on crops of importance to Andhra Pradesh.',
    imageUrl: 'https://www.angrau.ac.in/images/campus/lam_campus_1.jpg',
    highlights: [
      'Leading research on rice breeding in south India',
      'Strong focus on biotic stress resistance',
      'Advanced studies on molecular marker development',
      'Pioneer in participatory plant breeding',
      'Excellent facilities for genetic transformation'
    ],
    specializations: ['Rice Breeding', 'Biotic Stress Resistance', 'Molecular Markers', 'Participatory Breeding']
  },
  {
    id: 'aggene-7',
    name: 'National Research Centre on Plant Biotechnology (NRCPB)',
    location: 'New Delhi',
    rating: 4.7,
    courses: ['Ph.D. Plant Molecular Biology and Biotechnology', 'Post-doctoral Research'],
    fees: 'Fellowship and stipend basis',
    ranking: 'Research Institute',
    nirf: 'N/A - Research Institute',
    description: 'NRCPB is a premier research center focused on plant molecular biology and genetic engineering. It offers specialized research opportunities in genomics, gene editing, and molecular marker development.',
    imageUrl: 'https://www.nrcpb.res.in/images/nrcpb.jpg',
    highlights: [
      'India\'s dedicated center for plant molecular biology',
      'Strong focus on genetic engineering',
      'Advanced facilities for genomics and proteomics',
      'Leader in CRISPR-based crop improvement',
      'Excellent network with international biotechnology institutes'
    ],
    specializations: ['Genomics', 'Gene Editing', 'Molecular Breeding', 'Genetic Engineering']
  },
  {
    id: 'aggene-8',
    name: 'University of Agricultural Sciences (UAS)',
    location: 'Bangalore, Karnataka',
    rating: 4.6,
    courses: ['M.Sc. Genetics and Plant Breeding', 'Ph.D. Genetics and Plant Breeding'],
    fees: 'INR 12,000 - 40,000 per annum',
    ranking: 8,
    nirf: 'Top 15 in Agriculture',
    description: 'UAS Bangalore\'s Department of Genetics and Plant Breeding offers specialized programs in crop improvement, molecular breeding, and genetic engineering with a focus on millet crops, pulses, and horticultural crops.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/University_of_Agricultural_Sciences%2C_Bangalore_logo.svg/220px-University_of_Agricultural_Sciences%2C_Bangalore_logo.svg.png',
    highlights: [
      'Specialized in millet crop improvement',
      'Strong focus on finger millet genetics',
      'Advanced research on horticultural crop breeding',
      'Expertise in pulse crop genetics',
      'Leading research on climate-resilient crop varieties'
    ],
    specializations: ['Millet Improvement', 'Horticultural Crop Breeding', 'Pulse Genetics', 'Climate Resilience']
  }
];

const AgriculturalGeneticsColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agriculturalGeneticsColleges}
        streamType="Agricultural Genetics"
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

export default AgriculturalGeneticsColleges; 