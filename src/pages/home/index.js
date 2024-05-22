import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "react-native-web";

export default function Home() {
    console.log("oi");
   return(
    <View style={styles.container}>
      <Text style={styles.text}>fds</Text>

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

    text:{
        fontSize: 25,
        fontWeight: 'bold',
    },
})