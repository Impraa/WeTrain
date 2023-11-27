import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { AccountScreen } from "../screens/AccountScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <Stack.Screen name="Main" component={AccountScreen} />
    </Stack.Navigator>
  );
};
