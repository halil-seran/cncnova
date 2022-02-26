import React from "react";

import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { ProfileScreen } from "../Screens/ProfileScreen/ProfileScreen";
import { PasswordChangeScreen } from "../Screens/ProfileScreen/PasswordChangeScreen";
import { MyProductScreen } from "../Screens/ProfileScreen/MyProductScreen";
import { AddProductScreen } from "../Screens/ProfileScreen/AddProductScreen";
import { CameraScreen } from "../Screens/ProfileScreen/CameraScreen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const ProfileScreenNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen
      name="PasswordChangeScreen"
      component={PasswordChangeScreen}
    />
    <Stack.Screen name="MyProductScreen" component={MyProductScreen} />
    <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
    <Stack.Screen name="CameraScreen" component={CameraScreen} />
  </Stack.Navigator>
);
