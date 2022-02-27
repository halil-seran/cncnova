import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const AddProductScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Add Product Screen HERE !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
