import * as React from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DetailScreen } from "./navigations/DetailScreen";
import { HomeScreen } from "./navigations/HomeScreen";
import { SettingsScreen } from "./navigations/SettingsScreen";
import { FilterScreen } from "./navigations/FilterScreen";

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

const Tab = createBottomTabNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false, //with this, header is not showing
    Home: {
      screen: HomeStackScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarOptions: {
          activeTintColor: "#006600",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="md-home"
              size={24}
              color={tabInfo.focused ? "#006600" : "#8e8e93"}
            />
          );
        },
      },
    },
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Filters" component={FilterStackScreen} />
        <Tab.Screen name="Profile" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
