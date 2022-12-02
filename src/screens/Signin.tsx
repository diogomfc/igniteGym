import React from "react";
import { Center, VStack, Image } from "native-base";
import {Text, View, StatusBar } from 'react-native';

//import {BackgroundImg} from '@assets/background.png';
//<Image source={BackgroundImg} alt="Background" /> 

export function SignIn(){
  return (
    <VStack flex={1} bg="gray.700">
     
      <Text>Sign in</Text>
    </VStack>
  );
}