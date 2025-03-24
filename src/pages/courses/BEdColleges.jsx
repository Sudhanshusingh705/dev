import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const bedColleges = generateCollegeData('B.Ed');

const BEdColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bedColleges}
        streamType="B.Ed"
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

export default BEdColleges; 