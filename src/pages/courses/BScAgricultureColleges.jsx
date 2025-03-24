import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const bscAgricultureColleges = generateCollegeData('B.Sc Agriculture');

const BScAgricultureColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={bscAgricultureColleges}
        streamType="B.Sc Agriculture"
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

export default BScAgricultureColleges; 