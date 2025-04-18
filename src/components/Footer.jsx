import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Linking,
  Animated,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // You can install this package if you don't have it

const FOOTER_HEIGHT = 180; // Approximate height of footer
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Footer = ({ scrollY = new Animated.Value(0) }) => {
  // Remove scroll-based visibility
  return null; // This will make the footer permanently hidden

  // Original footer code is kept below but will never be reached
  const navigation = useNavigation();
  const footerLinks = [
    { title: 'About Us', onPress: () => navigation.navigate('AboutUs') },
    { title: 'Contact Us', onPress: () => navigation.navigate('ContactUs') },
    { title: 'Privacy Policy', onPress: () => navigation.navigate('PrivacyPolicy') },
    { title: 'Terms and Conditions', onPress: () => navigation.navigate('TermsAndConditions') },
  ];

  const openLink = (url) => {
    Linking.openURL(url); // Opens the URL in a browser
  };

  return (
    <Animated.View style={styles.footerContainer}>
      <View style={styles.linksContainer}>
        {footerLinks.map(({ title, onPress }, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity style={styles.linkItem} onPress={onPress}>
              <Text style={styles.linkText}>{title}</Text>
            </TouchableOpacity>
            {index < footerLinks.length - 1 && <Text style={styles.separator}>•</Text>}
          </React.Fragment>
        ))}
      </View>

      {/* Social Media Links */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => openLink("https://www.facebook.com/profile.php?id=61558773852316")}>
          <Ionicons name="logo-facebook" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => openLink("https://www.instagram.com/searchmycollege")}>
          <Ionicons name="logo-instagram" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => openLink("https://x.com/smc__global")}>
          <Ionicons name="logo-twitter" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => openLink("https://www.linkedin.com/in/search-my-college-500a88281/")}>
          <Ionicons name="logo-linkedin" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Copyright Text */}
      <Text style={styles.copyright}>© 2025 SearchMyCollege. All rights reserved.</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#0033cc',
    paddingVertical: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  linkItem: {
    marginHorizontal: 8,
    marginVertical: 5,
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
  },
  separator: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 14,
    marginHorizontal: 4,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  iconWrapper: {
    marginHorizontal: 12,
    padding: 8,
  },
  copyright: {
    marginTop: 20,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Footer;
