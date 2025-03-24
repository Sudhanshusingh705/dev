import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const baColleges = generateCollegeData('BA');

const BAColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={baColleges}
        streamType="BA"
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

export default BAColleges; 