import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'; 

const ButtonComponent = ({ backgroundColor, message, onClick, colorChange, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={() => onClick(message, colorChange)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;