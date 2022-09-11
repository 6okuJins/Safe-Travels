import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import { DatePicker, AnimatedRing } from '../../components';
import { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';

export default function TripScreen({navigation, route}) {
  const [ start, setStart ] = useState(false);
  const [ timeLeft, setTimeLeft ] = useState();
  const backButtonHandler = () => {
    navigation.goBack();
  }
  const startButtonHandler = () => {
    setStart((prev) => !prev);
  }
  const { 
    image,
    startLocation,
    destination,
    endDate
    } = route.params;
  return (
    <View style={{height: '100%', width: '100%'}}>
        <TouchableOpacity
          title='Back'
          onPress={backButtonHandler}
          style={{position: 'absolute', left: 30, top: 60, backgroundColor: 'rgba(0,0,0,0.55)', padding: 5, zIndex:1, borderRadius: 10}}>
            <Feather name='arrow-left' color= 'white' size={30}/>
          </TouchableOpacity>
      <View style={[{justifyContent: 'center', alignItems: 'center', alignContent: 'flex-start', height: '100%'}]}>
        <Image
          source={{uri: image}}
          style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                }}/>
        <View style={{
          backgroundColor: 'rgba(0,0,0, 0.8)',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 20,
          position: 'absolute',
          top: 120,

        }}>
          <Text style={{
            fontSize: 42,
            color: 'rgb(255,255,255)',
            fontFamily: 'CormorantGaramond_700Bold'
            }}>{destination}</Text>
        </View>
        {start && <AnimatedRing style={{position: 'absolute'}} />}
        <DatePicker setTimeLeft={setTimeLeft}/>
        <TouchableOpacity
          onPress={startButtonHandler}
          style={{backgroundColor: 'rgba(0,0,0,0.8)', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, position: 'Absolute', top: 70}}>
          <Text style={{fontFamily: 'CormorantGaramond_700Bold', fontSize: 32, color: 'rgb(255,255,255)'}}>
            {!(start) ? 'Start' : 'Stop'}
            {(start) ? ' (': ''}
            {(start) ? timeLeft : ''}
            {(start) ? ')': ''}
          </Text>
        </TouchableOpacity>
      </View>
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
      paddingRight: 31,

      backgroundColor: '#222831',
  },
  button: {
    backgroundColor: '#00ADB5',
    borderRadius: 30,
    paddingHorizontal: 100,
    paddingVertical: 15,
    marginTop: 52,
    H3: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lora_700Bold'
    }
  },
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