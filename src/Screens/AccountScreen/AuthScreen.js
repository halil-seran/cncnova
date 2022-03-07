import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  width: 100px;
  padding-top: 10px;
`;
const AnimationWrapper = styled.View`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 20px;
  padding: 10px;
`;

export const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <Screen>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assets/cncanimation.json")}
        />
      </AnimationWrapper>
      <View style={styles.container}>
        <Text>Mail or Phone Number</Text>
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
        <Text>Password</Text>
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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <ButtonContainer>
            <Button
              title="Register"
              onPress={() => navigation.navigate("RegisterScreen")}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button title="Login" onPress={() => onLogin(email, password)} />
          </ButtonContainer>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F49D37",
    borderRadius: 15,
    width: "80%",
    height: "22%",
    alignItems: "center",
    padding: 4,
    marginTop: 100,
  },
  inputContainer: {
    width: "95%",
    height: 45,
  },
});
