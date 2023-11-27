import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import React from "react";
import { AccountNavigator } from "./src/navigators/AccountNavigator";

const Navigator = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
