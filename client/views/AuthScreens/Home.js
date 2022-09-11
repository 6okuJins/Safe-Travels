// import { DatePicker } from '../../components';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Carousel, SearchBar, PlusButton, AddTripModal} from '../../components';
import { useState } from 'react';
import { TravelBuddies } from '../../assets/SVG'

const Home = ({ navigation }) => {
  const [ trips, setTrips ] = useState([]);
  const [ ModalOpen, setModalOpen ] = useState(false);
  function openTrip(index, carouselItems) {
    navigation.navigate('TripScreen', carouselItems[index]);
  }
  return (
    <View style={style.container}>
      <Text style={style.H2}>Hello!</Text>
      <Text style={[style.H4]}>It's dangerous out there. Here take this!</Text>
      <SearchBar icon="magnify" placeholder="Search for a trip" />
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={style.H2}>Scheduled Trips</Text>
        {/* OPENS MODAL */}
        <PlusButton onPress={()=> setModalOpen(true)}/>
      </View>
      <Carousel carouselItems={trips} openTrip={openTrip}/>
      <Text style={style.H2}>Travel Buddies</Text>
      <TravelBuddies style={style.friends}/>
      <AddTripModal ModalOpen={ModalOpen} setModalOpen={setModalOpen} setTrips={setTrips}/>
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
  },
  friends: {
    
  }
});
export default Home;