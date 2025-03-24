import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data/collegeData';

const animationColleges = generateCollegeData('Animation');

const AnimationColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={animationColleges}
        streamType="Animation"
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

export default AnimationColleges; 