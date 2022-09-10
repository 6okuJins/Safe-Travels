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
              <Text style={styles.header}>Add Trip</Text>
              <TextInput placeholder="Starting Location" style={styles.textInput} value={startLocation} onChangeText={text => setStartLocation(text)} />
              <TextInput placeholder="Destination" style={styles.textInput} value={destination} onChangeText={text => setDestination(text)} />
              <ImagePickerButton setImage={setImage} />
              <View style={styles.btnContainer}>
                <Button title="Submit" onPress={submitHandler} />
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
  form: {
    
    height: '100%',
    justifyContent: 'space-between'
  },
  inner: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 24,
    height: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: "space-around"
  },
  header: {
    color: 'white',
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#393E46",
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});