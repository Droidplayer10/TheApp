import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../SplashScreen/Splash';
import Splash2 from '../SplashScreen/Splash2';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Drawer from '../../navigation/Drawer'
import Jobs from '../Jobs/Jobs';


const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash2"
        component={Splash2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ title: 'Regisztráció' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Bejelentkezés' }}
      />
       <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
