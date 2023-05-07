import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Currencybutton, HeaderTitle } from '../components';
import { Colors, Size } from '../constants';
import MockData from '../constants/MockData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../utils/localStorage';

const Selectcurrency = ({ navigation }) => {
  const [isSelected, setisSelected] = React.useState();
  const [selectedCurrency, setselectedCurrency] = React.useState('');
  console.log(selectedCurrency);
  return (
    <View style={styles.container}>
      <HeaderTitle title="SELECT CURRENCY" />
      <ScrollView
        style={{ marginBottom: 100 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        fadingEdgeLength={50}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {
            MockData.map((currency, index) => {
              return (
                <Currencybutton
                  key={index}
                  currencyname={currency.currencyName}
                  symbol={currency.Symbol}
                  index={index}
                  setisSelected={setisSelected}
                  isSelected={isSelected}
                  setselectedCurrency={setselectedCurrency}
                />
              )
            })
          }
        </View>
      </ScrollView>
      <View style={{ width: '100%', alignSelf: 'center', position: 'absolute', bottom: 40 }}>
        <Button onPress={async() =>  {await storeData('Currency',selectedCurrency)}} />
      </View>

    </View>
  )
}

export default Selectcurrency


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Size.margin.large,
    backgroundColor: Colors.background
  },

})