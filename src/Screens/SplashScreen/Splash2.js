import React, { useState } from 'react';
import { Button, StyleSheet, View,Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import MainButton from '../../components/MainButton/MainButton';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'




const Splash2 = ({navigation}) => {
 
  
  const bounceInDown = {
    from: {
      opacity: -2000,
    },
    to: {
      opacity: 1,
    },
  };


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
<View style={styles.middle}>

 <Text style={styles.Title}>Már csak egy lépés!</Text>
 <Text></Text>
 <Animatable.Text animation={bounceInDown} duration={1000} style={styles.text}>Ha nem vagy még tag</Animatable.Text>

 
 

  


</View>
<View style={styles.fingerView}>
<Animatable.Text animation={bounceInDown} duration={1000} style={styles.text}>Kattints ide!</Animatable.Text>

<Animatable.Image
animation="bounceIn"
duration={2000}
iterationDelay={2}
source={require("../../Images/pointing-down.png")}
style={styles.finger}
resizeMode={"cover"}


/>

</View>

      <View style={styles.footer}>
 

        <View style={styles.alternativeLayoutButtonContainer} >
      
        <SecondaryButton onPress={() => navigation.navigate('Registration')} text="Regisztráció" color='#a4a9de' />

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
  finger:{
    width:"25%",
    height:"25%",
  },
  container: {
   flex: 1,
   justifyContent: 'center',
    backgroundColor: "#E2EAF3",
  },
  header:{
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle:{
    flex: 0.6,
    alignItems:'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor:"#E2EAF3"
    
      },
      fingerView:{
      flex:0.1,
      
      },
  footer:{
    flex:0.1,
    backgroundColor: '#E2EAF3',


  },
  alternativeLayoutButtonContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    
    
  },
  Title:{
    fontWeight:'bold',
    color: '#146C94',
    fontSize: 50
  },
  text:{
    fontSize:30,
    fontWeight:'500',
    color:'grey'
  },
});

export default Splash2;