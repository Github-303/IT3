import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/store';
import TodoList from './src/components/TodoList';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <TodoList />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
