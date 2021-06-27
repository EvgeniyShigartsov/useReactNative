import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TodoItem } from './TodoItem/TodoItem'

export const TodosList = ({ list }) => {

  return (
    <View>
      {list.map((todo, index) => <TodoItem key={todo.id} todo={todo} itemNo={index + 1} />)}
    </View>
  )
}

