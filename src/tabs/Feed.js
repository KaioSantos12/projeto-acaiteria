import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Feed(){
    return(
    <View style={styles.container}>
        <Text style={styles.text}>FEED</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },

    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});