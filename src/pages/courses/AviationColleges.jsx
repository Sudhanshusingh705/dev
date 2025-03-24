import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const aviationColleges = generateCollegeData('Aviation');

const AviationColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={aviationColleges}
        streamType="Aviation"
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

export default AviationColleges; 