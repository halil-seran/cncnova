import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Screen } from "../ScreenComponents/HomeScreen-component";
import { Card } from "../../component/UI/Card";
//import { TouchableOpacity } from "react-native-gesture-handler";

const MOCKDATA = [
  {
    id: "123",
  },
  {
    id: "456",
  },
  {
    id: "789",
  },
  {
    id: "234",
  },
  {
    id: "345",
  },
  {
    id: "432",
  },
];

const Item = ({ navigation }) => (
  <Screen>
    <Card style={styles.cardContainer}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
        onPress={() => navigation.navigate("DetailScreen")}
      >
        <Text>Product</Text>
      </TouchableOpacity>
    </Card>
  </Screen>
);

export const HomeScreen = ({ navigation }) => {
  const renderItem = () => <Item navigation={navigation} />;

  return (
    <SafeAreaView style={styles.eraseLater}>
      <FlatList
        data={MOCKDATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    maxWidth: 420,
    minWidth: 300,
    height: 160,
    marginVertical: 10,
  },
  eraseLater: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

// <View style={styles.container}>
//   <Text>Open up App.js to start working on your app!</Text>
//   <StatusBar style="auto" />
// </View>
