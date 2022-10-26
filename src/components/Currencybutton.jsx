import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'
import {AntDesign}  from '@expo/vector-icons';

const Currencybutton = ({currencyname,symbol,icon,index,setisSelected,isSelected}) => {

  return (
   
    <Pressable onPress={() => setisSelected(index)} style={[styles.container,{   backgroundColor: index===isSelected?`${Colors.primary}40`:`${Colors.secondary}10`,}]} android_ripple={{borderless:false,color:Colors.primary,radius:200}}>
      <View style={styles.container_Text}>
        <Text style={styles.largeText}>
          {currencyname}
        </Text>
        <Text style={styles.mediumText}>
          {symbol}
        </Text>
      </View>
      {
        isSelected===index ?
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
    fontFamily: 'DMSans-Medium',
    color: Colors.White,
    fontSize: Size.fontSize.mediumText
  },
  mediumText: {
    fontFamily: 'DMSans-Regular',
    color: Colors.White,
    fontSize: Size.fontSize.smallText
  },
  container__Icon: {
    position:'absolute',
    right:10,
    bottom:25,
  }
})
