import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

//buraya daha sonra auth edip etmedigini kontrol eden if dongusu yazicam

// Auth screen icin  <AuthNavigator />
// Main screen icin  <AppNavigator />
