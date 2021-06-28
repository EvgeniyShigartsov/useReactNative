import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const Input = ({ onChangeText, value, placeholder }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    autoCorrect
    autoCapitalize="characters"
  />
)

const styles = StyleSheet.create({
  input: {
    width: '70%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
})
