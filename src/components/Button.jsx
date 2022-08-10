import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'

const Button = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>View Prices Now</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: ('100%'),
    borderRadius:Size.radius.medium,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:Colors.primary,
  },
  buttonText: {
    fontFamily: 'DMSerifDisplay',
    fontWeight:'900',
    color: Colors.background,
    fontSize:Size.fontSize.largeText
  }
})