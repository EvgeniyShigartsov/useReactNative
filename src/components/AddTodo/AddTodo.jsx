import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from './Button/Button'
import { Input } from './Input/Input'

export const AddTodo = ({ onSubmit }) => {

  return (
    <View style={styles.block}>
      <Input />
      <Button onPress={() => onSubmit('New Todo!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  }
})