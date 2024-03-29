import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name='Screen1'
                component={Screen1}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <AntDesign name="home" size={24} color={tabInfo.focused ? 'blue' : 'black'}/>
                        )
                    }
                }}
            />

            <Bottom.Screen
                name='Screen2'
                component={Screen2}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <MaterialIcons name="library-books" size={24} color={tabInfo.focused ? 'blue' : 'black'}/>
                        )
                    }
                }}
            />

            <Bottom.Screen
                name='Screen3'
                component={Screen3}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Entypo name="location-pin" size={24} color={tabInfo.focused ? 'blue' : 'black'}/>
                        )
                    }
                }}
            />
        </Bottom.Navigator>
    )
}

export default BottomNavigation