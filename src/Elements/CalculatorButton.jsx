import {  Pressable, Text } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'

const CalculatorButton = (props) => {
  return (
    <Pressable style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: Size.margin.normal,
      marginHorizontal:props.number?0:Size.margin.normal,
      width: 68,
      height: 68,
      backgroundColor:props.isnumber?'transparent': `${Colors.secondary}30`,
      borderRadius: 40,
    }} 
    // onPress={()=>props.onPress(props.defVal.concat(props.value))}
    >
      <Text
        
        style={{
          fontFamily: 'DMSans-Regular',
          fontSize: props.isnumber? Size.fontSize.title:Size.fontSize.header,
          color: Colors.White,
        }}>{props.value}</Text>
    </Pressable>
  )
}

export default CalculatorButton

