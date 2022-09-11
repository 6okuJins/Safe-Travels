import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { BackArrow } from '../../assets/SVG';
import { API_URL } from "@env";

const AuthenticationScreen = ({navigation, route}) => {

  const [userInfo, setUserInfo] = useState(
    { 
      'phoneNumber': route.params.phoneNumber,
      'phoneNumberFormat': route.params.phoneNumberFormat
    }
  );

  const formatPhoneNumber = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;s
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)} ${phoneNumber.slice(6,10)}`
  }

  const unformatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D+/g, '')

    return phoneNumber;
  }

  const handleAuthentication = async () => {

    const data = {
        phoneNumber: userInfo.phoneNumber
    }

    // ie. http://localhost:3001/api/authentication
    const response = await fetch(API_URL + '/api/authentication', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((response) => console.log(response.json()))
    .catch(error => {
      console.error(error)
    })

    // const data = await response.json();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('SignUp')}>
          <BackArrow/>
        </TouchableOpacity>

        <View style={styles.verticalContainer}>
          <Text style={styles.H2}>Confirm your number</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputContainer.area}>
              <TextInput style={styles.inputContainer.flag} placeholder='🇺🇸'></TextInput>
            </View>

            <View style={styles.inputContainer.number}>
              <TextInput 
                style={styles.inputContainer.H4} 
                placeholder='Phone Number' 
                placeholderTextColor='#C5C8CF'
                onChangeText={(number) => {
                  setUserInfo({...userInfo, 'phoneNumberFormat': formatPhoneNumber(number),'phoneNumber': unformatPhoneNumber(number)})
                }}
                value={userInfo.phoneNumberFormat}
              >
              </TextInput>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              if (userInfo.phoneNumber.length === 10) {
                handleAuthentication()
                navigation.navigate("Password", {phoneNumber: userInfo.phoneNumber, phoneNumberFormat: userInfo.phoneNumberFormat})
              }
            }}
            >
              <Text style={styles.button.H3}>Continue</Text>
          </TouchableOpacity>

          <Text style={styles.H4}>By proceding, you acknowledge that you will be recieving SMS messages from safe travels and affiliates to the number provided. </Text>

        </View>
      </View>
    </TouchableWithoutFeedback>
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
      // marginTop: 43,
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
      // marginTop: 44,
  },
  container: {
      height: '100%',
      paddingLeft: 31,
      paddingRight: 22,
      paddingTop: 65,
      backgroundColor: '#222831',
  },
  verticalContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '55%',
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
  backArrow: {
    position: 'absolute',
    top: 65,
    left: 31,
    zIndex: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 43,
    area: {
      height: 45,
      width: 83,
      backgroundColor: '#393E46',
      marginRight: 22,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    number: {
      height: 45,
      width: 217,
      backgroundColor: '#393E46',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    H4: {
      fontSize: 16,
      color: '#ffffff',
      fontFamily: 'Roboto_400Regular',
      lineHeight: 26,
      marginBottom: 5,
      marginLeft: 19,
    },
    flag: {
      marginLeft: 'auto',
      marginRight: 'auto',
      // top: 15
    }
  }
});

export default AuthenticationScreen;