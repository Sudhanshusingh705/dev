import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Linking,
} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const UniversityDetailsPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { university } = route.params;

  // Research data for engineering diploma programs
  const engineeringDiplomaCourses = [
    {
      name: 'Diploma in Mechanical Engineering',
      duration: '3 Years',
      eligibility: '10th pass with minimum 45% marks',
      fees: '₹40,000 - ₹80,000 per year',
      jobProspects: ['Mechanical Supervisor', 'CAD Technician', 'Quality Control Inspector'],
      averageSalary: '₹2.5 - 4.5 LPA'
    },
    {
      name: 'Diploma in Civil Engineering',
      duration: '3 Years',
      eligibility: '10th pass with minimum 45% marks',
      fees: '₹35,000 - ₹75,000 per year',
      jobProspects: ['Site Supervisor', 'Draftsman', 'Surveyor'],
      averageSalary: '₹2.5 - 4 LPA'
    },
    {
      name: 'Diploma in Electrical Engineering',
      duration: '3 Years',
      eligibility: '10th pass with minimum 45% marks',
      fees: '₹40,000 - ₹80,000 per year',
      jobProspects: ['Electrical Supervisor', 'Maintenance Technician', 'Control Panel Designer'],
      averageSalary: '₹2.5 - 4.5 LPA'
    },
    {
      name: 'Diploma in Electronics & Communication',
      duration: '3 Years',
      eligibility: '10th pass with minimum 45% marks',
      fees: '₹45,000 - ₹85,000 per year',
      jobProspects: ['Service Engineer', 'Technical Support', 'Electronics Technician'],
      averageSalary: '₹2.5 - 5 LPA'
    },
    {
      name: 'Diploma in Computer Science Engineering',
      duration: '3 Years',
      eligibility: '10th pass with minimum 45% marks',
      fees: '₹45,000 - ₹90,000 per year',
      jobProspects: ['Junior Developer', 'Network Technician', 'Technical Support'],
      averageSalary: '₹2.8 - 5.5 LPA'
    }
  ];

  // Additional data
  const facilities = [
    'Modern Laboratories',
    'Well-equipped Workshops',
    'Computer Labs with Latest Software',
    'Library with Technical Books and Journals',
    'Hostel Accommodation',
    'Sports Complex',
    'Cafeteria',
    'Wi-Fi Campus',
    'Placement Cell',
    'Industrial Training Cell'
  ];

  const industryPartners = [
    'Larsen & Toubro',
    'Tata Motors',
    'Siemens',
    'Bharat Heavy Electricals Limited',
    'Maruti Suzuki',
    'Godrej',
    'Wipro',
    'Tech Mahindra',
    'Infosys',
    'IBM'
  ];

  const placementStatistics = {
    averagePlacement: '85%',
    highestPackage: '₹8 LPA',
    averagePackage: '₹3.8 LPA',
    topRecruiters: ['L&T', 'BHEL', 'Tata Motors', 'Godrej', 'Siemens']
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0066cc" />
      
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{university.name}</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image 
            source={{ uri: university.background }} 
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.overlayContent}>
            <Image 
              source={{ uri: university.logo }} 
              style={styles.collegeLogo}
              resizeMode="contain"
            />
            <View style={styles.basicInfo}>
              <Text style={styles.collegeName}>{university.name}</Text>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="#fff" />
                <Text style={styles.locationText}>{university.location}</Text>
              </View>
              <View style={styles.accreditationContainer}>
                <MaterialIcons name="verified" size={16} color="#fff" />
                <Text style={styles.accreditationText}>
                  {university.accreditation} Accredited
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{university.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{university.reviews.split(' ')[0]}</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{university.fees}</Text>
            <Text style={styles.statLabel}>{university.feesType}</Text>
          </View>
        </View>

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overviewText}>
            {university.name} offers excellent diploma programs in engineering with state-of-the-art 
            infrastructure and experienced faculty. The institution is recognized for its quality 
            education and industry-focused training, preparing students for successful careers in 
            the engineering sector.
          </Text>
          
          <View style={styles.overviewDetails}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Established</Text>
              <Text style={styles.detailValue}>
                {university.name.includes('IIT') ? '1951' : 
                 university.name.includes('VIT') ? '1984' : '1980'}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Type</Text>
              <Text style={styles.detailValue}>
                {university.name.includes('IIT') || university.name.includes('IIM') ? 'Public' : 'Private'}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Campus Size</Text>
              <Text style={styles.detailValue}>
                {university.name.includes('IIT') ? '500+ Acres' : 
                 university.name.includes('VIT') ? '360 Acres' : '100+ Acres'}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Recognition</Text>
              <Text style={styles.detailValue}>{university.accreditation}</Text>
            </View>
          </View>
        </View>
        
        {/* Diploma in Engineering Courses */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Diploma in Engineering Programs</Text>
          {engineeringDiplomaCourses.map((course, index) => (
            <View key={index} style={styles.courseCard}>
              <Text style={styles.courseName}>{course.name}</Text>
              <View style={styles.courseDetails}>
                <View style={styles.courseDetail}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.courseDetailText}>Duration: {course.duration}</Text>
                </View>
                <View style={styles.courseDetail}>
                  <Ionicons name="school-outline" size={16} color="#666" />
                  <Text style={styles.courseDetailText}>Eligibility: {course.eligibility}</Text>
                </View>
                <View style={styles.courseDetail}>
                  <FontAwesome name="money" size={16} color="#666" />
                  <Text style={styles.courseDetailText}>Fees: {course.fees}</Text>
                </View>
              </View>
              <Text style={styles.courseSubheading}>Job Prospects</Text>
              <View style={styles.jobProspectsContainer}>
                {course.jobProspects.map((job, jobIndex) => (
                  <View key={jobIndex} style={styles.jobProspect}>
                    <AntDesign name="check" size={14} color="#0066cc" />
                    <Text style={styles.jobProspectText}>{job}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.salaryContainer}>
                <Text style={styles.salaryLabel}>Average Salary: </Text>
                <Text style={styles.salaryValue}>{course.averageSalary}</Text>
              </View>
            </View>
          ))}
        </View>
        
        {/* Facilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilitiesContainer}>
            {facilities.map((facility, index) => (
              <View key={index} style={styles.facilityItem}>
                <AntDesign name="check" size={16} color="#0066cc" />
                <Text style={styles.facilityText}>{facility}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Placement Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Placement Statistics</Text>
          <View style={styles.placementStats}>
            <View style={styles.placementStat}>
              <Text style={styles.placementValue}>{placementStatistics.averagePlacement}</Text>
              <Text style={styles.placementLabel}>Average Placement</Text>
            </View>
            <View style={styles.placementStat}>
              <Text style={styles.placementValue}>{placementStatistics.highestPackage}</Text>
              <Text style={styles.placementLabel}>Highest Package</Text>
            </View>
            <View style={styles.placementStat}>
              <Text style={styles.placementValue}>{placementStatistics.averagePackage}</Text>
              <Text style={styles.placementLabel}>Average Package</Text>
            </View>
          </View>
          <Text style={styles.topRecruitersLabel}>Top Recruiters</Text>
          <View style={styles.topRecruitersContainer}>
            {placementStatistics.topRecruiters.map((recruiter, index) => (
              <View key={index} style={styles.recruiterTag}>
                <Text style={styles.recruiterText}>{recruiter}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Industry Partners */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Industry Partners</Text>
          <View style={styles.partnersContainer}>
            {industryPartners.slice(0, 5).map((partner, index) => (
              <View key={index} style={styles.partnerTag}>
                <Text style={styles.partnerText}>{partner}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Admission Process */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Admission Process</Text>
          <View style={styles.admissionStepsContainer}>
            <View style={styles.admissionStep}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Online Application</Text>
                <Text style={styles.stepDescription}>
                  Fill and submit the online application form with personal and academic details
                </Text>
              </View>
            </View>
            <View style={styles.admissionStep}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Document Verification</Text>
                <Text style={styles.stepDescription}>
                  Submit required documents including 10th marksheet, caste certificate (if applicable)
                </Text>
              </View>
            </View>
            <View style={styles.admissionStep}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Entrance Test/Merit Based</Text>
                <Text style={styles.stepDescription}>
                  Some institutes conduct entrance tests while others offer admission based on 10th marks
                </Text>
              </View>
            </View>
            <View style={styles.admissionStep}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>4</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Counseling & Seat Allotment</Text>
                <Text style={styles.stepDescription}>
                  Attend counseling rounds for seat allotment based on merit/entrance test score
                </Text>
              </View>
            </View>
            <View style={styles.admissionStep}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>5</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Fee Payment & Enrollment</Text>
                <Text style={styles.stepDescription}>
                  Pay the required fees and complete the enrollment process
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Application Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Application Timeline (2025-26)</Text>
          <View style={styles.timelineContainer}>
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>May 2025</Text>
                <Text style={styles.timelineEvent}>Application Portal Opens</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>June 2025</Text>
                <Text style={styles.timelineEvent}>Last Date to Apply</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>July 2025</Text>
                <Text style={styles.timelineEvent}>Merit List/Entrance Test</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>July-August 2025</Text>
                <Text style={styles.timelineEvent}>Counseling Rounds</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>August 2025</Text>
                <Text style={styles.timelineEvent}>Classes Begin</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Apply Button */}
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => Linking.openURL('https://searchmycolleges.com/applynow')}
        >
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0066cc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  heroContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  overlayContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  collegeLogo: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 15,
  },
  basicInfo: {
    flex: 1,
  },
  collegeName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
  accreditationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accreditationText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#eee',
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  overviewText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 15,
  },
  overviewDetails: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  detailItem: {
    width: '50%',
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginTop: 5,
  },
  courseCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#0066cc',
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  courseDetails: {
    marginBottom: 10,
  },
  courseDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseDetailText: {
    fontSize: 14,
    color: '#444',
    marginLeft: 8,
  },
  courseSubheading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  jobProspectsContainer: {
    marginBottom: 10,
  },
  jobProspect: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  jobProspectText: {
    fontSize: 13,
    color: '#444',
    marginLeft: 8,
  },
  salaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  salaryLabel: {
    fontSize: 13,
    color: '#333',
  },
  salaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  facilitiesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 12,
  },
  facilityText: {
    fontSize: 14,
    color: '#444',
    marginLeft: 8,
  },
  placementStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  placementStat: {
    alignItems: 'center',
    width: '33%',
  },
  placementValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 5,
  },
  placementLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  topRecruitersLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  topRecruitersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recruiterTag: {
    backgroundColor: '#e6f2ff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 5,
  },
  recruiterText: {
    fontSize: 13,
    color: '#0066cc',
  },
  partnersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  partnerTag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 5,
  },
  partnerText: {
    fontSize: 13,
    color: '#444',
  },
  admissionStepsContainer: {
    marginTop: 5,
  },
  admissionStep: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  stepNumberContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  timelineContainer: {
    paddingLeft: 15,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0066cc',
    marginRight: 15,
    marginTop: 5,
  },
  timelineConnector: {
    width: 2,
    height: 30,
    backgroundColor: '#0066cc',
    marginLeft: 5,
    marginBottom: 5,
  },
  timelineContent: {
    marginBottom: 15,
  },
  timelineDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  timelineEvent: {
    fontSize: 13,
    color: '#666',
  },
  applyButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UniversityDetailsPage; 