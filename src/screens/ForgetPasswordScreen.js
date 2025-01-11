import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import API from '../services/api';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async () => {
    try {
      const response = await API.post('/forget-password', { email });
      Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View>
      <Text>Forget Password</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Send Reset Link" onPress={handleForgetPassword} />
    </View>
  );
};

export default ForgetPasswordScreen;
