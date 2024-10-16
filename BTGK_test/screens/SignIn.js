// SignInScreen.js
import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const SignIn = () => {
  const [value, setValue] = useState('');  // Phone number value
  const [formattedValue, setFormattedValue] = useState('');  // Formatted phone number value
  const [valid, setValid] = useState(false);  // To check if the phone number is valid
  const [showMessage, setShowMessage] = useState(false);  // Whether to show the validation message
  const phoneInput = useRef(null);  // Reference to the phone input field

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ImageBackground source={bgImage2} style={styles.backgroundImage1}>
          {/* Background image at the top */}
        </ImageBackground>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Get your groceries with nectar</Text>

          {/* Country Code and Input */}
          <View style={styles.countryInputContainer}>
            {/* Phone Number Input using the react-native-phone-number-input package */}
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="VN"  // Default country code
              layout="first"
              onChangeText={(text) => setValue(text)}  // Updates the value
              onChangeFormattedText={(text) => setFormattedValue(text)}  // Updates formatted number
              withShadow
              autoFocus
            />
          </View>
        </View>

        {/* Button to check phone number validity */}
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            if (phoneInput.current) {
              const isValid = phoneInput.current.isValidNumber(value);
              setValid(isValid);
              setShowMessage(true);  // Show the validation message
            }
          }}
        >
          <Text style={styles.checkButtonText}>Check Phone Number</Text>
        </TouchableOpacity>

        {/* Display validation result */}
        {showMessage && (
          <View style={styles.message}>
            <Text>Phone Number: {value}</Text>
            <Text>Formatted Number: {formattedValue}</Text>
            <Text>Is Valid: {valid ? 'Yes' : 'No'}</Text>
          </View>
        )}

        {/* Divider */}
        <Text style={styles.dividerText}>Or connect with social media</Text>

        {/* Google and Facebook Buttons */}
        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          <Ionicons name="logo-facebook" size={24} color="white" />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage1: {
    width: 413.37,
    height: 374.15,
    resizeMode: 'cover',  
    top: 0.3,         
  },
  textContainer: {
    marginVertical: 20,
  },
  titleText: {
    fontSize: 26,               
    fontWeight: '600',          
    lineHeight: 29,                  
    color: '#333',              
    width: 250,                 
    marginBottom: 20,
  },
  countryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dividerText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 10,
    height: 67,
    borderRadius: 19,
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 10,
    height: 67,
    borderRadius: 19,
  },
  socialText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  checkButton: {
    backgroundColor: '#53B175',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});

export default SignIn;
