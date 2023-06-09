import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Modal,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import ItemView from './ItemView';

const Home=({navigation})=> {
  
  const [ jobsofStudent, setJobsofStudent] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);
 
  useEffect(()=>{
    fetch('http://192.168.1.121:3000/jobofstudent')
    .then((response) => response.text())
    .then((responseJson)=>{
      try {
        const response = JSON.parse(responseJson);
        setJobsofStudent(response);
        
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
      }}
      
    />
  );
};

const closeModal = () => {
  setModalVisible(false);
  setActiveModalId(null);
}
const openModal = (studentId) => {
  setModalVisible(true);
  setActiveModalId(studentId);
};



  return (
    <View style={styles.container}>
      

     <View style={styles.footer} >

      <FlatList
          data={jobsofStudent}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) =>
          <ItemView
            item={item}
            modalVisible={modalVisible}
            setActiveModalId={setActiveModalId}
            closeModal={closeModal}
            openModal={() => openModal(item.attendance_student_id)}
            navigation={navigation} 

          />}
      />

</View>
     
      
    </View>
  );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCDCE9',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    header: {
      flex:0.5,
      flexDirection:'row'
    },
    footer: {
      flex:1.3,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#E2EAF3',
   borderTopStartRadius:20
    }
  });
  

  export default Home;