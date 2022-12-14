import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CategoryScreen } from '../screens/CategoryScreen';
import { ProductDetails } from '../screens/ProductDetails';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="ProductDetails"
                component={ProductDetails}
            />

            <Screen
                name="CategoryScreen"
                component={CategoryScreen}
            />
        </Navigator>
    )
}