import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle } from '../../components'
const NewsList = () => {
  return (
    <View style={styles.container}>
     <HeaderTitle title="TODAYS NEWS"/>
    </View>
  )
}

export default NewsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingHorizontal: Size.margin.large,
    backgroundColor:Colors.background
  },
})