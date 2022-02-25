import React from "react";

import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../Screens/HomeScreen/HomeScreen";
import { DetailScreen } from "../Screens/HomeScreen/DetailScreen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const HomeScreenNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="DetailScreen" component={DetailScreen} />
  </Stack.Navigator>
);
