import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Selectcurrency,Calculator } from '../screens';
import BottomTab from './BottomTab';
const StackScreens = createNativeStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
            <StackScreens.Navigator initialRouteName='BottomTab' screenOptions={{headerShown:false}}>
                <StackScreens.Screen name='Selectcurrency' component={Selectcurrency} />
                <StackScreens.Screen name='Calculator' component={Calculator} />
                <StackScreens.Screen name='BottomTab' component={BottomTab}/>
            </StackScreens.Navigator>
        </NavigationContainer>
    );
}
export default Stack;