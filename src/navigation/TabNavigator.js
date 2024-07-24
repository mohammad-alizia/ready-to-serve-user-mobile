import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteNames from './routeNames';
import HomeScreen from '../screens/Home';
import ServicesScreen from '../screens/Our-Services';
import ActivityScreen from '../screens/Activity';
import AccountScreen from '../screens/Account';
import { icons } from '../assets/icons/iconsExporter';

const { HomeTabIcon, ServiceTabIcon, ActivityTabIcon, AccountTabIcon } = icons

const Tab = createBottomTabNavigator();

const tabScreenOptions = {
    tabBarLabelStyle: { fontSize: 15 },
    tabBarStyle: {
        height: 80,
        borderWidth: 0,
        elevation: 0,
        shadowColor: '#ffffff00',
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        paddingTop: 9,
        tabBarActiveBackgroundColor: "pink",
        tabBarInactiveBackgroundColor: "#ffffff",
    },
}

const tabScreens = [
    {
        id: 1,
        name: 'Tab' + RouteNames.HOME_SCREEN,
        component: HomeScreen,
        options: {
            // ...tabScreenOptions,
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ }) => (<HomeTabIcon style={{ padding: 0, margin: 0 }} />)
        },
    },
    {
        id: 2,
        name: 'Tab' + RouteNames.SERVICES_SCREEN,
        component: ServicesScreen,
        // ...tabScreenOptions,
        options: {
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ }) => (<ServiceTabIcon style={{ padding: 0, margin: 0 }} />)
        },
    },
    {
        id: 3,
        name: 'Tab' + RouteNames.ACTIVITY_SCREEN,
        component: ActivityScreen,
        // ...tabScreenOptions,
        options: {
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ }) => (<ActivityTabIcon style={{ padding: 0, margin: 0 }} />)
        },
    },
    {
        id: 4,
        name: 'Tab' + RouteNames.ACCOUNT_SCREEN,
        component: AccountScreen,
        // ...tabScreenOptions,
        options: {
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ }) => (<AccountTabIcon style={{ padding: 0, margin: 0 }} />)
        },
    },
];


const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={RouteNames.HOME_SCREEN} screenOptions={{ ...tabScreenOptions }}>
            {tabScreens.map((screen, key) => {
                return (
                    <Tab.Screen
                        key={screen.id}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default TabNavigator