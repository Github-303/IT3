// OnboardingScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// Import the background image and carrot icon
const bgImage = require('../assets/bg1.png');
const carrotIcon = require('../assets/Carot.png');

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View style={styles.welcomeTextContainer}>
          
          {/* Carrot Icon */}
          <Image source={carrotIcon} style={styles.carrotIcon} />
          
          {/* Welcome Text */}
          <Text style={styles.welcomeTitle}>Welcome{'\n'} to our store</Text>
          <Text style={styles.welcomeSubtitle}>Get your groceries in as fast as one hour</Text>

          {/* Get Started Button */}
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('SignIn')}  // Navigating to SignIn screen when clicked
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// Styles (same as you provided)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  welcomeTextContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50, 
  },
  carrotIcon: {
    width: 50,       
    height: 50,       
    marginBottom: 120, 
  },
  welcomeTitle: {
    fontSize: 48,              
    fontWeight: '600',        
    lineHeight: 52,           
    textAlign: 'center',       
    color: '#fff',             
    marginBottom: 10, 
    height: 'auto',         
    fontFamily: 'Gilroy',     
  },
  welcomeSubtitle: {
    fontSize: 16,
    lineHeight: 20,            
    textAlign: 'center',
    color: '#FCFCFCB2',             
    marginBottom: 30,          
    fontFamily: 'Gilroy-Medium',
  },
  getStartedButton: {
    backgroundColor: '#53B175',   
    width: 353,                   
    height: 67,                  
    borderRadius: 19,             
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,            
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
