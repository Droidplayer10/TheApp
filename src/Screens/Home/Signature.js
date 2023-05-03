import React, { useState, useRef } from 'react';
import { View, Button,StyleSheet,Text } from 'react-native';
import { requestFrame } from 'react-native-reanimated/lib/reanimated2/core';
import SignatureCanvas from 'react-native-signature-canvas';


const Signature=()=>{

  const [signature, setSignature] = useState("");


return(

<SignatureCanvas
onOK={(img) => setSignature(img)}
clearText="Törlés"
confirmText="Mentés"
webStyle={styles.signatureCanvas}
/>

)}
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
