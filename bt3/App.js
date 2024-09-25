import React from 'react';
import { View, Text, FlatList } from 'react-native';
import data from './component/data';
import styles from './component/styles';
import NotificationItem from './component/NotificationItem';

const App = () => {
  const renderItem = ({ item }) => <NotificationItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;
