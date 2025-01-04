import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const StudyGoal = () => {
  const studyGoals = [
    { 
      id: '1', 
      title: 'Engineering', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/engineering.png', 
      description: 'Pursue technical degrees',
      route: 'Engineering'
    },
    { 
      id: '2', 
      title: 'Medical', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/medical.png', 
      description: 'Study healthcare and medicine',
      route: 'Medical'
    },
    { 
      id: '3', 
      title: 'Management', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/management.png', 
      description: 'Learn business administration',
      route: 'Management'
    },
    { 
      id: '4', 
      title: 'Design', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/Design.png', 
      description: 'Explore creative design',
      route: 'Design'
    },
    { 
      id: '5', 
      title: 'Arts', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/art.png', 
      description: 'Develop creative skills',
      route: 'Arts'
    },
    { 
      id: '6', 
      title: 'Science', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/science.png', 
      description: 'Investigate scientific fields',
      route: 'Science'
    },
    { 
      id: '7', 
      title: 'Commerce', 
      icon: 'https://searchmycolleges.com/wp-content/uploads/2024/12/commerce.png', 
      description: 'Explore business & finance',
      route: 'Commerce'
    },
  ];

  const renderStudyGoalCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => console.log(`Navigate to ${item.route}`)}>
      <View style={styles.circularIcon}>
        <Image 
          source={{ uri: item.icon }} 
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Select Your Study Goal</Text>
      <FlatList
        data={studyGoals}
        renderItem={renderStudyGoalCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  card: {
    width: width * 0.4,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    width: 35,
    height: 35,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
    color: '#333',
  },
  cardDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    lineHeight: 16,
  },
});

export default StudyGoal;
