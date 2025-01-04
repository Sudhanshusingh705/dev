import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const admissionLinks = [
  {
    id: 1,
    title: 'B.Ed Admission 2024',
  },
  {
    id: 2,
    title: 'MBA Admission 2024',
  },
  {
    id: 3,
    title: 'MBBS Admission 2024',
  },
  {
    id: 4,
    title: 'BA Admission 2024',
  },
  {
    id: 5,
    title: 'M Tech Admission 2024',
  },
  {
    id: 6,
    title: 'PhD Admission 2024',
  },
  {
    id: 7,
    title: 'LLB Admission 2024',
  },
  {
    id: 8,
    title: 'D.El.Ed Admission 2024',
  },
  {
    id: 9,
    title: 'BSc Admission 2024',
  },
  {
    id: 10,
    title: 'B Pharmacy Admission 2024',
  }
];

const Admission2025 = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handlePress = (id) => {
    setSelectedLink(id);
    // Add navigation or other functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admission 2024 - 2025</Text>
      
      <View style={styles.linksContainer}>
        {admissionLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={[
              styles.linkButton,
              selectedLink === link.id && styles.activeLinkButton
            ]}
            onPress={() => handlePress(link.id)}
          >
            <Text style={[
              styles.linkText,
              selectedLink === link.id && styles.activeLinkText
            ]}>
              {link.title}
            </Text>
            <AntDesign 
              name="right" 
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
    fontSize: 24,
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
    minWidth: '45%',
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

export default Admission2025;
