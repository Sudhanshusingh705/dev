import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const bamsColleges = generateCollegeData('BAMS');

const BAMSColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bamsColleges}
        streamType="BAMS"
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

export default BAMSColleges; 