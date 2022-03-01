import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Card } from "../../component/UI/Card";
import { Avatar } from "react-native-paper";

export const MyProductScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <Card style={styles.cardStyles}>
          <TouchableOpacity
            style={styles.productArea}
            onPress={() => navigation.navigate("AddProductScreen")}
          >
            <Text>Product</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity
              style={styles.duzenleButton}
              onPress={() => navigation.navigate("AddProductScreen")}
            >
              <Avatar.Icon
                size={55}
                icon="square-edit-outline"
                color="#f1faee"
                backgroundColor="#2a9d8f"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => navigation.navigate("AddProductScreen")}
            >
              <Avatar.Icon
                size={55}
                icon="delete"
                color="#f1faee"
                backgroundColor="#e63946"
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card style={styles.cardStyles}>
          <TouchableOpacity
            style={styles.productArea}
            onPress={() => navigation.navigate("AddProductScreen")}
          >
            <Text>Product</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity
              style={styles.duzenleButton}
              onPress={() => navigation.navigate("AddProductScreen")}
            >
              <Avatar.Icon
                size={55}
                icon="square-edit-outline"
                color="#f1faee"
                backgroundColor="#2a9d8f"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => navigation.navigate("AddProductScreen")}
            >
              <Avatar.Icon
                size={55}
                icon="delete"
                color="#f1faee"
                backgroundColor="#e63946"
              />
            </TouchableOpacity>
          </View>
        </Card>
      </View>

      <View style={styles.addProductButtonContainer}>
        <TouchableOpacity
          style={styles.addProductButton}
          onPress={() => navigation.navigate("AddProductScreen")}
        >
          <Text> + ADD PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardContainer: {
    flex: 9,
    alignItems: "center",
  },
  productArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyles: {
    backgroundColor: "#f4ece2",
    marginTop: 35,
    marginBottom: -10,
    width: "90%",
    height: "20%",
    flexDirection: "row",
  },
  duzenleButton: {
    flex: 1,
    backgroundColor: "#2a9d8f",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    borderTopRightRadius: 25,
    borderRadius: 5,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#e63946",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    borderBottomRightRadius: 25,
    borderRadius: 5,
  },
  addProductButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addProductButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffbd00",
    flexDirection: "row",
    width: "60%",
    height: "50%",
    borderRadius:25
  },
});
