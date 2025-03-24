import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

const rankingYears = [ '2025','2024', '2023', '2022', '2021'];
const rankingAgencies = [
  'Indiatoday', 'The Week', 'NIRF', 'Outlook', 'IIRF', 'TOI', 'NIRF Innovation'
];

// Data organized by year and agency
const collegeDataByYear = {
  '2025': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=40&w=40&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 44',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1587476664logo3.png?h=40&w=40&mode=stretch',
        name: 'Symbiosis International University - [SIU], Pune',
        ranking: '2 out of 73',
        streams: 'Overall'
      }
    ],
    'The Week': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=40&w=40&mode=stretch',
        name: 'IIT Madras',
        ranking: '1 out of 50',
        streams: 'Engineering'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=40&w=40&mode=stretch',
        name: 'IIT Delhi',
        ranking: '2 out of 50',
        streams: 'Engineering'
      }
    ],
    'NIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=40&w=40&mode=stretch',
        name: 'IIT Bombay',
        ranking: '1 out of 100',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=40&w=40&mode=stretch',
        name: 'IIT Kanpur',
        ranking: '2 out of 100',
        streams: 'Overall'
      }
    ],
    'Outlook': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1694591282Screenshot20230913131538.jpg?h=30&w=30&mode=stretch',
        name: 'XIMB, Bhubaneswar',
        ranking: '1 out of 52',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491826680logo.png?h=30&w=30&mode=stretch',
        name: 'Indira Gandhi National Open University - [IGNOU], New Delhi',
        ranking: '1 out of 10',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1733402763Screenshot20241205181546.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Centre for Distance Learning - [SCDL], Pune',
        ranking: '1 out of 10',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1618823976Logo.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Institute of Business Management - [SIBM], Pune',
        ranking: '2 out of 52',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1503981917vturesultsfacebook.jpg?h=30&w=30&mode=stretch',
        name: 'Visvesvaraya Technological University - [VTU], Belgaum',
        ranking: '2 out of 10',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1629546017amityicon.png?h=30&w=30&mode=stretch',
        name: 'Amity University Online, Noida',
        ranking: '2 out of 10',
        streams: 'Overall'
      }
    ],
    'IIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=40&w=40&mode=stretch',
        name: 'AIIMS Delhi',
        ranking: '1 out of 40',
        streams: 'Medical'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1568873405jipmerlogo.png?h=40&w=40&mode=stretch',
        name: 'JIPMER Puducherry',
        ranking: '2 out of 40',
        streams: 'Medical'
      }
    ],
    'TOI': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408967753iim.jpg?h=30&w=30&mode=stretch',
        name: 'IIMK - Indian Institute of Management, Kozhikode',
        ranking: '1 out of 100',
        streams: 'Management'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504523545logo.png?h=30&w=30&mode=stretch',
        name: 'Mount Carmel College - [MCC], Bangalore',
        ranking: '1 out of 70',
        streams: 'Management'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1727164925Untitled.png?h=30&w=30&mode=stretch',
        name: 'SP Jain [SPJIMR], Mumbai',
        ranking: '2 out of 100',
        streams: 'Management'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1693997827channels4profile.jpg?h=30&w=30&mode=stretch',
        name: 'KIIT School of Management - [KSOM], Bhubaneswar',
        ranking: '2 out of 70',
        streams: 'Management'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1643442993logo6.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Centre for Management Studies - [SCMS], Pune',
        ranking: '2 out of 70',
        streams: 'Management'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1618823976Logo.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Institute of Business Management - [SIBM], Pune',
        ranking: '3 out of 100',
        streams: 'Management'
      }
    ],
    'NIRF Innovation': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1732253759isblogo.png?h=40&w=40&mode=stretch',
        name: 'ISB Hyderabad',
        ranking: '1 out of 30',
        streams: 'Innovation'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=40&w=40&mode=stretch',
        name: 'BITS Pilani',
        ranking: '2 out of 30',
        streams: 'Innovation'
      }
    ]
  },
  '2024': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 44',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1394448331Symbiosis%20International%20University%20(SIU).png?h=30&w=30&mode=stretch',
        name: 'Symbiosis International University - [SIU], Pune',
        ranking: '1 out of 73',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch',
        name: 'Amity University, Noida',
        ranking: '2 out of 73',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '2 out of 44',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504180374logo.jpg?h=30&w=30&mode=stretch',
        name: 'Aligarh Muslim University - [AMU], Aligarh',
        ranking: '3 out of 44',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098261Logo.jpg?h=30&w=30&mode=stretch',
        name: 'K L University - [KLU], Guntur',
        ranking: '3 out of 73',
        streams: 'Overall'
      }
    ],
    'The Week': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
        name: 'IIT Delhi - Indian Institute of Technology [IITD], New Delhi',
        ranking: '1 out of 27',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&w=30&mode=stretch',
        name: 'All India Institute of Medical Sciences - [AIIMS], New Delhi',
        ranking: '1 out of 16',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 92',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '2 out of 27',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1568873405jipmerlogo.png?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Institute of Post Graduate Medical Education and Research - [JIPMER], Pondicherry',
        ranking: '2 out of 16',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '2 out of 92',
        streams: 'Overall'
      }
    ],
    'NIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
        name: 'Hindu College, New Delhi',
        ranking: '1 out of 300',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491826680logo.png?h=30&w=30&mode=stretch',
        name: 'Indira Gandhi National Open University - [IGNOU], New Delhi',
        ranking: '1 out of 3',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch',
        name: 'Miranda House, New Delhi',
        ranking: '2 out of 300',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '2 out of 200',
        streams: 'Overall'
      }
    ],
    'Outlook': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 20',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1663569676image0011.png?h=30&w=30&mode=stretch',
        name: 'O.P. Jindal Global University - [JGU], Sonepat',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch',
        name: 'Amity University, Noida',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch',
        name: 'Banaras Hindu University - [BHU], Varanasi',
        ranking: '2 out of 20',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1594118848chitkarauniversitylogo.png?h=30&w=30&mode=stretch',
        name: 'Chitkara University - [CU], Patiala',
        ranking: '3 out of 50',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1503565250logonew1.png?h=30&w=30&mode=stretch',
        name: 'Pondicherry University - [PU], Pondicherry',
        ranking: '3 out of 20',
        streams: 'Overall'
      }
    ],
    'IIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14718585975.png?h=30&w=30&mode=stretch',
        name: 'Ashoka University, Sonepat',
        ranking: '1 out of 160',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/16684977553060894074853420402648917847635275206136304n.png?h=30&w=30&mode=stretch',
        name: 'Dhirubhai Ambani Institute of Information and Communication Technology - [DA-IICT], Gandhinagar',
        ranking: '2 out of 160',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch',
        name: 'Banaras Hindu University - [BHU], Varanasi',
        ranking: '3 out of 50',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1618464251Screenshot20210415102424.png?h=30&w=30&mode=stretch',
        name: 'Shiv Nadar University, Chennai',
        ranking: '3 out of 160',
        streams: 'Overall'
      }
    ],
    'TOI': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch',
        name: 'BITS Pilani (Pilani Campus), Pilani',
        ranking: '1 out of 175',
        streams: 'Engineering'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15807262501569304335phpHattQO.png?h=30&w=30&mode=stretch',
        name: 'SRM Institute of Science and Technology - [SRMIST], Chennai',
        ranking: '1 out of 175',
        streams: 'Engineering'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1492498457nsitlogo2.png?h=30&w=30&mode=stretch',
        name: 'Netaji Subhas University of Technology - [NSUT], New Delhi',
        ranking: '2 out of 175',
        streams: 'Engineering'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098261Logo.jpg?h=30&w=30&mode=stretch',
        name: 'K L University - [KLU], Guntur',
        ranking: '2 out of 125',
        streams: 'Engineering'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098174SOAPNG.png?h=30&w=30&mode=stretch',
        name: 'Siksha Anusandhan University - [SOA], Bhubaneswar',
        ranking: '2 out of 125',
        streams: 'Engineering'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1625564973SISTLOGO1.jpg?h=30&w=30&mode=stretch',
        name: 'Sathyabama Institute of Science and Technology, Chennai',
        ranking: '3 out of 125',
        streams: 'Engineering'
      }
    ],
    'NIRF Innovation': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Bombay - Indian Institute of Technology - [IITB], Mumbai',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col70002.png?h=40&w=40&mode=stretch',
        name: 'IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad',
        ranking: '3 out of 50',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '4 out of 50',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
        name: 'IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur',
        ranking: '5 out of 50',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee',
        ranking: '6 out of 50',
        streams: 'Overall'
      }
    ]
  },
  '2023': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
        name: 'IIT Delhi - Indian Institute of Technology [IITD], New Delhi',
        ranking: '1 out of 281',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch',
        name: 'Amity University, Noida',
        ranking: '1 out of 69',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Bombay - Indian Institute of Technology - [IITB], Mumbai',
        ranking: '2 out of 281',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098261Logo.jpg?h=30&w=30&mode=stretch',
        name: 'K L University - [KLU], Guntur',
        ranking: '2 out of 69',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
        name: 'IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur',
        ranking: '3 out of 281',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch',
        name: 'Christ University, Bangalore',
        ranking: '3 out of 69',
        streams: 'Overall'
      }
    ],
    'The Week': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 85',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch',
        name: 'Banaras Hindu University - [BHU], Varanasi',
        ranking: '2 out of 85',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '3 out of 85',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15090869991480683061uohimage.jpg?h=30&w=30&mode=stretch',
        name: 'University of Hyderabad - [UOH], Hyderabad',
        ranking: '4 out of 85',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1435229665jable%20pur.jpg?h=30&w=30&mode=stretch',
        name: 'Jadavpur University - [JU], Kolkata',
        ranking: '5 out of 85',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504761098logo.png?h=30&w=30&mode=stretch',
        name: 'University of Calcutta, Kolkata',
        ranking: '6 out of 85',
        streams: 'Overall'
      }
    ],
    'NIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch',
        name: 'Miranda House, New Delhi',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '2 out of 200',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
        name: 'Hindu College, New Delhi',
        ranking: '2 out of 200',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
        name: 'IIT Delhi - Indian Institute of Technology [IITD], New Delhi',
        ranking: '3 out of 200',
        streams: 'Overall'
      }
    ],
    'Outlook': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee',
        ranking: '1 out of 7',
        streams: 'Architecture'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1650103259ceptlogo.png?h=30&w=30&mode=stretch',
        name: 'CEPT University, Ahmedabad',
        ranking: '1 out of 30',
        streams: 'Architecture'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1406023982download.jpg?h=30&w=30&mode=stretch',
        name: 'Birla Institute of Technology - [BIT Mesra], Ranchi',
        ranking: '2 out of 30',
        streams: 'Architecture'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/143019786211223scsxc.jpg?h=30&w=30&mode=stretch',
        name: 'Sir JJ College of Architecture - [SJJCA], Mumbai',
        ranking: '2 out of 7',
        streams: 'Architecture'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1721987725Untitledlll.png?h=30&w=30&mode=stretch',
        name: 'School of Planning and Architecture - [SPA], New Delhi',
        ranking: '3 out of 7',
        streams: 'Architecture'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1466234707145263987.png?h=30&w=30&mode=stretch',
        name: 'RV College of Architecture - [RVCA], Bangalore',
        ranking: '3 out of 30',
        streams: 'Architecture'
      }
    ],
    'IIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/16684977553060894074853420402648917847635275206136304n.png?h=30&w=30&mode=stretch',
        name: 'Dhirubhai Ambani Institute of Information and Communication Technology - [DA-IICT], Gandhinagar',
        ranking: '1 out of 171',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14718585975.png?h=30&w=30&mode=stretch',
        name: 'Ashoka University, Sonepat',
        ranking: '2 out of 171',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15065924531582278118638150271870212293515069844548765n.jpg?h=30&w=30&mode=stretch',
        name: 'Nirma University, Ahmedabad',
        ranking: '3 out of 171',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1685085024PNGSNUIOE01.jpeg?h=30&w=30&mode=stretch',
        name: 'Shiv Nadar University - [SNU], Greater Noida',
        ranking: '4 out of 171',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1600409348812129691033765445158554872340436796047360n.jpg?h=30&w=30&mode=stretch',
        name: 'Shri Dharmasthala Manjunatheshwara University - [SDM], Dharwad',
        ranking: '5 out of 171',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1472105552gfcdghjb.jpg?h=30&w=30&mode=stretch',
        name: 'Azim Premji University, Bangalore',
        ranking: '6 out of 171',
        streams: 'Overall'
      }
    ],
    'TOI': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1492498457nsitlogo2.png?h=30&w=30&mode=stretch',
        name: 'Netaji Subhas University of Technology - [NSUT], New Delhi',
        ranking: '1 out of 170',
        streams: 'Engineering'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15807262501569304335phpHattQO.png?h=30&w=30&mode=stretch',
        name: 'SRM Institute of Science and Technology - [SRMIST], Chennai',
        ranking: '1 out of 125',
        streams: 'Engineering'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098261Logo.jpg?h=30&w=30&mode=stretch',
        name: 'K L University - [KLU], Guntur',
        ranking: '2 out of 125',
        streams: 'Engineering'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098174SOAPNG.png?h=30&w=30&mode=stretch',
        name: 'Siksha Anusandhan University - [SOA], Bhubaneswar',
        ranking: '2 out of 125',
        streams: 'Engineering'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1625564973SISTLOGO1.jpg?h=30&w=30&mode=stretch',
        name: 'Sathyabama Institute of Science and Technology, Chennai',
        ranking: '3 out of 125',
        streams: 'Engineering'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14975236671394532222w.png?h=30&w=30&mode=stretch',
        name: 'Amity School of Engineering Technology - [ASET], Noida',
        ranking: '4 out of 125',
        streams: 'Engineering'
      }
    ],
    'NIRF Innovation': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
        name: 'IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur',
        ranking: '1 out of 312',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '2 out of 312',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch',
        name: 'IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad',
        ranking: '3 out of 312',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
        name: 'IIT Delhi - Indian Institute of Technology [IITD], New Delhi',
        ranking: '4 out of 312',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee',
        ranking: '5 out of 312',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '6 out of 312',
        streams: 'Overall'
      }
    ]
  },
  '2022': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch',
        name: 'Amity University, Noida',
        ranking: '1 out of 62',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch',
        name: 'Christ University, Bangalore',
        ranking: '2 out of 62',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098261Logo.jpg?h=30&w=30&mode=stretch',
        name: 'K L University - [KLU], Guntur',
        ranking: '3 out of 62',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1471871884Logo.gif?h=30&w=30&mode=stretch',
        name: 'Banasthali Vidyapith, Jaipur',
        ranking: '4 out of 62',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/16213292251621245693JUonline.png?h=30&w=30&mode=stretch',
        name: 'Jain (Deemed-to-be University) Online, Bangalore',
        ranking: '5 out of 62',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15065924531582278118638150271870212293515069844548765n.jpg?h=30&w=30&mode=stretch',
        name: 'Nirma University, Ahmedabad',
        ranking: '6 out of 62',
        streams: 'Overall'
      }
    ],
    'The Week': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 81',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch',
        name: 'Banaras Hindu University - [BHU], Varanasi',
        ranking: '2 out of 81',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '3 out of 81',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1435229665jable%20pur.jpg?h=30&w=30&mode=stretch',
        name: 'Jadavpur University - [JU], Kolkata',
        ranking: '4 out of 81',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15090869991480683061uohimage.jpg?h=30&w=30&mode=stretch',
        name: 'University of Hyderabad - [UOH], Hyderabad',
        ranking: '5 out of 81',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504761098logo.png?h=30&w=30&mode=stretch',
        name: 'University of Calcutta, Kolkata',
        ranking: '6 out of 81',
        streams: 'Overall'
      }
    ],
    'NIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch',
        name: 'Miranda House, New Delhi',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '2 out of 200',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
        name: 'Hindu College, New Delhi',
        ranking: '2 out of 200',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Bombay - Indian Institute of Technology - [IITB], Mumbai',
        ranking: '3 out of 200',
        streams: 'Overall'
      }
    ],
    'Outlook': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '1 out of 15',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1663569676image0011.png?h=30&w=30&mode=stretch',
        name: 'O.P. Jindal Global University - [JGU], Sonepat',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch',
        name: 'Amity University, Noida',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '2 out of 15',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Bombay - Indian Institute of Technology - [IITB], Mumbai',
        ranking: '3 out of 15',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=30&w=30&mode=stretch',
        name: 'Chandigarh University - [CU], Chandigarh',
        ranking: '3 out of 50',
        streams: 'Overall'
      }
    ],
    'IIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/16684977553060894074853420402648917847635275206136304n.png?h=30&w=30&mode=stretch',
        name: 'Dhirubhai Ambani Institute of Information and Communication Technology - [DA-IICT], Gandhinagar',
        ranking: '1 out of 161',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15065924531582278118638150271870212293515069844548765n.jpg?h=30&w=30&mode=stretch',
        name: 'Nirma University, Ahmedabad',
        ranking: '2 out of 161',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1685085024PNGSNUIOE01.jpeg?h=30&w=30&mode=stretch',
        name: 'Shiv Nadar University - [SNU], Greater Noida',
        ranking: '3 out of 161',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1500638653reva.png?h=30&w=30&mode=stretch',
        name: 'REVA University, Bangalore',
        ranking: '4 out of 161',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1600409348812129691033765445158554872340436796047360n.jpg?h=30&w=30&mode=stretch',
        name: 'Shri Dharmasthala Manjunatheshwara University - [SDM], Dharwad',
        ranking: '5 out of 161',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1594118848chitkarauniversitylogo.png?h=30&w=30&mode=stretch',
        name: 'Chitkara University - [CU], Patiala',
        ranking: '6 out of 161',
        streams: 'Overall'
      }
    ],
    'TOI': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1437567677logo.jpg?h=30&w=30&mode=stretch',
        name: 'Delhi Technological University - [DTU], New Delhi',
        ranking: '1 out of 200',
        streams: 'Engineering'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/15807262501569304335phpHattQO.png?h=30&w=30&mode=stretch',
        name: 'SRM Institute of Science and Technology - [SRMIST], Chennai',
        ranking: '1 out of 148',
        streams: 'Engineering'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1492498457nsitlogo2.png?h=30&w=30&mode=stretch',
        name: 'Netaji Subhas University of Technology - [NSUT], New Delhi',
        ranking: '2 out of 200',
        streams: 'Engineering'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098261Logo.jpg?h=30&w=30&mode=stretch',
        name: 'K L University - [KLU], Guntur',
        ranking: '2 out of 148',
        streams: 'Engineering'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1619098174SOAPNG.png?h=30&w=30&mode=stretch',
        name: 'Siksha Anusandhan University - [SOA], Bhubaneswar',
        ranking: '2 out of 148',
        streams: 'Engineering'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1625564973SISTLOGO1.jpg?h=30&w=30&mode=stretch',
        name: 'Sathyabama Institute of Science and Technology, Chennai',
        ranking: '3 out of 148',
        streams: 'Engineering'
      }
    ],
    'NIRF Innovation': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Bombay - Indian Institute of Technology - [IITB], Mumbai',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch',
        name: 'IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad',
        ranking: '3 out of 50',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '4 out of 50',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
        name: 'IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur',
        ranking: '5 out of 50',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee',
        ranking: '6 out of 50',
        streams: 'Overall'
      }
    ]
  },
  '2021': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch',
        name: 'Christ University, Bangalore',
        ranking: '1 out of 146',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1503656119lgoedt.jpg?h=30&w=30&mode=stretch',
        name: 'Shaheed Sukhdev College of Business Studies - [SSCBS], New Delhi',
        ranking: '1 out of 178',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1506604442download.jpg?h=30&w=30&mode=stretch',
        name: 'Symbiosis Institute of Computer Studies and Research - [SICSR], Pune',
        ranking: '2 out of 146',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1506678057logo.jpg?h=30&w=30&mode=stretch',
        name: 'Anil Surendra Modi School of Commerce - [ASMSOC], Mumbai',
        ranking: '2 out of 178',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=71.17&w=71.17&mode=stretch',
        name: 'Loyola College, Chennai',
        ranking: '3 out of 178',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1644234295315A73A322854217A77F161934652680.png.jpg?h=30&w=30&mode=stretch',
        name: 'Kristu Jayanti College - [KJC], Bangalore',
        ranking: '4 out of 146',
        streams: 'Overall'
      }
    ],
    'The Week': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch',
        name: 'IIT Delhi - Indian Institute of Technology [IITD], New Delhi',
        ranking: '1 out of 27',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&w=30&mode=stretch',
        name: 'All India Institute of Medical Sciences - [AIIMS], New Delhi',
        ranking: '1 out of 16',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 92',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '2 out of 27',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1568873405jipmerlogo.png?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Institute of Post Graduate Medical Education and Research - [JIPMER], Pondicherry',
        ranking: '2 out of 16',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '2 out of 92',
        streams: 'Overall'
      }
    ],
    'NIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch',
        name: 'Hindu College, New Delhi',
        ranking: '1 out of 300',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491826680logo.png?h=30&w=30&mode=stretch',
        name: 'Indira Gandhi National Open University - [IGNOU], New Delhi',
        ranking: '1 out of 3',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '1 out of 200',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch',
        name: 'Miranda House, New Delhi',
        ranking: '2 out of 300',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '2 out of 200',
        streams: 'Overall'
      }
    ],
    'Outlook': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1694591282Screenshot20230913131538.jpg?h=30&w=30&mode=stretch',
        name: 'XIMB, Bhubaneswar',
        ranking: '1 out of 52',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491826680logo.png?h=30&w=30&mode=stretch',
        name: 'Indira Gandhi National Open University - [IGNOU], New Delhi',
        ranking: '1 out of 10',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1733402763Screenshot20241205181546.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Centre for Distance Learning - [SCDL], Pune',
        ranking: '1 out of 10',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1618823976Logo.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Institute of Business Management - [SIBM], Pune',
        ranking: '2 out of 52',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1503981917vturesultsfacebook.jpg?h=30&w=30&mode=stretch',
        name: 'Visvesvaraya Technological University - [VTU], Belgaum',
        ranking: '2 out of 10',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1629546017amityicon.png?h=30&w=30&mode=stretch',
        name: 'Amity University Online, Noida',
        ranking: '2 out of 10',
        streams: 'Overall'
      }
    ],
    'IIRF': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14718585975.png?h=30&w=30&mode=stretch',
        name: 'Ashoka University, Sonepat',
        ranking: '1 out of 160',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14915691701461581754JawaharlalNehruUniversitylogo.jpg?h=30&w=30&mode=stretch',
        name: 'Jawaharlal Nehru University - [JNU], New Delhi',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/16684977553060894074853420402648917847635275206136304n.png?h=30&w=30&mode=stretch',
        name: 'Dhirubhai Ambani Institute of Information and Communication Technology - [DA-IICT], Gandhinagar',
        ranking: '2 out of 160',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1491817267UniversityofDelhi.png?h=30&w=30&mode=stretch',
        name: 'Delhi University - [DU], New Delhi',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch',
        name: 'Banaras Hindu University - [BHU], Varanasi',
        ranking: '3 out of 50',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1618464251Screenshot20210415102424.png?h=30&w=30&mode=stretch',
        name: 'Shiv Nadar University, Chennai',
        ranking: '3 out of 160',
        streams: 'Overall'
      }
    ],
    'TOI': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408967753iim.jpg?h=30&w=30&mode=stretch',
        name: 'IIMK - Indian Institute of Management, Kozhikode',
        ranking: '1 out of 100',
        streams: 'Management'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504523545logo.png?h=30&w=30&mode=stretch',
        name: 'Mount Carmel College - [MCC], Bangalore',
        ranking: '1 out of 70',
        streams: 'Management'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1727164925Untitled.png?h=30&w=30&mode=stretch',
        name: 'SP Jain [SPJIMR], Mumbai',
        ranking: '2 out of 100',
        streams: 'Management'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1693997827channels4profile.jpg?h=30&w=30&mode=stretch',
        name: 'KIIT School of Management - [KSOM], Bhubaneswar',
        ranking: '2 out of 70',
        streams: 'Management'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1643442993logo6.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Centre for Management Studies - [SCMS], Pune',
        ranking: '2 out of 70',
        streams: 'Management'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1618823976Logo.png?h=30&w=30&mode=stretch',
        name: 'Symbiosis Institute of Business Management - [SIBM], Pune',
        ranking: '3 out of 100',
        streams: 'Management'
      }
    ],
    'NIRF Innovation': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Bombay - Indian Institute of Technology - [IITB], Mumbai',
        ranking: '1 out of 50',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Madras - Indian Institute of Technology - [IITM], Chennai',
        ranking: '2 out of 50',
        streams: 'Overall'
      },
      {
        id: 3,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch',
        name: 'IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad',
        ranking: '3 out of 50',
        streams: 'Overall'
      },
      {
        id: 4,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/139486567811.png?h=30&w=30&mode=stretch',
        name: 'Indian Institute of Science - [IISc], Bangalore',
        ranking: '4 out of 50',
        streams: 'Overall'
      },
      {
        id: 5,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch',
        name: 'IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur',
        ranking: '5 out of 50',
        streams: 'Overall'
      },
      {
        id: 6,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch',
        name: 'IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee',
        ranking: '6 out of 50',
        streams: 'Overall'
      }
    ]
  }
};

