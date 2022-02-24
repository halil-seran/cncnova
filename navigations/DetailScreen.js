import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function DetailScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!!!!!!</Text>
      </View>
    );
  }

export default DetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 30,
  },
});
