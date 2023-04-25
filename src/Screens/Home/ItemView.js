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
    <View>
        <Text style={styles.title}>{item.job_name}</Text>
        <TouchableOpacity onPress={openModal}>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={closeModal}>
        <Text>Munkaidő kezdete:</Text>
        <Text>{'\t\t\t\t'+formattedStartTime}</Text>
        <Text>Munkaidő vége:</Text>
        <Text>{'\t\t\t\t'+formattedEndTime}</Text>
        <Text>{item.attendance_student_id}</Text>
      </TouchableOpacity>
      
      <Text>{item.job_location}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View>
          <Text>{item.attendance_student_id}</Text>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight:'bold'
    },
  });
export default ItemView;
