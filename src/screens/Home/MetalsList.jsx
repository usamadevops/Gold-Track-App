import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle,Metalcard} from '../../components'
import { fetchFromAPI } from '../../API/config';
import Metal from '../../constants/Metal.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import toTimeStamp from '../../utils/toTimeStamp'
const MetalsList = () => {
  
let symbols=['XAU','XAG','XPT','XPD'];
const [Metals, setMetals] = React.useState([]);

async function GetCurrency(){
  await AsyncStorage.getItem('Currency').then((res)=>{
    // console.log(res);
  }).catch(err=>{
    // console.log(err);
  })
}
  React.useEffect(() => {
    let temparr=[];
    let date=toTimeStamp();
    GetCurrency();
    // console.log(currency);
//     for(let i=0;i<symbols.length;i++){
// fetchFromAPI(`${symbols[i]}/${Currency}/${date}`).then((res)=>{
// temparr.push(...temparr,res);
// setMetals(temparr);
//     }).catch((err)=>{
//       console.log(err)
//     })
//   }
  }, [])

  // console.log(Metals);

  return (
    <View style={styles.container}>
      <HeaderTitle title="TODAYS PRICES" />
      <View>
        {Metal.map((metal,index)=>{
          return(
            <Metalcard metal={metal} key={index}/>
          );
        })
}
      </View>
    </View>
  )
}

export default MetalsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingHorizontal: Size.margin.large,
    backgroundColor:Colors.background
  },
})