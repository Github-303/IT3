import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const data = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    des: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
    color: '#344796',
    unread: true,
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    des: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: 'people',
    color: '#344796',
    unread: true,
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    des: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
    icon: 'people',
    color: '#344796',
    unread: false,
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    des: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
    icon: 'people',
    color: '#344796',
    unread: true,
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    des: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
    color: '#344796',
    unread: false,
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    des: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
    color: '#344796',
    unread: false,
  }
];

const App = () => {
  const renderItem = ({ item }) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    top: 10,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});

export default App;