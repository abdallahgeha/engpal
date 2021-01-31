import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, GestureResponderEvent, BackHandler } from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

interface Props {
  title: string,
  onPress: (event: GestureResponderEvent) => void,
  color?: string,
  textColor?: string,
}

const AppTextInput: React.FC<Props> = ({ title, onPress, color = '', textColor = '' }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container,
      !!color && { backgroundColor: color }]
      }>
        <Text
          style={[styles.title, !!textColor && { color: textColor }]}
        >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    marginVertical: 22,
    width: 200,
    height: 55,
    padding: 15,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'white'
  }
})

