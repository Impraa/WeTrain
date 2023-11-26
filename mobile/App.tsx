import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import WeTrainLogo from "./assets/WeTrainLogo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WeTrainLogo />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
