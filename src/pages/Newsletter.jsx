import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

const courseOptions = {
  "Popular Courses": [
    "BE/B.Tech - Bachelors (Technology)",
    "MBA/PGDM - Masters (Business Administration)",
    "BBA/BBM - Bachelors (Business Administration)",
    "B.Com - Bachelors (Commerce)",
    "BA - Bachelors (Arts)",
    "MA - Masters (Arts)",
    "MBBS - Bachelors (Medicince and Surgery)",
    "BCA - Bachelors (Computer Applications)",
    "MCA - Masters (Computer Applications)",
    "ME/M.Tech - Masters (Technology)",
    "B.Sc - Bachelors (Science)",
    "M.Sc - Masters (Science)"
  ],
  "Bachelor": [
    "B.Arch - Bachelor (Architecture)",
    "BVSc - Bachelor (Veterinary Sciences)",
    "Bachelor of Animation - Bachelor (Animation)",
    "BSW - Bachelor (Arts)",
    "LLB - Bachelor (Law)",
    "BPH - Bachelor (Medical)",
    "B.F.Sc - Bachelor (Science)",
    "Bachelors (Animation & Graphic Design) - Bachelor (Arts)",
    "B.P.Ed - Bachelor (Education)",
    "BFA - Bachelor (Arts)",
    "BUMS - Bachelor (Medical)",
    "Bachelor of Physiotherapy(BPT) - Bachelor (Medical)",
    "B.Planning - Bachelor (Architecture)",
    "BHMS - Bachelor (Medical)",
    "BBA (Aviation) - Bachelor (Aviation)",
    "MBBS - Bachelors (Medicince and Surgery)",
    "BMM - Bachelor (Mass Communications)",
    "BHM - Bachelor (Hotel Management)",
    "B.Com - Bachelors (Commerce)",
    "B.Des - Bachelor (Design)",
    "B.Ed - Bachelor (Education)",
    "B.Pharm - Bachelor (Pharmacy)",
    "B.Sc - Bachelors (Science)",
    "B.Sc (Agriculture) - Bachelor (Agriculture)",
    "B.Sc (Medicine) - Bachelor (Medical)",
    "B.Sc (Nursing) - Bachelor (Paramedical)",
    "BA - Bachelors (Arts)",
    "Bachelors in Vocational Courses - Bachelor (Vocational Courses)",
    "BAMS - Bachelor (Medical)",
    "BBA/BBM - Bachelors (Business Administration)",
    "BCA - Bachelors (Computer Applications)",
    "BE/B.Tech - Bachelors (Technology)",
    "BDS - Bachelor (Dental)"
  ],
  "Doctorate": [
    "M.Phil/Ph.D in Paramedical - Doctorate (Paramedical)",
    "M.Phil/Ph.D in Medicine - Doctorate (Medical)",
    "M.Phil/Ph.D in Pharmacy - Doctorate (Pharmacy)",
    "M.Phil/Ph.D in Science - Doctorate (Science)",
    "MD - Doctorate (Medical)",
    "Ph.D in Veterinary Science - Doctorate (Veterinary Sciences)",
    "M.Phil/Ph.D in Mass Communication - Doctorate (Mass Communications)",
    "M.Phil/Ph.D in Management - Doctorate (Management)",
    "M.Phil/Ph.D in Law - Doctorate (Law)",
    "M.Phil/Ph.D in Architecture - Doctorate (Architecture)",
    "M.Phil/Ph.D in Arts - Doctorate (Arts)",
    "M.Phil/Ph.D in Commerce - Doctorate (Commerce)",
    "M.Phil/Ph.D in Computer Applications - Doctorate (Computer Applications)",
    "M.Phil/Ph.D in Dental - Doctorate (Dental)",
    "M.Phil/Ph.D in Agriculture - Doctorate (Agriculture)",
    "M.Phil/Ph.D in Design - Doctorate (Design)",
    "M.Phil/Ph.D in Hotel Management - Doctorate (Hotel Management)",
    "M.Phil/Ph.D in Engineering - Doctorate (Engineering)",
    "M.Phil/Ph.D in Education - Doctorate (Education)",
    "D.Litt - Doctorate (Arts)"
  ],
  "Masters": [
    "M.Des - Masters (Design)",
    "M.P.Ed - Masters (Education)",
    "MHA - Masters (Management)",
    "M.Ed - Masters (Education)",
    "M.Com - Masters (Commerce)",
    "Executive MBA - Masters (Management)",
    "MVSc - Masters (Veterinary Sciences)",
    "Master of Animation - Masters (Animation)",
    "M.Ch - Masters (Medical)",
    "M.Arch - Masters (Architecture)",
    "M.F.Sc - Masters (Science)",
    "MPH - Masters (Medical)",
    "LLM - Masters (Law)",
    "MSW - Masters (Arts)",
    "MMS - Masters (Management)",
    "M.Pharm - Masters (Pharmacy)",
    "MS - Masters (Medical)",
    "M.Sc - Masters (Science)",
    "M.Sc (Agriculture) - Masters (Agriculture)",
    "M.Sc (Aviation) - Masters (Aviation)",
    "M.Sc (Medicine) - Masters (Medical)",
    "M.Sc (Nursing) - Masters (Paramedical)",
    "MA - Masters (Arts)",
    "Master of Physiotherapy(MPT) - Masters (Medical)",
    "Masters in Vocational Courses - Masters (Vocational Courses)",
    "MBA/PGDM - Masters (Business Administration)",
    "MCA - Masters (Computer Applications)",
    "MDS - Masters (Dental)",
    "ME/M.Tech - Masters (Technology)",
    "MHM - Masters (Hotel Management)",
    "MMC - Masters (Mass Communications)",
    "M.Planning - Masters (Architecture)"
  ]
};

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'http://192.168.1.11:5000/api/newsletter/subscribe',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000 // 5 seconds timeout
        }
      );
      
      if (response.data.success) {
        Alert.alert('Success', 'Successfully subscribed to newsletter!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: ''
        });
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      
      let errorMessage = 'Failed to subscribe. Please try again.';
      
      if (error.response) {
        // Server responded with an error
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'Cannot connect to server. Please check your internet connection.';
      }
      
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Subscribe to Our Newsletter</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text.toLowerCase() })}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="numeric"
        maxLength={10}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formData.course}
          onValueChange={(itemValue) => setFormData({ ...formData, course: itemValue })}
          style={styles.picker}
        >
          <Picker.Item label="Select Course" value="" />
          {courseOptions["Popular Courses"].map((course, index) => (
            <Picker.Item key={index} label={course} value={course} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Newsletter;

