import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { BackArrow } from '../../assets/SVG';
import { useUpdateUserContext } from '../../contexts';
const SetLocaleScreen = ({navigation, route}) => {
  const updateUserContext = useUpdateUserContext();
  const [userInfo, setUserInfo] = useState(
    { 
      'phoneNumber': route.params.phoneNumber,
      'phoneNumberFormat': route.params.phoneNumberFormat,
    }
  );

  const unformatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D+/g, '')

    return phoneNumber;
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Password', {phoneNumber: unformatPhoneNumber(userInfo.phoneNumber), phoneNumberFormat: userInfo.phoneNumberFormat})}>
        <BackArrow/>
      </TouchableOpacity>

      <View style={styles.verticalContainer}>
        <Text style={styles.H2}>Do you want to set your home location?</Text>
        <Text style={styles.H4}>We’ll use this information to disable any pending alarms if you happen to arrive home early.</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchContainer.H4}>Home detection</Text>
          <Switch/>
        </View>
      
        <Text style={styles.H4}>Psst, you can disable this feature in your profile.</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => updateUserContext(true)}>
          <Text style={styles.button.H3}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    // marginTop: 43
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
    // marginTop: 22,
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
    height: '70%'
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
  switchContainer: {
    flexDirection: 'row',
    // marginTop: 72,
    // marginBottom: 63,
    justifyContent: 'center',
    H4: {
      fontSize: 16,
      color: '#ffffff',
      fontFamily: 'Roboto_400Regular',
      lineHeight: 26,
      marginRight: 45
    }
  }
});

export default SetLocaleScreen;