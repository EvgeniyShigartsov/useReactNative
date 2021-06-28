import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { TodoItem } from './TodoItem/TodoItem'

export const TodosList = ({ list, removeTodo }) => (
  <FlatList
    style={styles.block}
    keyExtractor={(item) => item.id}
    data={list}
    renderItem={({ item, index }) => (
      <TodoItem
        todo={item}
        itemNo={index + 1}
        removeTodo={removeTodo}
      />
    )}
  />
)

const styles = StyleSheet.create({
  block: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
})
