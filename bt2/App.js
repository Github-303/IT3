import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const phoneNumber = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>
      <View style={styles.line}></View>
      <Text style={styles.subHeader}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[styles.button, isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled]}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  line: {
    marginLeft: -30,
    marginRight: -30,
    borderBottomWidth: 2,
    borderBottomColor: '#dddddd',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    color: '#dddddd',
    fontSize: 16,
    paddingBottom: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#f2f2f2',
  },
  buttonEnabled: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

