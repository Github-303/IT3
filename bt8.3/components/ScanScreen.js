import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/ScanScreenStyles';

function ScanScreen({ navigation }) {
  const scanLineAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scanLineAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(scanLineAnimation, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [scanLineAnimation]);

  const translateY = scanLineAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 300],
  });

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="#333" />
      </TouchableOpacity>

      {/* Juice Bottle Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover.png')}
          style={styles.bottleImage}
        />

        {/* Rounded Corner Frame */}
        <View style={[styles.cornerFrame, styles.topLeftCorner]} />
        <View style={[styles.cornerFrame, styles.topRightCorner]} />
        <View style={[styles.cornerFrame, styles.bottomLeftCorner]} />
        <View style={[styles.cornerFrame, styles.bottomRightCorner]} />

        {/* Scan Line Animation */}
        <Animated.View style={[styles.scanLine, { transform: [{ translateY }] }]} />
      </View>

      {/* Product Info at the Bottom */}
      <View style={styles.productInfoContainer}>
        <Image
          source={require('../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover.png')}
          style={styles.productThumbnail}
        />
        <View style={styles.productText}>
          <Text style={styles.productTitle}>Lauren's</Text>
          <Text style={styles.productSubtitle}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ScanScreen;
