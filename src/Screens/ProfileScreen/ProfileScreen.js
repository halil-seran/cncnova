import React, { useState, useContext } from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { List } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const AvatarContainer = styled.View`
  align-items: center;
  top: 10px;
  margin-bottom: 40px;
`;
const EmailTitle = styled(Text)`
  font-size: 20px;
  margin-top: 10px;
`;

export function ProfileScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <>
      <View style={styles.avatarArea}>
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
      </View>
      <View style={styles.listArea}>
        <List.Item
          title="my products"
          description="you can add your products here"
          left={(props) => <List.Icon {...props} icon="apps" />}
          onPress={() => navigation.navigate("MyProductScreen")}
          style={styles.listItemContainer}
        />
        <List.Item
          title="change password"
          description="you can change your password here"
          left={(props) => <List.Icon {...props} icon="key-variant" />}
          onPress={() => navigation.navigate("PasswordChangeScreen")}
          style={styles.listItemContainer}
        />
        <List.Item
          title="Logout"
          description="Sign out of your account"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={onLogout}
          style={styles.listItemContainer}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  avatarArea: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  listArea: {
    flex: 3,
    alignItems: "center",
  },
  listItemContainer: {
    width: "93%",
    marginTop: 12,
    backgroundColor: "#f1faee",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
});
