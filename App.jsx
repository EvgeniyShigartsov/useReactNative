/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar/Navbar';
import { AddTodo } from './src/components/AddTodo/AddTodo';
import { TodosList } from './src/components/TodosList/TodosList';

export default function App() {
  const [todos, setTodos] = useState([
    { id: String(1), title: 'Todo 1' },
    { id: String(2), title: 'Todo 2' },
    { id: String(3), title: 'Todo 3' },
    { id: String(4), title: 'Todo 4' },
    { id: String(5), title: 'Todo 5' },
    { id: String(6), title: 'Todo 6' },
    { id: String(7), title: 'Todo 7' },
    { id: String(8), title: 'Todo 8' },
    { id: String(9), title: 'Todo 9' },
    { id: String(10), title: 'Todo 10' },
    { id: String(11), title: 'Todo 11' },
    { id: String(12), title: 'Todo 12' },
    { id: String(13), title: 'Todo 13' },
    { id: String(14), title: 'Todo 14' },
    { id: String(15), title: 'Todo 15' },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: String(Date.now()),
      title,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  const removeTodo = (id) => setTodos((prev) => prev.filter((item) => item.id !== id))

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar title="Todo App!!" />
      <AddTodo onSubmit={addTodo} />
      <TodosList list={todos} removeTodo={removeTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
