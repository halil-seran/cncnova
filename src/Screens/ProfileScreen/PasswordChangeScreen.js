import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export const PasswordChangeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.screen}>
      <Text style={styles.titleContainer}>Old Password</Text>
      <TextInput
        style={styles.inputArea}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
      <Text style={styles.titleContainer}>New Password</Text>
      <TextInput
        style={styles.inputArea}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
      <Text style={styles.titleContainer}>New Password Again</Text>
      <TextInput
        style={styles.inputArea}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
      <View style={styles.addProductButtonContainer}>
        <TouchableOpacity
          style={styles.addProductButton}
          onPress={() => null}
        >
          <Text>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer:{
    marginLeft:25
  },
  inputArea: {
    width: "90%",
    margin: 20,
  },
  addProductButtonContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  addProductButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ee9b00",
    flexDirection: "row",
    width: "60%",
    height: 50,
    borderRadius:25
  },
});

// text   text texinput text texinput text texinput button
