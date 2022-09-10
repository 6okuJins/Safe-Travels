import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { BackArrow } from '../../assets/SVG';

const PasswordScreen = ({navigation, route}) => {
  const [userInfo, setUserInfo] = useState(
    { 
      'phoneNumber': route.params.phoneNumber,
      'phoneNumberFormat': route.params.phoneNumberFormat,
      'confirmationCode': '',
    }
  );

  const formatConfirmationCode = (value) => {
    if (!value) return value;
    const confirmationNumber = value.replace(/[^\d]/g, '');
    return confirmationNumber.slice(0,4);
  };

  const unformatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D+/g, '')

    return phoneNumber;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Authentication', {phoneNumber: unformatPhoneNumber(userInfo.phoneNumber), phoneNumberFormat: userInfo.phoneNumberFormat})}>
          <BackArrow/>
        </TouchableOpacity>

        <View style={styles.verticalContainer}>
          <Text style={styles.H2}>Enter the 4 digit code sent to you at {userInfo.phoneNumberFormat}.</Text>

          <View style={styles.confirmationCode}>
            <TextInput
              style={styles.H4}
              placeholder=''
              onChangeText={(number) => {
                setUserInfo({...userInfo, 'confirmationCode': formatConfirmationCode(number)})
              }}
              value={userInfo.confirmationCode}
              placeholderTextColor='#FFFFFF'
            ></TextInput>
          </View>

          <Text style={styles.H3}>I didn't receive a code</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetLocale', {phoneNumber: unformatPhoneNumber(userInfo.phoneNumber), phoneNumberFormat: userInfo.phoneNumberFormat})}>
            <Text style={styles.button.H3}>Continue</Text>
          </TouchableOpacity>
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
  },
  H3: {
      fontSize: 20,
      color: '#3FC2EC',
      fontFamily: 'Lora_400Regular',
      lineHeight: 32,
      textDecorationLine: 'underline',
  },
  H4: {
      width: '100%',
      textAlign: 'center',
      fontSize: 16,
      color: '#ffffff',
      fontFamily: 'Roboto_400Regular',
      lineHeight: 26,
      letterSpacing: 30,
      marginTop: 3,
      marginLeft: 10
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
    height: '50%'
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
    position: 'absolute',
    top: 65,
    left: 31,
    zIndex: 10,
  }, 
  confirmationCode: {
    height: 40.5,
    width: 180,
    backgroundColor: '#393E46'
  }
});

export default PasswordScreen;