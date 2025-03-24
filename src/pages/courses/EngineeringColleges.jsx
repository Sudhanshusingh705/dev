import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { engineeringColleges } from '../../data/collegeData';

const EngineeringColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={engineeringColleges}
        streamType="Engineering"
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

export default EngineeringColleges; 