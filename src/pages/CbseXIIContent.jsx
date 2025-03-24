import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CbseXIIContent = ({ route, navigation }) => {
  const { contentType } = route.params;

  const getContent = () => {
    switch (contentType) {
      case 'CBSE Class 12':
        return {
          title: 'CBSE Class 12 Overview',
          content: [
            "Important Information:",
            "• Board: Central Board of Secondary Education (CBSE)",
            "• Duration: 1 Year (Final year of 10+2)",
            "• Medium: English and Hindi",
            "\nAvailable Streams:",
            "• Science (PCM/PCB)",
            "• Commerce (with/without Maths)",
            "• Arts/Humanities",
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

      case 'CBSE Class 12th Results':
        return {
          title: 'CBSE Class 12th Results 2024',
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
            "• Re-evaluation Process"
          ]
        };

      case 'CBSE Class 12th Previous Year Papers':
        return {
          title: 'Previous Year Papers (2019-2023)',
          content: [
            "Available Resources:",
            "• Last 5 Years Question Papers",
            "• Subject-wise Marking Schemes",
            "• Chapter-wise Weightage Analysis",
            "\nScience Stream Papers:",
            "• Physics (2019-2023)",
            "• Chemistry (2019-2023)",
            "• Mathematics (2019-2023)",
            "• Biology (2019-2023)",
            "\nCommerce Stream Papers:",
            "• Accountancy (2019-2023)",
            "• Business Studies (2019-2023)",
            "• Economics (2019-2023)",
            "\nHumanities Stream Papers:",
            "• History (2019-2023)",
            "• Political Science (2019-2023)",
            "• Geography (2019-2023)"
          ]
        };

      case 'CBSE Class 12th Syllabus':
        return {
          title: 'CBSE Class 12th Syllabus 2024',
          content: [
            "Science Stream (PCM):",
            "• Physics: Electrostatics, Current Electricity, Magnetism, EMI, Optics, Modern Physics",
            "• Chemistry: Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry, Organic Chemistry",
            "• Mathematics: Relations and Functions, Algebra, Calculus, Vectors, 3D Geometry",
            "\nScience Stream (PCB):",
            "• Physics: Same as PCM",
            "• Chemistry: Same as PCM",
            "• Biology: Reproduction, Genetics, Evolution, Biotechnology, Ecology",
            "\nCommerce Stream:",
            "• Accountancy: Partnership Firms, Companies, Financial Statements, Analysis",
            "• Business Studies: Business Environment, Management, Marketing, Finance",
            "• Economics: Microeconomics, Macroeconomics, Money Banking, Government Budget",
            "\nHumanities Stream:",
            "• History: Modern India, World History, Indian National Movement",
            "• Political Science: Indian Constitution, Politics, International Relations",
            "• Geography: Human Geography, Economic Geography, Environmental Geography"
          ]
        };

      case 'CBSE Class 12th Exam Dates':
        return {
          title: 'CBSE Class 12th Exam Schedule 2024',
          content: [
            "Practical Examinations:",
            "• Start Date: January 1, 2024",
            "• End Date: February 15, 2024",
            "\nTheory Examinations:",
            "• Start Date: February 15, 2024",
            "• End Date: April 10, 2024",
            "• Timing: 10:30 AM to 1:30 PM",
            "\nImportant Instructions:",
            "• Reach center 1 hour before exam",
            "• Carry Admit Card and School ID",
            "• No electronic devices allowed",
            "• Follow COVID-19 guidelines",
            "\nResult Timeline:",
            "• Expected Result Date: May-June 2024",
            "• Compartment Exams: July 2024",
            "• Improvement Exams: August 2024"
          ]
        };

      case 'CBSE Class 12th Admit Card':
        return {
          title: 'CBSE Class 12th Admit Card 2024',
          content: [
            "Release Information:",
            "• Expected Release: January 2024",
            "• Available on: cbse.gov.in",
            "\nHow to Download:",
            "• Visit CBSE official website",
            "• Login with school credentials",
            "• Download student-wise admit cards",
            "• Take multiple printouts",
            "\nImportant Details on Admit Card:",
            "• Student's Name and Photo",
            "• Roll Number",
            "• Exam Center Details",
            "• Subject-wise Exam Schedule",
            "• Important Instructions",
            "\nMandatory Documents with Admit Card:",
            "• School ID Card",
            "• Valid Photo ID Proof"
          ]
        };

      // Update the NCERT Solutions cases with detailed content
      case 'NCERT Solutions Class 12th Physics':
        return {
          title: 'NCERT Solutions Physics Class 12',
          content: [
            "Chapter-wise Solutions:",
            "1. Electric Charges and Fields",
            "• Coulomb's law and applications",
            "• Electric field and flux calculations",
            "• Solved numerical problems",
            "\n2. Electrostatic Potential and Capacitance",
            "• Potential difference concepts",
            "• Capacitor combinations",
            "• Energy stored in capacitors",
            "\n3. Current Electricity",
            "• Ohm's law applications",
            "• Kirchhoff's laws",
            "• Wheatstone bridge problems",
            "\nStudy Resources:",
            "• Video lectures for each chapter",
            "• Practice worksheets",
            "• Previous year questions",
            "\nImportant Topics:",
            "• Electromagnetic Induction",
            "• Ray Optics",
            "• Wave Optics",
            "• Dual Nature of Matter",
            "\nPractical Experiments:",
            "• List of experiments",
            "• Lab manual solutions",
            "• Viva questions"
          ]
        };

      case 'NCERT Solutions Class 12th Chemistry':
        return {
          title: 'NCERT Solutions Chemistry Class 12',
          content: [
            "Chapter-wise Solutions:",
            "1. Solutions",
            "• Concentration terms",
            "• Colligative properties",
            "• Abnormal molecular mass",
            "\n2. Electrochemistry",
            "• Electrochemical cells",
            "• Nernst equation",
            "• Conductance in electrolytic solutions",
            "\n3. Chemical Kinetics",
            "• Rate of reaction",
            "• Factors affecting rate",
            "• Integrated rate equations",
            "\nPractical Guide:",
            "• Salt analysis",
            "• Organic compounds tests",
            "• Volumetric analysis",
            "\nImportant Concepts:",
            "• p-Block Elements",
            "• d and f Block Elements",
            "• Coordination Compounds",
            "\nOrganic Chemistry:",
            "• Name reactions",
            "• Mechanism writing",
            "• Product prediction"
          ]
        };

      case 'NCERT Solutions Class 12th Biology':
        return {
          title: 'NCERT Solutions Biology Class 12',
          content: [
            "Unit 1: Reproduction",
            "• Sexual reproduction in flowering plants",
            "• Human reproduction",
            "• Reproductive health",
            "\nUnit 2: Genetics and Evolution",
            "• Principles of inheritance",
            "• Molecular basis of inheritance",
            "• Evolution theories",
            "\nUnit 3: Biology in Human Welfare",
            "• Human health and diseases",
            "• Strategies for enhancement in food production",
            "• Microbes in human welfare",
            "\nPractical Work:",
            "• Experiments and observations",
            "• Spotting exercises",
            "• Project work guidelines",
            "\nStudy Material:",
            "• Detailed diagrams",
            "• Flow charts",
            "• Mind maps",
            "\nExam Preparation:",
            "• Previous year analysis",
            "• Important questions",
            "• Quick revision notes"
          ]
        };

      case 'NCERT Solutions Class 12th Maths':
        return {
          title: 'NCERT Solutions Mathematics Class 12',
          content: [
            "Chapter 1: Relations and Functions",
            "• Types of relations",
            "• Types of functions",
            "• Composition of functions",
            "\nChapter 2: Inverse Trigonometric Functions",
            "• Domain and range",
            "• Principal value branch",
            "• Properties of inverse trigonometric functions",
            "\nChapter 3: Matrices",
            "• Operations on matrices",
            "• Determinants",
            "• Inverse of a matrix",
            "\nCalculus Section:",
            "• Continuity and Differentiability",
            "• Applications of Derivatives",
            "• Integrals",
            "\nVectors and 3D:",
            "• Vector algebra",
            "• Lines and planes",
            "• Scalar triple product",
            "\nPractice Resources:",
            "• Step-by-step solutions",
            "• Alternative methods",
            "• Tips and tricks",
            "\nExam Preparation:",
            "• Important formulas",
            "• Common mistakes to avoid",
            "• Scoring topics"
          ]
        };

      case 'CBSE Class 12th Notes':
        return {
          title: 'Comprehensive Class 12 Notes',
          content: [
            "Study Planning:",
            "• Subject-wise time allocation",
            "• Topic prioritization",
            "• Revision strategy",
            "\nScience Stream Notes:",
            "• Physics complete notes",
            "• Chemistry complete notes",
            "• Mathematics/Biology complete notes",
            "\nCommerce Stream Notes:",
            "• Accountancy complete notes",
            "• Business Studies complete notes",
            "• Economics complete notes",
            "\nHumanities Stream Notes:",
            "• History complete notes",
            "• Political Science complete notes",
            "• Geography complete notes",
            "\nExam Preparation Tips:",
            "• Time management techniques",
            "• Answer writing skills",
            "• Stress management",
            "\nStudy Resources:",
            "• Video lectures links",
            "• Online test series",
            "• Reference books"
          ]
        };

      case 'CBSE Class 12th Physics Notes':
        return {
          title: 'Physics Class 12 Chapter-wise Notes',
          content: [
            "Chapter 1: Electric Charges and Fields",
            "• Electric charge and its properties",
            "• Coulomb's law and its applications",
            "• Electric field and field lines",
            "\nChapter 2: Electrostatic Potential",
            "• Electric potential and potential difference",
            "• Equipotential surfaces",
            "• Capacitance and capacitors",
            "\nChapter 3: Current Electricity",
            "• Electric current and circuit elements",
            "• Ohm's law and resistance",
            "• Combination of resistors",
            "\nChapter 4: Moving Charges and Magnetism",
            "• Magnetic force and field",
            "• Motion in magnetic field",
            "• Ampere's law",
            "\nChapter 5: Electromagnetic Induction",
            "• Magnetic flux and Faraday's laws",
            "• Lenz's law and applications",
            "• Self and mutual inductance",
            "\nChapter 6: Optics",
            "• Ray optics and optical instruments",
            "• Wave optics and interference",
            "• Diffraction and polarization",
            "\nChapter 7: Dual Nature of Matter",
            "• Photoelectric effect",
            "• Matter waves",
            "• Wave-particle duality"
          ]
        };

      case 'CBSE Class 12th Chemistry Notes':
        return {
          title: 'Chemistry Class 12 Chapter-wise Notes',
          content: [
            "Chapter 1: Solutions",
            "• Types of solutions",
            "• Concentration terms",
            "• Colligative properties",
            "\nChapter 2: Electrochemistry",
            "• Redox reactions",
            "• Electrolytic cells",
            "• Batteries and fuel cells",
            "\nChapter 3: Chemical Kinetics",
            "• Rate of reaction",
            "• Factors affecting rate",
            "• Order of reaction",
            "\nChapter 4: Surface Chemistry",
            "• Adsorption and catalysis",
            "• Colloids and emulsions",
            "• Applications in industry",
            "\nChapter 5: p-Block Elements",
            "• Group 15, 16 elements",
            "• Group 17, 18 elements",
            "• Compounds and applications",
            "\nChapter 6: Organic Chemistry",
            "• Alcohols and ethers",
            "• Aldehydes and ketones",
            "• Carboxylic acids and amines",
            "\nChapter 7: Biomolecules",
            "• Carbohydrates",
            "• Proteins and enzymes",
            "• Nucleic acids and vitamins"
          ]
        };

      case 'CBSE Class 12th Biology Notes':
        return {
          title: 'Biology Class 12 Chapter-wise Notes',
          content: [
            "Chapter 1: Reproduction in Organisms",
            "• Asexual reproduction",
            "• Sexual reproduction",
            "• Reproductive patterns",
            "\nChapter 2: Sexual Reproduction in Flowering Plants",
            "• Flower structure",
            "• Pollination and fertilization",
            "• Post-fertilization changes",
            "\nChapter 3: Human Reproduction",
            "• Male reproductive system",
            "• Female reproductive system",
            "• Gametogenesis and pregnancy",
            "\nChapter 4: Genetics",
            "• Mendelian inheritance",
            "• Chromosomal theory",
            "• Molecular basis of inheritance",
            "\nChapter 5: Evolution",
            "• Origin of life",
            "• Mechanisms of evolution",
            "• Human evolution",
            "\nChapter 6: Biotechnology",
            "• Principles and processes",
            "• Applications in agriculture",
            "• Applications in medicine",
            "\nChapter 7: Ecology",
            "• Organisms and environment",
            "• Ecosystem dynamics",
            "• Biodiversity conservation"
          ]
        };

      case 'CBSE Class 12th Maths Notes':
        return {
          title: 'Mathematics Class 12 Chapter-wise Notes',
          content: [
            "Chapter 1: Relations and Functions",
            "• Types of relations",
            "• Types of functions",
            "• Special functions",
            "\nChapter 2: Inverse Trigonometric Functions",
            "• Basic concepts",
            "• Properties and graphs",
            "• Solving equations",
            "\nChapter 3: Matrices",
            "• Types of matrices",
            "• Matrix operations",
            "• Inverse and applications",
            "\nChapter 4: Determinants",
            "• Properties of determinants",
            "• Area of triangle",
            "• System of equations",
            "\nChapter 5: Continuity and Differentiability",
            "• Continuity of functions",
            "• Differentiability",
            "• Rules of differentiation",
            "\nChapter 6: Integration",
            "• Indefinite integrals",
            "• Definite integrals",
            "• Applications of integrals",
            "\nChapter 7: Vectors",
            "• Vector algebra",
            "• Scalar product",
            "• Vector product"
          ]
        };

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
  },
  contentContainer: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    lineHeight: 24,
  },
});

export default CbseXIIContent; 