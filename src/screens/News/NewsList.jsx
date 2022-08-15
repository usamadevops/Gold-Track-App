import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle, Newscard } from '../../components'
const NewsList = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="TODAYS NEWS" />
      <Newscard/>
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