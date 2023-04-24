import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




function Jobs() {
  const nextExamDate = '2023.05.03 14:00';
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <View style={styles.container}>
      <View style={styles.examContainer}>
        <Ionicons name="calendar" size={24} color="black" />
        <Text style={styles.examText}>{nextExamDate}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Ionicons name="time" size={24} color="black" />
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>
    </View>
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
  

  export default Jobs;