import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const courseLinks = [
  {
    id: 1,
    title: 'BE/B.Tech',
  },
  {
    id: 2,
    title: 'BA',
  },
  {
    id: 3,
    title: 'B.Sc',
  },
  {
    id: 4,
    title: 'MBA/PGDM',
  },
  {
    id: 5,
    title: 'M.Sc',
  },
  {
    id: 6,
    title: 'ME/M.Tech',
  },
  {
    id: 7,
    title: 'MA',
  },
  {
    id: 8,
    title: 'Polytechnic',
  },
  {
    id: 9,
    title: 'BE/B.Tech Lateral',
  },
  {
    id: 10,
    title: 'M.Phil/Ph.D in Science',
  },
  {
    id: 11,
    title: 'B.Com',
  },
  {
    id: 12,
    title: 'MD/MS/MDS',
  },
  {
    id: 13,
    title: 'M.Phil/Ph.D in Arts',
  },
  {
    id: 14,
    title: 'BBA/BMS',
  },
  {
    id: 15,
    title: 'B.Ed',
  },
  {
    id: 16,
    title: 'MBBS',
  }
];

const TopCourses = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handlePress = (id) => {
    setSelectedLink(id);
    // Add navigation or other functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Courses</Text>
      
      <View style={styles.linksContainer}>
        {courseLinks.map((link) => (
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

export default TopCourses;
