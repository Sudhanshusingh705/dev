import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ExamContent = ({ route, navigation }) => {
  const { examType } = route.params;

  const getContent = () => {
    switch (examType) {
      case 'NEET 2024':
        return {
          title: 'NEET 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: May 5, 2024",
            "• Mode: Offline (Pen & Paper)",
            "• Duration: 3 hours 20 minutes",
            "• Questions: 200 MCQs",
            "• Maximum Marks: 720",
            "\nApplication Process:",
            "• Registration Start: March 2024",
            "• Registration End: April 2024",
            "• Application Fee: ₹1500 (Gen), ₹800 (SC/ST)",
            "\nEligibility Criteria:",
            "• 10+2 with PCB",
            "• Minimum 50% marks (Gen), 40% (SC/ST)",
            "• Age: 17-25 years",
            "\nExam Pattern:",
            "• Physics: 45 questions",
            "• Chemistry: 45 questions",
            "• Biology: 90 questions",
            "• Marking: +4 for correct, -1 for incorrect",
            "\nTop Medical Colleges:",
            "• AIIMS (All India)",
            "• JIPMER",
            "• CMC Vellore",
            "• AFMC Pune",
            "\nPreparation Tips:",
            "• Focus on NCERT",
            "• Regular Mock Tests",
            "• Previous Year Papers",
            "• Time Management",
            "\nImportant Documents:",
            "• Admit Card",
            "• Valid ID Proof",
            "• Recent Photographs",
            "• Category Certificate"
          ]
        };

      case 'JEE Advanced 2024':
        return {
          title: 'JEE Advanced 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: May 26, 2024",
            "• Mode: Computer Based Test (CBT)",
            "• Duration: 6 hours (2 papers)",
            "• Paper 1: 9:00 AM - 12:00 PM",
            "• Paper 2: 2:30 PM - 5:30 PM",
            "\nEligibility Criteria:",
            "• Must qualify JEE Main 2024",
            "• Top 2.5 lakh JEE Main candidates",
            "• Maximum 2 attempts allowed",
            "\nExam Pattern:",
            "• Two Papers: Paper 1 & 2",
            "• Subjects: Physics, Chemistry, Mathematics",
            "• Question Types: MCQs, Numerical Value, Matrix Match",
            "• Negative Marking: Varies with question type",
            "\nTop IITs:",
            "• IIT Bombay",
            "• IIT Delhi",
            "• IIT Madras",
            "• IIT Kanpur",
            "• IIT Kharagpur",
            "\nPreparation Strategy:",
            "• Master JEE Main syllabus first",
            "• Focus on problem-solving speed",
            "• Practice previous year papers",
            "• Time management skills",
            "\nImportant Documents:",
            "• JEE Main Score Card",
            "• Admit Card",
            "• Valid ID Proof",
            "• Recent Photographs"
          ]
        };

      case 'JEE Main 2024':
        return {
          title: 'JEE Main 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Session 1: January 24-31, 2024",
            "• Session 2: April 1-15, 2024",
            "• Mode: Computer Based Test",
            "• Duration: 3 hours",
            "• Maximum Marks: 300",
            "\nApplication Process:",
            "• Registration: December 2023",
            "• Fee: ₹1000 (Gen), ₹500 (SC/ST)",
            "• Choice of 4 cities",
            "\nEligibility Criteria:",
            "• 10+2 with PCM",
            "• No age limit",
            "• 75% in class 12th or top 20 percentile",
            "\nExam Pattern:",
            "• Physics: 30 questions",
            "• Chemistry: 30 questions",
            "• Mathematics: 30 questions",
            "• Total Questions: 90",
            "• Marking: +4 for correct, -1 for incorrect",
            "\nTop NITs:",
            "• NIT Trichy",
            "• NIT Surathkal",
            "• NIT Warangal",
            "• NIT Rourkela",
            "\nPreparation Tips:",
            "• NCERT books thoroughly",
            "• Daily practice problems",
            "• Mock tests regularly",
            "• Previous year analysis"
          ]
        };

      case 'CAT 2024':
        return {
          title: 'CAT 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: November 24, 2024",
            "• Mode: Computer Based Test",
            "• Duration: 3 hours",
            "• Sections: 3",
            "\nSections:",
            "• VARC (Verbal & Reading)",
            "• DILR (Data & Logic)",
            "• QA (Quantitative Ability)",
            "\nEligibility:",
            "• Bachelor's degree (50% marks)",
            "• Final year students can apply",
            "• No age limit",
            "\nTop IIMs:",
            "• IIM Ahmedabad",
            "• IIM Bangalore",
            "• IIM Calcutta",
            "• IIM Lucknow",
            "\nPreparation Strategy:",
            "• Mock Tests crucial",
            "• Time management skills",
            "• Section-wise preparation",
            "• Current affairs knowledge",
            "\nImportant Dates:",
            "• Registration: August 2024",
            "• Admit Card: October 2024",
            "• Result: January 2025",
            "\nSelection Process:",
            "• CAT Score",
            "• Personal Interview",
            "• Group Discussion",
            "• Written Ability Test"
          ]
        };

      case 'GATE 2024':
        return {
          title: 'GATE 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: February 3-11, 2024",
            "• Mode: Computer Based Test",
            "• Duration: 3 hours",
            "• Total Marks: 100",
            "\nPaper Pattern:",
            "• General Aptitude: 15 marks",
            "• Subject Paper: 85 marks",
            "• Question Types: MCQ & NAT",
            "\nEligibility:",
            "• B.E/B.Tech degree",
            "• Final year students eligible",
            "• No age limit",
            "\nTop Recruiters:",
            "• PSUs",
            "• DRDO",
            "• ISRO",
            "• BARC",
            "\nPreparation Tips:",
            "• Subject fundamentals",
            "• Previous year papers",
            "• Online test series",
            "• Time management",
            "\nBenefits:",
            "• PSU recruitment",
            "• MTech admissions",
            "• Research opportunities",
            "• Higher studies abroad"
          ]
        };

      case 'BITSAT 2024':
        return {
          title: 'BITSAT 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: June 15-20, 2024",
            "• Mode: Computer Based Test",
            "• Duration: 3 hours",
            "• Total Questions: 150",
            "• Maximum Marks: 450",
            "\nTest Pattern:",
            "• Physics: 40 questions",
            "• Chemistry: 40 questions",
            "• Mathematics: 45 questions",
            "• Logical Reasoning: 25 questions",
            "• No Negative Marking",
            "\nEligibility Criteria:",
            "• 12th with PCM: 75% aggregate",
            "• State Board: 60% in PCM",
            "• Age: No limit",
            "\nApplication Process:",
            "• Registration: March 2024",
            "• Application Fee: ₹3500 (Male), ₹2500 (Female)",
            "• Multiple Attempts Allowed",
            "\nBITS Campuses:",
            "• BITS Pilani",
            "• BITS Goa",
            "• BITS Hyderabad",
            "• BITS Dubai",
            "\nPreparation Tips:",
            "• Focus on NCERT",
            "• Practice Speed Tests",
            "• Online Mock Tests",
            "• Previous Year Papers",
            "\nImportant Documents:",
            "• Class 12 Marksheet",
            "• Valid ID Proof",
            "• Passport Size Photos",
            "• Category Certificate",
            "\nAdmission Process:",
            "• Merit-based Selection",
            "• Score Normalization",
            "• Branch Allocation",
            "• Fee Payment"
          ]
        };

      case 'MAT 2024':
        return {
          title: 'MAT 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Dates: February, May, August, December 2024",
            "• Modes: CBT & PBT (Paper Based)",
            "• Duration: 2.5 hours",
            "• Questions: 200 MCQs",
            "\nTest Sections:",
            "• Language Comprehension",
            "• Mathematical Skills",
            "• Data Analysis",
            "• Intelligence & Critical Reasoning",
            "• Indian & Global Environment",
            "\nEligibility Criteria:",
            "• Bachelor's Degree (Any Stream)",
            "• Minimum 50% Marks",
            "• Final Year Students Eligible",
            "\nRegistration Process:",
            "• Online Application",
            "• Fee: ₹1800 (Any one mode)",
            "• ₹3000 (Both modes)",
            "\nTop B-Schools Accepting MAT:",
            "• JBIMS Mumbai",
            "• KJ Somaiya",
            "• SIMSREE",
            "• ITM Business School",
            "\nScoring Pattern:",
            "• Each Question: 1 Mark",
            "• Negative Marking: None",
            "• Percentile Based Scoring",
            "\nPreparation Strategy:",
            "• Section-wise Practice",
            "• Time Management",
            "• Mock Tests",
            "• Current Affairs",
            "\nSelection Process:",
            "• MAT Score",
            "• GD/PI",
            "• Academic Profile",
            "• Work Experience"
          ]
        };

      case 'XAT 2024':
        return {
          title: 'XAT 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: January 7, 2024",
            "• Mode: Computer Based Test",
            "• Duration: 3 hours 10 minutes",
            "• Total Questions: 100",
            "\nExam Pattern:",
            "• Verbal & Logical Ability",
            "• Decision Making",
            "• Quantitative Ability & Data Interpretation",
            "• General Knowledge",
            "• Essay Writing",
            "\nEligibility Criteria:",
            "• Recognized Bachelor's Degree",
            "• Minimum 3 Years Duration",
            "• No Minimum % Criteria",
            "\nRegistration Details:",
            "• Start Date: August 2023",
            "• End Date: November 2023",
            "• Fee: ₹2000 (Including 2 Additional Institutes)",
            "\nParticipating Institutes:",
            "• XLRI Jamshedpur & Delhi",
            "• XIM Bhubaneswar",
            "• IMT Ghaziabad",
            "• XIMB",
            "\nPreparation Strategy:",
            "• Focus on Decision Making",
            "• Practice Essay Writing",
            "• Speed & Accuracy",
            "• Mock Tests Essential",
            "\nSelection Process:",
            "• XAT Score",
            "• Group Discussion",
            "• Personal Interview",
            "• Work Experience",
            "\nImportant Dates:",
            "• Admit Card: December 2023",
            "• Result: January 2024",
            "• GD/PI: February-March 2024",
            "\nUnique Features:",
            "• Decision Making Section",
            "• Essay Component",
            "• Adaptive Difficulty",
            "• Sectional Time Limits"
          ]
        };

      // Add cases for other exams...
      // I can provide detailed content for other exams if needed

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

export default ExamContent; 