import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';;

const ExamContent = ({ route, navigation }) => {
  const { examType } = route.params;

  const getContent = () => {
    switch (examType) {
      case 'NEET 2025-26':
        return {
          title: 'NEET 2025-26 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: May 4, 2025",
            "• Mode: Offline (Pen & Paper)",
            "• Duration: 3 hours 20 minutes",
            "• Questions: 200 MCQs",
            "• Maximum Marks: 720",
            "\nApplication Process:",
            "• Registration Start: February 2025",
            "• Registration End: March 2025",
            "• Application Fee: ₹1700 (Gen), ₹1000 (SC/ST)",
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
            "• Maulana Azad Medical College",
            "• KGMU Lucknow",
            "\nPreparation Tips:",
            "• Focus on NCERT thoroughly",
            "• Regular Mock Tests",
            "• Previous Year Papers analysis",
            "• Time Management strategies",
            "• Biology diagrams practice",
            "\nImportant Documents:",
            "• Admit Card",
            "• Valid ID Proof",
            "• Recent Photographs",
            "• Category Certificate",
            "• PwD Certificate (if applicable)"
          ]
        };

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

      case 'JEE Advanced 2025-26':
        return {
          title: 'JEE Advanced 2025-26 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: May 25, 2025",
            "• Mode: Computer Based Test (CBT)",
            "• Duration: 6 hours (2 papers)",
            "• Paper 1: 9:00 AM - 12:00 PM",
            "• Paper 2: 2:30 PM - 5:30 PM",
            "• Maximum Marks: Varies by paper",
            "\nApplication Process:",
            "• Through JEE Main 2025",
            "• Top 2.5 lakh candidates eligible",
            "• Registration: April-May 2025",
            "• Application Fee: ₹2800 (Gen), ₹1400 (SC/ST)",
            "\nEligibility Criteria:",
            "• Must qualify JEE Main 2025",
            "• Top 2.5 lakh JEE Main candidates",
            "• Maximum 2 consecutive attempts",
            "• Age: Born on/after Oct 1, 2000 (5-year relaxation for SC/ST/PwD)",
            "• 75% in 10+2 (Gen), 65% (SC/ST/PwD) or top 20 percentile",
            "\nExam Pattern:",
            "• Two Papers: Paper 1 & 2 (compulsory)",
            "• Subjects: Physics, Chemistry, Mathematics",
            "• Question Types: MCQs, Numerical Value, List Match",
            "• Partial marking in some sections",
            "• Section-wise time limits introduced",
            "\nTop IITs & Seats:",
            "• IIT Bombay - 1,368 seats",
            "• IIT Delhi - 1,209 seats",
            "• IIT Madras - 1,134 seats",
            "• IIT Kanpur - 1,104 seats",
            "• IIT Kharagpur - 1,869 seats",
            "• IIT Roorkee - 1,353 seats",
            "• IIT Guwahati - 798 seats",
            "• Total IIT seats: ~17,000",
            "\nPreparation Strategy:",
            "• Master advanced concepts thoroughly",
            "• Develop problem-solving speed",
            "• Regular mock tests & detailed analysis",
            "• Previous year papers practice",
            "• Focus on conceptual clarity",
            "• Time management between papers",
            "\nImportant Documents:",
            "• JEE Main 2025 Score Card",
            "• Class 12 Marksheet",
            "• Category Certificate (if applicable)",
            "• PwD Certificate (if applicable)",
            "• Admit Card",
            "• Valid ID Proof",
            "• Recent Photographs"
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

      case 'JEE Main 2025-26':
        return {
          title: 'JEE Main 2025-26 Exam Guide',
          content: [
            "Exam Overview:",
            "• Session 1: January 2026 (Tentative)",
            "• Session 2: April 2026 (Tentative)",
            "• Mode: Computer Based Test (CBT)",
            "• Duration: 3 hours",
            "• Papers: Paper 1 (B.E/B.Tech), Paper 2A (B.Arch), Paper 2B (B.Plan)",
            "• Total Marks: 300 (Paper 1)",
            "\nApplication Process:",
            "• Online registration at jeemain.nta.nic.in",
            "• Session 1: December 2025 - January 2026",
            "• Session 2: February - March 2026",
            "• Application Fee: ₹1000 (Gen), ₹500 (SC/ST/OBC/EWS)",
            "• Fee for Paper 2: ₹500 additional",
            "\nEligibility Criteria:",
            "• 10+2 with PCM (for B.E/B.Tech)",
            "• 10+2 with Mathematics (for B.Arch/B.Plan)",
            "• 75% aggregate (Gen), 65% (SC/ST)",
            "• No age limit",
            "• Maximum 3 consecutive attempts",
            "\nExam Pattern - Paper 1 (B.E/B.Tech):",
            "• Physics: 25 questions (20 MCQ + 10 NAT)",
            "• Chemistry: 25 questions (20 MCQ + 10 NAT)",
            "• Mathematics: 25 questions (20 MCQ + 10 NAT)",
            "• Total: 75 questions (attempt any 65)",
            "• Marking: +4 correct, -1 incorrect (MCQ), no negative (NAT)",
            "\nTop NITs & Seats:",
            "• NIT Trichy - 1,200+ seats",
            "• NIT Warangal - 800+ seats",
            "• NIT Surathkal - 740+ seats",
            "• NIT Calicut - 1,000+ seats",
            "• MNNIT Allahabad - 800+ seats",
            "• NIT Rourkela - 800+ seats",
            "• NIT Kurukshetra - 800+ seats",
            "• Total NIT+ seats: ~24,000",
            "\nImportant Dates (Tentative):",
            "• Registration Start: December 2025",
            "• Admit Card: January 2026 (Session 1)",
            "• Result: February 2026 (Session 1)",
            "• Counseling: June-July 2026",
            "\nPreparation Strategy:",
            "• NCERT textbooks (Class 11 & 12)",
            "• Previous year papers analysis",
            "• Regular mock tests",
            "• Time management techniques",
            "• Focus on weak areas",
            "• Online test series practice",
            "\nImportant Documents:",
            "• Admit Card",
            "• Valid ID Proof",
            "• Passport size photographs",
            "• Category Certificate (if applicable)",
            "• PwD Certificate (if applicable)"
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

      case 'CAT 2025-26':
        return {
          title: 'CAT 2025-26 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: November 30, 2025 (Tentative)",
            "• Mode: Computer Based Test (CBT)",
            "• Duration: 2 hours",
            "• Sections: 3 (VARC, DILR, QA)",
            "• Total Questions: 66 (expected)",
            "• Total Marks: 198",
            "\nApplication Process:",
            "• Registration: August 2025",
            "• Last Date: September 2025",
            "• Application Fee: ₹2500 (Gen), ₹1250 (SC/ST)",
            "• Official website: iimcat.ac.in",
            "• Correction window: 2-3 days",
            "\nEligibility Criteria:",
            "• Bachelor's degree with 50% (Gen), 45% (SC/ST/PwD)",
            "• Final year students eligible",
            "• No age limit",
            "• Professional degrees (CA/CS/CMA) eligible",
            "\nExam Pattern (Expected):",
            "• VARC: 24 questions (40 minutes)",
            "• DILR: 20 questions (40 minutes)",
            "• QA: 22 questions (40 minutes)",
            "• Marking: +3 correct, -1 incorrect",
            "• Sectional time limits apply",
            "\nTop IIMs & Seats:",
            "• IIM Ahmedabad - 385 seats",
            "• IIM Bangalore - 412 seats",
            "• IIM Calcutta - 462 seats",
            "• IIM Lucknow - 500 seats",
            "• IIM Kozhikode - 525 seats",
            "• IIM Indore - 451 seats",
            "• New IIMs - 240-300 seats each",
            "• Total IIM seats: ~5,500",
            "\nOther Top B-schools:",
            "• FMS Delhi",
            "• MDI Gurgaon",
            "• SPJIMR Mumbai",
            "• XLRI Jamshedpur",
            "• IIFT Delhi/Kolkata",
            "\nPreparation Strategy:",
            "• 6-8 months dedicated preparation",
            "• Regular mock tests (minimum 30)",
            "• Section-wise strategy development",
            "• Reading newspapers daily",
            "• Previous year papers analysis",
            "• Focus on accuracy over attempts",
            "\nImportant Documents:",
            "• Admit Card",
            "• Valid ID Proof",
            "• Passport photographs",
            "• Category Certificate (if applicable)",
            "• Graduation mark sheets"
          ]
        };

      case 'CAT 2024':
        return {
          title: 'CAT 2024 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: November 24, 2024",
            "• Mode: Computer Based Test",
            "• Duration: 2 hours",
            "• Sections: 3 (VARC, DILR, QA)",
            "• Total Questions: 66",
            "\nApplication Process:",
            "• Registration: August 2024",
            "• Application Fee: ₹2400 (Gen), ₹1200 (SC/ST)",
            "• Official website: iimcat.ac.in",
            "\nEligibility Criteria:",
            "• Bachelor's degree with 50% (Gen), 45% (SC/ST)",
            "• Final year students eligible",
            "• No age limit",
            "\nExam Pattern:",
            "• VARC: 24 questions",
            "• DILR: 20 questions",
            "• QA: 22 questions",
            "• Marking: +3 correct, -1 incorrect",
            "\nTop IIMs:",
            "• IIM Ahmedabad",
            "• IIM Bangalore",
            "• IIM Calcutta",
            "• IIM Lucknow",
            "• IIM Kozhikode",
            "\nPreparation Tips:",
            "• Mock tests & analysis",
            "• Reading comprehension",
            "• Data interpretation",
            "• Quantitative aptitude"
          ]
        };

      case 'GATE 2025-26':
        return {
          title: 'GATE 2025-26 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: February 1-2 & 8-9, 2025",
            "• Mode: Computer Based Test (CBT)",
            "• Duration: 3 hours",
            "• Papers: 30 subjects/disciplines",
            "• Total Marks: 100",
            "• Exam Shifts: Forenoon & Afternoon",
            "\nApplication Process:",
            "• Registration: August 28 - October 5, 2024",
            "• Extended deadline: October 12, 2024",
            "• Application Fee: ₹1800 (Gen), ₹900 (SC/ST/PwD)",
            "• Female candidates: ₹1400 (Gen), ₹700 (SC/ST/PwD)",
            "• Official website: gate2025.iitr.ac.in",
            "\nEligibility Criteria:",
            "• Bachelor's degree in Engineering/Technology/Science",
            "• Final year students eligible",
            "• No age limit",
            "• International candidates from select countries eligible",
            "\nExam Pattern:",
            "• 65 questions total",
            "• MCQs: Multiple Choice Questions",
            "• NAT: Numerical Answer Type",
            "• General Aptitude: 15 marks (common for all)",
            "• Subject Paper: 85 marks",
            "• Negative marking only for MCQs",
            "\nTop IITs & IISc for M.Tech:",
            "• IIT Bombay - 1,200+ M.Tech seats",
            "• IIT Delhi - 1,000+ M.Tech seats",
            "• IIT Madras - 900+ M.Tech seats",
            "• IIT Kanpur - 800+ M.Tech seats",
            "• IIT Kharagpur - 1,200+ M.Tech seats",
            "• IISc Bangalore - 500+ M.Tech seats",
            "• IIT Roorkee - 800+ M.Tech seats",
            "• IIT Guwahati - 500+ M.Tech seats",
            "\nPSU Recruitment:",
            "• ONGC, IOCL, BHEL, NTPC",
            "• GAIL, SAIL, HPCL, BPCL",
            "• Power Grid, CIL, NLC",
            "• 50+ PSUs recruit through GATE",
            "\nPreparation Strategy:",
            "• 6-8 months preparation recommended",
            "• Previous year papers (last 15 years)",
            "• Standard textbooks for core subjects",
            "• Regular mock tests",
            "• Focus on conceptual understanding",
            "• Engineering mathematics practice",
            "\nImportant Documents:",
            "• Admit Card",
            "• Valid ID Proof",
            "• Degree certificate/mark sheets",
            "• Category Certificate (if applicable)",
            "• PwD Certificate (if applicable)"
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

      case 'BITSAT 2025-26':
        return {
          title: 'BITSAT 2025-26 Exam Guide',
          content: [
            "Exam Overview:",
            "• Date: May 20 - June 2, 2025 (Tentative)",
            "• Mode: Computer Based Test (CBT)",
            "• Duration: 3 hours (without break)",
            "• Total Questions: 130",
            "• Maximum Marks: 390",
            "• Extra Questions: 12 bonus questions (if time permits)",
            "\nApplication Process:",
            "• Registration: January 2025",
            "• Last Date: March 2025",
            "• Application Fee: ₹3600 (Gen), ₹3100 (SC/ST)",
            "• Official website: bitsadmission.com",
            "• Multiple exam slots available",
            "\nEligibility Criteria:",
            "• 10+2 with PCM (for B.E programs)",
            "• 10+2 with PCB (for B.Pharm programs)",
            "• 75% aggregate marks in 10+2",
            "• 60% minimum in PCM/PCB subjects",
            "• No age limit",
            "• Only three attempts allowed",
            "\nExam Pattern:",
            "• Physics: 30 questions (90 marks)",
            "• Chemistry: 30 questions (90 marks)",
            "• Mathematics/Biology: 40 questions (120 marks)",
            "• English Proficiency: 15 questions (45 marks)",
            "• Logical Reasoning: 15 questions (45 marks)",
            "• Marking: +3 correct, -1 incorrect",
            "• No negative marking for extra questions",
            "\nBITS Campuses & Seats:",
            "• BITS Pilani (Pilani) - 1,200+ seats",
            "• BITS Pilani (Goa) - 800+ seats",
            "• BITS Pilani (Hyderabad) - 1,200+ seats",
            "• BITS Pilani (Dubai) - 400+ seats",
            "• Total seats: ~3,600 across all campuses",
            "\nImportant Programs:",
            "• B.E (Hons) - 8 disciplines",
            "• B.Pharm (Hons)",
            "• M.Sc (Hons) - 5 disciplines",
            "• M.Sc (Tech) - 3 disciplines",
            "• Dual degree programs available",
            "\nPreparation Strategy:",
            "• Focus on NCERT textbooks thoroughly",
            "• Regular mock tests and analysis",
            "• Speed and accuracy improvement",
            "• English proficiency development",
            "• Logical reasoning practice",
            "• Previous year papers analysis",
            "• Time management techniques",
            "\nImportant Dates (Tentative):",
            "• Application Start: January 2025",
            "• Admit Card: May 2025",
            "• Exam Dates: May 20 - June 2, 2025",
            "• Result: June 2025",
            "• Counseling: July 2025",
            "\nImportant Documents:",
            "• Admit Card",
            "• Valid ID Proof",
            "• Class 12 Marksheet",
            "• Passport size photographs",
            "• Category Certificate (if applicable)",
            "• Medical Certificate (if applicable)"
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