import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ButtonComponent = ({ isButtonDisabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled]}
      disabled={isButtonDisabled}
    >
      <Text style={styles.buttonText}>Tiếp tục</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
