import React from "react";
import { View, Text, Button } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register Screen HERE</Text>
      <Text>Mail or Phone Number</Text>
      <TextInput
        style={styles.inputContainer}
        mode="outlined"
        label="Mail or Phone Number"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.inputContainer}
        mode="outlined"
        label="Password"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
    </View>
  );
};
