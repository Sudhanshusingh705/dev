import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { scienceColleges } from '../../data/collegeData';

const ScienceColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={scienceColleges}
        streamType="Science"
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

export default ScienceColleges; 