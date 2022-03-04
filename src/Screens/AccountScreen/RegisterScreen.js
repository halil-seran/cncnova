import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

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
  return (
    <Screen>
      <InputArea>
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
        <Text>Password Again</Text>
        <TextInput
          style={styles.inputContainer}
          mode="outlined"
          label="Password Again"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
        <View style={styles.buttonContainer}>
          <Button title="register" />
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
