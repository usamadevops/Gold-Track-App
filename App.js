import * as React from 'react';
import * as Font from 'expo-font';
import { Selectcurrency, Splash } from './src/screens';
import {Stack} from './src/routes/';
import { getData } from './src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

 function App() {
   const [fontLoaded, setisfontLoaded] = React.useState(false);
const [currency, setcurrency] = React.useState('')
    async function loadFonts() {
        await Font.loadAsync({
          'DMSerifDisplay-Regular': require('./assets/fonts/DMSerifDisplay-Regular.ttf'),
          'DMSerifDisplay-Italic': require('./assets/fonts/DMSerifDisplay-Italic.ttf'),
         'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
         'DMSans-Medium': require('./assets/fonts/DMSans-Medium.ttf'),
         'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'), 
        });
      setisfontLoaded(true);
     console.log(fontLoaded)
    }
    
    React.useEffect(() => {
      async function fetchCurrency() {
        let res = await getData('Currency');
        setcurrency(res);
        // console.log('CURRENCY', currency);
      }
    
      fetchCurrency();
      loadFonts();
    }, []);
    
   
   if (!fontLoaded) {
     return <Splash/>
   }
   else if(currency=== '')
   {
    return <Selectcurrency/>
   }
   else {
    return <Stack />;
   }  
 }
export default App;