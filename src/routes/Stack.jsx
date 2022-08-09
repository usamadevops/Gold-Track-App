import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Selectcurrency,Calculator } from '../screens';

const StackScreens = createNativeStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
            <StackScreens.Navigator initialRouteName='Selectcurrency'>
                <StackScreens.Screen name='Selectcurrency' component={Selectcurrency} />
                <StackScreens.Screen name='Calculator' component={Calculator} />
            </StackScreens.Navigator>
        </NavigationContainer>
    );
}
export default Stack;