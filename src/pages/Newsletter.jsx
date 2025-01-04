import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

const courseOptions = [
  'Select Course',
  'Engineering',
  'Medical',
  'Management',
  'Arts',
  'Science',
  'Commerce',
  'Law',
  'Design',
  'Education'
];

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Select Course');
  const [mobileError, setMobileError] = useState('');
  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const validateMobile = (number) => {
    // Basic validation for Indian mobile numbers
    const mobileRegex = /^[6-9]\d{9}$/;
    
    if (!mobileRegex.test(number)) {
      return false;
    }

    // Check for repeated digits (more than 7 times) to prevent numbers like 9999999999
    const repeatedDigits = /(.)\1{7,}/;
    if (repeatedDigits.test(number)) {
      setMobileError('Please enter a valid mobile number. Avoid repeated digits.');
      return false;
    }

    // Check for sequential numbers (like 1234567890 or 9876543210)
    const sequential = ['0123456789', '9876543210'];
    if (sequential.some(seq => number.includes(seq))) {
      setMobileError('Please enter a valid mobile number. Avoid sequential digits.');
      return false;
    }

    // Check if all digits are same (like 8888888888)
    if (new Set(number.split('')).size === 1) {
      setMobileError('Please enter a valid mobile number. Avoid using same digit.');
      return false;
    }

    return true;
  };

  const handleMobileChange = (text) => {
    setMobile(text);
    if (text.length > 0) {
      if (!validateMobile(text)) {
        if (!text.match(/^[6-9]\d{0,9}$/)) {
          setMobileError('Mobile number should start with 6-9 and contain only digits');
        }
      } else {
        setMobileError('');
      }
    } else {
      setMobileError('');
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }

    // Check for common email domains
    const validDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'live.com',
      'rediffmail.com',
      'aol.com',
      'edu',
      'ac.in'
    ];

    const domain = email.split('@')[1].toLowerCase();
    const isValidDomain = validDomains.some(validDomain => 
      domain.includes(validDomain)
    );

    if (!isValidDomain) {
      setEmailError('Please enter a valid email domain');
      return false;
    }

    // Additional checks
    if (email.length > 50) {
      setEmailError('Email address is too long');
      return false;
    }

    if (email.split('@')[0].length < 3) {
      setEmailError('Username part of email is too short');
      return false;
    }

    // Check for consecutive special characters
    if (/[.]{2,}|[-]{2,}|[_]{2,}/.test(email)) {
      setEmailError('Email cannot contain consecutive special characters');
      return false;
    }

    setEmailError('');
    return true;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.length > 0) {
      validateEmail(text);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async () => {
    // Validate both email and mobile before submission
    if (!validateEmail(email) || !validateMobile(mobile) || selectedCourse === 'Select Course') {
      setStatus('Please fill all fields correctly');
      return;
    }

    try {
      setStatus('Success! Thank you for subscribing.');
      setEmail('');
      setMobile('');
      setSelectedCourse('Select Course');
      setEmailError('');
      setMobileError('');
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  // Combine all validation states in a single useMemo
  const validationState = useMemo(() => {
    const isEmailValid = email && validateEmail(email);
    const isMobileValid = mobile && validateMobile(mobile);
    const isFormValid = isEmailValid && isMobileValid && selectedCourse !== 'Select Course';

    return {
      isEmailValid,
      isMobileValid,
      isFormValid,
      emailPlaceholder: !email 
        ? "Enter Your Email"
        : emailError 
        ? emailError 
        : isEmailValid 
        ? "✓ Valid email" 
        : "Enter a valid email address",
      mobilePlaceholder: !mobile 
        ? "Enter Your Mobile"
        : mobileError 
        ? mobileError 
        : isMobileValid 
        ? "✓ Valid mobile number" 
        : "Enter a valid mobile number",
      emailStyle: {
        borderColor: emailError ? '#ff4444' : isEmailValid ? '#00C851' : '#ddd',
        marginBottom: emailError ? 0 : 8
      },
      mobileStyle: {
        borderColor: mobileError ? '#ff4444' : isMobileValid ? '#00C851' : '#ddd',
        marginBottom: mobileError ? 0 : 8
      },
      emailIconColor: emailError ? '#ff4444' : isEmailValid ? '#00C851' : '#666',
      mobileIconColor: mobileError ? '#ff4444' : isMobileValid ? '#00C851' : '#666'
    };
  }, [email, mobile, selectedCourse, emailError, mobileError]);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe To Our News Letter</Text>
      <Text style={styles.subtitle}>
        Get College Notifications, Exam Notifications and News Updates
      </Text>

      <View style={styles.formContainer}>
        <View>
          <View style={[styles.inputContainer, validationState.emailStyle]}>
            <MaterialIcons 
              name="email" 
              size={20} 
              color={validationState.emailIconColor} 
              style={styles.inputIcon} 
            />
            <TextInput
              style={[
                styles.input,
                emailError && styles.inputError,
                validationState.isEmailValid && styles.inputSuccess
              ]}
              placeholder={validationState.emailPlaceholder}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              placeholderTextColor={emailError ? '#ff4444' : '#666'}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        <View>
          <View style={[styles.inputContainer, validationState.mobileStyle]}>
            <MaterialIcons 
              name="phone" 
              size={20} 
              color={validationState.mobileIconColor} 
              style={styles.inputIcon} 
            />
            <TextInput
              style={[
                styles.input,
                mobileError && styles.inputError,
                validationState.isMobileValid && styles.inputSuccess
              ]}
              placeholder={validationState.mobilePlaceholder}
              value={mobile}
              onChangeText={handleMobileChange}
              keyboardType="phone-pad"
              placeholderTextColor={mobileError ? '#ff4444' : '#666'}
              maxLength={10}
            />
          </View>
          {mobileError ? <Text style={styles.errorText}>{mobileError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="school" size={20} color="#666" style={styles.inputIcon} />
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedCourse}
              onValueChange={(itemValue) => setSelectedCourse(itemValue)}
              style={styles.picker}
              dropdownIconColor="#666"
            >
              {courseOptions.map((course) => (
                <Picker.Item 
                  key={course} 
                  label={course} 
                  value={course}
                  style={styles.pickerItemText}
                />
              ))}
            </Picker>
          </View>
        </View>

        {status ? <Text style={styles.statusText}>{status}</Text> : null}

        <TouchableOpacity 
          style={[
            styles.submitButton,
            !validationState.isFormValid && styles.submitButtonDisabled,
            isPressed && styles.submitButtonPressed
          ]} 
          onPress={handleSubmit}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          disabled={!validationState.isFormValid}
        >
          <Text style={[
            styles.submitButtonText,
            isPressed && styles.submitButtonTextPressed
          ]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 12,
    minHeight: 50,
    marginBottom: 8,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    color: '#333',
    fontSize: 16,
  },
  pickerWrapper: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  picker: {
    flex: 1,
    height: 60,
    color: '#333',
  },
  pickerItemText: {
    fontSize: 16,
    height: 60,
    lineHeight: 60,
    paddingVertical: 10,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
    elevation: 0,
    shadowOpacity: 0,
  },
  submitButtonPressed: {
    backgroundColor: '#0056b3', // Darker shade of primary color
    elevation: 1,
    shadowOpacity: 0.15,
    transform: [{ scale: 0.98 }],
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  submitButtonTextPressed: {
    color: '#fff',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
    marginBottom: 8,
  },
  statusText: {
    textAlign: 'center',
    marginTop: 8,
    color: '#666',
  },
  inputError: {
    color: '#ff4444',
  },
  inputSuccess: {
    color: '#00C851',
  },
});

export default Newsletter;
