import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';
import { getCurrentUser, getAllUsers, removeCurrentUser } from './authStorage';

function HomeScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const user = await getCurrentUser();
    setCurrentUser(user);
    const users = await getAllUsers();
    setAllUsers(users.sort((a, b) => 
      new Date(b.lastLogin) - new Date(a.lastLogin)
    ));
  };

  const handleLogout = async () => {
    const removed = await removeCurrentUser();
    if (removed) {
      navigation.replace('Signin');
    }
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userPhone}>{item.phoneNumber}</Text>
      <Text style={styles.lastLogin}>
        Đăng nhập lần cuối: {new Date(item.lastLogin).toLocaleString('vi-VN')}
      </Text>
    </View>
  );

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Bạn chưa đăng nhập. Vui lòng đăng nhập.</Text>
        <ButtonComponent
          title="Đến trang đăng nhập"
          onPress={() => navigation.replace('Signin')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeMessage}>
          Chào mừng bạn {currentUser.name}!
        </Text>
        <Text style={styles.phoneNumber}>
          SĐT: {currentUser.phoneNumber}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Danh sách người dùng đã đăng nhập:</Text>
        <FlatList
          data={allUsers}
          renderItem={renderUserItem}
          keyExtractor={item => item.phoneNumber}
          style={styles.list}
        />
      </View>

      <ButtonComponent title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  lastLogin: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default HomeScreen;