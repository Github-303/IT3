import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function ButtonComponent({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.buttonDisabled : styles.buttonEnabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#007bff',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonComponent;
