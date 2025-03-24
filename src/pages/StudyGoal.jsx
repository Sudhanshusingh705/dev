import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const PADDING_HORIZONTAL = 15;
// Calculate card width based on screen size with consistent margins
const CARD_MARGIN = 6; // Half of the previous 12
const CARDS_PER_ROW = width < 768 ? 2.5 : 4; // Show 2.5 cards on mobile, 4 on tablet
const CARD_WIDTH = (width - (PADDING_HORIZONTAL * 2) - (CARD_MARGIN * 2 * CARDS_PER_ROW)) / CARDS_PER_ROW;

const StudyGoal = () => {
  const navigation = useNavigation();
  
  // Define study goals with the filter parameter for BrowseCategories
  const studyGoals = [
    { 
      id: '1', 
      title: 'Engineering', 
      icon: 'https://cdn-icons-png.flaticon.com/128/825/825792.png', 
      description: 'Pursue technical degrees',
      filter: 'engineering'
    },
    { 
      id: '2', 
      title: 'Medical', 
      icon: 'https://cdn-icons-png.flaticon.com/128/4807/4807695.png',
      description: 'Study healthcare and medicine',
      filter: 'medical'
    },
    { 
      id: '3', 
      title: 'Management', 
      icon: 'https://cdn-icons-png.flaticon.com/128/10691/10691841.png', 
      description: 'Learn business administration',
      filter: 'management'
    },
    { 
      id: '4', 
      title: 'Design', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2779/2779775.png', 
      description: 'Explore creative design',
      filter: 'design'
    },
    { 
      id: '5', 
      title: 'Arts', 
      icon: 'https://cdn-icons-png.flaticon.com/128/1048/1048944.png', 
      description: 'Develop creative skills',
      filter: 'arts'
    },
    { 
      id: '6', 
      title: 'Science', 
      icon: 'https://cdn-icons-png.flaticon.com/128/8597/8597602.png', 
      description: 'Investigate scientific fields',
      filter: 'science'
    },
    { 
      id: '7', 
      title: 'Commerce', 
      icon: 'https://cdn-icons-png.flaticon.com/128/1763/1763438.png', 
      description: 'Explore business & finance',
      filter: 'commerce'
    },
  ];

  // Handle navigation to BrowseCategories with appropriate filter
  const handleCardPress = (item) => {
    try {
      console.log(`Navigating to BrowseCategories with filter: ${item.filter}`);
      
      // Navigate to BrowseCategories in UserDrawer with the selected filter
      navigation.navigate("UserDrawer", {
        screen: "BrowseCategories",
        params: { filter: item.filter }
      });
    } catch (error) {
      console.error(`Navigation error for ${item.title}:`, error);
      Alert.alert(
        'Navigation Error',
        'There was a problem navigating to this category. Please try again.'
      );
      // Fallback navigation
      navigation.navigate("UserDrawer", { screen: "BrowseCategories" });
    }
  };

  const renderStudyGoalCard = ({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { width: CARD_WIDTH }]} 
      onPress={() => handleCardPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.circularIcon}>
        <Image 
          source={{ uri: item.icon }} 
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.browseIndicator}>
        <Text style={styles.browseText}>Browse</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Select Your Study Goal</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={studyGoals}
          renderItem={renderStudyGoalCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + (CARD_MARGIN * 2)}
          scrollEnabled={true}
          bounces={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 230,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: PADDING_HORIZONTAL,
    color: '#333',
  },
  listWrapper: {
    height: 170,
    overflow: 'hidden',
  },
  listContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: 5,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: CARD_MARGIN,
    height: 150,
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
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  circularIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#f0f0f0',
  },
  icon: {
    width: 25,
    height: 25,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
    color: '#333',
  },
  cardDescription: {
    fontSize: 11,
    textAlign: 'center',
    color: '#666',
    lineHeight: 14,
  },
  browseIndicator: {
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 6,
  },
  browseText: {
    fontSize: 9,
    color: '#007bff',
    fontWeight: '500',
  },
});

export default StudyGoal;
