import React, { useCallback } from 'react';
import { Router } from './routes';
import { UserContextProvider } from './contexts';
import { StatusBar } from 'expo-status-bar';

// fonts and splash screen
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// import fonts
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import {
  Lora_400Regular,
  Lora_700Bold,
} from '@expo-google-fonts/lora';

import {
  CormorantGaramond_700Bold,
} from '@expo-google-fonts/cormorant-garamond';

export default function App() {

  // load fonts
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Lora_400Regular,
    Lora_700Bold,
    CormorantGaramond_700Bold,
  });

  // hide splash screen once font is loaded
  (useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]))();

  // avoid errors
  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}