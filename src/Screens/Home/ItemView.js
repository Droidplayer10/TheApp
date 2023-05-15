import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,StyleSheet,Image
} from 'react-native';

const ItemView = ({ item, modalVisible, closeModal, openModal, navigation }) => {
  
 

  const OpenSignature=()=>{
    navigation.navigate('Signature')
  }

  const formattedStartTime = new Date(item.job_start_time).toLocaleString('hu-HU', { dateStyle: 'short', timeStyle: 'short' });
  const formattedEndTime = new Date(item.job_end_time).toLocaleString('hu-HU', { dateStyle: 'short', timeStyle: 'short' });

  return (
    <View style={styles.container}>
      <View style={styles.ItemView} >
        <Text style={styles.title}>{item.job_name}</Text>
        
        
          <Text style={styles.joboftext}>Munkaidő kezdete:</Text>
         <Text style={styles.joboftext}>{'\t\t\t\t\t'+formattedStartTime}</Text> 
          <Text style={styles.joboftext}>Munkaidő vége: </Text>
          <Text style={styles.joboftext}>{'\t\t\t\t\t'+formattedEndTime}</Text>
          <Text style={styles.joboftext}>Helyszín: </Text>
        
        
        <Text style={styles.joboftext}>{'\t\t\t\t\t'+item.job_location}</Text>
        <Text></Text>
        <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={openModal}>
          
        <Text style={{fontSize:20, fontFamily:'sans-serif-medium'}}>Jelenléti ív</Text>
      </TouchableOpacity>

      </View>
      
      
      <View style={styles.counter}>
  <View style={styles.counterBackground} />
  <Text style={styles.text}>Munka kezdésig:</Text>
</View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
          {/* -----MODAL CONTENT------- */}

          <View style={styles.modalView}>   
              <Image style={styles.tinyLogo}
              source={{
                uri:'http://192.168.1.121:3000/'+item.job_attendance_sheet
                }}  />
 

 <TouchableOpacity
                style={styles.CloseModalButton}
                onPress={OpenSignature}
              >
                
              
                <Text style={styles.CloseModalText}>Aláírom</Text>

              </TouchableOpacity>

<TouchableOpacity
                style={styles.CloseModalButton}
                onPress={closeModal}
              >
                
              
                <Text style={styles.CloseModalText}>X</Text>

              </TouchableOpacity>

<View>


  
</View>


          </View>
         
          

        
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemView: {
    alignItems: 'flex-start',
    backgroundColor: '#2F73FE',
    width: '95%',
    
    borderRadius: 30,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    
  },
  tinyLogo: {
    width: '100%',
    height: '70%',
    resizeMode: 'stretch'
  },
 counter: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'flex-start',
    width: '80%',
    height: '12%',
    position: 'absolute',
  bottom: 0,
    overflow: 'hidden',
    paddingBottom: 0,
    backgroundImage: 'linear-gradient(to bottom, transparent 0%, #fff 100%)',
  },
  counterBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '10%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  modalTitle:{
    fontSize: 25,
    color:'black',
    fontWeight:'bold',
    fontFamily:''
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    
    alignSelf:'center'
  },
  text: {
    fontSize: 20,
    color: '#2F73FE',
    marginVertical: 5,
  },
  joboftext:{
    fontSize: 20,
    color: '#fff',
  },
  modalView: {
    height: '95%',
    width: '95%',
    margin: 15,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.0,
    elevation: 4,
  },
  CloseModalButton:{
    borderRadius: 50,
    padding: 4,
    elevation: 2,
    backgroundColor:'red'
  },
  CloseModalText:{
    fontSize:25,
    fontWeight:'700',
    color: '#2F73FE',
    textAlign:'center'
  }
});

export default ItemView;
