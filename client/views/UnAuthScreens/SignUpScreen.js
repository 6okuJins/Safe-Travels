import React, { useCallback, useState } from 'react';
import { FormInput, GoogleAuth } from '../../components';
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { AppleLogo, GithubLogo, FacebookLogo, BackArrow } from '../../assets/SVG';


const SignUpScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(
    { 
      'phoneNumber': '',
    }
  );

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Welcome')}>
        <BackArrow/>
      </TouchableOpacity>

      <Text style={styles.H2}>Get Started</Text>
      <View style={styles.inputBorder}>
        <TextInput 
          style={styles.inputBorder.H4}
          placeholder='Phone number'
          onChangeText={(text) => setUserInfo({...userInfo, 'phoneNumber': text})}
          value={userInfo.phoneNumber}
          placeholderTextColor='#C5C8CF'
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Authentication')}>
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
      marginTop: 54,
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
    marginTop: 52,
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
    paddingTop: 65
  },
  backArrow: {
    marginTop: 65,
  },
  inputBorder: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    paddingBottom: 9,
    marginTop: 50,
    H4: {
      fontSize: 16,
      color: '#ffffff',
    },
  },
  divider: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginTop: 40,
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
    marginTop: 40,
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
    marginTop: 40,
    H4: {
      //fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'center',
    },
    H4ul: {
      //fontFamily: 'Roboto_400Regular',
      color: '#ffffff',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  }
});


export default SignUpScreen;