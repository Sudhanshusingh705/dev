import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { commerceColleges } from '../../data/collegeData';

const CommerceColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={commerceColleges}
        streamType="Commerce"
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

export default CommerceColleges; 