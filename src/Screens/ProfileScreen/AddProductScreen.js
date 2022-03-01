import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export const AddProductScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.screen}>
      <View style={styles.photosArea}>
        <View style={styles.photoContainer}>
          <View style={styles.photo}>
            <Text>Images Here</Text>
          </View>
          <View style={styles.photo}></View>
          <View style={styles.photo}></View>
        </View>
        <View style={styles.addPhotoContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CameraScreen")}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "white", fontSize: 80 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputArea}>
        <Text>Urun Ismi</Text>
        <TextInput
          mode="outlined"
          label="urunun ismi"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
      </View>
      <View style={styles.inputArea}>
        <Text>Markasi ve Modeli</Text>
        <TextInput
          mode="outlined"
          label="Markasi ve Modeli"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
      </View>
      <View style={styles.inputArea}>
        <Text>Fiyati</Text>
        <TextInput
          mode="outlined"
          label="Fiyati"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
      </View>
      <View style={styles.inputArea}>
        <Text>Ozellikleri</Text>
        <TextInput
          mode="outlined"
          label="Ozellikleri"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
      </View>
      <View style={styles.publishProductButtonContainer}>
        <TouchableOpacity
          style={styles.publishProductButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={{color:"white"}}> Urunu Listele</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 44,
  },
  photosArea: {
    width: "90%",
    height: "20%",
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "#a3b18a",
  },
  photoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  photo: {
    marginHorizontal: 3,
    width: "30%",
    height: "80%",
    borderRadius: 15,
    backgroundColor: "#f4ece2",
  },
  addPhotoContainer: {
    flex: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#344e41",
  },
  inputArea: {
    marginTop: 10,
    width: "90%",
  },
  publishProductButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  publishProductButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2f5653",
    width: 200,
    height: 50,
    borderRadius: 25,
  },
});
