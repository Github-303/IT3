import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../features/todoSlice';
import { TextInput, Button, Card, IconButton, Text } from 'react-native-paper';

const TodoList = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleClearCompleted = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        dispatch(deleteTodo(todo.id));
      }
    });
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.text}
        titleStyle={{
          textDecorationLine: item.completed ? 'line-through' : 'none',
          color: item.completed ? 'gray' : 'black',
        }}
        right={(props) => (
          <View style={styles.icons}>
            <IconButton
              icon={item.completed ? 'check-circle' : 'circle-outline'}
              onPress={() => dispatch(toggleTodo(item.id))}
            />
            <IconButton icon="delete" onPress={() => dispatch(deleteTodo(item.id))} />
          </View>
        )}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Add a new task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTodo} style={styles.button}>
        Add Task
      </Button>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <Button
        mode="outlined"
        onPress={handleClearCompleted}
        style={styles.clearButton}
        disabled={!todos.some((todo) => todo.completed)}
      >
        Clear Completed
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
    top: 20
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#6200ea',
  },
  clearButton: {
    marginTop: 20,
    borderColor: '#6200ea',
    borderWidth: 1,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  icons: {
    flexDirection: 'row',
  },
});

export default TodoList;
