import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert, Modal, Pressable, ScrollView, Image
  } from 'react-native';
import { useState } from 'react';

  export default ItemView = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [ActiveModalId, setActiveModalId] = useState(null);
  
    return (
        <View>
            {/* MODAL */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={ActiveModalId === item.attendance_student_id && modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
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








  