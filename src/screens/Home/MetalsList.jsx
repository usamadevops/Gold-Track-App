import { Animated, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { Colors, Size } from '../../constants'
import { HeaderTitle,Metalcard} from '../../components'
import { fetchFromAPI } from '../../API/config';
import Metal from '../../constants/Metal.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import toTimeStamp from '../../utils/toTimeStamp'
const MetalsList = () => {
  
  let symbols = ['XAU', 'XAG', 'XPT', 'XPD'];
  const [Metals, setMetals] = React.useState([]);

  async function GetCurrency() {
    let response = await AsyncStorage.getItem('Currency');
    return response;
  }
  const [opacity] = React.useState(new Animated.Value(0));
  const [translateY] = React.useState(new Animated.Value(30));

  React.useEffect(() => {
    async function fetchMetals() {
      let temparr = [];
      let date = 20230506;
      let Currency = await GetCurrency();
      Currency = Currency.replace(/"/g, ''); 
      console.log(Currency,date);

      for (let i = 0; i < symbols.length; i++) {
        console.log(`${symbols[i]}/${Currency}/${date}`)
        try {
          let res = await fetchFromAPI(`${symbols[i]}/${Currency}/${date}`);
          temparr.push(res);
        } catch (err) {
          console.log(err);
        }
      }
      setMetals(temparr);
    }
    fetchMetals();
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
// This function creates animations for each Metalcard based on their index
const startAnimation = (index) => {
  // The delay between animations for each Metalcard (in milliseconds)
  const delay = index * 150;

  // Create new Animated values for each card's opacity and translateY (Y-axis position)
  const animOpacity = new Animated.Value(0);
  const animTranslateY = new Animated.Value(30);

  // The animation logic
  // Animated.parallel runs multiple animations simultaneously
  Animated.parallel([
    // Animate the opacity from 0 to 1 with a duration of 500ms
    // This creates a fade-in effect
    Animated.timing(animOpacity, {
      toValue: 1,
      duration: 500,
      delay: delay,
      useNativeDriver: true,
    }),
    // Animate the Y-axis position from 30 to 0 with a duration of 500ms
    // This creates a slide-in-from-bottom effect
    Animated.timing(animTranslateY, {
      toValue: 0,
      duration: 500,
      delay: delay,
      useNativeDriver: true,
    }),
  ]).start(); // Start the animations

  // Return the Animated values (opacity and translateY) to be used in the component styles
  return { opacity: animOpacity, translateY: animTranslateY };
};

return (
  <View style={styles.container}>
    <HeaderTitle title="TODAYS PRICES" />
    <View>
      {Metals.map((metal, index) => {
        // Call startAnimation for each Metalcard to create separate animations
        const { opacity, translateY } = startAnimation(index);

        // Wrap the Metalcard component inside an Animated.View
        // Apply the animated styles (opacity and translateY) to the Animated.View
        return (
          <Animated.View
            key={index}
            style={[
              {
                opacity: opacity, // Apply the animated opacity value
                transform: [{ translateY: translateY }], // Apply the animated translateY value
              },
            ]}
          >
            <Metalcard metal={metal} />
          </Animated.View>
        );
      })}
    </View>
  </View>
);
};
export default MetalsList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingHorizontal: Size.margin.large,
    backgroundColor:Colors.background
  },
})