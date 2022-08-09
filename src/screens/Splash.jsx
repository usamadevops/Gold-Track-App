import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors,Size } from '../constants'
const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GoldSpot</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#0F0F0F'
  },
  title: {
    fontFamily: 'DSDRegular',
    color: '#EBBC4C',
    fontSize:48
  }
})