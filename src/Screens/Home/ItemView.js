import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,StyleSheet
} from 'react-native';

const ItemView = ({ item, modalVisible, closeModal, openModal }) => {

  const formattedStartTime = new Date(item.job_start_time).toLocaleString('hu-HU', { dateStyle: 'short', timeStyle: 'short' });
  const formattedEndTime = new Date(item.job_end_time).toLocaleString('hu-HU', { dateStyle: 'short', timeStyle: 'short' });

  return (
    <View style={styles.ItemView} >
      
        <Text style={styles.title}>{item.job_name}</Text>
        
        <View style={{alignItems:'center'}} >
        <TouchableOpacity onPress={openModal}>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={closeModal}>
        <Text>Munkaidő kezdete:</Text>
        <Text style={styles.text}>{'\t\t\t\t'+formattedStartTime}</Text>
        <Text>Munkaidő vége:</Text>
        <Text>{'\t\t\t\t'+formattedEndTime}</Text>
        <Text>{item.attendance_student_id}</Text>
      </TouchableOpacity>
      
      <Text>{item.job_location}</Text>
    <Text></Text>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        
          <Text>{item.attendance_student_id}</Text>
        
      </Modal>
      
      </View>
      <View style={styles.counter} >
      <Text>Munka kezdésig: </Text>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight:'bold'
    },
    ItemView:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    

      backgroundColor:'#2F73FE',
      width: '100%',
      height:'100%',
      borderTopLeftRadius:10,
      borderRadius:50
    
    },
    counter:{
      justifyContent:'center',
      backgroundColor:'#fff',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      alignItems:'center',
      width:'80%',
      height:'20%',
      
      
      
      
    },
    text:{
      fontSize: 20
    },

  });
export default ItemView;
