import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, SafeAreaView } from 'react-native';

const ContactUs = () => {
  const handleEmailPress = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handlePhonePress = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          We're here to help! If you have any questions, concerns, or feedback, 
          please don't hesitate to reach out to us using the contact information below:
        </Text>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>General Inquiries:</Text>
          <TouchableOpacity onPress={() => handleEmailPress('enquiry@searchmycollege.com')}>
            <Text style={styles.link}>enquiry@searchmycollege.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEmailPress('info@searchmycollege.com')}>
            <Text style={styles.link}>info@searchmycollege.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>For Business Partnerships:</Text>
          <TouchableOpacity onPress={() => handleEmailPress('director@searchmycollege.com')}>
            <Text style={styles.link}>director@searchmycollege.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Phone:</Text>
          <TouchableOpacity onPress={() => handlePhonePress('+910120-4438-111')}>
            <Text style={styles.link}>+91 0120-4438-111</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.paragraph}>
          Our office hours are Monday to Friday, 9:00 AM to 6:00 PM (IST). 
          We strive to respond to all inquiries within 24-48 hours.
        </Text>

        <Text style={styles.paragraph}>
          Thank you for choosing SearchMyCollege. We look forward to assisting you 
          in your educational journey!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const primaryColor = '#007AFF'; // Define your primary color here

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
    color: primaryColor,
    // color: '#333',
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
  contactSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default ContactUs;
