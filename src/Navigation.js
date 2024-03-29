import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Parent from './screens/Parent';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Parent'
                    component={Parent}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation