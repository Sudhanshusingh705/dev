import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StudyAbroadContent = ({ route, navigation }) => {
  const { countryData } = route.params;

  const getDetailedContent = () => {
    switch(countryData.country) {
      case 'USA':
        return [
          "Study in USA - Complete Guide",
          "\nWhy Choose USA?",
          "• World's Best Universities",
          "• Cutting-edge Research",
          "• Diverse Culture",
          "• Career Opportunities",
          "\nTop Universities:",
          "• Harvard University",
          "• MIT",
          "• Stanford University",
          "• California Institute of Technology",
          "\nPopular Courses:",
          "• Computer Science",
          "• Business Management",
          "• Engineering",
          "• Medical Sciences",
          "\nAdmission Requirements:",
          "• SAT/ACT Scores",
          "• TOEFL/IELTS",
          "• GPA Requirements",
          "• Letters of Recommendation",
          "\nApplication Process:",
          "• Common Application",
          "• University-specific Applications",
          "• Document Submission",
          "• Visa Process",
          "\nCost Structure:",
          "• Tuition: $20,000-$60,000/year",
          "• Living Expenses: $10,000-$20,000/year",
          "• Health Insurance: $1,500/year",
          "\nScholarship Options:",
          "• Merit-based Scholarships",
          "• Sports Scholarships",
          "• Financial Aid",
          "• Research Grants",
          "\nWork Opportunities:",
          "• OPT Program",
          "• Campus Jobs",
          "• Internships",
          "• Post-study Work Visa"
        ];

      case 'UK':
        return [
          "Study in UK - Comprehensive Guide",
          "\nEducation System:",
          "• 3-year Bachelor's Programs",
          "• 1-year Master's Programs",
          "• Research-focused PhDs",
          "\nTop Universities:",
          "• University of Oxford",
          "• University of Cambridge",
          "• Imperial College London",
          "• LSE",
          "\nPopular Courses:",
          "• Business Studies",
          "• Engineering",
          "• Law",
          "• Arts and Design",
          "\nEntry Requirements:",
          "• IELTS/TOEFL Scores",
          "• Academic Transcripts",
          "• Personal Statement",
          "• References",
          "\nVisa Process:",
          "• Student Visa Requirements",
          "• Financial Documentation",
          "• Health Insurance",
          "• Maintenance Funds",
          "\nLiving Costs:",
          "• London: £15,000/year",
          "• Other Cities: £12,000/year",
          "• Transportation: £1,500/year",
          "\nWork Regulations:",
          "• 20 hours/week during term",
          "• Full-time during holidays",
          "• Graduate Route Visa",
          "• Career Opportunities"
        ];

      case 'Canada':
        return [
          "Study in Canada - Complete Guide",
          "\nWhy Choose Canada?",
          "• High Quality Education",
          "• Post-Study Work Permits",
          "• Multicultural Environment",
          "• Affordable Education",
          "\nTop Universities:",
          "• University of Toronto",
          "• McGill University",
          "• University of British Columbia",
          "• University of Alberta",
          "\nPopular Programs:",
          "• Engineering",
          "• Business & Management",
          "• Computer Science",
          "• Healthcare",
          "\nAdmission Requirements:",
          "• IELTS/TOEFL Score",
          "• Academic Transcripts",
          "• SOP & LORs",
          "• Portfolio (if applicable)",
          "\nVisa Process:",
          "• Study Permit Requirements",
          "• Biometrics",
          "• Financial Proof",
          "• Medical Examination",
          "\nCost Breakdown:",
          "• Tuition: CAD 15,000-35,000/year",
          "• Living Expenses: CAD 10,000-15,000/year",
          "• Health Insurance: CAD 600-800/year",
          "\nWork Opportunities:",
          "• 20 hours/week during studies",
          "• Full-time during breaks",
          "• PGWP up to 3 years",
          "• Path to PR"
        ];

      case 'Australia':
        return [
          "Study in Australia - Detailed Guide",
          "\nKey Benefits:",
          "• World-Class Education",
          "• High Living Standards",
          "• Work While Studying",
          "• Post-Study Work Rights",
          "\nLeading Universities:",
          "• University of Melbourne",
          "• Australian National University",
          "• University of Sydney",
          "• UNSW Sydney",
          "\nPopular Courses:",
          "• Engineering & Technology",
          "• Business & Management",
          "• Healthcare Sciences",
          "• Information Technology",
          "\nEntry Requirements:",
          "• IELTS/PTE Scores",
          "• Academic Documents",
          "• Statement of Purpose",
          "• Financial Declarations",
          "\nVisa Information:",
          "• Student Visa (Subclass 500)",
          "• Health Insurance (OSHC)",
          "• Financial Requirements",
          "• Character Certificate",
          "\nLiving Expenses:",
          "• Major Cities: AUD 20,000-25,000/year",
          "• Regional Areas: AUD 15,000-20,000/year",
          "• Transportation: AUD 2,000/year",
          "\nWork Rights:",
          "• Unlimited Work Hours",
          "• Post-Study Work Visa",
          "• Professional Year Programs",
          "• Internship Opportunities"
        ];

      case 'Germany':
        return [
          "Study in Germany - In-depth Guide",
          "\nUnique Advantages:",
          "• Free/Low-Cost Education",
          "• No Tuition Fees (Public Unis)",
          "• Strong Economy",
          "• Rich Cultural Experience",
          "\nTop Universities:",
          "• TU Munich",
          "• LMU Munich",
          "• Heidelberg University",
          "• TU Berlin",
          "\nPopular Programs:",
          "• Engineering",
          "• Automotive Technology",
          "• Computer Science",
          "• Medicine",
          "\nAdmission Process:",
          "• Language Requirements (German/English)",
          "• Academic Requirements",
          "• Blocked Account",
          "• Health Insurance",
          "\nVisa Requirements:",
          "• Student Visa Process",
          "• Financial Proof (€11,208)",
          "• Accommodation Proof",
          "• Insurance Documents",
          "\nLiving Costs:",
          "• Monthly Expenses: €850-1000",
          "• Semester Fee: €150-350",
          "• Health Insurance: €110/month",
          "\nCareer Prospects:",
          "• 18-month Job Seeker Visa",
          "• Strong Job Market",
          "• Research Opportunities",
          "• Industry Connections"
        ];

      case 'Ireland':
        return [
          "Study in Ireland - Complete Overview",
          "\nWhy Ireland?",
          "• English-Speaking Country",
          "• Strong Tech Hub",
          "• Rich Cultural Heritage",
          "• 2-Year Stay Back Option",
          "\nPremier Institutions:",
          "• Trinity College Dublin",
          "• University College Dublin",
          "• NUI Galway",
          "• Dublin City University",
          "\nPopular Fields:",
          "• Data Science & Analytics",
          "• Business Studies",
          "• Computer Science",
          "• Pharmaceutical Sciences",
          "\nEntry Requirements:",
          "• IELTS/TOEFL Scores",
          "• Academic Transcripts",
          "• Statement of Purpose",
          "• References",
          "\nVisa Process:",
          "• Study Visa Requirements",
          "• Proof of Funds",
          "• Health Insurance",
          "• Acceptance Letter",
          "\nExpenses Overview:",
          "• Tuition: €10,000-25,000/year",
          "• Living Costs: €10,000-15,000/year",
          "• Insurance: €500/year",
          "\nWork Opportunities:",
          "• 20 hours/week (term time)",
          "• 40 hours/week (holidays)",
          "• Post-Study Work Visa",
          "• Industry Connections"
        ];

      case 'New Zealand':
        return [
          "Study in New Zealand - Comprehensive Guide",
          "\nKey Highlights:",
          "• High Quality of Life",
          "• Safe Environment",
          "• Work Opportunities",
          "• Natural Beauty",
          "\nTop Universities:",
          "• University of Auckland",
          "• University of Otago",
          "• Victoria University of Wellington",
          "• University of Canterbury",
          "\nPopular Courses:",
          "• Environmental Sciences",
          "• Agriculture & Forestry",
          "• Engineering",
          "• Tourism & Hospitality",
          "\nAdmission Requirements:",
          "• IELTS/PTE Scores",
          "• Academic Records",
          "• Statement of Purpose",
          "• Financial Proof",
          "\nVisa Details:",
          "• Student Visa Process",
          "• Medical Requirements",
          "• Insurance Needs",
          "• Financial Guarantees",
          "\nCost Structure:",
          "• Tuition: NZD 20,000-35,000/year",
          "• Living Costs: NZD 15,000-20,000/year",
          "• Insurance: NZD 500-700/year",
          "\nWork Rights:",
          "• 20 hours/week during term",
          "• Full-time during holidays",
          "• Post-study work visa",
          "• Pathway to residency"
        ];

      case 'Singapore':
        return [
          "Study in Singapore - Detailed Guide",
          "\nAdvantages:",
          "• Global Education Hub",
          "• Strategic Location",
          "• Modern Infrastructure",
          "• Multicultural Environment",
          "\nTop Institutions:",
          "• National University of Singapore",
          "• Nanyang Technological University",
          "• Singapore Management University",
          "• SUTD",
          "\nPopular Programs:",
          "• Business & Finance",
          "• Engineering",
          "• Information Technology",
          "• Life Sciences",
          "\nEntry Requirements:",
          "• Academic Excellence",
          "• English Proficiency",
          "• Entrance Tests",
          "• Interview (if required)",
          "\nVisa Process:",
          "• Student Pass Application",
          "• Health Screening",
          "• Financial Requirements",
          "• Security Bond",
          "\nLiving Expenses:",
          "• Accommodation: SGD 6,000-15,000/year",
          "• Living Costs: SGD 10,000-12,000/year",
          "• Transport: SGD 1,000-1,500/year",
          "\nCareer Prospects:",
          "• Internship Opportunities",
          "• Industry Connections",
          "• Global Companies",
          "• Research Positions"
        ];

      case 'Netherlands':
        return [
          "Study in Netherlands - Complete Guide",
          "\nWhy Netherlands?",
          "• English-Taught Programs",
          "• Innovation Hub",
          "• Bicycle Culture",
          "• International Environment",
          "\nLeading Universities:",
          "• University of Amsterdam",
          "• TU Delft",
          "• Erasmus University Rotterdam",
          "• Utrecht University",
          "\nPopular Courses:",
          "• Water Management",
          "• Sustainable Energy",
          "• Business & Economics",
          "• Computer Science",
          "\nAdmission Process:",
          "• Diploma Requirements",
          "• English Proficiency",
          "• Motivation Letter",
          "• CV/Resume",
          "\nVisa Requirements:",
          "• MVV (Entry Visa)",
          "• Residence Permit",
          "• Proof of Funds",
          "• Health Insurance",
          "\nCost Overview:",
          "• EU Students: €2,200/year",
          "• Non-EU: €8,000-20,000/year",
          "• Living Costs: €800-1,200/month",
          "\nWork Options:",
          "• Part-time Work Allowed",
          "• Orientation Year Visa",
          "• Startup Opportunities",
          "• Research Positions"
        ];

      case 'France':
        return [
          "Study in France - Detailed Overview",
          "\nKey Benefits:",
          "• Cultural Experience",
          "• Low Tuition Fees",
          "• Rich History",
          "• Central European Location",
          "\nTop Universities:",
          "• Sorbonne University",
          "• École Polytechnique",
          "• Sciences Po Paris",
          "• HEC Paris",
          "\nPopular Fields:",
          "• Fashion & Design",
          "• Culinary Arts",
          "• Engineering",
          "• Business & Management",
          "\nEntry Requirements:",
          "• Language Proficiency (French/English)",
          "• Academic Transcripts",
          "• Campus France Registration",
          "• Motivation Letter",
          "\nVisa Information:",
          "• Student Visa Process",
          "• Proof of Funds",
          "• Housing Certificate",
          "• Insurance Requirements",
          "\nCost Structure:",
          "• Public Unis: €3,000-4,000/year",
          "• Private Schools: €10,000+/year",
          "• Living Costs: €700-1,000/month",
          "\nWork Prospects:",
          "• 20 hours/week allowed",
          "• Post-Study Work Permit",
          "• Internship Opportunities",
          "• Research Positions"
        ];

      // Add cases for other countries...
    }
  };

  const handleGuidePress = (guide) => {
    // When a guide link is clicked, we'll scroll to that section
    const sectionRef = React.createRef();
    
    // Find the relevant section in the content
    const sectionContent = getDetailedContent()?.find(item => 
      item.toLowerCase().includes(guide.toLowerCase())
    );
    
    if (sectionContent) {
      // Scroll to the section
      sectionRef.current?.scrollTo({
        y: sectionContent.offsetTop,
        animated: true,
      });
    }
  };

  const renderGuides = () => (
    <View style={styles.guidesSection}>
      <Text style={styles.sectionTitle}>Study Guides</Text>
      {countryData.guides.map((guide, index) => (
        <TouchableOpacity 
          key={index}
          style={styles.guideLink}
          onPress={() => handleGuidePress(guide)}
        >
          <Text style={styles.guideLinkText}>{guide}</Text>
          <AntDesign name="right" size={16} color="#FFA500" />
        </TouchableOpacity>
      ))}
    </View>
  );

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

      <View style={styles.headerContainer}>
        <Image 
          source={{ uri: countryData.icon }}
          style={styles.countryIcon}
          resizeMode="contain"
        />
        <Text style={styles.countryName}>Study in {countryData.country}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Number of Colleges</Text>
          <Text style={styles.statValue}>{countryData.colleges}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Average Cost</Text>
          <Text style={styles.statValue}>{countryData.avgCost}</Text>
        </View>
      </View>

      {renderGuides()}

      <View style={styles.contentContainer}>
        {getDetailedContent()?.map((item, index) => (
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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  countryIcon: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f8f9fa',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  contentContainer: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
    lineHeight: 24,
  },
  guidesSection: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  guideLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  guideLinkText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default StudyAbroadContent; 