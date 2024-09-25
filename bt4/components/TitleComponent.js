import { Text } from 'react-native';
import styles from './styles';

const TitleComponent = ({ title, color }) => {
  return <Text style={[styles.title, { color: color }]}>{title}</Text>;
};

export default TitleComponent;
