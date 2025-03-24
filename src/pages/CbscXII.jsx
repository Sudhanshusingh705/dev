import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const examLinks = [
  {
    id: 1,
    title: 'CBSE Class 12',
    icon: 'right'
  },
  {
    id: 2,
    title: 'CBSE Class 12th Results',
    icon: 'right'
  },
  {
    id: 3,
    title: 'CBSE Class 12th Previous Year Papers',
    icon: 'right'
  },
  {
    id: 4,
    title: 'CBSE Class 12th Syllabus',
    icon: 'right'
  },
  {
    id: 5,
    title: 'CBSE Class 12th Exam Dates',
    icon: 'right'
  },
  {
    id: 6,
    title: 'CBSE Class 12th Admit Card',
    icon: 'right'
  },
  {
    id: 7,
    title: 'NCERT Solutions Class 12th Physics',
    icon: 'right'
  },
  {
    id: 8,
    title: 'NCERT Solutions Class 12th Chemistry',
    icon: 'right'
  },
  {
    id: 9,
    title: 'NCERT Solutions Class 12th Biology',
    icon: 'right'
  },
  {
    id: 10,
    title: 'NCERT Solutions Class 12th Maths',
    icon: 'right'
  },
  {
    id: 11,
    title: 'CBSE Class 12th Notes',
    icon: 'right'
  },
  {
    id: 12,
    title: 'CBSE Class 12th Physics Notes',
    icon: 'right'
  },
  {
    id: 13,
    title: 'CBSE Class 12th Chemistry Notes',
    icon: 'right'
  },
  {
    id: 14,
    title: 'CBSE Class 12th Biology Notes',
    icon: 'right'
  }
];

const CbscXII = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const navigation = useNavigation();

  const handlePress = (id, title) => {
    setSelectedLink(id);
    navigation.navigate('CbseXIIContent', {
      contentType: title
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CBSE Class XII Board Exam</Text>
      
      <View style={styles.linksContainer}>
        {examLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={[
              styles.linkButton,
              selectedLink === link.id && styles.activeLinkButton
            ]}
            onPress={() => handlePress(link.id, link.title)}
          >
            <Text style={[
              styles.linkText,
              selectedLink === link.id && styles.activeLinkText
            ]}>
              {link.title}
            </Text>
            <AntDesign 
              name={link.icon} 
              size={16} 
              color={selectedLink === link.id ? '#fff' : '#666'} 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: '45%', // Adjust based on your layout needs
    maxWidth: '100%',
  },
  activeLinkButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  linkText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  activeLinkText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default CbscXII;
