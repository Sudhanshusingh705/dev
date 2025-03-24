import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const bbaColleges = generateCollegeData('BBA');

const BBAColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bbaColleges}
        streamType="BBA"
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

export default BBAColleges; 