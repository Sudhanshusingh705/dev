import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StudyAbroadGuide = ({ route, navigation }) => {
  const { title, content, country } = route.params;

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

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Study in {country}</Text>

      <View style={styles.contentContainer}>
        {content.map((item, index) => (
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 16,
    paddingBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
    paddingBottom: 16,
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
});

export default StudyAbroadGuide; 