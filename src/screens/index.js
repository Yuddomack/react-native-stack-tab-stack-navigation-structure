import React from 'react';
import {
    Text
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import SomethingScreen from './SomethingScreen';

const HomeStack = createStackNavigator(
    {
        HomeScreen
    },
    // if you need,
    // but i recommend custom header
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Home',
        }),
    }
);
const SettingStack = createStackNavigator(
    {
        SettingScreen,
        SomethingScreen
    },
    //if you need,
    // but i recommend custom header
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Setting',
        }),
        initialRouteName: 'SettingScreen',
    }
);


const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Setting: SettingStack,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Home'){
                    icon = "🌈";
                } else if(routeName === 'Setting'){
                    icon = "🌙"
                } 

                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

const AppStack = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null,
            }),
        },
    }
);

export default createAppContainer(AppStack);