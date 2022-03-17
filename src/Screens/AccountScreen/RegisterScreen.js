import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import {
  Screen,
  Card,
  Title,
  RegisterButton,
  ButtonText,
  BackButton,
  BackButtonTitle
} from "../ScreenComponents/RegisterScreen-component";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext); // ,isLoading,
  return (
    <Screen>
      <Card>
        <Title>Mail or Phone Number</Title>
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
        <Title>Password {error} </Title>
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
        <Title>Password Again</Title>
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

        <RegisterButton onPress={() => onRegister(email, password, repeatedPassword)}>
          <ButtonText>REGISTER</ButtonText>
        </RegisterButton>
      </Card>
      <BackButton /*mode="contained"*/ onPress={() => navigation.goBack()}>
        <BackButtonTitle>Back</BackButtonTitle>
      </BackButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "95%",
    height: 45,
  },
});
