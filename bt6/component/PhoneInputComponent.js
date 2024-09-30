import React, { useEffect } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const PhoneInputComponent = ({ phoneNumber, setPhoneNumber, setIsButtonDisabled, setErrorMessage }) => {
  useEffect(() => {
    const validatePhoneNumber = () => {
      const phoneRegex = /([0-9]{10})\b/g;
      
      if (phoneNumber === '') {
        setErrorMessage('');
        setIsButtonDisabled(true);
        return;
      }

      if (!phoneRegex.test(phoneNumber)) {
        setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập đúng 10 số.');
        setIsButtonDisabled(true);
      } else {
        setErrorMessage('');
        setIsButtonDisabled(false);
      }
    };

    validatePhoneNumber();
  }, [phoneNumber, setErrorMessage, setIsButtonDisabled]);

  const handleInputChange = (input) => {
    // Check if input contains non-numeric characters
    const nonNumericInput = /[^0-9]/.test(input);

    if (nonNumericInput) {
      setErrorMessage('Vui lòng nhập số.');
    } else {
      // If valid, remove non-numeric characters
      const numericInput = input.replace(/[^0-9]/g, '');

      // Limit input to a maximum of 10 digits
      if (numericInput.length <= 10) {
        setPhoneNumber(numericInput);
        setErrorMessage(''); // Clear the error if input is valid
      }
    }
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="numeric"
      value={phoneNumber}
      onChangeText={handleInputChange}
    />
  );
};

export default PhoneInputComponent;
