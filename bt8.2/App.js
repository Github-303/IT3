import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import SigninScreen from './components/SigninScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Đăng Nhập' }} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
