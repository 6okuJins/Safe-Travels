import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity, Button } from 'react-native';
import { GoogleLogo } from '../../assets/SVG';
import { useUpdateUserContext } from '../../contexts';
import * as SecureStore from 'expo-secure-store';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuth(prop) {
  const [ accessToken, setAccessToken ] = useState();
  const updateUserContext = useUpdateUserContext();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '361694339981-icrleur8bamhs1dk4afubtf9qvq14866.apps.googleusercontent.com',
    webClientId: '361694339981-mpe0ccstnj1c9qh2ngk0l1lmq08f9v7n.apps.googleusercontent.com',
    prompt: 'login',
  });
// <THIS IS POG>
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setAccessToken(() => authentication.accessToken );
    }
  }, [response]);
  // Need to wait on accessToken to change before passing to api because useState is asynchronous
  useEffect(() => {
    async function getUserInfo() {
      const userInfo = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'mode': 'cors'
        }
      })
      const result = await userInfo.json();
      updateUserContext(() => result);
    }
    getUserInfo();
  }, [accessToken]);
  // </THIS IS POG>
  async function setStoredUser(userData) {
    await SecureStore.setItemAsync('userData', userData)
  }
  return (
    <TouchableOpacity
      //disabled={!request}
      style={prop.style}
      title="Login"
      onPress={() => { promptAsync(); }
    }
    >
    <GoogleLogo />
    </TouchableOpacity>
  );
}