const CollegeRanking = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedAgency, setSelectedAgency] = useState('Indiatoday');

  const handleYearChange = (year) => {
    setSelectedYear(year);
    // Reset to first agency if current agency doesn't exist in new year
    if (!collegeDataByYear[year][selectedAgency]) {
      setSelectedAgency(Object.keys(collegeDataByYear[year])[0]);
    }
  };

  const getAvailableAgencies = () => {
    return rankingAgencies;
  };

  const getCurrentColleges = () => {
    return collegeDataByYear[selectedYear]?.[selectedAgency] || [];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>College Ranking {selectedYear}-{Number(selectedYear) + 1}</Text>

      <View style={styles.filterContainer}>
        <View style={styles.pickerWrapper}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedYear}
              onValueChange={handleYearChange}
              style={styles.picker}
              dropdownIconColor="transparent"
            >
              {rankingYears.map((year) => (
                <Picker.Item 
                  key={year} 
                  label={`Ranking ${year}`} 
                  value={year}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
          <AntDesign 
            name="caretdown" 
            size={12} 
            color="#666" 
            style={styles.pickerIcon}
          />
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
        >
          {getAvailableAgencies().map((agency) => (
            <TouchableOpacity
              key={agency}
              style={[
                styles.tab,
                selectedAgency === agency && styles.activeTab
              ]}
              onPress={() => setSelectedAgency(agency)}
            >
              <Text style={[
                styles.tabText,
                selectedAgency === agency && styles.activeTabText
              ]}>
                {agency}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <View style={[styles.headerCell, styles.collegeCell]}>
            <Text>College</Text>
          </View>
          <View style={[styles.headerCell, styles.rankingCell]}>
            <Text>Ranking</Text>
          </View>
          <View style={[styles.headerCell, styles.streamsCell]}>
            <Text>Streams</Text>
          </View>
        </View>

        <ScrollView style={styles.tableBody}>
          {getCurrentColleges().map((college) => (
            <View key={college.id} style={styles.tableRow}>
              <View style={[styles.cell, styles.collegeCell]}>
                <Image 
                  source={{ uri: college.logo }} 
                  style={styles.collegeLogo}
                />
                <Text style={styles.collegeName} numberOfLines={2}>
                  {college.name}
                </Text>
              </View>
              <Text style={[styles.cell, styles.rankingCell]}>
                {college.ranking}
              </Text>
              <Text style={[styles.cell, styles.streamsCell]}>
                {college.streams}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 16,
  },
  pickerWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 50,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    color: '#333',
  },
  pickerItem: {
    fontSize: 14,
    color: '#333',
  },
  pickerIcon: {
    position: 'absolute',
    right: 12,
    top: 18,
    zIndex: 1,
  },
  tabsContainer: {
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#666',
    fontSize: 14,
  },
  activeTabText: {
    color: '#FFF',
  },
  tableContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    height: 50,
    alignItems: 'center',
  },
  headerCell: {
    fontWeight: '600',
    color: '#333',
    padding: 12,
  },
  tableBody: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    minHeight: 80,
    paddingVertical: 8,
    alignItems: 'center',
  },
  cell: {
    padding: 12,
  },
  collegeCell: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  rankingCell: {
    flex: 1,
    paddingRight: 8,
  },
  streamsCell: {
    flex: 1,
    paddingRight: 8,
  },
  collegeLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  collegeName: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    flexWrap: 'wrap',
  }
});

export default CollegeRanking;
