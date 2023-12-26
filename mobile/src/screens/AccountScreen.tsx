import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeTrainLogo from "../../assets/WeTrainLogo";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

export const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeTrainLogo />
      <TextInput label="Username" />
      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
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
