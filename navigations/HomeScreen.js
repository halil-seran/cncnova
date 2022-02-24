import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details1')}
      />
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <View style={styles.container}>
//   <Text>Open up App.js to start working on your app!</Text>
//   <StatusBar style="auto" />
// </View>
