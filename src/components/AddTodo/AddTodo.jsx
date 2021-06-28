import React, { useState } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import { Button } from './Button/Button'
import { Input } from './Input/Input'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const onPressHandler = () => {
    if (!value.trim()) {
      Alert.alert('Please, set todo name.')
      return
    }

    onSubmit(value)
    setValue('')
  }
  return (
    <View style={styles.block}>
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Set new todo"
      />
      <Button onPress={onPressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
})
