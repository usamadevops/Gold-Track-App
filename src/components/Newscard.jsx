import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'

const Newscard = (props) => {
  return (
    <View style={styles.container}>
      <>
      <Image source={require('../../assets/image/Gold1.png')} style={{ width: '100%', height: 200, borderRadius: Size.radius.medium }} />
      <Text style={styles.LargeText}>
      Gold dips nearly 1% as robust U.S. jobs data eases recession concerns
      </Text>
      <View style={{alignSelf:'flex-end',marginTop:Size.margin.medium}}>
        <Text style={styles.smallText}>
          2 hours
        </Text>
        </View>
      </>
      
      </View>
  )
}

export default Newscard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: Size.margin.medium,
    paddingTop: Size.margin.medium,
    width: ('100%'),
  paddingVertical:Size.margin.medium,
    elevation: 2,
    backgroundColor: `${Colors.secondary}10`,
    borderRadius: Size.radius.medium,
    marginBottom: Size.margin.medium,
  },
  LargeText: {
    fontFamily: 'DMSerifDisplay-Regular',
    color: Colors.White,
    fontSize: Size.fontSize.header,
    marginTop:Size.margin.medium
  },  smallText: {
    fontFamily: 'DMSans-Regular',
    fontSize: Size.fontSize.mediumText,
    color: Colors.Tertiary,
    fontWeight:'500'
  }})