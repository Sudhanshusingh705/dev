import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const bdesColleges = generateCollegeData('B.Des');

const BDesColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bdesColleges}
        streamType="B.Des"
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

export default BDesColleges; 