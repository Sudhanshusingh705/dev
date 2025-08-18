import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl,
  TextInput,
  Linking
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL, createAuthHeader } from '../api';
import { Card, Divider, SearchBar } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';;
import moment from 'moment';
import NetInfo from '@react-native-community/netinfo';

const NewsletterSubscriptions = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    totalSubscribers: 0,
    lastWeekSubscribers: 0,
    lastMonthSubscribers: 0
  });
  const [tokenError, setTokenError] = useState(false);

  // Fetch subscribers on component mount
  useEffect(() => {
    fetchSubscribers();
    fetchStats();
  }, []);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      // Check network connectivity
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        // Try to get cached subscribers if offline
        const cachedData = await AsyncStorage.getItem('subscribersData');
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setSubscribers(parsedData.subscribers || []);
          setFilteredSubscribers(parsedData.subscribers || []);
          setStats(parsedData.stats || {
            totalSubscribers: 0,
            lastWeekSubscribers: 0,
            lastMonthSubscribers: 0
          });
          Alert.alert(
            'Offline Mode',
            'You are viewing cached subscriber data. Connect to the internet to get the latest data.',
            [{ text: 'OK' }]
          );
        } else {
          Alert.alert(
            'No Internet Connection',
            'Please check your internet connection and try again.',
            [{ text: 'OK' }]
          );
        }
        setLoading(false);
        return;
      }

      // Get auth token
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        setTokenError(true);
        setLoading(false);
        return;
      }

      // Fetch subscribers
      const subscribersResponse = await axios.get(`${API_BASE_URL}/newsletter/subscribers`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        timeout: 10000
      });

      // Fetch stats
      const statsResponse = await axios.get(`${API_BASE_URL}/newsletter/stats`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        timeout: 10000
      });

      if (subscribersResponse.data.success && statsResponse.data.success) {
        setSubscribers(subscribersResponse.data.data);
        setFilteredSubscribers(subscribersResponse.data.data);
        setStats(statsResponse.data.stats);
        
        // Cache the data for offline access
        await AsyncStorage.setItem('subscribersData', JSON.stringify({
          subscribers: subscribersResponse.data.data,
          stats: statsResponse.data.stats,
          timestamp: new Date().toISOString()
        }));
      } else {
        Alert.alert(
          'Error',
          'Failed to fetch subscribers. Please try again later.',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      
      // Handle unauthorized error
      if (error.response && error.response.status === 401) {
        setTokenError(true);
      } else {
        Alert.alert(
          'Error',
          'Failed to fetch subscribers. Please try again later.',
          [{ text: 'OK' }]
        );
      }
      
      // Try to get cached data on error
      const cachedData = await AsyncStorage.getItem('subscribersData');
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setSubscribers(parsedData.subscribers || []);
        setFilteredSubscribers(parsedData.subscribers || []);
        setStats(parsedData.stats || {
          totalSubscribers: 0,
          lastWeekSubscribers: 0,
          lastMonthSubscribers: 0
        });
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const fetchStats = async () => {
    try {
      // Get auth token for authenticated request
      const token = await AsyncStorage.getItem('authToken');
      
      if (!token) {
        return;
      }
      
      const response = await axios.get(`${API_BASE_URL}/newsletter/stats`, {
        headers: {
          ...createAuthHeader(token),
          'Accept': 'application/json'
        },
        timeout: 10000
      });
      
      if (response.data.success) {
        setStats(response.data.stats);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchSubscribers();
    fetchStats();
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    
    if (!text.trim()) {
      setFilteredSubscribers(subscribers);
      return;
    }
    
    const filtered = subscribers.filter(
      item => 
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.email.toLowerCase().includes(text.toLowerCase()) ||
        item.phone.includes(text) ||
        item.course.toLowerCase().includes(text.toLowerCase())
    );
    
    setFilteredSubscribers(filtered);
  };

  const formatDate = (dateString) => {
    return moment(dateString).format('DD MMM YYYY, h:mm a');
  };

  const renderSubscriber = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
      </View>
      
      <Divider style={styles.divider} />
      
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={18} color="#666" />
          <Text style={styles.infoText}>{item.email}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <MaterialIcons name="phone" size={18} color="#666" />
          <Text style={styles.infoText}>{item.phone}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <MaterialIcons name="school" size={18} color="#666" />
          <Text style={styles.infoText}>{item.course}</Text>
        </View>
      </View>
      
      <View style={styles.cardFooter}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleCall(item.phone)}
        >
          <MaterialIcons name="call" size={18} color="#fff" />
          <Text style={styles.actionButtonText}>Call</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: '#4CAF50' }]}
          onPress={() => handleEmail(item.email)}
        >
          <MaterialIcons name="email" size={18} color="#fff" />
          <Text style={styles.actionButtonText}>Email</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  const handleCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Loading subscribers...</Text>
      </View>
    );
  }

  if (tokenError) {
    return (
      <View style={styles.errorContainer}>
        <MaterialIcons name="error-outline" size={70} color="#dc3545" />
        <Text style={styles.errorTitle}>Authentication Error</Text>
        <Text style={styles.errorText}>
          You need to be logged in as an admin to view this page.
        </Text>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => {
            // Navigate to login screen or handle as needed
            Alert.alert('Authentication Required', 'Please log in as admin to access this feature.');
          }}
        >
          <Text style={styles.loginButtonText}>Login as Admin</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Newsletter Subscribers</Text>
      
      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.totalSubscribers}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.lastWeekSubscribers}</Text>
          <Text style={styles.statLabel}>This Week</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.lastMonthSubscribers}</Text>
          <Text style={styles.statLabel}>This Month</Text>
        </View>
      </View>
      
      {/* Search Bar */}
      <SearchBar
        placeholder="Search by name, email, phone or course..."
        onChangeText={handleSearch}
        value={searchQuery}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        round
        lightTheme
      />
      
      {error ? (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error" size={36} color="#dc3545" />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={fetchSubscribers}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : filteredSubscribers.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="inbox" size={48} color="#666" />
          <Text style={styles.emptyText}>
            {searchQuery ? 'No subscribers match your search' : 'No subscribers yet'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredSubscribers}
          renderItem={renderSubscriber}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.listContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    width: '31%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginVertical: 8,
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  divider: {
    marginVertical: 8,
  },
  infoContainer: {
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066cc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#dc3545',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewsletterSubscriptions; 