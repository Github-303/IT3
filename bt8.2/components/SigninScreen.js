import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import ButtonComponent from './ButtonComponent';

function SigninScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { login } = useAuth();

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(number)) {
      setIsValid(true);
      setErrorMessage('Hợp lệ');
    } else {
      setIsValid(false);
      setErrorMessage('Không hợp lệ');
    }
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    validatePhoneNumber(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (isValid && password.length >= 6) {
      login(phoneNumber);
      navigation.navigate('Home');
    } else {
      setErrorMessage('Vui lòng nhập số điện thoại và mật khẩu hợp lệ');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu của bạn"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <ButtonComponent
        title="Tiếp tục"
        onPress={handleSubmit}
        disabled={!(isValid && password.length >= 6)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6e6e6e',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#dddddd',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SigninScreen;
