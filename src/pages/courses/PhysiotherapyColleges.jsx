import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const physiotherapyColleges = generateCollegeData('Bachelor of Physiotherapy');

const PhysiotherapyColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={physiotherapyColleges}
        streamType="Bachelor of Physiotherapy"
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

export default PhysiotherapyColleges; 