import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const scale = width / 375;

const responsive = (size) => Math.round(size * scale);

const fontSizes = {
  xs: responsive(10),
  sm: responsive(12),
  md: responsive(14),
  lg: responsive(16),
};

const spacing = {
  xs: responsive(4),
  sm: responsive(8),
  md: responsive(12),
  lg: responsive(16),
  xl: responsive(20),
};

const CollegeCard = memo(({ college }) => {
  if (!college) return null;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CollegeDetails', { college });
  };

  const safeCollege = {
    name: college?.name || 'College Name',
    location: college?.location || 'Location',
    logo: college?.logo,
    fees: college?.fees || 'N/A',
    feesPeriod: college?.feesPeriod || '',
    rating: college?.rating || 'N/A',
    reviewCount: college?.reviewCount || 0,
    nationalRank: college?.nationalRank || 'N/A',
    placementRate: college?.placementRate || 'N/A',
    avgPackage: college?.avgPackage || 'N/A',
    courses: Array.isArray(college?.courses) ? college.courses : []
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.cardContent}>
        <View style={styles.header}>
          <View style={[styles.logo, styles.placeholderLogo]}>
            <Text style={styles.placeholderText}>
              {safeCollege.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.collegeName} numberOfLines={2}>
              {safeCollege.name}
            </Text>
            <Text style={styles.location}>{safeCollege.location}</Text>
          </View>
        </View>
        
        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Fees:</Text>
            <Text style={styles.value}>{safeCollege.fees} {safeCollege.feesPeriod}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Rating:</Text>
            <Text style={styles.value}>{safeCollege.rating} ⭐ ({safeCollege.reviewCount} reviews)</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>National Rank:</Text>
            <Text style={styles.value}>#{safeCollege.nationalRank}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Placements:</Text>
            <Text style={styles.value}>{safeCollege.placementRate}% placed</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Avg Package:</Text>
            <Text style={styles.value}>{safeCollege.avgPackage}</Text>
          </View>
        </View>

        {safeCollege.courses && safeCollege.courses.length > 0 && (
          <View style={styles.tagsContainer}>
            {safeCollege.courses.slice(0, 3).map((course, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{course}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: responsive(12),
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cardContent: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  logo: {
    width: responsive(50),
    height: responsive(50),
    borderRadius: responsive(8),
    marginRight: spacing.md,
  },
  headerText: {
    flex: 1,
  },
  collegeName: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: spacing.xs,
    lineHeight: fontSizes.md * 1.2,
  },
  location: {
    fontSize: fontSizes.sm,
    color: '#666',
    lineHeight: fontSizes.sm * 1.3,
  },
  details: {
    marginBottom: spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: fontSizes.sm,
    color: '#666',
    fontWeight: '500',
  },
  value: {
    fontSize: fontSizes.sm,
    color: '#1a1a1a',
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
  },
  tag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: responsive(16),
    marginRight: spacing.sm,
    marginBottom: spacing.xs,
  },
  tagText: {
    fontSize: fontSizes.xs,
    color: '#1976d2',
    fontWeight: '500',
  },
  placeholderLogo: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: fontSizes.sm,
  },
});

export default CollegeCard;