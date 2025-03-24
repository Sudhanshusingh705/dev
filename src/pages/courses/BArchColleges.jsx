import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const barchColleges = generateCollegeData('B.Arch');

const BArchColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={barchColleges}
        streamType="B.Arch"
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

export default BArchColleges; 