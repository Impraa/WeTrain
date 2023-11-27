import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeTrainLogo from "../../assets/WeTrainLogo";
import { SafeAreaView } from "react-native-safe-area-context";

export const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeTrainLogo />
      <Text>Open up App.js to start working on your app!!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
