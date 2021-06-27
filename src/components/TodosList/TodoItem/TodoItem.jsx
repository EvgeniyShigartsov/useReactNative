import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const TodoItem = ({ todo, itemNo }) => {

return (
    <View style={styles.block}>
      <Text>{itemNo}</Text>
      <Text>{todo.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
  }
})