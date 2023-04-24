import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function MainButton(props) {
    const { onPress, text, color } = props;
  
    return (
      <TouchableOpacity onPress={onPress} style={[styles.btnContainer, { backgroundColor: color }]}>
        <Text style={styles.ButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({
    btnContainer: {
        
        height: "100%",
        width:"40%",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems:'center'
    },
    ButtonText:{
        fontSize:20,
        color: 'white',
        fontWeight:'bold'

    }
  });