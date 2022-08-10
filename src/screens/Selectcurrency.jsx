import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Currencybutton,HeaderTitle } from '../components';
import { Colors,Size } from '../constants';
const Selectcurrency = ({navigation}) => {
  return (
    <View style={styles.container}>
     <HeaderTitle title="SELECT CURRENCY"/>
      <View style={{flexDirection:'row', justifyContent:'space-between',flexWrap:'wrap'}}>
      <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
        <Currencybutton />
      <Currencybutton/>
      </View>
      <View style={{marginTop:56}}>
        <Button onPress={()=>navigation.navigate('BottomTab')} />
     </View>
    </View>
  )
}

export default Selectcurrency


const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingHorizontal: Size.margin.large,
    backgroundColor:Colors.background
  },

})