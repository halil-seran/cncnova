import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HomeScreenNavigator } from "./HomeScreenNavigator";
import { FilterScreen } from "../Screens/FilterScreen/FilterScreen";
import { ProfileScreenNavigator } from "./ProfileScreenNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-planet",
  Filter: "md-options",
  Profile: "md-pizza-sharp", //ios-person-sharp
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={30} color={color} />
    ),
    tabBarActiveTintColor: "red",
    tabBarInactiveTintColor: "black",
    headerShown: false, //with this, header is not showing
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreenNavigator} />
      <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Profile" component={ProfileScreenNavigator} />
    </Tab.Navigator>
  );
};
/*
      
*/
