import React from "react";
import { View, StyleSheet } from 'react-native';

export const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 25,
        backgroundColor: 'white'
    }
});
