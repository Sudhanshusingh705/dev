import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data';

const HotelManagementColleges = () => {
  // State management with useRef for better performance
  const collegeDataRef = useRef([]);
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    // Avoid duplicate data fetching on re-renders
    if (dataFetchedRef.current) return;
    
    const fetchData = async () => {
      try {
        // Start loading indicator
        setLoading(true);
        
        // Use setTimeout to allow UI to render loading indicator first
        setTimeout(() => {
          try {
            // Get college data - this will be fast as it's optimized to return initial data quickly
            const data = generateCollegeData('Hotel Management');
            collegeDataRef.current = data;
            setCollegeData(data);
            setLoading(false);
            dataFetchedRef.current = true;
          } catch (error) {
            console.error("Error loading Hotel Management colleges:", error);
            setError("Failed to load college data. Please try again.");
            setLoading(false);
          }
        }, 0);
      } catch (error) {
        console.error("Error setting up Hotel Management colleges:", error);
        setError("Failed to load college data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
    
    // Clean up function
    return () => {
      // Any cleanup needed
    };
  }, []);

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.tryAgainText} onPress={() => {
          dataFetchedRef.current = false;
          setLoading(true);
          fetchData();
        }}>
          Tap to try again
        </Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Loading Hotel Management colleges...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={collegeData}
        streamType="Hotel Management"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 10,
  },
  tryAgainText: {
    fontSize: 16,
    color: '#0066cc',
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});

export default HotelManagementColleges;
