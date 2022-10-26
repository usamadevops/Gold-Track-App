import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle,Metalcard} from '../../components'
import { fetchFromAPI } from '../../API/config'
const MetalsList = () => {

  React.useEffect(() => {
fetchFromAPI('stat').then((res)=>{
console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <HeaderTitle title="TODAYS PRICES" />
      <View>
        <Metalcard/>
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