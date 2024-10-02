import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneInputComponent from './component/PhoneInputComponent';
import ButtonComponent from './component/ButtonComponent';
import styles from './component/styles';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        <Text style={styles.subHeader}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        {/* PhoneInputComponent for handling input */}
        <PhoneInputComponent
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setIsButtonDisabled={setIsButtonDisabled}
          setErrorMessage={setErrorMessage}
        />

        {/* Error message */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* ButtonComponent with navigation */}
        <ButtonComponent
          isButtonDisabled={isButtonDisabled}
          onPress={() => navigation.navigate('Home')} // Navigate to HomeScreen on press
        />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng Nhập' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

