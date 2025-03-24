import React from 'react';
import { View, StyleSheet } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { lawColleges } from '../../data/collegeData';

const LawColleges = () => {
  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={lawColleges}
        streamType="Law"
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

export default LawColleges; 