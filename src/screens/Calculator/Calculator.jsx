import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Size } from '../../constants'
import { CalculatorButton } from '../../Elements';

const Calculator = () => {
  const [Weight, setWeight] = useState('');
  const [Price, setPrice] = useState('');
  const [Currency, setCurrency] = useState('');
  const [Carat, setCarat] = useState(2322);
  return (
    <View style={styles.container}>
      {/* For Weight and Price Text Getting */}
      <View style={{ flex: 1, marginTop: Size.margin.large }}>
        <View >
          <Text style={styles.smallText}>
            Weight
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Size.margin.normal, }}>

            <TextInput value={Weight} onChangeText={(weight) => setWeight(weight)}
              style={{
                flexWrap: 'wrap',
                height: 56, borderWidth: 0,
                borderColor: Colors.primary,
                color: Colors.Tertiary,
                fontFamily: 'DMSans-Regular',
                fontSize: Size.fontSize.title,
              }}
              placeholder="0.0"
              placeholderTextColor={Colors.Tertiary}
              textContentType="creditCardNumber"
              focusable={true}
            />
            <Text style={{
              color: Colors.Tertiary,
              fontFamily: 'DMSans-Regular',
              fontSize: Size.fontSize.title,
            }}>
              oz
            </Text>
          </View>
        </View>
        <View >
          <Text style={styles.smallText}>
            Price
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Size.margin.normal, }}>

            <TextInput value={Price} onChangeText={(price) => setPrice(price)}
              style={{

                height: 56, borderWidth: 0,
                borderColor: Colors.primary,
                color: Colors.Tertiary,
                fontFamily: 'DMSans-Regular',
                fontSize: Size.fontSize.title,
              }}
              placeholder="00"
              placeholderTextColor={Colors.Tertiary}
              textContentType="creditCardNumber"
              focusable={true}
            />
            <Text style={{
              color: Colors.Tertiary,
              fontFamily: 'DMSans-Regular',
              fontSize: Size.fontSize.title,
            }}>
              $
            </Text>
          </View>
        </View>
      </View>
      {/* For Calculator Inputs */}

      <View style={{ flex: 1, flexDirection: 'row', }}>
        <View style={{ flex: 1.5, flexWrap: "wrap", height: 340, }}>
          <CalculatorButton isnumber={true} value={'7'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'4'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'1'} onPress={setWeight} defVal={Weight} />
          <CalculatorButton isnumber={true} value={'0'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'8'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'5'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'2'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'.'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'9'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'6'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'3'} onPress={setWeight} defVal={Weight}/>
          <CalculatorButton isnumber={true} value={'<-'} onPress={setWeight} />
        </View>
        <View style={{ flex: 1,  height: 340,flexDirection:'column' }}>
          <View style={{ flex: 1, flexWrap: "wrap", }}>
          <CalculatorButton isnumber={false} value={'8k'} />
          <CalculatorButton isnumber={false} value={'14k'} />
          <CalculatorButton isnumber={false} value={'22k'} />
          <CalculatorButton isnumber={false} value={'24k'} />
          <CalculatorButton isnumber={false} value={'11k'} />
            <CalculatorButton isnumber={false} value={'18k'} />
            </View>
          <View style={{ flex: 1, flexWrap: "wrap" }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            marginVertical: Size.margin.normal,
            justifyContent: 'center',
            width: '100%',
            height: 56,
            borderRadius: 40,
            backgroundColor: Colors.Tertiary
          }} >
            <Text style={styles.smallText}>Buy Gold</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Size.margin.large,

  },
  smallText: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: Size.fontSize.largeText,
    color: Colors.primary,
    fontWeight: '500'
  }
})