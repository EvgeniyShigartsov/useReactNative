import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const TodoItem = ({ todo, itemNo }) => (
  <View style={styles.block}>
    <Text style={styles.idField}>
      {itemNo}
      .
    </Text>
    <Text>{todo.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  idField: {
    marginRight: 5,
  },
})
