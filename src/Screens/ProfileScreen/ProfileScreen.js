import React, { useState } from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";

const AvatarContainer = styled.View`
  align-items: center;
  top: 10px;
  margin-bottom: 40px;
`;
const EmailTitle = styled(Text)`
  font-size: 20px;
`;

export function ProfileScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);

  return (
    <View style={{ flex: 1, marginTop: 50, alignItems: "center" }}>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          {!photo && (
            <Avatar.Icon
              size={150}
              icon="karate"
              color="#f1faee"
              backgroundColor="#e63946"
            />
          )}
          {photo && (
            <Avatar.Image
              size={130}
              source={{ uri: photo }}
              backgroundColor="rgba(0, 0, 0, 0.5)"
            />
          )}
        </TouchableOpacity>
        <EmailTitle variant="caption">User Email</EmailTitle>
      </AvatarContainer>
      <Text>Profile screen</Text>
      <Button
        title="my products"
        onPress={() => navigation.navigate("MyProductScreen")}
      />
      <Button
        title="change password"
        onPress={() => navigation.navigate("PasswordChangeScreen")}
      />
      <Button title="Logout" onPress={() => null} />
    </View>
  );
}
