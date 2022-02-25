import React from "react";

import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { AuthScreen } from "../Screens/AccountScreen/AuthScreen";
import { RegisterScreen } from "../Screens/AccountScreen/RegisterScreen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AuthNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Main" component={AuthScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
