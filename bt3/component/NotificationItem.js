import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './component/styles';
const NotificationItem = ({ item }) => (
  <View style={[
    styles.itemContainer,
    {
      backgroundColor: item.unread ? '#F1F8FF' : '#FFFFFF',
    },
  ]}>
    <View style={styles.iconContainer}>
      <Icon name={item.icon} size={24} color={item.color} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.des}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </View>
);

export default NotificationItem;
