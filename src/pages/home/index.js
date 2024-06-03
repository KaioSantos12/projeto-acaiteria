import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        top: -180,
        marginLeft: -200,
    },
});