import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import ButtonComponent from './ButtonComponent';

function HomeScreen({ navigation }) {
  const { phoneNumber, logout } = useAuth();

  if (!phoneNumber) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Bạn chưa đăng nhập. Vui lòng đăng nhập.</Text>
        <ButtonComponent
          title="Đến trang đăng nhập"
          onPress={() => navigation.navigate('Signin')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Chào mừng {phoneNumber}</Text>
      <ButtonComponent title="Đăng xuất" onPress={logout} />
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
