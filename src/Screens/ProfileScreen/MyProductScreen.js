import React from "react";
import { View, Text, Button } from "react-native";

export const MyProductScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                My Products Screen HERE !!
            </Text>
            <Button title="Add Product" onPress={() => navigation.navigate('AddProductScreen')} />
        </View>
    )
};