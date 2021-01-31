import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

interface Props {
  title: string,
  onChangeText: (text: string) => void,
  value: string,
  autoCorrect?: boolean,
  autoFocus?: boolean,
  secureTextEntry?: boolean
}

const AppTextInput: React.FC<Props> = ({ title, onChangeText, value, secureTextEntry = false, ...otherProps }) => {
  return (

    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={title}
        style={styles.inputText}
        placeholderTextColor={"#212529"}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        {...otherProps}
      />
    </View>

  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '80%',
    height: 70,
    padding: 15,
    borderWidth: 1,
    borderColor: '#779ECB',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputText: {
    fontSize: 20
  }
})

