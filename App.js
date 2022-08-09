import * as React from 'react';
import * as Font from 'expo-font';
import { Splash } from './src/screens';
import {Stack} from './src/routes/';

 function App() {
   const [fontLoaded, setisfontLoaded] = React.useState(false);

    async function loadFonts() {
        await Font.loadAsync({
          'DSDRegular': require('./assets/fonts/DMSerifDisplay-Regular.ttf'),
          'DSDItalic': require('./assets/fonts/DMSerifDisplay-Italic.ttf'),
         'DMSansRegular': require('./assets/fonts/DMSans-Regular.ttf'),
         'DMSansMedium': require('./assets/fonts/DMSans-Medium.ttf'),
         'DMSansBold': require('./assets/fonts/DMSans-Bold.ttf'), 
        });
      setisfontLoaded(true);
     
    }
    
   React.useEffect(() => {

   loadFonts();
    }, [])
   
   if (!fontLoaded) {
     return <Splash/>
   }
   else {
    return <Stack />;
   }  
 }
export default App;