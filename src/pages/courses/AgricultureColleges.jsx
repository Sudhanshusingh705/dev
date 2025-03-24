import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const agricultureColleges = generateCollegeData('Agriculture');

const AgricultureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={agricultureColleges}
        streamType="Agriculture"
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

export default AgricultureColleges; 