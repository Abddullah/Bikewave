import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { t } from 'i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import screenResolution from '../utilities/constants/screenResolution';
import { colors } from '../utilities/constants';

// icons
import { HomeActive, HomeInactive, } from '../assets/svg';

// bottom navigation screens
import Home from '../screens/Home/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home1" component={Home} />
        </Stack.Navigator>
    )
}

export function AppBottomNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            tabBar={(props) => {
                return (
                    <BottomTabBar {...props} />);
            }}
            screenOptions={{
                // tabBarStyle: { backgroundColor: colors.Primary_01 },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => {
                        return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: RFValue(6, screenResolution.screenWidth), top: -5 }}>{t('home')}</Text>)
                    },
                    tabBarIcon: ({ focused }) => {
                        return (focused ? <HomeActive /> : <HomeInactive />
                        )
                    },
                }}
                name="Home"
                component={HomeRoutes}
            />
        </Tab.Navigator >
    );
}

