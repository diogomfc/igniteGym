//import React from "react";
import { Center, VStack, Image, Text, Heading } from "native-base";
import BackgroundImg  from '@assets/background.png';
import LogoSVG  from '@assets/logo.svg';

import { Input } from '../components/Input';

export function SignIn(){
  return (
    <VStack 
    paddingX={10}
    flex={1} 
    bg="gray.700"
    alignItems="center"
    >
     <Image 
     source={BackgroundImg} 
     alt="Background" 
     resizeMode="contain"
     position="absolute"
     />
      
      <Center my={24}>

      <LogoSVG />

      <Text color="gray.100" fontSize="sm">
         Treine sua mente e seu corpo
      </Text>

      </Center>
      <Center>
      <Heading color="gray.100" fontSize="xl" paddingBottom={4} fontFamily="heading">
         Acesse sua conta
      </Heading>

      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      </Center>

    </VStack>
  );
}