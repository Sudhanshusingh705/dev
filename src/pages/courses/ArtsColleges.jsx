import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { artsColleges } from '../../data/collegeData';

const ArtsColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={artsColleges}
        streamType="Arts"
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

export default ArtsColleges; 