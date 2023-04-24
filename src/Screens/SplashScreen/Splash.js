import React, { useState } from 'react';
import { Button, StyleSheet, View,Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import MainButton from '../../components/MainButton/MainButton';



const Splash = ({navigation}) => {
 



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

 <Text>HELLO!</Text>


</View>


      <View style={styles.footer}>
 

        <View style={styles.alternativeLayoutButtonContainer} >
      
        
        <MainButton onPress={() => navigation.navigate('Splash2')} text="Tovább" color='#494F88' />
    
        </View>
       
      </View>

    
    
     
      
    </View>
     
  );
}
const {height} = Dimensions.get("screen")
const height_logo = height *0.7 * 0.4
const styles = StyleSheet.create({
  
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
flex: 0.5,
alignItems:'center',
borderTopLeftRadius: 40,
borderTopRightRadius: 40,
backgroundColor:"#fff"

  },
  logo:{
    height:height_logo,
    width:height_logo,
    borderRadius: 40
  },
  Title:{
    fontWeight:'bold',
    color: '#146C94',
    fontSize: 20
  },
  footer:{
    flex:0.1,
    backgroundColor: 'white',
  

  },
  alternativeLayoutButtonContainer: {
    
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
    
    
  },
  Button:{
    position:'relative',
    height: "90%",
    width:"40%",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor:'#68BBE3',
    alignItems:'center'
    
  },
  ButtonTitle:{
    fontSize:20,
    color: 'white',
    fontWeight:'bold'
    
  },

 
 
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Splash;