import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';

import Home from '../Screens/Home/HomeScreen'
import Settings from '../Screens/Settings/SettingsScreen';
import Profile from '../Screens/Profile/ProfileScreen';
import Jobs from '../Screens/Jobs/Jobs';
import CustomDrawerContent from './CustomDrawerContent';
import { 
  Provider as PaperProvider,useTheme
} from 'react-native-paper';
const DrawerNavigator = createDrawerNavigator();

function Drawer() {
  const { colors, theme } = useTheme(); // use the useTheme hook to get the theme

  return (

<PaperProvider theme={theme}>

    <DrawerNavigator.Navigator
    
     initialRouteName="Home"
      screenOptions={{
        drawerStyle: { backgroundColor: '#E2EAF3'},
        drawerPosition:'left',
        drawerItemStyle:'center',
        drawerLabelStyle: { color: 'black', fontWeight: 'bold' },
        drawerActiveBackgroundColor: '#2F73FE',
        drawerActiveTintColor: 'white',
     
      }}
      drawerContent={props=> <CustomDrawerContent {...props} /> } >

      <DrawerNavigator.Screen name="Home" component={Home} />
      <DrawerNavigator.Screen name="Jobs" component={Jobs} />
      <DrawerNavigator.Screen name="Settings" component={Settings} />
      <DrawerNavigator.Screen name="Profile" component={Profile} />
    </DrawerNavigator.Navigator>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
  },
});

export default Drawer;
