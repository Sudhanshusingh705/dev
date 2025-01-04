import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const notificationData = [
  {
    id: 1,
    title: 'IICD Entrance Exam 2025 Application Form Released',
    type: 'Exam',
    date: 'Oct 08, 2024',
    description: 'IICD 2025 application form has been released on the official website on 7 October 2024. Last date to fill out the application form is 25 January 2025...',
    image: 'https://image-static.collegedunia.com/public/college_data/images/logos/IICD.png'
  },
  {
    id: 2,
    title: 'JEE Main 2025 Registration Started',
    type: 'Exam',
    date: 'Oct 07, 2024',
    description: 'NTA has started the registration process for JEE Main 2025. Candidates can apply online through the official website...',
    image: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=44&w=44&mode=stretch'
  },
  {
    id: 3,
    title: 'NEET UG 2025 Information Brochure Released',
    type: 'Medical',
    date: 'Oct 06, 2024',
    description: 'The National Testing Agency (NTA) has released the information brochure for NEET UG 2025 examination...',
    image: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=44&w=44&mode=stretch'
  }
];

const LatestNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Notification</Text>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {notificationData.map((notification) => (
          <TouchableOpacity 
            key={notification.id}
            style={styles.notificationCard}
            onPress={() => {/* Handle notification click */}}
          >
            <Image 
              source={{ uri: notification.image }}
              style={styles.notificationImage}
              resizeMode="contain"
            />
            <View style={styles.contentContainer}>
              <Text style={styles.notificationTitle} numberOfLines={2}>
                {notification.title}
              </Text>
              <View style={styles.metaContainer}>
                <Text style={styles.type}>{notification.type}</Text>
                <View style={styles.dateContainer}>
                  <AntDesign name="clockcircleo" size={12} color="#666" />
                  <Text style={styles.date}>{notification.date}</Text>
                </View>
              </View>
              <Text style={styles.description} numberOfLines={2}>
                {notification.description}
              </Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <AntDesign name="right" size={12} color="#666" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 0,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    width: 300,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationImage: {
    width: 48,
    height: 48,
    marginRight: 16,
    borderRadius: 4,
  },
  contentContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  type: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
});

export default LatestNotification;
