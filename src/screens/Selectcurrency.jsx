import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Selectcurrency = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selectcurrency</Text>
    </View>
  )
}

export default Selectcurrency


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  title: {
    fontFamily: 'DMSerifDisplay',
    color: '#000',
    fontSize:24
  }
})