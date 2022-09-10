import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { BackArrow } from '../../assets/SVG';

const AuthenticationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('SignUp')}>
        <BackArrow/>
      </TouchableOpacity>

      <Text style={styles.H2}>Confirm your number</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputContainer.area}>
          <TextInput style={styles.inputContainer.flag} placeholder='🇺🇸'></TextInput>
        </View>

        <View style={styles.inputContainer.number}>
          <TextInput style={styles.inputContainer.H4} placeholder='Phone Number' placeholderTextColor='#C5C8CF'></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Password")}>
          <Text style={styles.button.H3}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.H4}>By proceding, you acknowledge that you will be recieving SMS messages from safe travels and affiliates to the number provided. </Text>
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
      marginTop: 43,
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
      marginTop: 44,
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

export default AuthenticationScreen;