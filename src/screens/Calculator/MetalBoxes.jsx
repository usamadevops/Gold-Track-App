import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle } from '../../components'
const MetalBoxes = () => {
  return (
    <View style={styles.container}>
     <HeaderTitle title="PRICE CALCULATOR"/>
    </View>
  )
}

export default MetalBoxes

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingHorizontal: Size.margin.large,
    backgroundColor:Colors.background
  },
})