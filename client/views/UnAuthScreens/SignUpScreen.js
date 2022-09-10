import React, { useState } from 'react';
import { GoogleAuth } from '../../components';
import { StyleSheet, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { AppleLogo, GithubLogo, FacebookLogo, BackArrow } from '../../assets/SVG';

const SignUpScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(
    { 
      'phoneNumber': '',
      'phoneNumberFormat': ''
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

    return phoneNumber
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Welcome')}>
          <BackArrow/>
        </TouchableOpacity>

        <View style={styles.verticalContainer}>
          <Text style={styles.H2}>Get Started</Text>
          <View style={styles.inputBorder}>
            <TextInput 
              style={styles.inputBorder.H4}
              placeholder='Phone number'
              onChangeText={(number) => {
                setUserInfo({...userInfo, 'phoneNumberFormat': formatPhoneNumber(number), 'phoneNumber': unformatPhoneNumber(number)})
              }}
              value={userInfo.phoneNumberFormat}
              placeholderTextColor='#C5C8CF'
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => userInfo.phoneNumber.length === 10 ? navigation.navigate('Authentication', {phoneNumber: unformatPhoneNumber(userInfo.phoneNumber), phoneNumberFormat: userInfo.phoneNumberFormat}) : null}>
            <Text 
              style={styles.button.H3}
            >
                Continue
            </Text>
          </TouchableOpacity>

          <View>
            <View style={styles.divider}>
              <Text style={styles.divider.H4}>or sign in with</Text>
            </View>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialContainer.icon}>
              <AppleLogo/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialContainer.icon}>
              <GithubLogo/>
            </TouchableOpacity>
            <TouchableOpacity>
              <GoogleAuth style={styles.socialContainer.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialContainer.icon}>
              <FacebookLogo/>
            </TouchableOpacity>
          </View>

          <View style={styles.alreadyRegistered}>
            <Text style={styles.alreadyRegistered.H4}>
              Already have an account? 
            </Text>
            <Text style={styles.alreadyRegistered.H4ul}> Sign in!</Text>
          </View>

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
      textAlign: 'center',
  },
  H3: {
      fontSize: 20,
      color: '#ffffff',
      fontFamily: 'Lora_400Regular',
      lineHeight: 32
  },
  H4: {
      fontSize: 16,
      color: '#ffffff',
      fontFamily: 'Roboto_400Regular',
      lineHeight: 26
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
    H3: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lora_700Bold',
    }
  },
  container: {
    height: '100%',
    padding: 36.5,
    backgroundColor: '#222831',
    paddingTop: 65,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  verticalContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '80%',
  },
  backArrow: {
    position: 'absolute',
    top: 65,
    left: 31,
    zIndex: 10
  },
  inputBorder: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    paddingBottom: 9,
    H4: {
      fontSize: 16,
      color: '#ffffff',
    },
  },
  divider: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    H4: {
      fontSize: 16,
      backgroundColor: '#222831',
      color: '#ffffff',
      textAlign: 'center',
      margin: 'auto',
      width: 124,
      transform: [{ translateY: 10 }]
    },
  },
  socialContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    icon: {
      width: 50,
      height: 50,
      backgroundColor: '#393E46',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  },
  alreadyRegistered: {
    flexDirection: "row",
    justifyContent: "center",
    H4: {
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'Roboto_400Regular',
    },
    H4ul: {
      fontFamily: 'Roboto_400Regular',
      color: '#ffffff',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  }
});


export default SignUpScreen;