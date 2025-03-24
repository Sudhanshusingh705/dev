import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { medicalColleges } from '../../data/collegeData';

const MedicalColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={medicalColleges}
        streamType="Medical"
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

export default MedicalColleges; 