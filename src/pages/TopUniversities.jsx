import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const PADDING_HORIZONTAL = 16;
const CARD_WIDTH = width * 0.8;
const CARD_MARGIN = 8;

const universities = [
    {
      id: 1,
      name: 'IIT Madras - Indian Institute of Technology - [IITM]',
      location: 'Chennai, Tamil Nadu',
      accreditation: 'AICTE',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=240&w=1000&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'BE/B.Tech',
      rating: '4.3/5',
      reviews: '384 reviews',
      fees: '2.42 Lacs',
      feesType: 'First Year Fees',
      ranking: 'Ranked 227 out of 1400 QS'
    },
    {
      id: 2,
      name: 'IIMA - Indian Institute of Management',
      location: 'Ahmedabad, Gujarat',
      accreditation: 'UGC',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=240&w=1000&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'MBA/PGDM',
      rating: '4.5/5',
      reviews: '52 reviews',
      fees: '25.00 Lacs',
      feesType: 'Total Fees',
      ranking: 'Ranked 421 out of 2000 CWUR'
    },
    {
      id: 3,
      name: 'Chandigarh University - [CU]',
      location: 'Chandigarh, Chandigarh',
      accreditation: 'NCTE, AICTE',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1614949268bg.png?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=71.17&w=71.17&mode=stretch',
      cdRating: '9.5/10',
      course: 'BE/B.Tech',
      rating: '4.4/5',
      reviews: '3481 reviews',
      fees: '2.20 Lacs',
      feesType: 'First Year Fees',
      ranking: 'Ranked 691 out of 1400 QS'
    },
    {
      id: 4,
      name: 'SP Jain [SPJIMR]',
      location: 'Mumbai, Maharashtra',
      accreditation: 'AICTE, NBA',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/18617_SPJAIN_New.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1727164925Untitled.png?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'MBA/PGDM',
      rating: '4.2/5',
      reviews: '45 reviews',
      fees: '22.50 Lacs',
      feesType: 'Total Fees',
      ranking: 'Ranked 16 out of 50 Financial Express'
    },
    {
      id: 5,
      name: 'IIT Kharagpur - Indian Institute of Technology - [IITKGP]',
      location: 'Kharagpur, West Bengal',
      accreditation: 'AICTE, UGC',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1488973535e1.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'ME/M.Tech',
      rating: '4.3/5',
      reviews: '736 reviews',
      fees: '27.45 K',
      feesType: 'First Year Fees',
      ranking: 'Ranked 222 out of 1400 QS'
    },
    {
      id: 6,
      name: 'IIML - Indian Institute of Management',
      location: 'Lucknow, Uttar Pradesh',
      accreditation: 'UGC, AACSB',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25946_IIML_New.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408968357iiml.jpg?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'MBA/PGDM',
      rating: '4.2/5',
      reviews: '87 reviews',
      fees: '14.30 Lacs',
      feesType: 'Total Fees',
      ranking: 'Ranked 4 out of 50 Financial Express'
    },
    {
      id: 7,
      name: 'IIT Delhi - Indian Institute of Technology - [IITD]',
      location: 'New Delhi, Delhi NCR',
      accreditation: 'AICTE',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25455_IITDelhi_New.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'BE/B.Tech',
      rating: '4.4/5',
      reviews: '425 reviews',
      fees: '2.28 Lacs',
      feesType: 'First Year Fees',
      ranking: 'Ranked 185 out of 1400 QS'
    },
    {
      id: 8,
      name: 'BITS Pilani - Birla Institute of Technology and Science',
      location: 'Pilani, Rajasthan',
      accreditation: 'UGC',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25800_BITS_App.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=71.17&w=71.17&mode=stretch',
      cdRating: '9.5/10',
      course: 'BE/B.Tech',
      rating: '4.3/5',
      reviews: '892 reviews',
      fees: '2.15 Lacs',
      feesType: 'First Year Fees',
      ranking: 'Ranked 801 out of 1400 QS'
    },
    {
      id: 9,
      name: 'IIM Bangalore - Indian Institute of Management',
      location: 'Bangalore, Karnataka',
      accreditation: 'UGC',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'MBA/PGDM',
      rating: '4.6/5',
      reviews: '156 reviews',
      fees: '24.50 Lacs',
      feesType: 'Total Fees',
      ranking: 'Ranked 3 out of 50 Financial Express'
    },
    {
      id: 10,
      name: 'VIT Vellore - Vellore Institute of Technology',
      location: 'Vellore, Tamil Nadu',
      accreditation: 'AICTE, NAAC',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/159775540051626412101569287104797871616889366846636032n.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/159775539949755996101568568649397877221633486954692608n.png?h=71.17&w=71.17&mode=stretch',
      cdRating: '9/10',
      course: 'BE/B.Tech',
      rating: '4.2/5',
      reviews: '2156 reviews',
      fees: '2.85 Lacs',
      feesType: 'First Year Fees',
      ranking: 'Ranked 1001 out of 1400 QS'
    },
    {
      id: 11,
      name: 'ISB Hyderabad - Indian School of Business',
      location: 'Hyderabad, Telangana',
      accreditation: 'AACSB, EQUIS',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502357635cvr.png?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1732253759isblogo.png?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'MBA/PGDM',
      rating: '4.7/5',
      reviews: '234 reviews',
      fees: '35.00 Lacs',
      feesType: 'Total Fees',
      ranking: 'Ranked 1 out of 50 Financial Express'
    },
    {
      id: 12,
      name: 'IIT Bombay - Indian Institute of Technology',
      location: 'Mumbai, Maharashtra',
      accreditation: 'AICTE',
      background: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25703_IIT_New.jpg?h=260&w=360&mode=crop',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=71.17&w=71.17&mode=stretch',
      cdRating: '10/10',
      course: 'BE/B.Tech',
      rating: '4.5/5',
      reviews: '567 reviews',
      fees: '2.30 Lacs',
      feesType: 'First Year Fees',
      ranking: 'Ranked 177 out of 1400 QS'
    }
];

