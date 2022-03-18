import React, { useState, useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";
import {
  Screen,
  ButtonText,
  AnimationWrapper,
  Card,
  Title,
  BottomButtons,
  Button,
} from "../ScreenComponents/AuthScreen-component";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <>
      <Screen behavior="padding" keyboardVerticalOffset={-400}>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../assets/cncanimation.json")}
          />
        </AnimationWrapper>
        <Card>
          <Title>Mail or Phone Number</Title>
          <TextInput
            style={styles.inputContainer}
            mode="outlined"
            value={email}
            label="Mail or Phone Number"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Title>Password</Title>
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
          <Text variant="error">{error}</Text>
          <BottomButtons>
            <Button onPress={() => navigation.navigate("RegisterScreen")}>
              <ButtonText>REGISTER</ButtonText>
            </Button>
            <Button onPress={() => onLogin(email, password)}>
              <ButtonText>LOGIN</ButtonText>
            </Button>
          </BottomButtons>
        </Card>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "95%",
    height: 45,
  },
});
