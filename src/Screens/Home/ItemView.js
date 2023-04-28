import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const ItemView = ({ item, modalVisible, closeModal, openModal }) => {

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
          {/* -----MODAL ABLAK------- */}

          <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Jelenléti ív</Text>

          </View>


          <TouchableOpacity
                style={styles.CloseModalButton}
                onPress={closeModal}
              >
                
              
                <Text style={styles.CloseModalText}>X</Text>

              </TouchableOpacity>
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
    height: 700,
    width: 380,
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
    elevation: 5,
  },
  CloseModalButton:{
    borderRadius: 80,
    padding: 6,
    elevation: 2,
    backgroundColor:'red'
  },
  CloseModalText:{
    fontSize:25,
    fontWeight:'bold',
    color: '#2F73FE',
    textAlign:'center'
  }
});

export default ItemView;
