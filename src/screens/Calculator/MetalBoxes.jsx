import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle, Metalbox } from '../../components'
const MetalBoxes = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="PRICE CALCULATOR" />
      <Text style={styles.LargeText}>
        Select Metal
      </Text>
      <View style={{flexDirection:'row', justifyContent:'space-between',flexWrap:'wrap'}}>
      <Metalbox  chart='Bearish'/>
        <Metalbox chart='Bullish' />
        <Metalbox chart='Bullish' />
        <Metalbox chart='Bearish'/>
        <Metalbox chart='Bullish'/>
        <Metalbox chart='Bearish'/>
        </View>
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
  LargeText: {
    fontFamily: 'DMSerifDisplay-Regular',
    color: Colors.Tertiary,
    fontSize: Size.fontSize.header,
 
  }, 
})