import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Button, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import auth context";
/*
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  bottom: 30px;
`;


  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
*/


export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    // <TouchableOpacity onPress={snap}>
    //   <ProfileCamera
    //     ref={(camera) => (cameraRef.current = camera)}
    //     type={Camera.Constants.Type.front}
    //     ratio={"16:9"} //this is for only android
    //   >
    //     <ButtonContainer>
    //       <Button title="take a picture" onPress={snap} />
    //     </ButtonContainer>
    //   </ProfileCamera>
    // </TouchableOpacity>

    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio={"16:9"}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> degistir </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <Text style={styles.text}> photo cek </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={() => null}>
              <Text style={styles.text}> Galeri </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  buttonArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 75,
    borderRadius: 25,
    backgroundColor: "rgba(247,206,91, 0.6)",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});
