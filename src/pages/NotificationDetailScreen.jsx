import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Linking
} from 'react-native';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

// Additional detailed notification data
const notificationDetails = {
  1: {
    title: 'IICD Entrance Exam 2025 Application Form Released',
    type: 'Exam',
    date: 'October 08, 2024',
    image: 'https://image-static.collegedunia.com/public/college_data/images/logos/IICD.png',
    fullDescription: 'The Indian Institute of Crafts and Design (IICD) has officially released the application form for its entrance examination for the academic year 2025. Aspiring students can now apply through the official website starting from October 7, 2024. The last date to submit applications is January 25, 2025.',
    eligibility: 'Candidates must have completed 10+2 from a recognized board with a minimum of 50% marks. For PG programs, candidates should have a relevant bachelor\'s degree.',
    importantDates: [
      { label: 'Application Start Date', value: 'October 7, 2024' },
      { label: 'Application End Date', value: 'January 25, 2025' },
      { label: 'Admit Card Release', value: 'February 15, 2025' },
      { label: 'Entrance Exam Date', value: 'March 10, 2025' },
      { label: 'Result Declaration', value: 'April 5, 2025' }
    ],
    applicationProcess: 'To apply for the IICD Entrance Exam 2025, candidates need to visit the official website and complete the online application form. The application fee is ₹1,500 for general category candidates and ₹750 for SC/ST candidates.',
    examPattern: 'The entrance exam will consist of four sections: General Aptitude, Design Aptitude, Drawing Skills, and Material Manipulation Test. The total duration of the exam is 3 hours.',
    contactInfo: {
      website: 'https://www.iicd.ac.in',
      email: 'admissions@iicd.ac.in',
      phone: '+91-141-2700156/157'
    }
  },
  2: {
    title: 'JEE Main 2025 Registration Started',
    type: 'Exam',
    date: 'October 07, 2024',
    image: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=44&w=44&mode=stretch',
    fullDescription: 'The National Testing Agency (NTA) has commenced the registration process for the Joint Entrance Examination (JEE) Main 2025. This national-level engineering entrance exam is the gateway for admission to prestigious institutions including NITs, IIITs, and GFTIs. The application process is now active on the official JEE Main website.',
    eligibility: 'Candidates who have passed their Class 12 examination in 2023, 2024, or those appearing in 2025 are eligible to apply. There is no age limit for the candidates.',
    importantDates: [
      { label: 'Registration Start Date', value: 'October 7, 2024' },
      { label: 'Last Date for Registration', value: 'November 30, 2024' },
      { label: 'Application Fee Payment Deadline', value: 'December 2, 2024' },
      { label: 'Session 1 Exam Dates', value: 'January 15-31, 2025' },
      { label: 'Session 2 Exam Dates', value: 'April 1-15, 2025' }
    ],
    applicationProcess: 'Candidates must register on the official JEE Main website, upload the required documents including photograph and signature, and pay the application fee. The fee structure varies based on category and gender.',
    examPattern: 'JEE Main 2025 will be conducted in two sessions. The paper consists of multiple-choice questions and numerical value questions from Physics, Chemistry, and Mathematics. The exam duration is 3 hours.',
    contactInfo: {
      website: 'https://jeemain.nta.nic.in',
      email: 'jeemain@nta.ac.in',
      phone: '011-40759000'
    }
  },
  3: {
    title: 'NEET UG 2025 Information Brochure Released',
    type: 'Medical',
    date: 'October 06, 2024',
    image: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=44&w=44&mode=stretch',
    fullDescription: 'The National Testing Agency (NTA) has released the information brochure for the National Eligibility cum Entrance Test for Undergraduate (NEET UG) 2025. NEET UG is the single entrance examination for admission to MBBS, BDS, AYUSH, Veterinary, and other medical courses in India.',
    eligibility: 'Candidates who have completed or will be completing 10+2 with Physics, Chemistry, Biology/Biotechnology, and English as core subjects are eligible. The minimum age requirement is 17 years as of December 31, 2025.',
    importantDates: [
      { label: 'Application Form Release', value: 'November 10, 2024' },
      { label: 'Last Date for Registration', value: 'December 15, 2024' },
      { label: 'Admit Card Release', value: 'April 20, 2025' },
      { label: 'Exam Date', value: 'May 4, 2025' },
      { label: 'Result Declaration', value: 'June 10, 2025' }
    ],
    applicationProcess: 'Candidates need to register on the official NEET website, fill in personal and academic details, upload required documents, and pay the application fee of ₹1,700 (General) or ₹1,000 (Reserved categories).',
    examPattern: 'NEET UG 2025 will consist of 200 multiple-choice questions from Physics, Chemistry, Botany, and Zoology. The exam duration is 3 hours and 20 minutes.',
    contactInfo: {
      website: 'https://neet.nta.nic.in',
      email: 'neet@nta.ac.in',
      phone: '011-40759000'
    }
  }
};

const NotificationDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const notification = notificationDetails[id];

  if (!notification) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Notification not found</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#0066cc" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>Notification Details</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {/* Notification Header */}
          <View style={styles.notificationHeader}>
            <Image 
              source={{ uri: notification.image }}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.title}>{notification.title}</Text>
              <View style={styles.metaInfo}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeText}>{notification.type}</Text>
                </View>
                <View style={styles.dateContainer}>
                  <AntDesign name="calendar" size={12} color="#666" />
                  <Text style={styles.dateText}>{notification.date}</Text>
                </View>
              </View>
            </View>
          </View>
          
          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.descriptionText}>{notification.fullDescription}</Text>
          </View>
          
          {/* Eligibility */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
            <Text style={styles.descriptionText}>{notification.eligibility}</Text>
          </View>
          
          {/* Important Dates */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Important Dates</Text>
            {notification.importantDates.map((date, index) => (
              <View key={index} style={styles.dateItem}>
                <Text style={styles.dateLabel}>{date.label}:</Text>
                <Text style={styles.dateValue}>{date.value}</Text>
              </View>
            ))}
          </View>
          
          {/* Application Process */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Application Process</Text>
            <Text style={styles.descriptionText}>{notification.applicationProcess}</Text>
          </View>
          
          {/* Exam Pattern */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Exam Pattern</Text>
            <Text style={styles.descriptionText}>{notification.examPattern}</Text>
          </View>
          
          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => Linking.openURL(notification.contactInfo.website)}
            >
              <FontAwesome name="globe" size={16} color="#0066cc" />
              <Text style={styles.contactText}>{notification.contactInfo.website}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => Linking.openURL(`mailto:${notification.contactInfo.email}`)}
            >
              <FontAwesome name="envelope" size={16} color="#0066cc" />
              <Text style={styles.contactText}>{notification.contactInfo.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => Linking.openURL(`tel:${notification.contactInfo.phone}`)}
            >
              <FontAwesome name="phone" size={16} color="#0066cc" />
              <Text style={styles.contactText}>{notification.contactInfo.phone}</Text>
            </TouchableOpacity>
          </View>
          
          {/* Apply Now Button */}
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  notificationHeader: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logoImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 5,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeBadge: {
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 10,
  },
  typeText: {
    color: '#0066cc',
    fontSize: 12,
    fontWeight: '500',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#666',
    fontSize: 12,
    marginLeft: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  dateItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dateLabel: {
    fontSize: 14,
    color: '#666',
    width: '40%',
  },
  dateValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#0066cc',
    marginLeft: 10,
  },
  applyButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NotificationDetailScreen; 