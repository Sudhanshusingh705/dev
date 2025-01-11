import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const TermsAndConditions = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          Welcome to <Text style={styles.bold}>SearchMyCollege</Text>. By using our mobile application, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before using our services.
        </Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By accessing or using SearchMyCollege, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our application.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of the Application</Text>
        <Text style={styles.paragraph}>
          You agree to use SearchMyCollege only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the application.
        </Text>

        <Text style={styles.sectionTitle}>3. User Accounts</Text>
        <Text style={styles.paragraph}>
          To access certain features of our application, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </Text>

        <Text style={styles.sectionTitle}>4. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          The content, organization, graphics, design, and other matters related to SearchMyCollege are protected under applicable copyrights and other proprietary laws. Copying, redistributing, or selling any of our content is strictly prohibited without our express written consent.
        </Text>

        <Text style={styles.sectionTitle}>5. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          SearchMyCollege and its affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the application.
        </Text>

        <Text style={styles.sectionTitle}>6. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          We reserve the right to modify these Terms and Conditions at any time. We will notify users of any changes by posting the new Terms and Conditions on this page and updating the "Last Updated" date.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Last Updated:</Text> January 6, 2025
        </Text>

        <Text style={styles.paragraph}>
          By continuing to use SearchMyCollege after changes to these terms are posted, you acknowledge and agree to be bound by the modified terms.
        </Text>

        <Text style={styles.paragraph}>
          If you have any questions or concerns about these Terms and Conditions, please contact us at <Text style={styles.link}>Info@searchmycollege.com</Text>.
        </Text>
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
    paddingTop: 40, // Space at the top to avoid title collapsing
    paddingBottom: 15, // Space below the title
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Optional subtle border for header
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF', // Primary color for title
    textAlign: 'center', // Center the title
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  bulletPoints: {
    marginLeft: 20,
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default TermsAndConditions;