const TopUniversities = () => {
  const navigation = useNavigation();

  // Split universities into rows of 3
  const firstRow = universities.slice(0, 6);
  const secondRow = universities.slice(6, 12);

  const renderCard = (university) => (
    <TouchableOpacity 
      key={university.id} 
      style={styles.card}
      onPress={() => navigation.navigate('UniversityDetailsPage', { university })}
    >
      <Image 
        source={{ uri: university.background }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <View style={styles.gradientOverlay} />
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>{university.cdRating}</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: university.logo }} 
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.name}>{university.name}</Text>
          <Text style={styles.location}>{university.location}</Text>
          <Text style={styles.accreditation}>{university.accreditation}</Text>
          
          <View style={styles.detailsRow}>
            <View style={styles.courseContainer}>
              <Text style={styles.courseLabel}>{university.course}</Text>
              <View style={styles.ratingContainer}>
                <AntDesign name="star" size={12} color="#FFD700" />
                <Text style={styles.rating}>{university.rating}</Text>
                <Text style={styles.reviews}>({university.reviews})</Text>
              </View>
            </View>
            
            <View style={styles.feesContainer}>
              <Text style={styles.fees}>₹ {university.fees}</Text>
              <Text style={styles.feesType}>{university.feesType}</Text>
            </View>
          </View>
          
          <Text style={styles.ranking}>{university.ranking}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Top Universities/Colleges For Diploma In Engineering
      </Text>
      
      {/* First Row */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {firstRow.map(renderCard)}
      </ScrollView>

      {/* Second Row */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {secondRow.map(renderCard)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: PADDING_HORIZONTAL,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    width: '100%',
  },
  scrollContent: {
    paddingRight: PADDING_HORIZONTAL,
    marginBottom: 15,
  },
  card: {
    width: CARD_WIDTH - (PADDING_HORIZONTAL * 2),
    height: 140,
    marginLeft: CARD_MARGIN,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
  },
  ratingBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  ratingText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  logoContainer: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  location: {
    fontSize: 11,
    color: '#fff',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  accreditation: {
    fontSize: 10,
    color: '#fff',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  courseContainer: {
    flex: 1,
  },
  courseLabel: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 10,
    color: '#fff',
    marginLeft: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  reviews: {
    fontSize: 10,
    color: '#fff',
    marginLeft: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  feesContainer: {
    alignItems: 'flex-end',
  },
  fees: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  feesType: {
    fontSize: 9,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  ranking: {
    fontSize: 10,
    color: '#fff',
    marginTop: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});

export default TopUniversities;
