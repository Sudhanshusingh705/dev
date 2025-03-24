import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { managementColleges } from '../../data/collegeData';

const ManagementColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={managementColleges}
        streamType="Management"
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

export default ManagementColleges; 