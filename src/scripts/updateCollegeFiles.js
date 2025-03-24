/**
 * This script updates all college stream files to use the same optimized pattern
 * that properly handles loading data and prevents the "Cannot read property 'map' of undefined" error.
 * It also includes performance optimizations for faster page loading.
 */

const fs = require('fs');
const path = require('path');

// Define the optimized template for each file
const fileTemplate = (streamName, componentName) => `import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import CollegeList from '../../components/CollegeList';
import { generateCollegeData } from '../../data';

const ${componentName} = () => {
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
            const data = generateCollegeData('${streamName}');
            collegeDataRef.current = data;
            setCollegeData(data);
            setLoading(false);
            dataFetchedRef.current = true;
          } catch (error) {
            console.error("Error loading ${streamName} colleges:", error);
            setError("Failed to load college data. Please try again.");
            setLoading(false);
          }
        }, 0);
      } catch (error) {
        console.error("Error setting up ${streamName} colleges:", error);
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
        <Text style={styles.loadingText}>Loading ${streamName} colleges...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CollegeList 
        collegeData={collegeData}
        streamType="${streamName}"
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

export default ${componentName};
`;

// Define streams and their component names
const streams = [
  { stream: 'B.Tech', component: 'BTechColleges' },
  { stream: 'MBA', component: 'MBAColleges' },
  { stream: 'M.Tech', component: 'MTechColleges' },
  { stream: 'MBBS', component: 'MBBSColleges' },
  { stream: 'B.Com', component: 'BComColleges' },
  { stream: 'B.Sc', component: 'BScColleges' },
  { stream: 'B.Sc Nursing', component: 'BScNursingColleges' },
  { stream: 'BCA', component: 'BCAColleges' },
  { stream: 'MCA', component: 'MCAColleges' },
  { stream: 'B.Pharm', component: 'PharmacyColleges' },
  { stream: 'Para Medical', component: 'ParaMedicalColleges' },
  { stream: 'Veterinary Science', component: 'VeterinaryScienceColleges' },
  { stream: 'Computer Application', component: 'ComputerApplicationColleges' },
  { stream: 'Dental', component: 'DentalColleges' },
  { stream: 'Design', component: 'DesignColleges' },
  { stream: 'Education', component: 'EducationColleges' },
  { stream: 'Hotel Management', component: 'HotelManagementColleges' },
  { stream: 'LLB', component: 'LLBColleges' },
  { stream: 'LLM', component: 'LLMColleges' },
  { stream: 'M.Pharm', component: 'MPharmColleges' },
  { stream: 'M.Planning', component: 'MPlanningColleges' },
  { stream: 'M.Sc', component: 'MScColleges' },
  { stream: 'Mass Communication', component: 'MassCommunicationColleges' },
];

// Update each file
function updateFiles() {
  const coursesDir = path.join(__dirname, '..', 'pages', 'courses');

  if (!fs.existsSync(coursesDir)) {
    console.error('Courses directory not found:', coursesDir);
    return;
  }

  streams.forEach(({ stream, component }) => {
    const filePath = path.join(coursesDir, `${component}.jsx`);
    
    try {
      fs.writeFileSync(filePath, fileTemplate(stream, component));
      console.log(`Updated ${component}.jsx with optimized code`);
    } catch (error) {
      console.error(`Error updating ${component}.jsx:`, error);
    }
  });

  console.log('All college files updated successfully with performance optimizations!');
}

// Run the update
updateFiles(); 