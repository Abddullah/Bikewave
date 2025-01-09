import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// local imports
import Splash from './../screens/Splash/index';
import Register from '../screens/Register';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import { AppBottomNavigator } from './BottomNavigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} component={Splash} name="Splash" />
        <Stack.Screen options={{ headerShown: false }} component={Register} name="Register" />
        <Stack.Screen options={{ headerShown: false }} component={Login} name="Login" />
        <Stack.Screen options={{ headerShown: false }} component={ForgotPassword} name="ForgotPassword" />
        <Stack.Screen options={{ headerShown: false }} component={ResetPassword} name="ResetPassword" />
        <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppBottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;