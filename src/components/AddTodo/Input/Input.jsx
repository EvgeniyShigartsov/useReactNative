import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const Input = () => {

  return <TextInput style={styles.input}/>
}

const styles = StyleSheet.create({
  input: {
    width: '70%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  }
})