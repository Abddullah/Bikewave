import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {t} from 'i18next';
import {Typography} from '../utilities/constants/constant.style';
import {colors} from '../utilities/constants';

// icons
import {
  FavouriteActive,
  FavouriteInactive,
  HomeActive,
  HomeInactive,
  MessagesActive,
  MessagesInactive,
  OfferActive,
  OfferInactive,
  ProfileActive,
  ProfileInactive,
} from '../assets/svg';

// bottom navigation screens
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Offer from '../screens/Offer';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home1"
        component={Home}
      />
    </Stack.Navigator>
  );
}
function FavoritesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Favorites1"
        component={Favorites}
      />
    </Stack.Navigator>
  );
}
function OfferRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Offer1"
        component={Offer}
      />
    </Stack.Navigator>
  );
}
function MessagesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Messages1"
        component={Messages}
      />
    </Stack.Navigator>
  );
}
function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile1"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export function AppBottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => {
        return <BottomTabBar {...props} />;
      }}
      screenOptions={{
        tabBarStyle: {height: 70},
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  {
                    color: focused ? colors.primary : colors.dark_gray,
                    top: -12,
                  },
                  Typography.f_12_roboto_medium,
                ]}>
                {t('home')}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return focused ? <HomeActive /> : <HomeInactive />;
          },
        }}
        name="Home"
        component={HomeRoutes}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  {
                    color: focused ? colors.primary : colors.dark_gray,
                    top: -12,
                  },
                  Typography.f_12_roboto_medium,
                ]}>
                {t('favorites')}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return focused ? <FavouriteActive /> : <FavouriteInactive />;
          },
        }}
        name="Favorites"
        component={FavoritesRoutes}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  {
                    color: focused ? colors.primary : colors.dark_gray,
                    top: -12,
                  },
                  Typography.f_12_roboto_medium,
                ]}>
                {t('offer')}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return focused ? <OfferActive /> : <OfferInactive />;
          },
        }}
        name="Offer"
        component={OfferRoutes}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  {
                    color: focused ? colors.primary : colors.dark_gray,
                    top: -12,
                  },
                  Typography.f_12_roboto_medium,
                ]}>
                {t('messages')}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return focused ? <MessagesActive /> : <MessagesInactive />;
          },
        }}
        name="Messages"
        component={MessagesRoutes}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  {
                    color: focused ? colors.primary : colors.dark_gray,
                    top: -12,
                  },
                  Typography.f_12_roboto_medium,
                ]}>
                {t('profile')}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return focused ? <ProfileActive /> : <ProfileInactive />;
          },
        }}
        name="Profile"
        component={ProfileRoutes}
      />
    </Tab.Navigator>
  );
}
