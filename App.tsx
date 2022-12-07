import React from 'react';
import {Text, View, StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import {NativeBaseProvider} from 'native-base';

import {THEME} from './src/theme';
import {Loading} from '@components/Loading';
import {SignIn} from '@screens/Signin';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}> 
      <StatusBar 
      backgroundColor="transparent" 
      barStyle="light-content"
      translucent 
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
  </NativeBaseProvider>
  );
}
