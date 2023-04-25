import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Modal,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Moment from 'moment';



import ItemView from './JobsofStudent';
import JobsofStudent from './JobsofStudent';



const Home=()=> {
  
  const [ jobsofStudent, setJobsofStudent] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);
 


  useEffect(()=>{
    fetch('http://192.168.6.8:3000/jobofstudent')
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
//<JobsofStudent  />

const ItemView = ({ item }) => {
  var date = new Date("2016-01-04 10:34:23");
  

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setActiveModalId(item.attendance_student_id);
          setModalVisible(true);
        }}
      >
        <View style={styles.examContainer}>
        <Ionicons name="calendar" size={24} color="black" />
        <Text>{date}</Text>
        <Text>{item.job_end_time}</Text>
      </View>
      
      
      
        <Text>{item.attendance_student_id}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActiveModalId(item.attendance_student_id);
          setModalVisible(true);
        }}
      >
        <Text>{item.job_name}</Text>
      </TouchableOpacity>
      
      <Text>{item.job_location}</Text>
        <Text>{localTime}</Text>
        <Text>{item.job_end_time}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={activeModalId === item.attendance_student_id && modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setActiveModalId(null);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>{item.attendance_student_id}</Text>
        </View>
      </Modal>
    </View>
  );
};

  return (
    <View style={styles.container}>
      
      <FlatList
          data={jobsofStudent}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
      
      
      />
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
    examContainer:{
      flexDirection:'row'
    }
  });
  

  export default Home;