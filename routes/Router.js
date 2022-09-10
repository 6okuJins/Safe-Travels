import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';
import { useUserContext, useUpdateUserContext } from '../contexts';
import * as SecureStore from 'expo-secure-store';
import { useEffect} from 'react';

const Router = () => {
  const updateUserContext = useUpdateUserContext();
  const authData = useUserContext();
  async function getStoredUser() {
    let userData;
    try {
    userData = await SecureStore.getItemAsync('userData');
    userData = JSON.parse(userData);
    }
    catch {
      console.error('no user data');
    }
    if (userData && !(userData?.error)) {
      updateUserContext(() => userData);
    }
  }
  useEffect(()=> {
    getStoredUser();
  }, [])
  return (
    <NavigationContainer>
      {(authData && !(authData?.error)) ? <AuthStack /> : <UnAuthStack />}
    </NavigationContainer>
  )
}
export default Router;