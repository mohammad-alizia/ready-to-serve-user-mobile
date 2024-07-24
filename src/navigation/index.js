import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import RouteNames from './routeNames';
import Header from '../components/headers/Header';

const Stack = createNativeStackNavigator();

const Navigation = ({
    initialRoute = RouteNames.SPLASH_SCREEEN
}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={RouteNames.HOME_SCREEN}>
                {routes.map((screen, index) => {
                    return <Stack.Screen
                        key={index}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                })}
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation