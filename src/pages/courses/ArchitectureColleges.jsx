import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const architectureColleges = generateCollegeData('Architecture');

const ArchitectureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={architectureColleges}
        streamType="Architecture"
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

export default ArchitectureColleges; 