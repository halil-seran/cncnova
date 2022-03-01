import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const PasswordChangeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.inputArea}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
      <TextInput
        style={styles.inputArea}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
      <TextInput
        style={styles.inputArea}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputArea: {
    width: "90%",
    margin: 20
  },
});

// text   text texinput text texinput text texinput button
