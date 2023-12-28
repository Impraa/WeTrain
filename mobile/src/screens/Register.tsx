import React, { useRef, useState } from "react";
import VideoPlayer from "react-native-video";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import { Video, ResizeMode } from "expo-av";
import WeTrainLogo from "../../assets/WeTrainLogo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export const Register = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const video = React.useRef(null);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <WeTrainLogo />
        <TextInput
          label="Email"
          activeOutlineColor="#ff7043"
          mode="outlined"
          style={styles.email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          activeOutlineColor="#ff7043"
          style={styles.password}
          secureTextEntry={showPassword}
          onChangeText={(text) => setPassword(text)}
          right={
            <TextInput.Icon
              icon="eye"
              onTouchEnd={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button
          rippleColor="#fff"
          buttonColor="#ff7043"
          mode="contained"
          onPress={() => console.log("pressed")}
        >
          Register
        </Button>
        <Button
          rippleColor="#fff"
          buttonColor="#ff7043"
          mode="contained"
          style={styles.backToLoginButton}
          onPress={() => navigation.navigate("Login")}
        >
          Back to login
        </Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 175,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  email: {
    width: 200,
    color: "#ff7043",
  },
  password: {
    width: 200,
    marginBottom: 20,
    marginTop: 10,
  },
  backToLoginButton: {
    marginTop: 20,
  },
});
