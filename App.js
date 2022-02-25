import * as React from "react";
import { Button, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DetailScreen } from "./src/Screens/HomeScreen/DetailScreen";
import { HomeScreen } from "./src/Screens/HomeScreen/HomeScreen";
import { SettingsScreen } from "./src/Screens/ProfileScreen/ProfileScreen";
import { FilterScreen } from "./src/Screens/FilterScreen/FilterScreen";

import { Navigation } from "./src/navigation";

/*


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" component={HomeScreen} />
      <HomeStack.Screen name="Details1" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

const FilterStack = createNativeStackNavigator();

function FilterStackScreen() {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen name="Filter" component={FilterScreen} />
    </FilterStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings1" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailScreen} />
    </SettingsStack.Navigator>
  );
}


*/

export default function App() {
  return (
   <>
   <Navigation />
   </>
  );
}
