import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import TitleComponent from './components/TitleComponent';
import ButtonListComponent from './components/ButtonListComponent'; 
import styles from './components/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <TitleComponent title="Đổi màu" color="white" />
        <ButtonListComponent onClick={this.handleButtonClick} />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

export default App;
