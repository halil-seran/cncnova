import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputArea = styled.View`
  padding-top: 10px;
  background-color: #f49d37;
  border-radius: 25px;
  border-width: 1px;
  width: 80%;
  align-items: center;
  height: 300px;
`;

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext); // ,isLoading,
  return (
    <Screen>
      <InputArea>
        <Text>Mail or Phone Number</Text>
        <TextInput
          style={styles.inputContainer}
          mode="outlined"
          label="Mail or Phone Number"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Text>Password {error} </Text>
        <TextInput
          style={styles.inputContainer}
          mode="outlined"
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Text>Password Again</Text>
        <TextInput
          style={styles.inputContainer}
          mode="outlined"
          label="Password Again"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="register"
            onPress={() => onRegister(email, password, repeatedPassword)}
          />
        </View>
      </InputArea>
    </Screen>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "95%",
    height: 45,
  },
  buttonContainer: {
    margin: 20,
    width: 200,
  },
});
