import React, { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log(email, password)
  }

  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo/>

        <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
          Acesse sua conta
        </Heading>

        <Input 
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail" 
          mb={4} InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
        />

        <Input 
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha" 
          InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
          secureTextEntry
          mb={8}
        />
        
        <Button
          title="Entrar"
          w="full"
          onPress={handleSignIn}
        />
    </VStack>
  );
}