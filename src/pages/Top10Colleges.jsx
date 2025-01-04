import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Top10Colleges = () => {
  const [activeTab, setActiveTab] = useState("BE/B.Tech");

  const tabs = ["BE/B.Tech", "MBA/PGDM", "MBBS", "ME/M.Tech", "B.Sc", "BA", "B.Com", "BCA", "BBA/BMS", "B.Sc (Nursing)"];

  const data = {
    'BE/B.Tech': [
      {
        rank: '#1',
        college: {
          name: 'IIT Madras - Indian Institute of Technology - [IITM]',
          location: 'Chennai,Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch',
          rating: '5/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 200 in India 2024'
        },
        cutoff: {
          exam: 'JEE Advanced 2024',
          score: '85'
        },
        applicationDeadline: '27 Apr - 18 Jun 2024',
        fees: {
          amount: '₹2,42,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIT Delhi - Indian Institute of Technology - [IITD]',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col27802.gif?h=71.17&w=71.17&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 200 in India 2024'
        },
        cutoff: {
          exam: 'JEE Advanced 2024',
          score: '83'
        },
        applicationDeadline: '15 May - 30 Jun 2024',
        fees: {
          amount: '₹2,35,000',
          type: '1st Year Fees'
        }
      }
    ],
    'MBA/PGDM': [
      {
        rank: '#1',
        college: {
          name: 'IIM Ahmedabad - Indian Institute of Management',
          location: 'Ahmedabad,Gujarat',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=71.17&w=71.17&mode=stretch',
          rating: '5/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '99'
        },
        applicationDeadline: '15 Jan - 28 Feb 2024',
        fees: {
          amount: '₹23,00,000',
          type: 'Total Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIM Bangalore - Indian Institute of Management',
          location: 'Bangalore,Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col30730.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'CAT 2024',
          score: '98'
        },
        applicationDeadline: '20 Jan - 15 Mar 2024',
        fees: {
          amount: '₹22,00,000',
          type: 'Total Fees'
        }
      }
    ],
    'MBBS': [
      {
        rank: '#1',
        college: {
          name: 'AIIMS Delhi - All India Institute of Medical Sciences',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '5/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 150 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '720'
        },
        applicationDeadline: '1 May - 30 Jun 2024',
        fees: {
          amount: '₹1,28,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'JIPMER - Jawaharlal Institute of Postgraduate Medical Education & Research',
          location: 'Puducherry',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1568873405jipmerlogo.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 150 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '715'
        },
        applicationDeadline: '10 May - 25 Jun 2024',
        fees: {
          amount: '₹1,35,000',
          type: '1st Year Fees'
        }
      }
    ],
    'ME/M.Tech': [
      {
        rank: '#1',
        college: {
          name: 'IIT Bombay - Indian Institute of Technology',
          location: 'Mumbai,Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'GATE 2024',
          score: '85'
        },
        applicationDeadline: '1 Apr - 30 May 2024',
        fees: {
          amount: '₹2,50,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'IIT Kanpur - Indian Institute of Technology',
          location: 'Kanpur,Uttar Pradesh',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'GATE 2024',
          score: '83'
        },
        applicationDeadline: '15 Apr - 15 Jun 2024',
        fees: {
          amount: '₹2,45,000',
          type: '1st Year Fees'
        }
      }
    ],
    'B.Sc': [
      {
        rank: '#1',
        college: {
          name: 'St. Stephens College',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14919074881412841375Logo.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'Cut off 2024',
          score: '98'
        },
        applicationDeadline: '1 Jun - 30 Jul 2024',
        fees: {
          amount: '₹85,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Miranda House University of Delhi',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'Cut off 2024',
          score: '97'
        },
        applicationDeadline: '5 Jun - 25 Jul 2024',
        fees: {
          amount: '₹82,000',
          type: '1st Year Fees'
        }
      }
    ],
    'BA': [
      {
        rank: '#1',
        college: {
          name: 'Lady Shri Ram College for Women',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'Cut off 2024',
          score: '98'
        },
        applicationDeadline: '1 Jun - 31 Jul 2024',
        fees: {
          amount: '₹75,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'St. Xavier\'s College',
          location: 'Mumbai,Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1504695740logo.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'Cut off 2024',
          score: '96'
        },
        applicationDeadline: '10 Jun - 25 Jul 2024',
        fees: {
          amount: '₹80,000',
          type: '1st Year Fees'
        }
      }
    ],
    'B.Com': [
      {
        rank: '#1',
        college: {
          name: 'Shri Ram College of Commerce',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/14916429701410765919srcclogo.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'Cut off 2024',
          score: '98'
        },
        applicationDeadline: '1 Jun - 31 Jul 2024',
        fees: {
          amount: '₹85,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Lady Shri Ram College for Women',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 100 in India 2024'
        },
        cutoff: {
          exam: 'Cut off 2024',
          score: '97'
        },
        applicationDeadline: '5 Jun - 25 Jul 2024',
        fees: {
          amount: '₹82,000',
          type: '1st Year Fees'
        }
      }
    ],
    'BCA': [
      {
        rank: '#1',
        college: {
          name: 'Christ University',
          location: 'Bangalore,Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'CUET 2024',
          score: '95'
        },
        applicationDeadline: '1 May - 30 Jun 2024',
        fees: {
          amount: '₹1,25,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Symbiosis Institute of Technology',
          location: 'Pune,Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1587476664logo3.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.6/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'SET 2024',
          score: '93'
        },
        applicationDeadline: '15 May - 15 Jul 2024',
        fees: {
          amount: '₹1,35,000',
          type: '1st Year Fees'
        }
      }
    ],
    'BBA/BMS': [
      {
        rank: '#1',
        college: {
          name: 'Christ University',
          location: 'Bangalore,Karnataka',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 75 in India 2024'
        },
        cutoff: {
          exam: 'CUET 2024',
          score: '96'
        },
        applicationDeadline: '1 May - 30 Jun 2024',
        fees: {
          amount: '₹2,50,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Symbiosis Center for Management Studies',
          location: 'Pune,Maharashtra',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1563441890Screenshotfrom20190718144614.png?h=71.17&w=71.17&mode=stretch',
          rating: '4.7/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 75 in India 2024'
        },
        cutoff: {
          exam: 'SET 2024',
          score: '94'
        },
        applicationDeadline: '15 May - 15 Jul 2024',
        fees: {
          amount: '₹2,75,000',
          type: '1st Year Fees'
        }
      }
    ],
    'B.Sc (Nursing)': [
      {
        rank: '#1',
        college: {
          name: 'All India Institute of Medical Sciences',
          location: 'New Delhi,Delhi NCR',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.9/5'
        },
        ranking: {
          position: '#1',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '95'
        },
        applicationDeadline: '1 May - 30 Jun 2024',
        fees: {
          amount: '₹1,20,000',
          type: '1st Year Fees'
        }
      },
      {
        rank: '#2',
        college: {
          name: 'Christian Medical College',
          location: 'Vellore,Tamil Nadu',
          logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1458024878logo.jpg?h=71.17&w=71.17&mode=stretch',
          rating: '4.8/5'
        },
        ranking: {
          position: '#2',
          detail: 'out of 50 in India 2024'
        },
        cutoff: {
          exam: 'NEET 2024',
          score: '93'
        },
        applicationDeadline: '15 May - 15 Jul 2024',
        fees: {
          amount: '₹1,25,000',
          type: '1st Year Fees'
        }
      }
    ]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 10 Colleges</Text>
      
      {/* Tabs Section */}
      <View style={styles.tabsWrapper}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.tabsContainer}
          contentContainerStyle={styles.tabsContent}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Table Section */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tableWrapper}
      >
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, styles.rankWidth]}>Rank</Text>
            <Text style={[styles.headerCell, styles.collegeWidth]}>College</Text>
            <Text style={[styles.headerCell, styles.rankingWidth]}>Ranking</Text>
            <Text style={[styles.headerCell, styles.cutoffWidth]}>Cutoff</Text>
            <Text style={[styles.headerCell, styles.deadlineWidth]}>Deadline</Text>
            <Text style={[styles.headerCell, styles.feesWidth]}>Fees</Text>
          </View>

          {/* Table Body */}
          <ScrollView style={styles.tableBody}>
            {data[activeTab]?.map((item, index) => (
              <View key={index} style={[styles.row, index % 2 === 0 && styles.evenRow]}>
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
                  <Text style={styles.rankingPosition}>{item.ranking.position}</Text>
                  <Text style={styles.rankingDetail}>{item.ranking.detail}</Text>
                </View>

                <View style={[styles.cell, styles.cutoffWidth]}>
                  <Text style={styles.cutoffExam}>{item.cutoff.exam}</Text>
                  <Text style={styles.cutoffScore}>{item.cutoff.score}</Text>
                </View>

                <Text style={[styles.cell, styles.deadlineWidth]}>
                  {item.applicationDeadline}
                </Text>

                <View style={[styles.cell, styles.feesWidth]}>
                  <Text style={styles.feesAmount}>{item.fees.amount}</Text>
                  <Text style={styles.feesType}>{item.fees.type}</Text>
                </View>
              </View>
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
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    paddingHorizontal: 16,
    color: '#333',
  },
  tabsWrapper: {
    marginBottom: 16,
  },
  tabsContainer: {
    paddingHorizontal: 16,
  },
  tabsContent: {
    paddingRight: 16,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: "#007bff",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
  },
  tableWrapper: {
    flex: 1,
  },
  tableContainer: {
    minWidth: width,
    borderRadius: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerCell: {
    padding: 12,
    fontWeight: "600",
    color: "#333",
  },
  tableBody: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  evenRow: {
    backgroundColor: '#f8f9fa',
  },
  cell: {
    padding: 12,
    justifyContent: 'center',
  },
  // Width configurations
  rankWidth: { width: 60 },
  collegeWidth: { width: 280 },
  rankingWidth: { width: 150 },
  cutoffWidth: { width: 120 },
  deadlineWidth: { width: 150 },
  feesWidth: { width: 120 },
  
  // College cell specific styles
  collegeCell: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#f0f0f0',
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  
  // Other cell specific styles
  rankingPosition: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  rankingDetail: {
    fontSize: 12,
    color: '#666',
  },
  cutoffExam: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  cutoffScore: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  feesAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  feesType: {
    fontSize: 12,
    color: '#666',
  },
});

export default Top10Colleges;
