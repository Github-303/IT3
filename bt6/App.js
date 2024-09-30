import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInputComponent from './component/PhoneInputComponent';
import ButtonComponent from './component/ButtonComponent';
import styles from './component/styles';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>
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

      {/* ButtonComponent */}
      <ButtonComponent isButtonDisabled={isButtonDisabled} />
    </View>
  );
}
