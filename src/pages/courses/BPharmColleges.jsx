import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import pharmacyColleges from '../../data/pharmacyColleges.json';

const bpharmColleges = pharmacyColleges;

const BPharmColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bpharmColleges}
        streamType="B.Pharm"
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

export default BPharmColleges;