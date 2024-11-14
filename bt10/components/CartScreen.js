import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialProducts = [
  { id: 1, name: 'Orange Juice', price: 50, quantity: 1 },
  { id: 2, name: 'Apple Juice', price: 60, quantity: 1 },
];

export default function CartScreen() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const cartData = await AsyncStorage.getItem('cart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    } else {
      setCart(initialProducts); // Set initial products if no cart data exists
      await AsyncStorage.setItem('cart', JSON.stringify(initialProducts));
      calculateTotal(initialProducts);
    }
  };

  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const updateQuantity = async (id, type) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(newQuantity, 1) }; // Ensure quantity is at least 1
      }
      return item;
    });
    setCart(updatedCart);
    calculateTotal(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Price: ₹{item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.button}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.button}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.total}>Total: ₹{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  item: { padding: 10, backgroundColor: '#f8f8f8', marginBottom: 10, borderRadius: 10 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  quantityControls: { flexDirection: 'row', justifyContent: 'space-around', width: 100, marginTop: 10 },
  button: { backgroundColor: '#ddd', padding: 5, borderRadius: 5 },
});
