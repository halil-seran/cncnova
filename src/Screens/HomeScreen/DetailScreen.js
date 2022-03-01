import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

const MOCKDATA = {
  url1: "https://cdn.pixabay.com/photo/2019/08/11/07/44/laser-4398314_960_720.jpg",
  url2: "https://cdn.pixabay.com/photo/2017/10/05/11/46/laser-2819138_960_720.jpg",
};

export const DetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(MOCKDATA.url1);

  const changeImage = () => {
    if (image === MOCKDATA.url1) {
      setImage((image) => (image = MOCKDATA.url2));
    }
    if (image === MOCKDATA.url2) {
      setImage((image) => (image = MOCKDATA.url1));
    }
  };

  return (
    <View style={styles.screen}>
      <View style={{ flex: 9 }}>
        <View style={{ flexDirection: "row", flex: 0.4 }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={changeImage}
              style={styles.changeImageButton}
            >
              <Text style={{ color: "black", fontSize: 30 }}> ᐸ </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{ flex: 9 }}
            source={{
              uri: `${image}`,
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={changeImage}
              style={styles.changeImageButton}
            >
              <Text style={{ color: "black", fontSize: 30 }}> ᐳ </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text>urunun adi</Text>
          <Text>urunun fiyati</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text>urunun Ozellikleri</Text>
          <Text>urunun detaylari</Text>
        </View>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Iletisim Bilgileri {"\n"} {"\n"}
                05XX XXX XX XX {"\n"}
                Adres
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Tamam</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Iletisim Bilgileri</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 200,
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 160,
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  changeImageButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width:30,
    height:270,
    backgroundColor: "#d4f9c3",
  },
  textContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textContainer2: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
