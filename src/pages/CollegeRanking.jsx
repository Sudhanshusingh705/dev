import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

const rankingYears = ['2024', '2023', '2022', '2021'];
const rankingAgencies = [
  'Indiatoday', 'The Week', 'NIRF', 'Outlook', 'IIRF', 'TOI', 'NIRF Innovation'
];

// Data organized by year and agency
const collegeDataByYear = {
  '2024': {
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch',
        name: 'IIM Ahmedabad',
        ranking: '1 out of 60',
        streams: 'Management'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch',
        name: 'IIM Bangalore',
        ranking: '2 out of 60',
        streams: 'Management'
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=40&w=40&mode=stretch',
        name: 'Chandigarh University',
        ranking: '1 out of 80',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/159775539949755996101568568649397877221633486954692608n.png?h=40&w=40&mode=stretch',
        name: 'VIT Vellore',
        ranking: '2 out of 80',
        streams: 'Overall'
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
  '2023': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=40&w=40&mode=stretch',
        name: 'IIT Delhi',
        ranking: '1 out of 44',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=40&w=40&mode=stretch',
        name: 'IIT Bombay',
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch',
        name: 'IIM Ahmedabad',
        ranking: '1 out of 60',
        streams: 'Management'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch',
        name: 'IIM Bangalore',
        ranking: '2 out of 60',
        streams: 'Management'
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=40&w=40&mode=stretch',
        name: 'Chandigarh University',
        ranking: '1 out of 80',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/159775539949755996101568568649397877221633486954692608n.png?h=40&w=40&mode=stretch',
        name: 'VIT Vellore',
        ranking: '2 out of 80',
        streams: 'Overall'
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
  '2022': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=40&w=40&mode=stretch',
        name: 'IIT Madras',
        ranking: '1 out of 44',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=40&w=40&mode=stretch',
        name: 'IIT Kanpur',
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch',
        name: 'IIM Ahmedabad',
        ranking: '1 out of 60',
        streams: 'Management'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch',
        name: 'IIM Bangalore',
        ranking: '2 out of 60',
        streams: 'Management'
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=40&w=40&mode=stretch',
        name: 'Chandigarh University',
        ranking: '1 out of 80',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/159775539949755996101568568649397877221633486954692608n.png?h=40&w=40&mode=stretch',
        name: 'VIT Vellore',
        ranking: '2 out of 80',
        streams: 'Overall'
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
  '2021': {
    'Indiatoday': [
      {
        id: 1,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch',
        name: 'IIM Ahmedabad',
        ranking: '1 out of 44',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch',
        name: 'IIM Bangalore',
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch',
        name: 'IIM Ahmedabad',
        ranking: '1 out of 60',
        streams: 'Management'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch',
        name: 'IIM Bangalore',
        ranking: '2 out of 60',
        streams: 'Management'
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
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=40&w=40&mode=stretch',
        name: 'Chandigarh University',
        ranking: '1 out of 80',
        streams: 'Overall'
      },
      {
        id: 2,
        logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/159775539949755996101568568649397877221633486954692608n.png?h=40&w=40&mode=stretch',
        name: 'VIT Vellore',
        ranking: '2 out of 80',
        streams: 'Overall'
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
  }
};

const CollegeRanking = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
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
          <Text style={[styles.headerCell, styles.collegeCell]}>College</Text>
          <Text style={[styles.headerCell, styles.rankingCell]}>Ranking</Text>
          <Text style={[styles.headerCell, styles.streamsCell]}>Streams</Text>
        </View>

        <ScrollView style={styles.tableBody}>
          {getCurrentColleges().map((college) => (
            <View key={college.id} style={styles.tableRow}>
              <View style={[styles.cell, styles.collegeCell]}>
                <Image 
                  source={{ uri: college.logo }} 
                  style={styles.collegeLogo}
                />
                <Text style={styles.collegeName}>{college.name}</Text>
              </View>
              <Text style={[styles.cell, styles.rankingCell]}>{college.ranking}</Text>
              <Text style={[styles.cell, styles.streamsCell]}>{college.streams}</Text>
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
    marginTop: -4,
  },
  pickerItem: {
    fontSize: 14,
    color: '#333',
    height: 50,
  },
  pickerIcon: {
    position: 'absolute',
    right: 12,
    top: 18,
    zIndex: 1,
    pointerEvents: 'none',
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
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    padding: 12,
  },
  headerCell: {
    fontWeight: '600',
    color: '#333',
  },
  tableBody: {
    maxHeight: 400,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    padding: 12,
  },
  cell: {
    justifyContent: 'center',
  },
  collegeCell: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankingCell: {
    flex: 1,
  },
  streamsCell: {
    flex: 1,
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
  },
});

export default CollegeRanking;
