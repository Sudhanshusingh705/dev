import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AdmissionContent = ({ route, navigation }) => {
  const { contentType } = route.params;

  const getContent = () => {
    switch (contentType) {
      case 'B.Ed Admission 2024':
        return {
          title: 'B.Ed Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 2 Years",
            "• Degree: Bachelor of Education",
            "• Mode: Regular/Distance",
            "\nEligibility Criteria:",
            "• Bachelor's degree with minimum 50% marks",
            "• Relaxation for SC/ST/OBC candidates",
            "• Valid entrance exam scores",
            "\nEntrance Exams:",
            "• State B.Ed CETs",
            "• University-specific tests",
            "• DUET for Delhi University",
            "\nImportant Dates:",
            "• Application Start: January 2024",
            "• Entrance Exams: March-May 2024",
            "• Counselling: June-July 2024",
            "• Session Start: August 2024",
            "\nRequired Documents:",
            "• Graduation Mark sheets",
            "• Entrance Score Card",
            "• Category Certificate",
            "• ID Proof",
            "\nTop Colleges:",
            "• Regional Institutes of Education",
            "• State Universities",
            "• Private Institutions",
            "\nFee Structure:",
            "• Government Colleges: ₹10,000-30,000/year",
            "• Private Colleges: ₹30,000-1,00,000/year",
            "\nCareer Prospects:",
            "• School Teacher",
            "• Educational Consultant",
            "• Content Developer",
            "• Academic Coordinator"
          ]
        };

      case 'MBA Admission 2024':
        return {
          title: 'MBA Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 2 Years",
            "• Degree: Master of Business Administration",
            "• Specializations Available: Finance, Marketing, HR, Operations, IT",
            "\nTop Entrance Exams:",
            "• CAT (Common Admission Test)",
            "• XAT (Xavier Aptitude Test)",
            "• GMAT (Graduate Management Admission Test)",
            "• MAT (Management Aptitude Test)",
            "• CMAT (Common Management Admission Test)",
            "\nImportant Dates:",
            "• CAT Registration: August 2024",
            "• CAT Exam: November 2024",
            "• XAT: January 2024",
            "• Result Declaration: January-February 2024",
            "• Counselling: March-June 2024",
            "\nTop B-Schools:",
            "• IIM Ahmedabad, Bangalore, Calcutta",
            "• XLRI Jamshedpur",
            "• FMS Delhi",
            "• ISB Hyderabad",
            "• SPJIMR Mumbai",
            "\nEligibility Criteria:",
            "• Bachelor's degree with 50% marks",
            "• Valid entrance test score",
            "• Work experience (preferred)",
            "\nFee Structure:",
            "• IIMs: ₹20-25 lakhs",
            "• Top Private B-Schools: ₹15-20 lakhs",
            "• Other Institutes: ₹5-15 lakhs",
            "\nPlacement Statistics:",
            "• Average Package: ₹12-25 LPA",
            "• Top Recruiters: Consulting, BFSI, Tech",
            "• International Placements Available"
          ]
        };

      case 'MBBS Admission 2024':
        return {
          title: 'MBBS Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 5.5 Years (Including Internship)",
            "• Degree: Bachelor of Medicine and Bachelor of Surgery",
            "• Medium: English",
            "\nNEET-UG 2024:",
            "• Application: March-April 2024",
            "• Exam Date: May 2024",
            "• Result: June 2024",
            "• Counselling: July-September 2024",
            "\nEligibility Criteria:",
            "• 10+2 with PCB: Minimum 50% (Gen), 40% (SC/ST)",
            "• Age: 17-25 years",
            "• Valid NEET Score",
            "\nTop Medical Colleges:",
            "• AIIMS New Delhi",
            "• JIPMER Puducherry",
            "• CMC Vellore",
            "• MAMC Delhi",
            "• Grant Medical College Mumbai",
            "\nSeat Distribution:",
            "• All India Quota: 15%",
            "• State Quota: 85%",
            "• Management Quota: Varies",
            "\nFee Structure:",
            "• Government Colleges: ₹20,000-1 lakh/year",
            "• Private Colleges: ₹5-20 lakhs/year",
            "• Deemed Universities: ₹15-25 lakhs/year",
            "\nRequired Documents:",
            "• NEET Score Card",
            "• 10th & 12th Certificates",
            "• Domicile Certificate",
            "• Category Certificate",
            "\nCareer Prospects:",
            "• Clinical Practice",
            "• Hospital Management",
            "• Medical Research",
            "• Higher Studies (MD/MS)"
          ]
        };

      case 'PhD Admission 2024':
        return {
          title: 'PhD Admission Guide 2024',
          content: [
            "Program Overview:",
            "• Duration: 3-5 Years",
            "• Degree: Doctor of Philosophy",
            "• Research-based Program",
            "\nEntrance Exams:",
            "• UGC NET/JRF",
            "• CSIR NET",
            "• GATE (for Engineering)",
            "• University-specific Tests",
            "\nEligibility Criteria:",
            "• Master's Degree with 55% (50% for SC/ST)",
            "• NET/JRF/GATE Qualification",
            "• Research Proposal",
            "\nApplication Process:",
            "• Entrance Test",
            "• Interview/Presentation",
            "• Research Proposal Evaluation",
            "• Supervisor Allocation",
            "\nTop Universities:",
            "• IISc Bangalore",
            "• IITs and NITs",
            "• Central Universities",
            "• Research Institutes",
            "\nFellowship Details:",
            "• JRF: ₹31,000/month (2 years)",
            "• SRF: ₹35,000/month (after 2 years)",
            "• Institute Fellowships Available",
            "\nResearch Areas:",
            "• STEM Fields",
            "• Humanities & Social Sciences",
            "• Management Studies",
            "• Interdisciplinary Research",
            "\nCareer Opportunities:",
            "• Academic Positions",
            "• Research Scientists",
            "• R&D Departments",
            "• Policy Making",
            "\nImportant Documents:",
            "• Research Proposal",
            "• Academic Transcripts",
            "• Publications (if any)",
            "• Recommendation Letters"
          ]
        };

      case 'BA Admission 2024':
        return {
          title: 'BA Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 3 Years",
            "• Degree: Bachelor of Arts",
            "• Mode: Regular/Distance Learning",
            "\nPopular Specializations:",
            "• English Literature",
            "• History",
            "• Political Science",
            "• Economics",
            "• Psychology",
            "• Sociology",
            "\nEntrance Exams:",
            "• DU JAT",
            "• CUET",
            "• State University Tests",
            "• IPU CET",
            "\nImportant Dates:",
            "• CUET Application: March 2024",
            "• Entrance Exams: May-June 2024",
            "• Merit List: June-July 2024",
            "• Admission Process: July-August 2024",
            "\nTop Colleges:",
            "• St. Stephen's College, Delhi",
            "• Lady Shri Ram College",
            "• Loyola College, Chennai",
            "• Christ University, Bangalore",
            "• Presidency College, Kolkata",
            "\nEligibility Criteria:",
            "• 10+2 from recognized board",
            "• Minimum 45-50% marks",
            "• Subject-specific requirements",
            "\nFee Structure:",
            "• Government Colleges: ₹5,000-15,000/year",
            "• Private Colleges: ₹30,000-1,00,000/year",
            "• Premium Institutions: ₹1-2 lakhs/year",
            "\nCareer Prospects:",
            "• Civil Services",
            "• Journalism",
            "• Teaching",
            "• Content Writing",
            "• Social Work",
            "• Higher Studies (MA/MBA)"
          ]
        };

      case 'M Tech Admission 2024':
        return {
          title: 'M.Tech Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 2 Years",
            "• Degree: Master of Technology",
            "• Full-time Program",
            "\nPopular Specializations:",
            "• Computer Science & Engineering",
            "• Electronics & Communication",
            "• Mechanical Engineering",
            "• Civil Engineering",
            "• Artificial Intelligence & ML",
            "\nEntrance Exams:",
            "• GATE (Primary exam)",
            "• CCMT Counselling",
            "• University Level Tests",
            "\nImportant Dates:",
            "• GATE Application: September 2023",
            "• GATE Exam: February 2024",
            "• CCMT Registration: April 2024",
            "• Counselling: May-July 2024",
            "\nTop Institutions:",
            "• IITs (All campuses)",
            "• NITs",
            "• IISC Bangalore",
            "• BITS Pilani",
            "• DTU Delhi",
            "\nEligibility Criteria:",
            "• B.Tech/B.E with 60% marks",
            "• Valid GATE score",
            "• Branch-specific requirements",
            "\nScholarship Details:",
            "• GATE Scholarship: ₹12,400/month",
            "• Institute Scholarships",
            "• Research Grants",
            "\nFee Structure:",
            "• IITs: ₹2-3 lakhs total",
            "• NITs: ₹1.5-2.5 lakhs total",
            "• Private Institutes: ₹3-6 lakhs total",
            "\nCareer Prospects:",
            "• R&D Organizations",
            "• PSUs",
            "• Core Engineering Companies",
            "• IT Companies",
            "• Higher Studies (PhD)"
          ]
        };

      case 'LLB Admission 2024':
        return {
          title: 'LLB Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 3 Years",
            "• Degree: Bachelor of Laws",
            "• Integrated Options: 5 Years (BA LLB/BBA LLB)",
            "\nEntrance Exams:",
            "• CLAT (Common Law Admission Test)",
            "• AILET (NLU Delhi)",
            "• DU LLB",
            "• State Law Entrance Tests",
            "\nImportant Dates:",
            "• CLAT Registration: January 2024",
            "• CLAT Exam: May 2024",
            "• Counselling: June-July 2024",
            "• Session Start: August 2024",
            "\nTop Law Schools:",
            "• NLSIU Bangalore",
            "• NALSAR Hyderabad",
            "• NLU Delhi",
            "• ILS Pune",
            "• Faculty of Law, DU",
            "\nEligibility Criteria:",
            "• Bachelor's degree (any discipline)",
            "• Minimum 45-50% marks",
            "• Age limit as per BCI norms",
            "\nFee Structure:",
            "• National Law Universities: ₹2-3 lakhs/year",
            "• Private Law Schools: ₹1-5 lakhs/year",
            "• Government Colleges: ₹20,000-50,000/year",
            "\nRequired Documents:",
            "• Graduation Certificates",
            "• Entrance Score Card",
            "• Migration Certificate",
            "• Category Certificates",
            "\nCareer Prospects:",
            "• Legal Practice",
            "• Corporate Law",
            "• Judicial Services",
            "• Legal Consultancy",
            "• Government Legal Services"
          ]
        };

      case 'D.El.Ed Admission 2024':
        return {
          title: 'D.El.Ed Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 2 Years",
            "• Diploma in Elementary Education",
            "• Teaching Certification Program",
            "\nEligibility Criteria:",
            "• 10+2 with 50% marks",
            "• State-wise criteria may vary",
            "• Age: 17-35 years",
            "\nSelection Process:",
            "• State Level Entrance Tests",
            "• Merit-based Selection",
            "• Counselling Rounds",
            "\nImportant Dates:",
            "• Application: March-April 2024",
            "• Entrance Exam: May-June 2024",
            "• Counselling: July 2024",
            "• Session Start: August 2024",
            "\nCurriculum Structure:",
            "• Child Development & Pedagogy",
            "• Language Education",
            "• Mathematics Education",
            "• Environmental Studies",
            "• Teaching Practice",
            "\nRequired Documents:",
            "• 10th & 12th Certificates",
            "• Domicile Certificate",
            "• Category Certificate",
            "• ID Proof",
            "\nFee Structure:",
            "• Government Institutes: ₹5,000-15,000/year",
            "• Private Institutes: ₹20,000-50,000/year",
            "\nCareer Opportunities:",
            "• Primary School Teacher",
            "• Education Coordinator",
            "• Academic Counselor",
            "• Private Tutor",
            "\nJob Prospects:",
            "• Government Schools",
            "• Private Schools",
            "• NGOs",
            "• Education Startups"
          ]
        };

      case 'BSc Admission 2024':
        return {
          title: 'BSc Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 3 Years",
            "• Bachelor of Science",
            "• Regular/Honours Program",
            "\nPopular Specializations:",
            "• Physics",
            "• Chemistry",
            "• Mathematics",
            "• Biology",
            "• Computer Science",
            "• Statistics",
            "\nEntrance Exams:",
            "• CUET",
            "• IPU CET",
            "• State University Tests",
            "• College-specific Tests",
            "\nImportant Dates:",
            "• CUET Registration: March 2024",
            "• Entrance Exams: May 2024",
            "• Merit Lists: June 2024",
            "• Admissions: July-August 2024",
            "\nTop Colleges:",
            "• St. Stephen's College",
            "• Hindu College",
            "• Presidency College",
            "• Loyola College",
            "• St. Xavier's College",
            "\nEligibility Criteria:",
            "• 10+2 with Science",
            "• Minimum 50% marks",
            "• Subject Combinations",
            "\nFee Structure:",
            "• Government Colleges: ₹10,000-25,000/year",
            "• Private Colleges: ₹30,000-1,50,000/year",
            "\nCareer Prospects:",
            "• Research",
            "• Data Analysis",
            "• Lab Technology",
            "• Teaching",
            "• Higher Studies (MSc/MBA)"
          ]
        };

      case 'B Pharmacy Admission 2024':
        return {
          title: 'B.Pharmacy Admission Guide 2024',
          content: [
            "Course Overview:",
            "• Duration: 4 Years",
            "• Bachelor of Pharmacy",
            "• Professional Degree Program",
            "\nEntrance Exams:",
            "• NEET",
            "• GPAT",
            "• State CETs",
            "• University Level Tests",
            "\nImportant Dates:",
            "• Applications: March-April 2024",
            "• Entrance Exams: May-June 2024",
            "• Counselling: July-August 2024",
            "• Session Start: September 2024",
            "\nTop Institutions:",
            "• NIPER (All campuses)",
            "• Jamia Hamdard",
            "• Manipal College of Pharmacy",
            "• BIT Mesra",
            "• ICT Mumbai",
            "\nEligibility Criteria:",
            "• 10+2 with PCM/PCB",
            "• Minimum 50% marks",
            "• Valid Entrance Score",
            "\nFee Structure:",
            "• Government Colleges: ₹25,000-50,000/year",
            "• Private Colleges: ₹1-3 lakhs/year",
            "• Premium Institutes: ₹3-5 lakhs/year",
            "\nSubjects Covered:",
            "• Pharmaceutical Chemistry",
            "• Pharmacology",
            "• Pharmaceutics",
            "• Pharmacognosy",
            "\nCareer Opportunities:",
            "• Hospital Pharmacy",
            "• Clinical Research",
            "• Drug Development",
            "• Quality Control",
            "• Marketing",
            "\nIndustry Prospects:",
            "• Pharmaceutical Companies",
            "• Research Labs",
            "• Government Sector",
            "• Healthcare Organizations",
            "\nHigher Studies:",
            "• M.Pharm",
            "• Pharm.D",
            "• PhD in Pharmacy",
            "• MBA in Pharmaceutical Management"
          ]
        };

      // Add more cases for other admissions...
      // I can provide detailed content for other courses if needed

      default:
        return {
          title: 'Content Not Available',
          content: [
            "• The requested content is currently being updated",
            "• Please check back later",
            "• Contact support for more information"
          ]
        };
    }
  };

  const content = getContent();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#FFA500" />
      </TouchableOpacity>

      <View style={styles.authorContainer}>
        <AntDesign name="user" size={16} color="#FFA500" />
        <Text style={styles.authorText}>Author: Sudhanshu Singh</Text>
      </View>

      <Text style={styles.title}>{content.title}</Text>
      
      <View style={styles.contentContainer}>
        {content.content.map((item, index) => (
          <Text key={index} style={styles.contentText}>{item}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  authorText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    textAlign: 'justify',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    paddingHorizontal: 16,
    textAlign: 'left',
  },
  contentContainer: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default AdmissionContent; 