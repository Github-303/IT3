import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntroSlider from 'react-native-app-intro-slider';

// Import your screens
import HomeScreen from './components/HomeScreen';
import NotifyScreen from './components/NotifyScreen';
import SettingsScreen from './components/SettingsScreen';
import ScanScreen from './components/ScanScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

// Home Stack Navigator
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Scan" component={ScanScreen} />
    </HomeStack.Navigator>
  );
}

// Slides Data for the Intro Slider
const slides = [
  {
    key: 1,
    title: 'Scan, Pay & Enjoy!',
    text: 'scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping! ',
    image: require('./assets/MaskGroup.png'),
    backgroundColor: '#FFF7F6',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Use the scan feature to get started.',
    image: require('./assets/MaskGroup1.png'),
    backgroundColor: '#bed8d1',
  },
  {
    key: 3,
    title: 'Enjoy!',
    text: 'We hope you enjoy the experience!',
    image: require('./assets/MaskGroup2.png'),
    backgroundColor: '#ebb2a5',
  },
];

export default function App() {
  const [showIntro, setShowIntro] = useState(true); // Track whether to show the intro

  const _renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const _onDone = () => setShowIntro(false); // Hide intro on completion

  const _renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Ionicons name="arrow-forward-outline" color="rgba(255, 255, 255, 0.9)" size={24} />
    </View>
  );

  const _renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <Ionicons name="checkmark-outline" color="rgba(255, 255, 255, 0.9)" size={24} />
    </View>
  );

  const _renderSkipButton = () => (
    <TouchableOpacity style={styles.skipButton}>
      <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
  );

  if (showIntro) {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderSkipButton={_renderSkipButton}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        onSkip={_onDone}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Notify') iconName = 'notifications-outline';
            else if (route.name === 'Settings') iconName = 'settings-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Notify" component={NotifyScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 100,
    overflow: 'hidden', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
    skipButton: {
    marginHorizontal: 10,
    padding: 5,
  },
  skipText: {
    fontSize: 16,
    color: '#363636',
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#363636',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

