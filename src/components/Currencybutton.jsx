import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'
import {AntDesign}  from '@expo/vector-icons';

const Currencybutton = () => {
  const [isSelected, setisSelected] = React.useState(false)
  return (
   
    <Pressable onPress={() => console.log('ll')} style={styles.container} android_ripple={{borderless:false,color:Colors.primary,radius:200}}>
      <View style={styles.container_Text}>
        <Text style={styles.largeText}>
          US Dollar
        </Text>
        <Text style={styles.mediumText}>
          $
        </Text>
      </View>
      {
        isSelected ?
          (
            <View style={styles.container__Icon}>
            <AntDesign name='check' size={24} color={Colors.primary}/>
          </View>
          ) : (
            <></>
          )
      }
   
      </Pressable>
     
     
  )
}

export default Currencybutton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  paddingHorizontal: Size.margin.medium,
    width: ('48%'),
    height: 92,
    backgroundColor: `${Colors.secondary}10`,
    justifyContent: 'space-between',
    borderRadius: Size.radius.medium,
    marginBottom: Size.margin.medium,
  },
  container_Text: {
    zIndex: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  
  },
  largeText: {
    fontFamily: 'DMSansMedium',
    color: Colors.White,
    fontSize: Size.fontSize.largeText
  },
  mediumText: {
    fontFamily: 'DMSans-Regular',
    color: Colors.White,
    fontSize: Size.fontSize.mediumText
  },
  container__Icon: {
    alignSelf: 'center',
  }
})
