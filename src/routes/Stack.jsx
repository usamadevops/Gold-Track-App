import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Selectcurrency,Calculator } from '../screens';
import BottomTab from './BottomTab';
import { Colors, Size } from '../constants';
const StackScreens = createNativeStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
            <StackScreens.Navigator initialRouteName='BottomTab' screenOptions={{headerShown:false,headerShadowVisible:false}}>
                {/* <StackScreens.Screen name='Selectcurrency' component={Selectcurrency} /> */}
                <StackScreens.Screen name='Calculator' component={Calculator} options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerStyle:{backgroundColor:Colors.background},
                    headerTitleStyle: { color: Colors.primary, fontFamily: "DMSerifDisplay-Regular", fontSize: Size.fontSize.header },
                    headerBackTitleVisible: false,
                }} />
                <StackScreens.Screen name='BottomTab' component={BottomTab}/>
            </StackScreens.Navigator>
        </NavigationContainer>
    );
}
export default Stack;