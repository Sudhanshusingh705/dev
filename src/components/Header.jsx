import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.header}>
      {/* Left Side Logo */}
      <Image
        source={{ 
          uri: 'https://searchmycolleges.com/wp-content/uploads/2024/05/search-my-college.jpg' 
        }}
        style={styles.logo}
        // Add error handling for image loading
        onError={(error) => console.log('Image loading error:', error)}
      />

      {/* Right Side Hamburger Menu */}
      <TouchableOpacity 
        onPress={handleMenuPress}
        style={styles.menuButton}
        activeOpacity={0.7}
      >
        <Icon name="menu" size={28} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 1000,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  menuButton: {
    padding: 5,
    borderRadius: 5,
  },
});

export default Header;
