import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
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
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-around", width:"100%"}} >
          <Button
            title="Register"
            onPress={() => navigation.navigate("RegisterScreen")}
          />
          <Button title="Login" onPress={() => null} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "red",
    width: "70%",
    height: "20%",
    alignItems: "center",
  },
  inputContainer: {
    width: "95%",
    height: 45,
  },
});
