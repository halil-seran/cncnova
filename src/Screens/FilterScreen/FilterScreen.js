import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Switch } from "react-native-paper";
import { Card } from "../../component/UI/Card";
import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import { Select } from "@mobile-reality/react-native-select-pro";

export const DATA = [
  {
    value: "96d27ec5-e196-4577-b18d-31c74ca9145c",
    label: "secenek 1",
  },
  {
    value: "2805f95f-f712-4dc2-ae25-0910f95152b6",
    label: "secenek 2",
  },
  {
    value: "84bc47cd-c8ab-4673-b428-3d96876f0a3f",
    label: "secenek 3",
  },
];

export function FilterScreen({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SelectProvider>
      <View style={styles.screenContainer}>
        <Card style={styles.cardContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.textStyles}> Ozellik 1</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </Card>
        <Card style={styles.cardContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.textStyles}> Ozellik 2</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </Card>
        <Card style={styles.cardContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.textStyles}> Ozellik 3</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </Card>
        <View style={styles.pickerContainer}>
          <Select options={DATA} />
        </View>
        <View style={styles.pickerContainer}>
          <Select options={DATA} />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.textStyle}>Kaydet</Text>
          </Pressable>
        </View>
      </View>
    </SelectProvider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "97%",
    justifyContent: "space-between",
  },
  cardContainer: {
    borderRadius: 10,
    width: "90%",
    maxWidth: 420,
    minWidth: 300,
    height: 50,
    maxHeight: 500,
    marginVertical: 6,
  },
  textStyles: {
    fontSize: 15,
    marginLeft: 15,
  },
  pickerContainer: {
    marginTop: 12,
    marginBottom: -3,
    width: "90%",
    height: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
