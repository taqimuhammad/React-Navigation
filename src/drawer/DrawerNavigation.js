import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main';
import Chat from './Chat';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false }} />
            <Drawer.Screen
                name='Chat'
                component={Chat}
                options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation