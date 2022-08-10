import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'
const HeaderTitle = (props) => {
  return (
    <View style={styles.container_header}>
    <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container_header: {
        marginTop: 56,
        marginBottom:Size.margin.large,
        alignSelf:'flex-start'
      },
      title: {
        fontFamily: 'DMSerifDisplay',
        color: Colors.primary,
        fontSize: Size.fontSize.title,
        letterSpacing: 0.1,
        fontWeight:'bold'
      }
})