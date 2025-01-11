import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import API from '../services/api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await API.post('/login', { email, password });
      const { token } = response.data;

      // Store the token (AsyncStorage for React Native)
      localStorage.setItem('adminToken', token); // Replace with AsyncStorage for RN

      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('AdminDashboard');
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <View>
      <Text>Admin Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
