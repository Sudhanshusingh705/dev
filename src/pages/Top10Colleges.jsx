import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const PADDING_HORIZONTAL = 16;

const Top10Colleges = () => {
  const [activeTab, setActiveTab] = useState("BE/B.Tech");
  const navigation = useNavigation();

  const tabs = ["BE/B.Tech", "MBA/PGDM", "MBBS", "ME/M.Tech", "B.Sc", "BA", "B.Com", "BCA", "BBA/BMS", "B.Sc (Nursing)"];

  const data = {
    'BE/B.Tech': [
      {
        rank: '#1',
        college: {
          name: 'IIT Bombay - Indian Institute of Technology - [IITB]',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
          rating: '5/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'JEE Advanced 2024',
          score: '68'
        },
        applicationDeadline: '14 Mar - 31 Mar 2024',
        fees: {
          amount: '₹2,30,700',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIT Kharagpur - Indian Institute of Technology - [IITKGP]',
          location: 'Kharagpur, West Bengal',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#6',
          detail: 'out of 200 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '90'
        },
        applicationDeadline: '10 June - 18 Jun 2024',
        fees: {
          amount: '₹2,62,360',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'IIT Delhi - Indian Institute of Technology - [IITD]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 27 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '98'
        },
        applicationDeadline: '14 Mar - 31 Mar 2024',
        fees: {
          amount: '₹2,28,650',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'IIT Madras - Indian Institute of Technology - [IITM]',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 200 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '85'
        },
        applicationDeadline: '10 June - 18 Jun 2024',
        fees: {
          amount: '₹2,42,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'IIMA - Indian Institute of Management',
          location: 'Ahmedabad, Gujarat',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 50 in India 2019'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '99'
        },
        applicationDeadline: '03 Dec 2024',
        fees: {
          amount: '₹34,50,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'IIT Kanpur - Indian Institute of Technology - [IITK]',
          location: 'Kanpur, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#4',
          detail: 'out of 27 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '85'
        },
        applicationDeadline: '10 June - 18 Jun 2024',
        fees: {
          amount: '₹2,29,970',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'IIT Roorkee - Indian Institute of Technology - [IITR]',
          location: 'Roorkee, Uttarakhand',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#5',
          detail: 'out of 27 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '95'
        },
        applicationDeadline: '10 June - 18 Jun 2024',
        fees: {
          amount: '₹2,30,100',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'BITS Pilani (Pilani Campus)',
          location: 'Pilani, Rajasthan',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 173 in India 2024'
        },
        applicationDeadline: '21 Jan - 18 Apr 2025',
        fees: {
          amount: '₹6,03,775',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'IIT BHU - Indian Institute of Technology',
          location: 'Varanasi, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1409982980bhu%20logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#8',
          detail: 'out of 160 in India 2024'
        },
        cutoff: {
          exam: 'JEE Advanced 2024',
          score: '2154'
        },
        applicationDeadline: '10 June - 18 Jun 2024',
        fees: {
          amount: '₹2,27,815',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'IIT Hyderabad - Indian Institute of Technology - [IITH]',
          location: 'Hyderabad, Telangana',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#8',
          detail: 'out of 300 in India 2024'
        },
        cutoff: {
          exam: 'JEE Advanced 2024',
          score: '982'
        },
        applicationDeadline: '10 June - 18 Jun 2024',
        fees: {
          amount: '₹2,41,888',
          type: '1st Year Fees'
        }
      }
    ],
    'MBA/PGDM': [
      {
        rank: '#1',
        college: {
          name: 'IIMA - Indian Institute of Management',
          location: 'Ahmedabad, Gujarat',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '99'
        },
        applicationDeadline: '1 Aug - 15 Jan 2025',
        fees: {
          amount: '₹26,50,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIM Bangalore - Indian Institute of Management',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '99'
        },
        applicationDeadline: '1 Aug - 13 Sept 2024',
        fees: {
          amount: '₹26,00,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'IIMC - Indian Institute of Management',
          location: 'Kolkata, West Bengal',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1488950580d2.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '99'
        },
        applicationDeadline: '01 Feb 25',
        fees: {
          amount: '₹27,00,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'XLRI',
          location: 'Jamshedpur, Jharkhand',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14812651193.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 200 in India 2025'
        },
        cutoff: {
          exam: 'XAT 2024',
          score: '92'
        },
        applicationDeadline: '18 Jan 25',
        fees: {
          amount: '₹30,60,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'FMS Delhi Faculty of Management Studies',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1389689790logo.gif?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#12',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '98'
        },
        applicationDeadline: '22 Nov 24',
        fees: {
          amount: '₹1,16,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'SP Jain [SPJIMR]',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1727164925Untitled.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 110 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '85'
        },
        applicationDeadline: '22 Nov 24',
        fees: {
          amount: '₹22,50,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'IIML - Indian Institute of Management',
          location: 'Lucknow, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408968357iiml.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#4',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '85'
        },
        applicationDeadline: '1 Aug - 20 Nov 2024',
        fees: {
          amount: '₹10,95,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'IIMI - Indian Institute of Management',
          location: 'Indore, Madhya Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15040011233170612211130512732232635840n.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#5',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '90'
        },
        applicationDeadline: '1 Aug - 13 Sept 2024',
        fees: {
          amount: '₹10,50,679',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'IIMK - Indian Institute of Management',
          location: 'Kozhikode, Kerala',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408967753iim.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 125 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '97'
        },
        applicationDeadline: '1 June - 06 Nov 2024',
        fees: {
          amount: '₹20,50,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'JBIMS Mumbai',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1593019342Logo.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#10',
          detail: 'out of 25 in India 2025'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '96'
        },
        applicationDeadline: '25 Dec - 31 Jan 2025',
        fees: {
          amount: '₹3,50,000',
          type: '1st Year Fees'
        }
      }
    ],
    'MBBS': [
      {
        rank: '#1',
        college: {
          name: 'All India Institute of Medical Sciences - [AIIMS]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 113 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '47'
        },
        applicationDeadline: '14 Aug - 20 Aug 2024',
        fees: {
          amount: '₹1,628',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Christian Medical College - [CMC]',
          location: 'Vellore, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1458024878logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 113 in India 2024'
        },
        cutoff: {
          exam: 'Tamil-Nadu-NEET-Counselling 2024',
          score: '758'
        },
        applicationDeadline: '21 Aug - 27 Aug 2024',
        fees: {
          amount: '₹56,330',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'Banaras Hindu University - [BHU]',
          location: 'Varanasi, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#7',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '1098'
        },
        applicationDeadline: '9 Feb - 16 Mar 2024',
        fees: {
          amount: '₹13,410',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'Kasturba Medical College - [KMC]',
          location: 'Manipal, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1681106631Screenshot20230410111143.jpg?h=30&w=30&mode=stretch',
          rating: '4.6/5'
        },
        ranking: {
          position: '#7',
          detail: 'out of 44 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '37269'
        },
        applicationDeadline: '14 Aug - 20 Aug 2024',
        fees: {
          amount: '₹70,88,500',
          type: 'Total Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'Jawaharlal Institute of Post Graduate Medical Education and Research - [JIPMER]',
          location: 'Pondicherry, Puducherry',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1568873405jipmerlogo.png?h=30&w=30&mode=stretch',
          rating: '4.6/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 55 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '87672'
        },
        applicationDeadline: '14 Aug - 20 Aug 2024',
        fees: {
          amount: '₹14,920',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'King George\'s Medical University - [KGMU]',
          location: 'Lucknow, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1498220102logo.png?h=30&w=30&mode=stretch',
          rating: '4.6/5'
        },
        ranking: {
          position: '#4',
          detail: 'out of 13 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '2059'
        },
        applicationDeadline: '9 Sept - 13 Sept 2024',
        fees: {
          amount: '₹54,900',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'All India Institute of Medical Sciences - [AIIMS]',
          location: 'Patna, Bihar',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1508134538uv25410.jpg?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#20',
          detail: 'out of 55 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '1476'
        },
        applicationDeadline: '14 Aug - 20 Aug 2024',
        fees: {
          amount: '₹5,856',
          type: 'Total Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'Sri Ramachandra Institute of Higher Education and Research',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1602063923Logo.png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#20',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2020',
          score: '615686'
        },
        applicationDeadline: '21 Aug - 27 Aug 2024',
        fees: {
          amount: '₹25,00,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'St John\'s Medical College',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1715236667Screenshotfrom20240509120729.png?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#13',
          detail: 'out of 44 in India 2024'
        },
        cutoff: {
          exam: '-',
          score: '-'
        },
        applicationDeadline: '-',
        fees: {
          amount: '₹1,23,535',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'Aligarh Muslim University - [AMU]',
          location: 'Aligarh, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504180374logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#27',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2023',
          score: '8597'
        },
        applicationDeadline: '9 Feb - 16 Mar 2024',
        fees: {
          amount: '₹45,690',
          type: '1st Year Fees'
        }
      }
    ],
    'ME/M.Tech': [
      {
        rank: '#1',
        college: {
          name: 'IIT Bombay - Indian Institute of Technology - [IITB]',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
          rating: '5/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 160 in India 2024'
        },
        applicationDeadline: '20 Mar - 18 Apr 2024',
        fees: {
          amount: '₹66,700',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIT Delhi - Indian Institute of Technology [IITD]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 275 in India 2024'
        },
        applicationDeadline: '20 Mar - 04 Apr 2024',
        fees: {
          amount: '₹1,90,300',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'IIT Madras - Indian Institute of Technology - [IITM]',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 25 in India 2024'
        },
        applicationDeadline: '20 Mar - 19 Apr 2024',
        fees: {
          amount: '₹24,600',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'IIT Kanpur - Indian Institute of Technology - [IITK]',
          location: 'Kanpur, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 31 in India 2024'
        },
        applicationDeadline: '21 Oct 24',
        fees: {
          amount: '₹1,18,910',
          type: 'Total Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'IIT Kharagpur - Indian Institute of Technology - [IITKGP]',
          location: 'Kharagpur, West Bengal',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#4',
          detail: 'out of 160 in India 2024'
        },
        applicationDeadline: '20 Mar - 21 Apr 2024',
        fees: {
          amount: '₹27,650',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'IIT Roorkee - Indian Institute of Technology - [IITR]',
          location: 'Roorkee, Uttarakhand',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#5',
          detail: 'out of 275 in India 2024'
        },
        applicationDeadline: '30 Jun 24',
        fees: {
          amount: '₹40,100',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'IIT Guwahati - Indian Institute of Technology - [IITG]',
          location: 'Guwahati, Assam',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#6',
          detail: 'out of 160 in India 2024'
        },
        applicationDeadline: '20 Mar - 18 Apr 2024',
        fees: {
          amount: '₹98,250',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'BITS Pilani (Pilani Campus)',
          location: 'Pilani, Rajasthan',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 173 in India 2024'
        },
        applicationDeadline: '20 Jul 24',
        fees: {
          amount: '₹6,03,775',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'IIT BHU - Indian Institute of Technology',
          location: 'Varanasi, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1409982980bhu%20logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#8',
          detail: 'out of 160 in India 2024'
        },
        applicationDeadline: '18 Mar - 05 Apr 2024',
        fees: {
          amount: '₹46,315',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'IIT Hyderabad - Indian Institute of Technology - [IITH]',
          location: 'Hyderabad, Telangana',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#8',
          detail: 'out of 300 in India 2024'
        },
        applicationDeadline: '26 Dec 24',
        fees: {
          amount: '₹53,888',
          type: '1st Year Fees'
        }
      }
    ],
    'B.Sc': [
      {
        rank: '#1',
        college: {
          name: "St Stephen's College",
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14919074881412841375Logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 88 in India 2024'
        },
        cuetCutoff: 462,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹24,670',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Hindu College',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 211 in India 2024'
        },
        cuetCutoff: 454,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹29,470',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'Lady Shri Ram College for Women - [LSR]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 100 in India 2024'
        },
        cuetCutoff: 648,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹24,990',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'Miranda House',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 100 in India 2024'
        },
        cuetCutoff: 356,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹19,800',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'Loyola College',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#4',
          detail: 'out of 88 in India 2024'
        },
        applicationDeadline: '3 May - 17 May 2024',
        fees: {
          amount: '₹14,780',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'Madras Christian College - [MCC]',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#5',
          detail: 'out of 211 in India 2024'
        },
        applicationDeadline: '31 May 24'
      },
      {
        rank: '#7',
        college: {
          name: 'Hansraj College - [HRC]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 211 in India 2024'
        },
        cuetCutoff: 338,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹29,845',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'Presidency College',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch',
          rating: '4.4/5'
        },
        applicationDeadline: '6 May - 24 May 2024',
        fees: {
          amount: '₹1,315',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'Fergusson College',
          location: 'Pune, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch',
          rating: '4.4/5'
        },
        ranking: {
          position: '#16',
          detail: 'out of 88 in India 2024'
        },
        fees: {
          amount: '₹1,06,840',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: "St. Xavier's College - [SXC]",
          location: 'Kolkata, West Bengal',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505106340220pxSt.XaviersUniversityKolkatalogo.png?h=30&w=30&mode=stretch',
          rating: '3.9/5'
        },
        ranking: {
          position: '#8',
          detail: 'out of 88 in India 2024'
        },
        applicationDeadline: '03 Jun 24',
        fees: {
          amount: '₹73,000',
          type: '1st Year Fees'
        }
      }
    ],
    'BA': [
      {
        rank: '#1',
        college: {
          name: 'Lady Shri Ram College for Women - [LSR]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 75 in India 2024'
        },
        cuetCutoff: 730,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹20,370',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Loyola College',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#6',
          detail: 'out of 75 in India 2024'
        },
        applicationDeadline: '3 May - 17 May 2024',
        fees: {
          amount: '₹14,190',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'St. Xavier\'s College',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504695740logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.4/5'
        },
        ranking: {
          position: '#8',
          detail: 'out of 75 in India 2024'
        },
        applicationDeadline: '25 May - 11 Jun 2024',
        fees: {
          amount: '₹13,971',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'Christ University',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#11',
          detail: 'out of 75 in India 2024'
        },
        applicationDeadline: '09 May 25',
        fees: {
          amount: '₹81,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'Miranda House',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 186 in India 2024'
        },
        cuetCutoff: 717,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹14,160',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'Presidency College',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch',
          rating: '4.4/5'
        },
        ranking: {
          position: '#24',
          detail: 'out of 50 in India 2019'
        },
        applicationDeadline: '6 May - 24 May 2024',
        fees: {
          amount: '₹1,295',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'Madras Christian College - [MCC]',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#7',
          detail: 'out of 75 in India 2024'
        },
        applicationDeadline: '31 May 24',
        fees: {
          amount: '₹56,157',
          type: 'Total Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'Hindu College',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 186 in India 2024'
        },
        cuetCutoff: 742,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹26,870',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'Hansraj College - [HRC]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#5',
          detail: 'out of 75 in India 2024'
        },
        cuetCutoff: 726,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹26,935',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'Fergusson College',
          location: 'Pune, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch',
          rating: '4.4/5'
        },
        ranking: {
          position: '#19',
          detail: 'out of 75 in India 2024'
        },
        fees: {
          amount: '₹12,800',
          type: '1st Year Fees'
        }
      }
    ],
    'B.Com': [
      {
        rank: '#1',
        college: {
          name: 'Shri Ram College of Commerce - [SRCC]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14916429701410765919srcclogo.png?h=30&w=30&mode=stretch',
          rating: '3.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 140 in India 2024'
        },
        cuetCutoff: 782,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹29,350',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Lady Shri Ram College for Women - [LSR]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 118 in India 2024'
        },
        cuetCutoff: 771,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹24,990',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'Loyola College',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#4',
          detail: 'out of 118 in India 2024'
        },
        applicationDeadline: '3 May - 17 May 2024',
        fees: {
          amount: '₹15,980',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'St. Xavier\'s College',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504695740logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.4/5'
        },
        ranking: {
          position: '#29',
          detail: 'out of 229 in India 2024'
        },
        applicationDeadline: '25 May - 11 Jun 2024',
        fees: {
          amount: '₹13,971',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'Hindu College',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 140 in India 2024'
        },
        cuetCutoff: 776,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹26,870',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'Hansraj College - [HRC]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 229 in India 2024'
        },
        cuetCutoff: 770,
        applicationDeadline: '31 Oct 24',
        fees: {
          amount: '₹28,435',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'Madras Christian College - [MCC]',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch',
          rating: '4.5/5'
        },
        ranking: {
          position: '#6',
          detail: 'out of 118 in India 2024'
        },
        applicationDeadline: '31 May 24',
        fees: {
          amount: '₹83,760',
          type: 'Total Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'Christ University',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#11',
          detail: 'out of 140 in India 2024'
        },
        applicationDeadline: '08 May 25',
        fees: {
          amount: '₹65,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'Narsee Monjee College of Commerce and Economics',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1565326661ezgif.comresize4.png?h=30&w=30&mode=stretch',
          rating: '3.9/5'
        },
        ranking: {
          position: '#7',
          detail: 'out of 229 in India 2024'
        },
        applicationDeadline: '25 May - 11 Jun 2024',
        fees: {
          amount: '₹13,750',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'RA Podar College of Commerce and Economics',
          location: 'Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1416307992naac.png?h=30&w=30&mode=stretch',
          rating: '3.9/5'
        },
        ranking: {
          position: '#11',
          detail: 'out of 118 in India 2024'
        },
        applicationDeadline: '25 May - 11 Jun 2024',
        fees: {
          amount: '₹6,470',
          type: '1st Year Fees'
        }
      }
    ],
    'BCA': [
      {
        rank: '#1',
        college: {
          name: 'Christ University',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch',
          rating: '4.3/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 109 in India 2024'
        },
        applicationDeadline: '08 May 25',
        fees: {
          amount: '₹1,50,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Presidency College',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1707471831collegelogo1.jpeg?h=30&w=30&mode=stretch',
          rating: '4.1/5'
        },
        ranking: {
          position: '#9',
          detail: 'out of 109 in India 2024'
        },
        fees: {
          amount: '₹1,20,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'SRM Institute of Science and Technology - [SRMIST]',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15807262501569304335phpHattQO.png?h=30&w=30&mode=stretch',
          rating: '4.1/5'
        },
        applicationDeadline: '09 Jun 24',
        fees: {
          amount: '₹1,15,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'Symbiosis Institute of Computer Studies and Research - [SICSR]',
          location: 'Pune, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1506604442download.jpg?h=30&w=30&mode=stretch',
          rating: '4.0/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 109 in India 2024'
        },
        applicationDeadline: '12 Apr 25',
        fees: {
          amount: '₹2,51,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'Loyola College',
          location: 'Chennai, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#3',
          detail: 'out of 109 in India 2024'
        },
        applicationDeadline: '3 May - 17 May 2024',
        fees: {
          amount: '₹54,930',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'GLS Institute of Computer Application',
          location: 'Ahmedabad, Gujarat',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col32863.png?h=30&w=30&mode=stretch',
          rating: '3.9/5'
        },
        ranking: {
          position: '#31',
          detail: 'out of 109 in India 2024'
        },
        applicationDeadline: '30 Jun 24',
        fees: {
          amount: '-',
          type: ''
        }
      },
      {
        rank: '#7',
        college: {
          name: 'Vellore Institute of Technology - [VIT University]',
          location: 'Vellore, Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1604923303Logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        applicationDeadline: '2 Feb - 31 May 2024',
        fees: {
          amount: '₹57,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'Institute of Business Studies and Research - [IBSAR]',
          location: 'Navi Mumbai, Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1723201050Screenshotfrom20240809162706.png?h=30&w=30&mode=stretch',
          rating: '3.8/5'
        },
        ranking: {
          position: '#115',
          detail: 'out of 149 in India 2022'
        },
        fees: {
          amount: '₹1,40,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: "Xavier's Institute of Computer Application",
          location: 'Ahmedabad, Gujarat',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1426676899xica-logo1.jpg?h=30&w=30&mode=stretch',
          rating: '3.7/5'
        },
        fees: {
          amount: '₹10,600',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'DAV College - [DAVC]',
          location: 'Chandigarh, Chandigarh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1605960024Logo.png?h=30&w=30&mode=stretch',
          rating: '3.1/5'
        },
        ranking: {
          position: '#27',
          detail: 'out of 109 in India 2024'
        },
        fees: {
          amount: '₹46,770',
          type: '1st Year Fees'
        }
      }
    ],
    'BBA/BMS': [
      {
        rank: '#1',
        college: {
          name: 'IIM Bangalore - Indian Institute of Management',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&w=30&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 25 in India 2025'
        },
        fees: {
          amount: '₹1,25,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIM Sirmaur',
          location: 'Sirmaur, Himachal Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1501760583photo.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#39',
          detail: 'out of 46 in India 2024'
        },
        fees: {
          amount: '₹22,73,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#3',
        college: {
          name: 'Department of Business Economics, University of Delhi - [DBE]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1425462742Capture.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#27',
          detail: 'out of 46 in India 2024'
        }
      },
      {
        rank: '#4',
        college: {
          name: 'Narsee Monjee Institute of Management Studies - [NMIMS University]',
          location: 'Bangalore, Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1506323241Logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#42',
          detail: 'out of 100 in India 2025'
        },
        applicationDeadline: '6 Dec - 20 May 2024',
        fees: {
          amount: '₹3,15,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#5',
        college: {
          name: 'Woxsen School of Business - [WSB]',
          location: 'Hyderabad, Telangana',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1696856312WoxsenlogoCD.png?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#11',
          detail: 'out of 100 in India 2024'
        },
        applicationDeadline: '1 Apr - 18 May 2024',
        fees: {
          amount: '₹4,25,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#6',
        college: {
          name: 'IBS',
          location: 'Hyderabad, Telangana',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1569389684IBSLogowithR1.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#6',
          detail: 'out of 100 in India 2024'
        },
        applicationDeadline: '04 Apr 25',
        fees: {
          amount: '₹2,80,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#7',
        college: {
          name: 'Amity University',
          location: 'Noida, Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#16',
          detail: 'out of 100 in India 2025'
        },
        applicationDeadline: '15 Mar 25',
        fees: {
          amount: '₹4,18,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#8',
        college: {
          name: 'Lovely Professional University - [LPU]',
          location: 'Jalandhar, Punjab',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1734416335Screenshot20241217114559.png?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#38',
          detail: 'out of 125 in India 2024'
        },
        applicationDeadline: '10 Mar 25',
        fees: {
          amount: '₹1,60,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#9',
        college: {
          name: 'Jamia Millia Islamia University-[JMI]',
          location: 'New Delhi, Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491558776logo.jpg?h=30&w=30&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#25',
          detail: 'out of 125 in India 2024'
        },
        applicationDeadline: '20 Feb - 30 Mar 2024',
        fees: {
          amount: '₹13,100',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#10',
        college: {
          name: 'University of Petroleum and Energy Studies - [UPES]',
          location: 'Dehradun, Uttarakhand',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1727683677Screenshot3092024133632www.upes.ac.in.jpeg.jpg?h=30&w=30&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#41',
          detail: 'out of 125 in India 2024'
        },
        applicationDeadline: '28 Feb 25',
        fees: {
          amount: '₹3,48,000',
          type: '1st Year Fees'
        }
      }
    ],
    'B.Sc (Nursing)': [
      {
        rank: "#1",
        college: {
          name: "All India Institute of Medical Sciences - [AIIMS]",
          location: "Patna, Bihar",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1508134538uv25410.jpg?h=30&w=30&mode=stretch",
          rating: "4.5/5"
        },
        ranking: {
          position: "#1",
          detail: "AIIMS-Paramedical 2024 Cut off 383"
        },
        fees: {
          amount: "₹3,165",
          type: "Total Fees"
        }
      },
      {
        rank: "#2",
        college: {
          name: "Aryabhatta Knowledge University - [AKU]",
          location: "Patna, Bihar",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1492759018AKUBiharLogo.jpg?h=30&w=30&mode=stretch",
          rating: "2.5/5"
        },
        ranking: {
          position: "-",
          detail: "-"
        },
        fees: {
          amount: "-",
          type: "-"
        }
      },
      {
        rank: "#3",
        college: {
          name: "Indira Gandhi Institute of Medical Sciences - [IGIMS]",
          location: "Patna, Bihar",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1493642626igimslogo.png?h=30&w=30&mode=stretch",
          rating: "3.5/5"
        },
        ranking: {
          position: "-",
          detail: "-"
        },
        fees: {
          amount: "₹33,000",
          type: "1st Year Fees"
        }
      },
      {
        rank: "#4",
        college: {
          name: "Ambedkar Institute of Higher Education - [AIHE]",
          location: "Patna, Bihar",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1647419720index.jpg?h=30&w=30&mode=stretch",
          rating: "2/5"
        },
        ranking: {
          position: "-",
          detail: "19 Apr - 19 May 2024"
        },
        fees: {
          amount: "₹65,775",
          type: "1st Year Fees"
        }
      },
      {
        rank: "#5",
        college: {
          name: "All India Institute of Medical Sciences - [AIIMS]",
          location: "New Delhi, Delhi NCR",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&w=30&mode=stretch",
          rating: "4.9/5"
        },
        ranking: {
          position: "#5",
          detail: "AIIMS-Paramedical 2024 Cut off 190"
        },
        fees: {
          amount: "₹1,685",
          type: "1st Year Fees"
        }
      },
      {
        rank: "#6",
        college: {
          name: "Guru Gobind Singh Indraprastha University - [GGSIPU]",
          location: "New Delhi, Delhi NCR",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1464869465LOGO.png?h=30&w=30&mode=stretch",
          rating: "4.9/5"
        },
        ranking: {
          position: "-",
          detail: "1 Feb - 31 Mar 2025"
        },
        fees: {
          amount: "₹1,02,000",
          type: "1st Year Fees"
        }
      },
      {
        rank: "#7",
        college: {
          name: "Post Graduate Institute of Medical Education & Research - [PGIMER]",
          location: "Chandigarh, Chandigarh",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1715079781Screenshotfrom20240507163242.png?h=30&w=30&mode=stretch",
          rating: "4.8/5"
        },
        ranking: {
          position: "-",
          detail: "1 June - 30 Jun 2024"
        },
        fees: {
          amount: "₹5,835",
          type: "1st Year Fees"
        }
      },
      {
        rank: "#8",
        college: {
          name: "Aligarh Muslim University - [AMU]",
          location: "Aligarh, Uttar Pradesh",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1504180374logo.jpg?h=30&w=30&mode=stretch",
          rating: "4.8/5"
        },
        ranking: {
          position: "-",
          detail: "15 Feb 25"
        },
        fees: {
          amount: "-",
          type: "-"
        }
      },
      {
        rank: "#9",
        college: {
          name: "Lovely Professional University - [LPU]",
          location: "Jalandhar, Punjab",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1734416335Screenshot20241217114559.png?h=30&w=30&mode=stretch",
          rating: "4.8/5"
        },
        ranking: {
          position: "-",
          detail: "10 Mar 25"
        },
        fees: {
          amount: "₹1,60,000",
          type: "1st Year Fees"
        }
      },
      {
        rank: "#10",
        college: {
          name: "PES University - [PESU]",
          location: "Bangalore, Karnataka",
          logo: "https://image-static.collegedunia.com/public/college_data/images/logos/1728283946pesuniversity.png?h=30&w=30&mode=stretch",
          rating: "4.8/5"
        },
        ranking: {
          position: "-",
          detail: "-"
        },
        fees: {
          amount: "₹1,71,200",
          type: "1st Year Fees"
        }
      }
    ]
  };

  // Add handleCollegePress function
  const handleCollegePress = (college) => {
    console.log("College pressed:", college.college.name);
    
    // Create course details based on the active tab
    const courseDetails = getCourseDetailsByTab(activeTab);
    
    navigation.navigate('CollegeDetails', { 
      college: {
        name: college.college.name,
        location: college.college.location,
        image: college.college.logo, // Using logo as college image
        rating: college.college.rating,
        ranking: college.ranking?.position || 'N/A',
        rankingDetail: college.ranking?.detail || '',
        cutoff: college.cutoff?.exam ? `${college.cutoff.exam}: ${college.cutoff.score}` : 'N/A',
        applicationDeadline: college.applicationDeadline || 'N/A',
        fees: college.fees?.amount || 'N/A',
        feesType: college.fees?.type || '',
        // Adding course details
        courses: courseDetails,
        // Adding additional properties that might be needed by CollegeDetails screen
        facilities: [
          "Library with digital resources",
          "Computer labs with high-speed internet",
          "Sports facilities including gym",
          "On-campus accommodation",
          "Cafeteria and dining options",
          "Research laboratories",
          "Student activity center",
          "Placement cell"
        ],
        about: `${college.college.name} is one of the top colleges in India for ${activeTab} programs. Located in ${college.college.location}, it offers high-quality education with excellent placement opportunities. The college provides state-of-the-art infrastructure and experienced faculty to ensure quality education.`,
        city: college.college.location.split(',')[0].trim(),
        state: college.college.location.split(',')[1]?.trim() || '',
        website: "#",
        phone: "+91 1234567890",
        email: "info@college.edu"
      }
    });
  };

  // Function to get course details based on the active tab
  const getCourseDetailsByTab = (tabName) => {
    switch(tabName) {
      case 'BE/B.Tech':
        return [
          {
            name: 'B.Tech Computer Science & Engineering',
            duration: '4 Years',
            eligibility: '10+2 with Physics, Chemistry, Mathematics',
            fees: '₹2.0 - 4.5 Lakhs per year',
            description: 'A program focusing on computer software, hardware, and algorithmic development.'
          },
          {
            name: 'B.Tech Electronics & Communication',
            duration: '4 Years',
            eligibility: '10+2 with Physics, Chemistry, Mathematics',
            fees: '₹1.8 - 4.0 Lakhs per year',
            description: 'This program covers electronic systems, communication networks, and signal processing.'
          },
          {
            name: 'B.Tech Mechanical Engineering',
            duration: '4 Years',
            eligibility: '10+2 with Physics, Chemistry, Mathematics',
            fees: '₹1.5 - 3.8 Lakhs per year',
            description: 'A traditional engineering branch dealing with mechanical systems and manufacturing.'
          },
          {
            name: 'B.Tech Civil Engineering',
            duration: '4 Years',
            eligibility: '10+2 with Physics, Chemistry, Mathematics',
            fees: '₹1.5 - 3.5 Lakhs per year',
            description: 'Program covering structural design, infrastructure, and construction management.'
          }
        ];
      
      case 'MBA/PGDM':
        return [
          {
            name: 'MBA Finance',
            duration: '2 Years',
            eligibility: 'Bachelor\'s degree with minimum 50% marks',
            fees: '₹10 - 25 Lakhs total',
            description: 'Specialization in financial management, investment analysis, and corporate finance.'
          },
          {
            name: 'MBA Marketing',
            duration: '2 Years',
            eligibility: 'Bachelor\'s degree with minimum 50% marks',
            fees: '₹10 - 25 Lakhs total',
            description: 'Focus on brand management, consumer behavior, and marketing strategies.'
          },
          {
            name: 'MBA Human Resources',
            duration: '2 Years',
            eligibility: 'Bachelor\'s degree with minimum 50% marks',
            fees: '₹10 - 25 Lakhs total',
            description: 'Specialization in talent management, organizational behavior, and HR analytics.'
          },
          {
            name: 'MBA Operations',
            duration: '2 Years',
            eligibility: 'Bachelor\'s degree with minimum 50% marks',
            fees: '₹10 - 25 Lakhs total',
            description: 'Focus on supply chain, operations management, and process optimization.'
          }
        ];
      
      case 'MBBS':
        return [
          {
            name: 'MBBS',
            duration: '5.5 Years (including internship)',
            eligibility: '10+2 with Physics, Chemistry, Biology with minimum 50% marks',
            fees: '₹5,000 - 25 Lakhs per year',
            description: 'Comprehensive medical program covering all aspects of healthcare and medical practice.'
          },
          {
            name: 'Bachelor of Dental Surgery (BDS)',
            duration: '5 Years',
            eligibility: '10+2 with Physics, Chemistry, Biology with minimum 50% marks',
            fees: '₹2 - 10 Lakhs per year',
            description: 'Program focused on oral health, dental procedures, and maxillofacial treatments.'
          }
        ];
      
      case 'ME/M.Tech':
        return [
          {
            name: 'M.Tech Computer Science & Engineering',
            duration: '2 Years',
            eligibility: 'B.Tech/B.E. with minimum 60% marks',
            fees: '₹50,000 - 2 Lakhs per year',
            description: 'Advanced studies in algorithms, artificial intelligence, and software engineering.'
          },
          {
            name: 'M.Tech Electronics & Communication',
            duration: '2 Years',
            eligibility: 'B.Tech/B.E. with minimum 60% marks',
            fees: '₹50,000 - 1.5 Lakhs per year',
            description: 'Advanced studies in communication systems, VLSI design, and signal processing.'
          },
          {
            name: 'M.Tech Mechanical Engineering',
            duration: '2 Years',
            eligibility: 'B.Tech/B.E. with minimum 60% marks',
            fees: '₹50,000 - 1.5 Lakhs per year',
            description: 'Advanced studies in thermal engineering, manufacturing, and CAD/CAM.'
          }
        ];
      
      case 'B.Sc':
        return [
          {
            name: 'B.Sc Physics',
            duration: '3 Years',
            eligibility: '10+2 with Physics, Chemistry, Mathematics',
            fees: '₹20,000 - 1 Lakh per year',
            description: 'Program covering classical mechanics, quantum physics, and theoretical physics.'
          },
          {
            name: 'B.Sc Chemistry',
            duration: '3 Years',
            eligibility: '10+2 with Physics, Chemistry, Mathematics/Biology',
            fees: '₹20,000 - 1 Lakh per year',
            description: 'Studies in organic, inorganic, and physical chemistry with lab work.'
          },
          {
            name: 'B.Sc Mathematics',
            duration: '3 Years',
            eligibility: '10+2 with Mathematics',
            fees: '₹15,000 - 80,000 per year',
            description: 'Program covering pure mathematics, applied mathematics, and statistics.'
          },
          {
            name: 'B.Sc Computer Science',
            duration: '3 Years',
            eligibility: '10+2 with Mathematics',
            fees: '₹30,000 - 1.2 Lakhs per year',
            description: 'Program combining computer theory, programming, and mathematics.'
          }
        ];
      
      case 'BA':
        return [
          {
            name: 'BA Economics',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹15,000 - 80,000 per year',
            description: 'Program covering micro and macroeconomics, econometrics, and economic theory.'
          },
          {
            name: 'BA English',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹15,000 - 70,000 per year',
            description: 'Studies in literature, linguistics, and effective communication in English.'
          },
          {
            name: 'BA Psychology',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹20,000 - 1 Lakh per year',
            description: 'Program covering human behavior, cognition, and psychological theory.'
          },
          {
            name: 'BA Political Science',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹15,000 - 70,000 per year',
            description: 'Studies in political theory, international relations, and governance.'
          }
        ];
      
      case 'B.Com':
        return [
          {
            name: 'B.Com General',
            duration: '3 Years',
            eligibility: '10+2 in Commerce or equivalent',
            fees: '₹15,000 - 80,000 per year',
            description: 'Program covering accounting, economics, business law, and taxation.'
          },
          {
            name: 'B.Com Honors',
            duration: '3 Years',
            eligibility: '10+2 in Commerce with minimum 60% marks',
            fees: '₹20,000 - 1 Lakh per year',
            description: 'Advanced commerce program with greater depth in financial studies.'
          },
          {
            name: 'B.Com Banking & Insurance',
            duration: '3 Years',
            eligibility: '10+2 in Commerce or equivalent',
            fees: '₹20,000 - 1 Lakh per year',
            description: 'Specialized program focused on banking operations and insurance sector.'
          }
        ];
      
      case 'BCA':
        return [
          {
            name: 'BCA',
            duration: '3 Years',
            eligibility: '10+2 with Mathematics',
            fees: '₹30,000 - 1.5 Lakhs per year',
            description: 'Program covering computer applications, programming, and software development.'
          },
          {
            name: 'BCA with Data Science',
            duration: '3 Years',
            eligibility: '10+2 with Mathematics',
            fees: '₹40,000 - 1.8 Lakhs per year',
            description: 'BCA with specialization in data analytics, machine learning, and statistics.'
          },
          {
            name: 'BCA with Artificial Intelligence',
            duration: '3 Years',
            eligibility: '10+2 with Mathematics',
            fees: '₹40,000 - 1.8 Lakhs per year',
            description: 'Program focused on AI technologies, neural networks, and cognitive computing.'
          }
        ];
      
      case 'BBA/BMS':
        return [
          {
            name: 'BBA General',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹30,000 - 1.5 Lakhs per year',
            description: 'Undergraduate business administration covering management fundamentals.'
          },
          {
            name: 'BBA Finance',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹30,000 - 1.5 Lakhs per year',
            description: 'BBA with specialization in financial management and investments.'
          },
          {
            name: 'BBA Marketing',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹30,000 - 1.5 Lakhs per year',
            description: 'BBA focusing on brand management, consumer behavior, and marketing principles.'
          },
          {
            name: 'BMS',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            fees: '₹35,000 - 1.8 Lakhs per year',
            description: 'Business management studies with broader management and leadership focus.'
          }
        ];
      
      case 'B.Sc (Nursing)':
        return [
          {
            name: 'B.Sc Nursing',
            duration: '4 Years',
            eligibility: '10+2 with Physics, Chemistry, Biology with minimum 50% marks',
            fees: '₹50,000 - 1.5 Lakhs per year',
            description: 'Program covering nursing care, health management, and medical practices.'
          },
          {
            name: 'Post Basic B.Sc Nursing',
            duration: '2 Years',
            eligibility: 'Diploma in General Nursing and Midwifery (GNM)',
            fees: '₹40,000 - 1 Lakh per year',
            description: 'Advanced nursing program for registered nurses with GNM qualification.'
          }
        ];
      
      default:
        return [
          {
            name: 'Undergraduate Program',
            duration: '3-4 Years',
            eligibility: '10+2 or equivalent',
            fees: 'Variable',
            description: 'Standard undergraduate program offered by the institution.'
          }
        ];
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top 10 Colleges</Text>
      
      {/* Tab navigation */}
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsWrapper}
        contentContainerStyle={styles.tabsContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Table */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.tableWrapper}
      >
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, styles.rankWidth]}>Rank</Text>
            <Text style={[styles.headerCell, styles.collegeWidth]}>College</Text>
            <Text style={[styles.headerCell, styles.rankingWidth]}>Ranking</Text>
            <Text style={[styles.headerCell, styles.cutoffWidth]}>Cutoff</Text>
            <Text style={[styles.headerCell, styles.deadlineWidth]}>Application</Text>
            <Text style={[styles.headerCell, styles.feesWidth]}>Fees</Text>
          </View>
          
          {/* Table Body */}
          <ScrollView 
            style={styles.tableBody}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
          >
            {data[activeTab]?.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.row, index % 2 === 0 && styles.evenRow]}
                onPress={() => handleCollegePress(item)}
                activeOpacity={0.7}
                underlayColor="rgba(0, 123, 255, 0.1)"
              >
                <Text style={[styles.cell, styles.rankWidth]}>{item.rank}</Text>
                
                <View style={[styles.collegeCell, styles.collegeWidth]}>
                  <Image 
                    source={{ uri: item.college.logo }} 
                    style={styles.logo}
                    resizeMode="contain"
                  />
                  <View style={styles.collegeInfo}>
                    <Text numberOfLines={2} style={styles.collegeName}>
                      {item.college.name}
                    </Text>
                    <Text style={styles.location}>{item.college.location}</Text>
                    <View style={styles.ratingContainer}>
                      <AntDesign name="star" size={12} color="#FFD700" />
                      <Text style={styles.rating}>{item.college.rating}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={[styles.cell, styles.rankingWidth]}>
                  <Text style={styles.rankingPosition}>{item.ranking?.position || 'N/A'}</Text>
                  <Text style={styles.rankingDetail}>{item.ranking?.detail || ''}</Text>
                </View>
                
                <View style={[styles.cell, styles.cutoffWidth]}>
                  <Text style={styles.cutoffExam}>{item.cutoff?.exam || 'N/A'}</Text>
                  <Text style={styles.cutoffScore}>{item.cutoff?.score || '-'}</Text>
                </View>
                
                <Text style={[styles.cell, styles.deadlineWidth]}>
                  {item.applicationDeadline || 'N/A'}
                </Text>

                <View style={[styles.cell, styles.feesWidth]}>
                  <Text style={styles.feesAmount}>{item.fees?.amount || 'N/A'}</Text>
                  <Text style={styles.feesType}>{item.fees?.type || ''}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: '#333',
    alignSelf: 'flex-start',
  },
  tabsWrapper: {
    marginBottom: 15,
    width: '100%',
  },
  tabsContent: {
    paddingRight: 16,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  activeTabButton: {
    backgroundColor: "#007bff",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: '500',
  },
  tableWrapper: {
    width: '100%',
    height: 450,
  },
  tableContainer: {
    width: 'auto',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerCell: {
    padding: 10,
    fontWeight: "600",
    color: "#333",
    fontSize: 12,
  },
  tableBody: {
    height: 400,
    flexGrow: 0,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    minHeight: 85,
    alignItems: 'center',
  },
  evenRow: {
    backgroundColor: '#f8f9fa',
  },
  cell: {
    padding: 8,
    justifyContent: 'center',
  },
  // Width configurations
  rankWidth: { width: 50 },
  collegeWidth: { width: 280 },
  rankingWidth: { width: 140 },
  cutoffWidth: { width: 120 },
  deadlineWidth: { width: 130 },
  feesWidth: { width: 110 },
  
  // College cell specific styles
  collegeCell: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingRight: 16,
  },
  collegeInfo: {
    flex: 1,
    paddingRight: 8,
  },
  collegeName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    paddingRight: 8,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
  },
  location: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  cutoffExam: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  cutoffScore: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  feesAmount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  feesType: {
    fontSize: 11,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  rating: {
    fontSize: 11,
    color: '#666',
    marginLeft: 3,
  },
  
  // Other cell specific styles
  rankingPosition: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  rankingDetail: {
    fontSize: 11,
    color: '#666',
  },
  // Add style for pressed state
  highlightedRow: {
    backgroundColor: 'rgba(0, 123, 255, 0.05)',
  },
});

export default Top10Colleges;
