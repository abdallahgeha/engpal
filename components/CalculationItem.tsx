import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Color = { solid: { [key: string]: string }, light: { [key: string]: string } }

const colors: Color = {
  solid: {
    "red": 'red',
    "green": 'green',
    "blue": 'blue'
  },
  light: {
    "red": '#f9c6c9',
    "green": '#d3f8e2',
    "blue": '#a9def9'
  }
}

const CalculationItem = ({ color = 'red' }) => {
  return (
    <View style={[styles.container, { borderColor: colors.solid[color], backgroundColor: colors.light[color] }]}>
      <View style={styles.top}>
        <View style={[styles.calcLogo, { backgroundColor: colors.solid[color] }]}></View>
        <Text style={styles.title}>Beam</Text>
      </View>
      <View style={styles.mid}>
        <Text style={styles.title}>Beam</Text>
      </View>

      <View style={[styles.bottom, { borderColor: colors.solid[color] }]}>

        <View style={[styles.copy, styles.left, { borderColor: colors.solid[color] }]}>
          <TouchableOpacity style={styles.touch}>
            <MaterialIcons name="mode-edit" size={24} color={colors.solid[color]} /><Text style={[styles.action, { color: colors.solid[color] }]}>EDIT</Text></TouchableOpacity></View>
        <View style={[styles.copy, styles.cent]}>
          <TouchableOpacity style={styles.touch}>
            <MaterialIcons name="content-copy" size={24} color={colors.solid[color]} /><Text style={[styles.action, { color: colors.solid[color] }]}>COPY</Text></TouchableOpacity></View>
        <View style={[styles.copy, styles.right]}>
          <TouchableOpacity style={styles.touch}>
            <MaterialIcons name="open-in-new" size={24} color={colors.solid[color]} /><Text style={[styles.action, { color: colors.solid[color] }]}>OPEN</Text>

          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default CalculationItem

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '90%',
    borderRadius: 14,
    borderWidth: 0.4,
    padding: 0,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 3,
  },
  touch: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  action: {
    fontWeight: 'bold',
  },
  top: {

    height: 74,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mid: {
    height: 56,
    width: '96%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
    borderTopWidth: 0.4,
  },
  copy: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  left: {
    borderBottomStartRadius: 14,
  },
  cent: {
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
  },
  right: {
    borderBottomEndRadius: 14,
  },
  calcLogo: {
    width: 58,
    height: 58,
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 20
  }
})
