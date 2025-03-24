import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data';

const bplanningColleges = generateCollegeData('B.Planning');

const BPlanningColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bplanningColleges}
        streamType="B.Planning"
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

export default BPlanningColleges; 