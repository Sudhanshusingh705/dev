import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CbseXContent = ({ route, navigation }) => {
  const { contentType } = route.params;

  const getContent = () => {
    switch (contentType) {
      case 'CBSE Class 10':
        return {
          title: 'CBSE Class 10 Overview',
          content: [
            "Important Information:",
            "• Board: Central Board of Secondary Education (CBSE)",
            "• Duration: 1 Year (Final year of 10th)",
            "• Medium: English and Hindi",
            "\nCore Subjects:",
            "• English Language & Literature",
            "• Hindi Course A or B",
            "• Mathematics Standard/Basic",
            "• Science",
            "• Social Science",
            "\nExamination Pattern:",
            "• Theory Examinations: 80 marks",
            "• Internal Assessment: 20 marks",
            "• Practical Examinations (where applicable)",
            "\nImportant Dates 2024:",
            "• Practical Exams: January-February 2024",
            "• Board Exams: February-March 2024",
            "• Results Expected: May-June 2024"
          ]
        };

      case 'CBSE Class 10th Result':
        return {
          title: 'CBSE Class 10th Result 2024',
          content: [
            "Result Information:",
            "• Expected Declaration: May-June 2024",
            "• Official Websites: cbse.gov.in, cbseresults.nic.in",
            "\nHow to Check Results:",
            "• Visit official CBSE website",
            "• Enter Roll Number and School Code",
            "• Enter Security Pin",
            "• Download and save result",
            "\nAlternative Methods:",
            "• UMANG App",
            "• DigiLocker",
            "• SMS Facility",
            "\nPost Result Services:",
            "• Verification of Marks",
            "• Obtaining Photocopy of Answer Sheet",
            "• Re-evaluation Process",
            "• Compartment Examination"
          ]
        };

      case 'CBSE Class 10 Previous Year Papers':
        return {
          title: 'Previous Year Papers (2019-2023)',
          content: [
            "Available Resources:",
            "• Last 5 Years Question Papers with Solutions",
            "• Subject-wise Marking Schemes",
            "• Chapter-wise Weightage Analysis",
            "\nScience Papers Analysis:",
            "• Physics Section: Focus on Electricity, Light, and Modern Physics",
            "• Chemistry Section: Emphasis on Chemical Reactions and Periodic Table",
            "• Biology Section: Major coverage of Life Processes and Environment",
            "• Average difficulty level: Moderate",
            "• Practical questions weightage: 20%",
            "\nMathematics Papers Pattern:",
            "• Algebra: 20% weightage",
            "• Geometry: 25% weightage",
            "• Trigonometry: 15% weightage",
            "• Statistics & Probability: 15% weightage",
            "• Mensuration: 15% weightage",
            "• Real Numbers: 10% weightage",
            "\nEnglish Language & Literature:",
            "• Reading section pattern",
            "• Writing section analysis",
            "• Literature section breakdown",
            "• Grammar section distribution",
            "\nSocial Science Trends:",
            "• History: Focus on Nationalism and Modern India",
            "• Geography: Resources and Development",
            "• Civics: Democracy and Constitution",
            "• Economics: Development and Globalization"
          ]
        };

      case 'CBSE Class 10th Syllabus':
        return {
          title: 'CBSE Class 10th Syllabus 2024',
          content: [
            "English Language & Literature:",
            "• Reading: Unseen Passages and Poetry",
            "• Writing: Formal Letters, Articles, Stories",
            "• Grammar: Tenses, Modals, Subject-Verb Agreement",
            "• Literature: First Flight and Footprints Without Feet",
            "\nMathematics:",
            "• Real Numbers and Polynomials",
            "• Pair of Linear Equations",
            "• Triangles and Coordinate Geometry",
            "• Trigonometry and Applications",
            "• Areas Related to Circles",
            "• Surface Areas and Volumes",
            "• Statistics and Probability",
            "\nScience:",
            "Physics:",
            "• Light - Reflection and Refraction",
            "• Human Eye and Colorful World",
            "• Electricity and Magnetic Effects",
            "• Sources of Energy",
            "\nChemistry:",
            "• Chemical Reactions and Equations",
            "• Acids, Bases and Salts",
            "• Metals and Non-metals",
            "• Carbon and Compounds",
            "\nBiology:",
            "• Life Processes",
            "• Control and Coordination",
            "• Reproduction in Organisms",
            "• Heredity and Evolution",
            "\nSocial Science:",
            "History:",
            "• Rise of Nationalism in Europe",
            "• Nationalism in India",
            "• Making of a Global World",
            "\nGeography:",
            "• Resources and Development",
            "• Agriculture and Mineral Resources",
            "• Manufacturing Industries",
            "• Lifelines of National Economy",
            "\nCivics:",
            "• Power Sharing and Federalism",
            "• Democracy and Diversity",
            "• Political Parties",
            "\nEconomics:",
            "• Development",
            "• Sectors of Indian Economy",
            "• Money and Credit",
            "• Globalization"
          ]
        };

      case 'NCERT Solutions Class 10th Science':
        return {
          title: 'NCERT Solutions Science Class 10',
          content: [
            "Physics Section:",
            "Chapter 10: Light",
            "• Laws of Reflection and Refraction",
            "• Image Formation by Mirrors and Lenses",
            "• Power of Lens and Magnification",
            "• Applications in Daily Life",
            "\nChapter 12: Electricity",
            "• Ohm's Law and Resistance",
            "• Series and Parallel Connections",
            "• Heating Effect of Current",
            "• Electric Power and Energy",
            "\nChapter 13: Magnetic Effects",
            "• Magnetic Field and Field Lines",
            "• Fleming's Rules",
            "• Electromagnetic Induction",
            "\nChemistry Section:",
            "Chapter 1: Chemical Reactions",
            "• Types of Chemical Reactions",
            "• Balanced Chemical Equations",
            "• Oxidation and Reduction",
            "\nChapter 2: Acids, Bases and Salts",
            "• Properties and pH Scale",
            "• Common Salt Preparation",
            "• Important Chemical Compounds",
            "\nChapter 3: Metals and Non-metals",
            "• Physical and Chemical Properties",
            "• Reactivity Series",
            "• Ionic Bonding",
            "\nBiology Section:",
            "Chapter 6: Life Processes",
            "• Nutrition in Organisms",
            "• Respiration and Transportation",
            "• Excretion Process",
            "\nChapter 7: Control and Coordination",
            "• Nervous System",
            "• Hormones and Their Functions",
            "• Plant Hormones",
            "\nPractical Work:",
            "• Lab Manual Solutions",
            "• Virtual Lab Resources",
            "• Project Ideas and Guidelines",
            "\nExam Preparation:",
            "• Important Questions",
            "• Previous Year Analysis",
            "• Scoring Tips and Tricks"
          ]
        };

      case 'CBSE Class 10th Exam Dates':
        return {
          title: 'CBSE Class 10th Exam Schedule 2024',
          content: [
            "Pre-Board Examinations:",
            "• First Pre-Board: December 2023",
            "• Second Pre-Board: January 2024",
            "• Model Test Papers: February 2024",
            "\nPractical Examinations:",
            "• Start Date: January 1, 2024",
            "• End Date: February 15, 2024",
            "• Internal Assessment Submission",
            "• Project Work Evaluation",
            "\nBoard Examinations 2024:",
            "• Duration: February 15 to March 30, 2024",
            "• Morning Shift: 10:30 AM to 1:30 PM",
            "• Reporting Time: 10:00 AM",
            "\nSubject-wise Schedule:",
            "Core Subjects:",
            "• English Language & Literature: February 20, 2024",
            "• Hindi Course A/B: February 23, 2024",
            "• Mathematics: February 26, 2024",
            "• Science: March 2, 2024",
            "• Social Science: March 5, 2024",
            "\nOther Important Dates:",
            "• Answer Sheet Evaluation: April 2024",
            "• Result Declaration: May-June 2024",
            "• Compartment Exams: July 2024",
            "\nImportant Instructions:",
            "• Carry Admit Card and School ID",
            "• Reach center 1 hour before exam",
            "• No electronic devices allowed",
            "• Follow COVID-19 protocols if applicable",
            "\nPost-Examination Schedule:",
            "• Answer Key Release: Within 24-48 hours",
            "• Objection Window: 2-3 days after exam",
            "• OMR Sheet Display: Digital copy available",
            "• Result Processing Time: 45-60 days"
          ]
        };

      case 'CBSE Class 10th Admit Card':
        return {
          title: 'CBSE Class 10th Admit Card 2024',
          content: [
            "Release Information:",
            "• Expected Release: January 2024",
            "• Available on: cbse.gov.in",
            "• School Login Required",
            "\nHow to Download:",
            "Step 1: School Login",
            "• Visit CBSE official website",
            "• Enter school credentials",
            "• Access admit card section",
            "\nStep 2: Student Details",
            "• Enter roll number",
            "• Verify student information",
            "• Download admit card",
            "\nImportant Details on Admit Card:",
            "• Student's Name and Photograph",
            "• Parent's Name",
            "• Roll Number and School Code",
            "• Exam Center Details",
            "• Subject-wise Schedule",
            "• Reporting Time",
            "\nMandatory Documents:",
            "• Original Admit Card",
            "• School ID Card",
            "• Valid Photo ID Proof",
            "\nImportant Instructions:",
            "• Check all details carefully",
            "• Report errors immediately",
            "• Take multiple printouts",
            "• Keep safe till results",
            "\nExam Day Requirements:",
            "• Dress Code Compliance",
            "• Stationery Items Allowed",
            "• Prohibited Items List",
            "• Special Instructions",
            "\nEmergency Procedures:",
            "• Lost Admit Card Protocol",
            "• Correction Process",
            "• Emergency Contacts",
            "• Help Desk Information"
          ]
        };

      case 'NCERT Solutions Class 10th Maths':
        return {
          title: 'NCERT Solutions Mathematics Class 10',
          content: [
            "Chapter 1: Real Numbers",
            "• Euclid's Division Lemma",
            "• Fundamental Theorem of Arithmetic",
            "• Irrational Numbers",
            "• Revisiting Rational Numbers",
            "\nChapter 2: Polynomials",
            "• Zeros of Polynomials",
            "• Division Algorithm",
            "• Factor Theorem",
            "• Algebraic Identities",
            "\nChapter 3: Pair of Linear Equations",
            "• Graphical Method",
            "• Substitution Method",
            "• Elimination Method",
            "• Cross Multiplication Method",
            "\nChapter 4: Quadratic Equations",
            "• Standard Form",
            "• Solution Methods",
            "• Nature of Roots",
            "• Applications",
            "\nChapter 5: Arithmetic Progressions",
            "• nth Term",
            "• Sum of n Terms",
            "• Applications in Daily Life",
            "\nChapter 6: Triangles",
            "• Similar Triangles",
            "• Pythagoras Theorem",
            "• Area Relations",
            "• Trigonometric Ratios",
            "\nChapter 7: Coordinate Geometry",
            "• Distance Formula",
            "• Section Formula",
            "• Area of Triangle",
            "• Applications",
            "\nChapter 8: Introduction to Trigonometry",
            "• Trigonometric Ratios",
            "• Complementary Angles",
            "• Trigonometric Identities",
            "\nChapter 9: Applications of Trigonometry",
            "• Heights and Distances",
            "• Angle of Elevation",
            "• Angle of Depression",
            "\nChapter 10: Circles",
            "• Tangent and Secant",
            "• Number of Tangents",
            "• Circles and Concurrent Lines",
            "\nChapter 11: Constructions",
            "• Division of Line Segment",
            "• Construction of Similar Triangles",
            "• Tangents to Circle",
            "\nChapter 12: Areas Related to Circles",
            "• Area of Circle",
            "• Areas of Sector and Segment",
            "• Areas of Combinations",
            "\nChapter 13: Surface Areas and Volumes",
            "• Surface Area of Solids",
            "• Volume of Solids",
            "• Conversion of Solids",
            "\nChapter 14: Statistics",
            "• Mean, Median, Mode",
            "• Cumulative Frequency",
            "• Graphical Representation",
            "\nChapter 15: Probability",
            "• Classical Probability",
            "• Experimental Probability",
            "• Applications in Real Life",
            "\nExam Preparation:",
            "• Chapter-wise Weightage",
            "• Important Formulas",
            "• Solved Examples",
            "• Practice Questions",
            "• Previous Year Questions",
            "• Quick Revision Notes",
            "\nScoring Tips:",
            "• Step-wise Solution Method",
            "• Time Management",
            "• Common Mistakes to Avoid",
            "• Presentation Techniques"
          ]
        };

      // Add more cases for other buttons...
      // I can provide the content for remaining buttons if needed

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
    marginBottom: 20,
    paddingHorizontal: 16,
    textAlign: 'justify',
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
  boldText: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
  }
});

export default CbseXContent; 