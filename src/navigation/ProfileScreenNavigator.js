import React from "react";

import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import {ProfileScreen} from "../Screens/ProfileScreen/ProfileScreen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const ProfileScreenNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  </Stack.Navigator>
);
