import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';;
import axios from 'axios';
import { API_BASE_URL } from '../api';
import NetInfo from '@react-native-community/netinfo';

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
  const [serverStatus, setServerStatus] = useState('online');
  const [errors, setErrors] = useState({});

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.course) newErrors.course = 'Please select a course';

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (formData.email && !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    // First validate form
    if (!validateForm()) {
      Alert.alert('Please Fix Errors', 'Please correct the errors in the form before submitting.');
      return;
    }

    setLoading(true);

    try {
      // Check network connectivity first
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        throw new Error('No internet connection. Please check your network settings and try again.');
      }

      // Make API call to subscribe
      const response = await axios.post(
        `${API_BASE_URL}/newsletter/subscribe`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000 // 10 seconds timeout
        }
      );

      // Check response and handle success
      if (response.data.success) {
        Alert.alert(
          'Success!', 
          'Thank you for subscribing to our newsletter! We will keep you updated with the latest information about your selected course.',
          [{ text: 'OK', onPress: () => resetForm() }]
        );
      } else {
        throw new Error(response.data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
      let errorMessage = 'Failed to subscribe. Please try again.';
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with an error
        errorMessage = error.response.data.message || errorMessage;
        console.log('Error response:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received (timeout, server down)
        errorMessage = 'Cannot reach our servers. Please check your internet connection or try again later.';
        setServerStatus('offline');
      } else if (error.message) {
        // Network error or other issue
        errorMessage = error.message;
      }
      
      Alert.alert('Subscription Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Reset the form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: ''
    });
    setErrors({});
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Subscribe to Our Newsletter</Text>
      <Text style={styles.subtitle}>
        Get the latest updates on courses, college admissions, and educational opportunities
      </Text>
      
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            placeholder="Enter your full name"
            value={formData.name}
            onChangeText={(text) => {
              setFormData({ ...formData, name: text });
              if (errors.name) {
                const newErrors = {...errors};
                delete newErrors.name;
                setErrors(newErrors);
              }
            }}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Enter your email address"
            value={formData.email}
            onChangeText={(text) => {
              setFormData({ ...formData, email: text.toLowerCase() });
              if (errors.email) {
                const newErrors = {...errors};
                delete newErrors.email;
                setErrors(newErrors);
              }
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={[styles.input, errors.phone && styles.inputError]}
            placeholder="Enter your 10-digit phone number"
            value={formData.phone}
            onChangeText={(text) => {
              // Allow only numeric input
              const numericInput = text.replace(/[^0-9]/g, '');
              setFormData({ ...formData, phone: numericInput });
              if (errors.phone) {
                const newErrors = {...errors};
                delete newErrors.phone;
                setErrors(newErrors);
              }
            }}
            keyboardType="numeric"
            maxLength={10}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Select Course</Text>
          <View style={[styles.pickerContainer, errors.course && styles.inputError]}>
            <Picker
              selectedValue={formData.course}
              onValueChange={(itemValue) => {
                setFormData({ ...formData, course: itemValue });
                if (errors.course) {
                  const newErrors = {...errors};
                  delete newErrors.course;
                  setErrors(newErrors);
                }
              }}
              style={styles.picker}
            >
              <Picker.Item label="Select Course" value="" />
              {courseOptions["Popular Courses"].map((course, index) => (
                <Picker.Item key={index} label={course} value={course} />
              ))}
            </Picker>
          </View>
          {errors.course && <Text style={styles.errorText}>{errors.course}</Text>}
        </View>

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.buttonText}>Subscribe</Text>
          )}
        </TouchableOpacity>
        
        <Text style={styles.disclaimerText}>
          By subscribing, you agree to receive emails from us about educational opportunities and updates. You can unsubscribe at any time.
        </Text>
      </View>
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
    marginBottom: 10,
    textAlign: 'center',
    color: '#0066cc',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#666',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default Newsletter;

