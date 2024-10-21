import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';
import { storeUserData, getAllUsers } from './authStorage';

function SigninScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handlePhoneNumberChange = async (text) => {
    setPhoneNumber(text);
    validatePhoneNumber(text);
    
    // Tự động điền tên nếu số điện thoại đã tồn tại
    const users = await getAllUsers();
    const existingUser = users.find(user => user.phoneNumber === text);
    if (existingUser) {
      setName(existingUser.name);
    } else {
      setName('');
    }
  };

  const handleSubmit = async () => {
    if (isValid && password.length >= 6) {
      const stored = await storeUserData(phoneNumber, name);
      if (stored) {
        navigation.navigate('Home');
      } else {
        setErrorMessage('Đã xảy ra lỗi khi đăng nhập');
      }
    } else {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin hợp lệ');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập họ tên của bạn"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu của bạn"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <ButtonComponent
        title="Tiếp tục"
        onPress={handleSubmit}
        disabled={!(isValid && password.length >= 6 && name.trim())}
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
    marginBottom: 20,
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