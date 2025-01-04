import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Linking, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Footer = () => {
  const openLink = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log("Can't handle url: " + url);
        }
      })
      .catch((err) => console.error("Failed to open URL:", err));
  };

  const socialLinks = [
    { icon: 'logo-facebook', url: 'https://www.facebook.com/profile.php?id=61558773852316' },
    { icon: 'logo-instagram', url: 'https://www.instagram.com/searchmycollege' },
    { icon: 'logo-twitter', url: 'https://x.com/smc__global' },
    { icon: 'logo-linkedin', url: 'https://www.linkedin.com/in/search-my-college-500a88281/' }
  ];

  const footerLinks = [
    { title: 'About Us', onPress: () => {} },
    { title: 'Contact Us', onPress: () => {} },
    { title: 'Privacy Policy', onPress: () => {} },
    { title: 'Terms of Service', onPress: () => {} }
  ];

  return (
    <View style={styles.footerContainer}>
      {/* Links Section */}
      <View style={styles.linksContainer}>
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity 
              style={styles.linkItem}
              onPress={link.onPress}
            >
              <Text style={styles.linkText}>{link.title}</Text>
            </TouchableOpacity>
            {index < footerLinks.length - 1 && (
              <Text style={styles.separator}>•</Text>
            )}
          </React.Fragment>
        ))}
      </View>

      {/* Social Media Section */}
      <View style={styles.socialContainer}>
        {socialLinks.map((social, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.iconWrapper} 
            onPress={() => openLink(social.url)}
            activeOpacity={0.7}
          >
            <Icon name={social.icon} size={22} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Copyright Section */}
      <Text style={styles.copyrightText}>
        © {new Date().getFullYear()} Search My College. All Rights Reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    backgroundColor: '#0033cc',
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  linkItem: {
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  separator: {
    color: '#fff',
    opacity: 0.6,
    paddingHorizontal: 4,
    fontSize: 12,
  },
  linkText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    flexWrap: 'nowrap',
  },
  iconWrapper: {
    marginHorizontal: 8,
    padding: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  copyrightText: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.9,
  },
});

export default Footer;
