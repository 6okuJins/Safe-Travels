import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; !!!!!!! NPM UNINSTALL!!!!!!!!!!!!
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { StyleSheet, Text } from 'react-native';

import { AppleLogo, FacebookLogo, GithubLogo, GoogleLogo } from '../assets/SVG';
import { Home,
  ProfileScreen,
  ContactsScreen,
  TimersScreen,
  TravelScreen,
  TripScreen, } from '../views';
import Svg from 'react-native-svg';


const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const Tabs = createMaterialBottomTabNavigator();
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={Home}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name="TripScreen" component={TripScreen}></Stack.Screen>
      </Stack.Navigator>
    )
  }
  const ContactsStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="ContactsScreen" component={ContactsScreen} />
      </Stack.Navigator>
    )
  }
  const TravelStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="TravelScreen" component={TravelScreen} />
      </Stack.Navigator>
    )
  }
  const TimersStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="TimersScreen" component={TimersScreen} />
      </Stack.Navigator>
    )
  }
  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    )
  }
  return (
      <Tabs.Navigator

        barStyle={{
          backgroundColor: '#393E46',
          position: 'absolute',
          bottom: 20,
          left: 60,
          right: 60,
          elevation: 0,
          borderRadius: 15,
          height: 53,
          overflow: 'hidden',
          // justifyContent: 'center',
          flexGrow: 1,
          transform: [ {scale: 1.25}],
          marginBottom: 30

          
          //...styles.shadow
        }}>
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (<FeatherIcons name="home" color={color} size={20}/>),
            tabBarColor: "#393E46",
            tabBarLabel: <Text style={{fontSize: 8, marginTop: 100}}>Home</Text>

          }}
          name="Home"
          component={HomeStack} 
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (<FeatherIcons name="users" color={color} size={20}/>),
            tabBarColor: "#393E46",
            tabBarLabel: <Text style={{fontSize: 8, paddingTop: 10, left: 50}}>Contacts</Text>
          }}
          name="Contacts"
          component={ContactsStack}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (<FeatherIcons name="map-pin" color={color} size={20}/>),
            tabBarColor: "#393E46",
            tabBarLabel: <Text style={{fontSize: 8, paddingTop: 10, left: 50}}>Travel</Text>
          }}
          name="Travel"
          component={TravelStack}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (<FeatherIcons name="watch" color={color} size={20}/>),
            tabBarColor: "#393E46",
            tabBarLabel: <Text style={{fontSize: 8, paddingTop: 10, left: 50}}>Timers</Text>
          }}
          name="Timers"
          component={TimersStack}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (<FeatherIcons name="user" color={color} size={20}/>),
            tabBarColor: "#393E46",
            tabBarLabel: <Text style={{fontSize: 8, paddingTop: 10, left: 50}}>Profile</Text>
          }}
          name="Profile"
          component={ProfileStack}
        />
      </Tabs.Navigator>
  )
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});
export default AuthStack;