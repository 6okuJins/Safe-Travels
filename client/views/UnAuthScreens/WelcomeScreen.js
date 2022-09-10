import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LogoLarge } from '../../assets/SVG';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/welcome-background.png')} resizeMode="cover" style={styles.background}>
            <View style={styles.container.sharedPadding}>
                <LogoLarge style={styles.logo}/>

                <View>
                    <Text style={styles.H4}>Travel Safely</Text>
                    <Text style={styles.H1}>Your Device is more than just a brick. 🧱</Text>
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.button.H3}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    H1: {
        fontSize: 42,
        color: '#ffffff',
        fontFamily: 'CormorantGaramond_700Bold',
        lineHeight: 68,
        width: 304
    },
    H2: {
        fontSize: 30,
        color: '#ffffff',
        fontFamily: 'CormorantGaramond_700Bold',
        lineHeight: 49,
    },
    H3: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Lora_400Regular',
        lineHeight: 32,
    },
    H4: {
        fontSize: 16,
        color: '#BEBEBE',
        fontFamily: 'Roboto_400Regular',
        lineHeight: 26,
        // marginTop: 191
    },
    container: {
        height: '100%',
        backgroundColor: 'black',
        sharedPadding: {
            paddingLeft: 31,
            paddingRight: 22,
            paddingTop: 65,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '100%'
        }
    },
    button: {
        backgroundColor: '#00ADB5',
        borderRadius: 30,
        paddingHorizontal: 100,
        paddingVertical: 15,
        // marginTop: 200,
        H3: {
            fontSize: 20,
            textAlign: 'center',
            color: '#ffffff',
            fontFamily: 'Lora_700Bold'
        }
    },
    logo: {
        position: 'absolute',
        top: 110,
        left: 230
    },
    background: {
        width: '100%', 
        height: '100%',
        flex: 1
    }
});

export default WelcomeScreen;