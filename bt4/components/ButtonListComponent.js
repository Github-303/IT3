import { View } from 'react-native';
import ButtonComponent from './ButtonComponent';

const ButtonListComponent = ({ onClick }) => {
  return (
    <View>
      <ButtonComponent
        backgroundColor="#227F19"
        message="Green button clicked!"
        onClick={onClick}
        colorChange="#227F19"
        title="Green"
      />
      <ButtonComponent
        backgroundColor="#000EF9"
        message="Blue button clicked!"
        onClick={onClick}
        colorChange="#000EF9" 
        title="Blue"
      />
      <ButtonComponent
        backgroundColor="#A0302E"
        message="Brown button clicked!"
        onClick={onClick}
        colorChange="#A0302E" 
        title="Brown"
      />
      <ButtonComponent
        backgroundColor="#FFFF43"
        message="Yellow button clicked!"
        onClick={onClick}
        colorChange="#FFFF43" 
        title="Yellow"
      />
      <ButtonComponent
        backgroundColor="#F7251C"
        message="Red button clicked!"
        onClick={onClick}
        colorChange="#F7251C" 
        title="Red"
      />
      <ButtonComponent
        backgroundColor="#000000"
        message="Black button clicked!"
        onClick={onClick}
        colorChange="#000000" 
        title="Black"
      />
    </View>
  );
};

export default ButtonListComponent;
