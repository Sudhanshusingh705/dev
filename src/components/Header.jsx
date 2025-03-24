import React, { useEffect, useState } from 'react';
import { 
  View, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Platform, 
  StatusBar, 
  Animated 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
// Import local logo
import logo from '../../assets/logo-1.png';

const HEADER_MAX_HEIGHT = Platform.OS === 'android' ? 
  StatusBar.currentHeight + 45 : 45;
const HEADER_MIN_HEIGHT = 0;

const Header = ({ scrollY = new Animated.Value(0) }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Animation value for header translation
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [0, -HEADER_MAX_HEIGHT],
    extrapolate: 'clamp'
  });

  // Animation value for header opacity
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT / 2, HEADER_MAX_HEIGHT],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp'
  });

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      // Show header when scrolling up, hide when scrolling down
      if (value < lastScrollY || value <= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(value);
    });

    return () => {
      scrollY.removeAllListeners();
    };
  }, [lastScrollY]);

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Animated.View 
      style={[
        styles.header,
        {
          transform: [{ translateY: headerTranslateY }],
          opacity: headerOpacity,
          height: isVisible ? HEADER_MAX_HEIGHT : HEADER_MIN_HEIGHT
        }
      ]}
    >
      {/* Left Side Hamburger Menu */}
      <TouchableOpacity 
        onPress={handleMenuPress}
        style={styles.menuButton}
        activeOpacity={0.7}
      >
        <Icon name="menu" size={28} color="#333" />
      </TouchableOpacity>

      {/* Right Side Logo */}
      <Image
        source={logo}
        style={styles.logo}
        onError={(error) => console.log('Image loading error:', error)}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 3 : 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 1000,
  },
  logo: {
    width: 200,
    height: 45,
    resizeMode: 'contain',
  },
  menuButton: {
    padding: 5,
    borderRadius: 5,
  },
});

export default Header;
