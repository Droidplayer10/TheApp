import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer'
import MainStackNavigator from './src/Screens/MainStackNavigator/MainStackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator  />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
