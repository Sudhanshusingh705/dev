import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          At <Text style={styles.bold}>SearchMyCollege</Text>, we are committed to protecting your privacy and ensuring 
          the security of your personal information. This Privacy Policy outlines how we 
          collect, use, and safeguard your data when you use our mobile application.
        </Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.paragraph}>
          We may collect personal information such as your <Text style={styles.bold}>name, email address, phone number</Text>, 
          and educational background when you register or use our services. We also collect 
          non-personal information about your device and how you use our app.
        </Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          We use your information to:
        </Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• Provide and improve our services</Text>
          <Text style={styles.bulletPoint}>• Personalize your experience</Text>
          <Text style={styles.bulletPoint}>• Communicate with you</Text>
          <Text style={styles.bulletPoint}>• Send you relevant updates and offers</Text>
        </View>
        <Text style={styles.paragraph}>
          We do <Text style={styles.bold}>not</Text> sell your personal information to third parties.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Security</Text>
        <Text style={styles.paragraph}>
          We implement <Text style={styles.bold}>industry-standard security measures</Text> to protect your data from 
          unauthorized access, disclosure, alteration, or destruction. However, no method of 
          transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </Text>

        <Text style={styles.sectionTitle}>4. Your Rights</Text>
        <Text style={styles.paragraph}>
          You have the right to <Text style={styles.bold}>access, correct, or delete</Text> your personal information. You can 
          also opt-out of marketing communications at any time. To exercise these rights, 
          please contact us using the information provided in our Contact Us section.
        </Text>

        <Text style={styles.sectionTitle}>5. Changes to This Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. We will notify you of any 
          changes by posting the new Privacy Policy on this page and updating the <Text style={styles.bold}>"Last 
          Updated"</Text> date.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Last Updated:</Text> January 6, 2025
        </Text>

        <Text style={styles.paragraph}>
          By using <Text style={styles.bold}>SearchMyCollege</Text>, you agree to the terms outlined in this Privacy Policy. 
          If you have any questions or concerns, please contact us at <Text style={styles.link}>Info@searchmycollege.com</Text>.
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

export default PrivacyPolicy;
