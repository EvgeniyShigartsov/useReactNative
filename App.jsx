/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar/Navbar';
import { AddTodo } from './src/components/AddTodo/AddTodo';
import { TodosList } from './src/components/TodosList/TodosList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: String(Date.now()),
      title,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar title="Todo App" />
      <AddTodo onSubmit={addTodo} />
      <TodosList list={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
