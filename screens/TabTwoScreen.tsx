import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CalculationItem from '../components/CalculationItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CalculationItem color={'red'} />
        <CalculationItem color={'blue'} />
        <CalculationItem color={'blue'} />
        <CalculationItem color={'red'} />
        <CalculationItem color={'green'} />
        <CalculationItem color={'red'} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
