import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Text, View } from '../components/Themed';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';


export default function SignInScreen() {
  const navigation = useNavigation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () => {
    if (password == 'passpass' && userName == 'aboud') {
      navigation.navigate('Root')
    }
  }

  const register = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo} onPress={register}>ENG PAL</Text>

      <AppTextInput title={'Username'} value={userName} onChangeText={setUserName} autoCorrect={false} autoFocus={false} />
      <AppTextInput title={'Password'} value={password} onChangeText={setPassword} autoCorrect={false} secureTextEntry={true} />

      <AppButton onPress={signIn} title={"Sign In"} color={'#73a942'} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.register} onPress={register}>Regsiter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212529'
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  register: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    marginVertical: 10,
  }
});
