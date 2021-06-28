import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TodoItem } from './TodoItem/TodoItem'

export const TodosList = ({ list }) => (
  <View style={styles.block}>
    {list.map((todo, index) => <TodoItem key={todo.id} todo={todo} itemNo={index + 1} />)}
  </View>
)

const styles = StyleSheet.create({
  block: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
})
