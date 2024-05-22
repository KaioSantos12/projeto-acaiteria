import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

export default function Notificacao() {
   return(
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
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