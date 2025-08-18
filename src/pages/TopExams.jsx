import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const examCards = [
  {
    id: 1,
    title: 'NEET 2025-26',
    subtitle: 'National Eligibility cum Entrance Test',
    date: 'May 4, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=44&w=44&mode=stretch' }
  },
  {
    id: 2,
    title: 'JEE Advanced 2025',
    subtitle: 'Joint Entrance Examination (Advanced)',
    date: 'May 25, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/jee%20advance.jpg?h=44&w=44&mode=stretch' }
  },
  {
    id: 3,
    title: 'JEE Main 2025',
    subtitle: 'Joint Entrance Examination (Main)',
    date: 'Session 1: Jan 22-31, 2025\nSession 2: Mar 31-Apr 12, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA%20Logo.jpg?h=44&w=44&mode=stretch' }
  },
  {
    id: 4,
    title: 'CAT 2025',
    subtitle: 'Common Admission Test',
    date: 'November 30, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/IIM-calcutta.png?h=44&w=44&mode=stretch' }
  },
  {
    id: 5,
    title: 'GATE 2026',
    subtitle: 'Graduate Aptitude Test in Engineering',
    date: 'January 31, February 1, 7, 8, 2026',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/GATE%202025%20Logo.png?h=44&w=44&mode=stretch' }
  },
  {
    id: 6,
    title: 'BITSAT 2025',
    subtitle: 'BITS Admission Test',
    date: 'May 19-June 2, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/BITS%20Pilani%20Logo.png?h=44&w=44&mode=stretch' }
  },
  {
    id: 7,
    title: 'MAT 2025',
    subtitle: 'Management Aptitude Test',
    date: 'May, Aug, Sep, Dec 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/MAT%20Exam%20Logo.jpg?h=44&w=44&mode=stretch' }
  },
  {
    id: 8,
    title: 'XAT 2026',
    subtitle: 'Xavier Aptitude Test',
    date: 'January 4, 2026',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/XAT_0.jpg?h=44&w=44&mode=stretch' }
  },
  {
    id: 9,
    title: 'CUET 2025',
    subtitle: 'Common University Entrance Test',
    date: 'May 15-31, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/cuet-logo.png?h=44&w=44&mode=stretch' }
  },
  {
    id: 10,
    title: 'CLAT 2026',
    subtitle: 'Common Law Admission Test',
    date: 'December 7, 2025',
    image: { uri: 'https://image-static.collegedunia.com/public/college_data/images/logos/clat-logo.png?h=44&w=44&mode=stretch' }
  }
];

const TopExams = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigation();

  const handleCardPress = (id, title) => {
    setSelectedCard(id);
    navigation.navigate('ExamContent', {
      examType: title
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Exams</Text>
      
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {examCards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => handleCardPress(card.id, card.title)}
            style={[
              styles.card,
              selectedCard === card.id && styles.selectedCard
            ]}
          >
            <Image source={card.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
              <Text style={styles.examDate}>Exam Date: {card.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    paddingHorizontal: 16,
    textAlign: 'left',
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    width: 200,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: 'hidden',
  },
  selectedCard: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  examDate: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default TopExams;
