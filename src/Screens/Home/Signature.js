import React, { useState, useRef } from 'react';
import { View, Button,StyleSheet,Text } from 'react-native';
import { requestFrame } from 'react-native-reanimated/lib/reanimated2/core';
import {Picker} from '@react-native-picker/picker';
import SignatureCanvas from 'react-native-signature-canvas';
import MainButton from '../../components/MainButton/MainButton';

const Signature=()=>{
  const [signature, setSignature] = useState("");
  const [selectedValue, setSelectedValue] = useState("java");

  // Define an array of items for the picker
  const pickerItems = [
    {label: "Java", value: "java"},
    {label: "JavaScript", value: "javascript"},
    {label: "Python", value: "python"}
  ];

  return (
    <View style={{ flex: 1 }}>
      <SignatureCanvas
        onOK={(img) => setSignature(img)}
        clearText="Törlés"
        confirmText="Mentés"
        webStyle={styles.signatureCanvas}
      />
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {pickerItems.map((item) => (
            <Picker.Item key={item.value} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  signatureCanvas: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Signature;
