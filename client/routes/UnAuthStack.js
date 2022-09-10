import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen, AuthenticationScreen, PasswordScreen, SetLocaleScreen, WelcomeScreen } from '../views';


const UnAuthStack = () => {
  const Stack = createNativeStackNavigator();
  
  return (
      <Stack.Navigator >
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={WelcomeScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUpScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Authentication"
          component={AuthenticationScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Password"
          component={PasswordScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="SetLocale"
          component={SetLocaleScreen} />
      </Stack.Navigator>
  )
}

export default UnAuthStack;