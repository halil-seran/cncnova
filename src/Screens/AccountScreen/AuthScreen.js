import React from "react";
import { View, Text, Button } from "react-native";

export const AuthScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Auth Screen HERE
            </Text>
            <Button title="Register" onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
    )
};