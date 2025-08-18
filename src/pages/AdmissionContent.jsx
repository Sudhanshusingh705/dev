import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';;

const AdmissionContent = ({ route, navigation }) => {
  const { contentType } = route.params;
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadColleges();
  }, [contentType]);

  const loadColleges = async () => {
    try {
      let collegeData = [];
      
      // Import all data at once to avoid dynamic require issues
      const allData = {
        educationColleges: require('../data/educationColleges.json'),
        managementColleges: require('../data/managementColleges.json'),
        medicalColleges: require('../data/medicalColleges.json'),
        artsColleges: require('../data/artsColleges.json'),
        engineeringColleges: require('../data/engineeringColleges.json'),
        scienceColleges: require('../data/scienceColleges.json'),
        lawColleges: require('../data/lawColleges.json'),
        pharmacyColleges: require('../data/pharmacyColleges.json')
      };

      switch (contentType) {
        case 'B.Ed Admission 2025':
          collegeData = allData.educationColleges || [];
          break;
        case 'MBA Admission 2025':
          collegeData = allData.managementColleges || [];
          break;
        case 'MBBS Admission 2025':
          collegeData = allData.medicalColleges || [];
          break;
        case 'BA Admission 2025':
          collegeData = allData.artsColleges || [];
          break;
        case 'M Tech Admission 2025':
          collegeData = allData.engineeringColleges || [];
          break;
        case 'PhD Admission 2025':
          collegeData = [...(allData.engineeringColleges || []), ...(allData.scienceColleges || [])];
          break;
        case 'LLB Admission 2025':
          collegeData = allData.lawColleges || [];
          break;
        case 'D.El.Ed Admission 2025':
          collegeData = allData.educationColleges || [];
          break;
        case 'BSc Admission 2025':
          collegeData = allData.scienceColleges || [];
          break;
        case 'B Pharmacy Admission 2025':
          collegeData = allData.pharmacyColleges || [];
          break;
        default:
          collegeData = [];
      }
      
      setColleges(Array.isArray(collegeData) ? collegeData.slice(0, 15) : []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading colleges:', error);
      setColleges([]);
      setLoading(false);
    }
  };

  const getAdmissionDetails = () => {
    switch (contentType) {
      case 'B.Ed Admission 2025':
        return {
          title: 'B.Ed Admission Guide 2025',
          description: 'Complete guide for Bachelor of Education admissions in 2025',
          duration: '2 Years',
          eligibility: "Bachelor's degree with minimum 50% marks",
          entranceExam: 'State B.Ed CETs, University-specific tests',
          timeline: 'Application: Jan 2025, Exams: Mar-May 2025, Session: Aug 2025'
        };
      case 'MBA Admission 2025':
        return {
          title: 'MBA Admission Guide 2025',
          description: 'Master of Business Administration admissions for 2025',
          duration: '2 Years',
          eligibility: "Bachelor's degree with 50% marks",
          entranceExam: 'CAT, XAT, GMAT, MAT, CMAT',
          timeline: 'CAT: Aug-Nov 2025, XAT: Jan 2026, Session: July 2026'
        };
      case 'MBBS Admission 2025':
        return {
          title: 'MBBS Admission Guide 2025',
          description: 'Bachelor of Medicine and Bachelor of Surgery admissions',
          duration: '5.5 Years (Including Internship)',
          eligibility: '10+2 with PCB: 50% (Gen), 40% (SC/ST), Age: 17-25',
          entranceExam: 'NEET-UG 2025',
          timeline: 'Application: Mar-Apr 2025, Exam: May 2025, Session: Aug 2025'
        };
      case 'BA Admission 2025':
        return {
          title: 'BA Admission Guide 2025',
          description: 'Bachelor of Arts admissions for 2025',
          duration: '3 Years',
          eligibility: '10+2 in any stream with minimum 50% marks',
          entranceExam: 'CUET, IPU CET, State University Tests',
          timeline: 'CUET: Mar-May 2025, Admissions: July-Aug 2025'
        };
      case 'M Tech Admission 2025':
        return {
          title: 'M.Tech Admission Guide 2025',
          description: 'Master of Technology admissions for 2025',
          duration: '2 Years',
          eligibility: 'B.Tech/B.E with 60% marks, Valid GATE score',
          entranceExam: 'GATE 2026',
          timeline: 'GATE: Jan-Feb 2026, CCMT: Apr-Jul 2026'
        };
      case 'PhD Admission 2025':
        return {
          title: 'PhD Admission Guide 2025',
          description: 'Doctor of Philosophy admissions for 2025',
          duration: '3-5 Years',
          eligibility: "Master's Degree with 55% (50% for SC/ST)",
          entranceExam: 'UGC NET/JRF, CSIR NET, GATE, University tests',
          timeline: 'Applications: Dec 2025, Interviews: Feb-Mar 2026'
        };
      case 'LLB Admission 2025':
        return {
          title: 'LLB Admission Guide 2025',
          description: 'Bachelor of Laws admissions for 2025',
          duration: '3 Years (5 Years Integrated)',
          eligibility: 'Graduation (3-year) or 10+2 (5-year integrated)',
          entranceExam: 'CLAT, AILET, LSAT, State Law CETs',
          timeline: 'CLAT: Dec 2025, State CETs: May-Jun 2025'
        };
      case 'D.El.Ed Admission 2025':
        return {
          title: 'D.El.Ed Admission Guide 2025',
          description: 'Diploma in Elementary Education admissions',
          duration: '2 Years',
          eligibility: '10+2 with minimum 50% marks',
          entranceExam: 'State D.El.Ed Entrance Exams',
          timeline: 'Applications: Mar-Apr 2025, Session: July 2025'
        };
      case 'BSc Admission 2025':
        return {
          title: 'BSc Admission Guide 2025',
          description: 'Bachelor of Science admissions for 2025',
          duration: '3 Years',
          eligibility: '10+2 with Science stream, minimum 50% marks',
          entranceExam: 'CUET, State University Tests, College-specific',
          timeline: 'CUET: Mar-May 2025, Admissions: July-Aug 2025'
        };
      case 'B Pharmacy Admission 2025':
        return {
          title: 'B Pharmacy Admission Guide 2025',
          description: 'Bachelor of Pharmacy admissions for 2025',
          duration: '4 Years',
          eligibility: '10+2 with PCM/PCB, minimum 50% marks',
          entranceExam: 'GPAT, State Pharmacy CETs, University tests',
          timeline: 'GPAT: Jan 2026, State CETs: May-Jun 2025'
        };
      default:
        return {
          title: 'Admission Guide 2025',
          description: 'Comprehensive admission guide for 2025',
          duration: 'Varies',
          eligibility: 'Course-specific requirements',
          entranceExam: 'As per course requirements',
          timeline: '2025-2026 academic session'
        };
    }
  };

  const details = getAdmissionDetails();

  if (loading) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading colleges...</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>{details.title}</Text>
      </View>

      <View style={styles.detailsCard}>
        <Text style={styles.description}>{details.description}</Text>
        
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Aspect</Text>
            <Text style={styles.tableHeader}>Details</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Duration</Text>
            <Text style={styles.tableValue}>{details.duration}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Eligibility</Text>
            <Text style={styles.tableValue}>{details.eligibility}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Entrance Exam</Text>
            <Text style={styles.tableValue}>{details.entranceExam}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Timeline</Text>
            <Text style={styles.tableValue}>{details.timeline}</Text>
          </View>
        </View>
      </View>

      <View style={styles.collegesSection}>
        <Text style={styles.sectionTitle}>Top Colleges ({colleges.length})</Text>
        {colleges.map((college, index) => (
          <TouchableOpacity 
            key={college.id} 
            style={styles.collegeCard}
            onPress={() => navigation.navigate('CollegeDetails', { college })}
          >
            <View style={styles.collegeHeader}>
              <Image 
                source={{ uri: college.logo || 'https://via.placeholder.com/60' }} 
                style={styles.collegeLogo}
              />
              <View style={styles.collegeInfo}>
                <Text style={styles.collegeName} numberOfLines={2}>{college.name}</Text>
                <Text style={styles.collegeLocation}>{college.location}</Text>
                <Text style={styles.collegeRating}>⭐ {college.rating || 4.0}/5 ({college.reviewCount || 0} reviews)</Text>
              </View>
            </View>
            <View style={styles.collegeDetails}>
              <Text style={styles.collegeFees}>💰 {college.fees || '₹50,000'} {college.feesPeriod || 'Per Year'}</Text>
              <Text style={styles.collegeRank}>🏆 Rank: {college.nationalRank || 'N/A'}</Text>
            </View>
            <View style={styles.collegeCourses}>
              <Text style={styles.coursesText} numberOfLines={1}>
                {college.courses?.slice(0, 3).join(', ') || 'Various Courses'}
                {(college.courses?.length || 0) > 3 ? '...' : ''}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  detailsCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoItem: {
    width: '48%',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableHeader: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  tableLabel: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    backgroundColor: '#f8f9fa',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  tableValue: {
    flex: 2,
    padding: 12,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  collegesSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  collegeCard: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  collegeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collegeLogo: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  collegeLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  collegeRating: {
    fontSize: 12,
    color: '#ff6b35',
  },
  collegeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  collegeFees: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  collegeRank: {
    fontSize: 12,
    color: '#666',
  },
  collegeCourses: {
    backgroundColor: '#f0f8ff',
    padding: 8,
    borderRadius: 6,
  },
  coursesText: {
    fontSize: 12,
    color: '#007AFF',
    fontStyle: 'italic',
  },
});

export default AdmissionContent;