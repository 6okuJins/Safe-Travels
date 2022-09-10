import {View, Text, StyleSheet, Button } from 'react-native';
import { ImagePickerButton, Carousel } from '../../components';
import { useState, useEffect } from 'react';
export default function TravelScreen() {
  const [ image, setImage ] = useState();
  const [ color, setColor ] = useState();
  useEffect(()=> {
    console.log(image);
  },[image])
  return (
    <View style={style.container}>
      <Text>TRAVEL</Text>
      <Carousel image={image} color={color}/>
      <ImagePickerButton setImage={setImage}/>
      <Button
      title='Change color'
      onPress={() => setColor('blue')}/>
    </View>
  )
}
const style = StyleSheet.create({
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
      marginTop: 15,
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
  // button: {
  //   backgroundColor: '#00ADB5',
  //   borderRadius: 30,
  //   paddingHorizontal: 100,
  //   paddingVertical: 15,
  //   marginTop: 52,
  //   H3: {
  //       fontSize: 20,
  //       textAlign: 'center',
  //       color: '#ffffff',
  //       fontFamily: 'Lora_700Bold'
  //   }
  // },
  backArrow: {
    marginTop: 65,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 43,
    area: {
      height: 45,
      width: 83,
      backgroundColor: '#393E46',
      marginRight: 22
    },
    number: {
      height: 45,
      width: 217,
      backgroundColor: '#393E46'
    },
    H4: {
      fontSize: 16,
      color: '#ffffff',
      fontFamily: 'Roboto_400Regular',
      lineHeight: 26,
      marginTop: 7,
      marginLeft: 19,
    },
    flag: {
      marginLeft: 'auto',
      marginRight: 'auto',
      top: 9
    }
  }
});