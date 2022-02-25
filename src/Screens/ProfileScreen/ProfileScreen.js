import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to other parts"
        onPress={() => null}
      />
    </View>
  );
}
