import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { AppStackRoutes } from './app.stack.routes';
import { Home } from '../screens/Home';
import { Orders } from '../screens/Orders';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.COLORS.BLACK,
                tabBarInactiveTintColor: theme.COLORS.BACKGROUND_SECONDARY,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 62,
                }
            }}
        >
            <Screen
                name='Home'
                component={AppStackRoutes}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name='Pedidos'
                component={Orders}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="fastfood"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

        </Navigator>
    )
}