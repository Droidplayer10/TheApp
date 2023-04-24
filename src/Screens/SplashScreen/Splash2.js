import React, { useState } from 'react';
import { Button, StyleSheet, View,Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import MainButton from '../../components/MainButton/MainButton';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'




const Splash2 = ({navigation}) => {
 


  return (

    
    <View style={styles.container}>
<View style={styles.header}>

<Animatable.Image
animation="bounceIn"
duration={3000}
iterationDelay={3}
source={require("../../Images/AppLogo.png")}
style={styles.logo}
resizeMode={"cover"}


/>




</View>

      <View style={styles.footer}>
 

        <View style={styles.alternativeLayoutButtonContainer} >
      
        <SecondaryButton onPress={() => navigation.navigate('Registration')} text="Regisztráció" color='#CCDCE9' />

        <Text></Text>
        <MainButton onPress={() => navigation.navigate('Drawer')} text="Bejelentkezés" color='#494F88' />

    
        </View>
       
      </View>

    
    
     
      
    </View>
     
  );
}
const {height} = Dimensions.get("screen")
const height_logo = height *0.7 * 0.4
const styles = StyleSheet.create({

  logo:{
    height:height_logo,
    width:height_logo
  },
  container: {
   flex: 1,
   justifyContent: 'center',
    backgroundColor: "#E2EAF3",
  },
  header:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer:{
    flex:0.1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#97DEFF"


  },
  alternativeLayoutButtonContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    
    
  },

});

export default Splash2;