import React from 'react'
import {
JanmTabBarNavigator,DotSize
} from 'rn-slick-bottom-tabs'
import {Ionicons as Icon} from '@expo/vector-icons'
import MetalsList from '../screens/Home/MetalsList';
import NewsList from '../screens/News/NewsList';
import MetalBoxes from '../screens/Calculator/MetalBoxes';
import Notifications from '../screens/Notifications'
import {Colors,Size} from '../constants'

const Tabs = JanmTabBarNavigator()

const TabBarIcon = (props) => {
    return (
        <Icon
           
            name={props.name}
            size={props.size ? props.size : 32}
            color={props.tintColor}
        />
    )
}

export default () => (
    <Tabs.Navigator backBehavior='history' 
        screenOptions={{
        animation: 'slide_from_right',
        }}
                    initialRouteName="MetalsList"
                    tabBarOptions={{
                        activeTintColor: Colors.primaryHover,
                        inactiveTintColor:Colors.primary,
                        activeBackgroundColor: `${Colors.Tertiary}40`,
                    }}
                  
        appearance={{
                        tabBarBackground:Colors.background,
            dotSize: DotSize.LARGE,
        
                        
                    }}
    >
        <Tabs.Screen
            name="MetalsList"
            component={MetalsList}
            options={{
                tabBarIcon: ({focused, color}) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="home"
                    />
                ),

            }}
        />

        <Tabs.Screen
            name="NewsList"
            component={NewsList}
            options={{
                tabBarIcon: ({focused, color}) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="newspaper"
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="MetalBoxes"
            component={MetalBoxes}
            options={{
                tabBarIcon: ({focused, color}) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="calculator"
                    />
                ),
            }}
        />

        <Tabs.Screen
            name="Notifications"
            component={Notifications}
            options={{
                tabBarIcon: ({focused, color}) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="notifications"
                    />
                ),
            }}
        />
    </Tabs.Navigator>
)
