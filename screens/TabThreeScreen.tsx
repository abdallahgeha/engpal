import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}></View>
      <Text style={styles.title}>Abdallah Geha</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
      <View style={styles.row}><Text style={styles.infoTitle}>Username:</Text><Text style={styles.info}>Aboud</Text></View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.row}><Text style={styles.infoTitle}>Email:</Text><Text style={styles.info}>geha.abdallah@gmail.com</Text></View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.row}><Text style={styles.infoTitle}>Date of Birth:</Text><Text style={styles.info}>04-03-1993</Text></View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.row}><Text style={styles.infoTitle}>Country:</Text><Text style={styles.info}>Hungary</Text></View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.row}><Text style={styles.infoTitle}>Specialization:</Text><Text style={styles.info}>Structural</Text></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicContainer: {
    height: 160,
    width: 160,
    borderRadius: 100,
    backgroundColor: '#a9def9',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "86%",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});
