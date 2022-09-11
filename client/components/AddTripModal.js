import {
  Text,
  View,
  ScrollView,
  Image,
  Modal,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import ImagePickerButton from './ImagePickerButton';
import { useState, useEffect } from 'react';
export default function AddTripModal({ModalOpen, setModalOpen, setTrips}) {
  const [ image, setImage ] = useState();
  const [ startLocation, setStartLocation ] = useState();
  const [ destination, setDestination ] = useState();

  useEffect(()=>{
    console.log(image);
  }, [image])
  function submitHandler() {
    setTrips((prev) => [...prev, {
      startLocation: startLocation,
      destination: destination,
      image: image,
    }])
    setImage(null);
    setStartLocation(null);
    setDestination(null);
    setModalOpen(false);
  }
  return (
    <Modal
      animationType="slide"
      visible={ModalOpen}
      transparent={true}
      >

      <View style={{zIndex: 10000, height: '100%'}}>
        <KeyboardAvoidingView
        behavior="position"
        style={styles.form}
        >
      {/* CLOSE MODAL BY TOUCHING OUTSIDE */}
      <TouchableWithoutFeedback onPress={()=>{setModalOpen(false)}}>
        <View style={{ height: '50%'}}>
        </View>
      </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {/* FORM */}
            <View style={styles.inner}>
              <Text style={styles.H2}>Add a trip</Text>
              <TextInput placeholderTextColor={"#7C808D"} placeholder="Starting Location" style={styles.textInput} value={startLocation} onChangeText={text => setStartLocation(text)} />
              <TextInput placeholderTextColor={"#7C808D"} placeholder="Destination" style={styles.textInput} value={destination} onChangeText={text => setDestination(text)} />
              <ImagePickerButton setImage={setImage} />
              <View style={styles.button}  onPress={submitHandler}>
                <Text style={styles.button.H3} title="Submit" onPress={submitHandler} >Submit</Text>
              </View>
            </View>
            {/* FORM END */}
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  H1: {
    fontSize: 42,
    color: '#ffffff',
    fontFamily: 'CormorantGaramond_700Bold',
    lineHeight: 68
  },
  H2: {
      fontSize: 30,
      color: '#ffffff',
      fontFamily: 'CormorantGaramond_700Bold',
      lineHeight: 49,
      marginTop: 13
  },
  H3: {
      fontSize: 20,
      color: '#ffffff',
      fontFamily: 'Lora_400Regular',
      lineHeight: 32
  },
  H4: {
      fontSize: 16,
      color: '#C5C8CF',
      fontFamily: 'Roboto_400Regular',
      lineHeight: 26,

  },
  container: {
      height: '100%',
      paddingLeft: 31,
      paddingRight: 22,
      paddingTop: 65,
      backgroundColor: '#222831',
  },
  button: {
    backgroundColor: '#00ADB5',
    borderRadius: 30,
    paddingHorizontal: 100,
    paddingVertical: 15,
    // marginTop: 52,
    H3: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lora_700Bold'
    }
  },
  form: {
    height: '100%',
    justifyContent: 'space-between'
  },
  inner: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 24,
    height: '50%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#1F2226',
    justifyContent: "space-around"
  },
  header: {
    color: 'white',
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 45,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#2C3543",
    // borderColor: "#000000",
    // borderBottomWidth: 1,
    marginBottom: 36,
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#ffffff'
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});