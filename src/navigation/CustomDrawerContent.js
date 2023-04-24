import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

import { Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function CustomDrawerContent(props) {
  const paperTheme = useTheme();
 

  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop: 15}}>
                    <Avatar.Image 
                        source={require("../Images/Profile.jpg")}
                        size={50}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Title style={styles.title}>TomHun</Title>
                        <Caption style={styles.caption}>Boros Tamás Attila</Caption>
                    </View>
                </View>

               
            </View>

            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="home-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profil"
                    onPress={() => {props.navigation.navigate('Profile')}}
                />
                 <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="post" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Munkák"
                    onPress={() => {props.navigation.navigate('Jobs')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="bookmark-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Mentett"
                    onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-settings-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Beállítások"
                    onPress={() => {props.navigation.navigate('SettingsScreen')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-check-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Ügyfélszolgálat"
                    onPress={() => {props.navigation.navigate('SupportScreen')}}
                />
            </Drawer.Section>
            <Drawer.Section title="Téma">
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Sötét Mód</Text>
                        <View pointerEvents="none">
                            <Switch value={paperTheme.dark}/>
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem 
            icon={({color, size}) => (
                <Icon 
                name="exit-to-app" 
                color={color}
                size={size}
                />
            )}
            label="Kijelentkezés"
            onPress={() => {}}
        />
    </Drawer.Section>
</View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawerContent;
