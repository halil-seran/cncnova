import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";

import { AuthenticationContext } from "../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

//buraya daha sonra auth edip etmedigini kontrol eden if dongusu yazicam

// Auth screen icin  <AuthNavigator />
// Main screen icin  <AppNavigator />
