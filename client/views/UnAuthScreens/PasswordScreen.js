import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { BackArrow } from '../../assets/SVG';

const PasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Authentication')}>
        <BackArrow/>
      </TouchableOpacity>
      
      <Text style={styles.H2}>Enter the 4 digit code sent to you at (305)-102-1234</Text>

      <View>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <TextInput></TextInput>
      </View>

      <Text style={styles.H3}>I didn't receive a code</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetLocale')}>
        <Text style={styles.button.H3}>Continue</Text>
      </TouchableOpacity>
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
      marginTop: 43
  },
  H3: {
      fontSize: 20,
      color: '#3FC2EC',
      fontFamily: 'Lora_400Regular',
      lineHeight: 32,
      textDecorationLine: 'underline',
  },
  H4: {
      fontSize: 16,
      color: '#ffffff',
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
    marginTop: 52,
    H3: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
    }
  }, 
  backArrow: {
    marginTop: 65,
  }
});

export default PasswordScreen;