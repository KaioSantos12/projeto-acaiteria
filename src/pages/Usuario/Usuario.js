import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Usuario({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.voltar} source={require("./assets/voltar.svg")} />
           </TouchableOpacity>
           <Text style={styles.textconf}>Perfil</Text>
           <View style={styles.fundofoto}>
            <Image style={styles.userfoto} source={require("./assets/user.svg")} />
           </View>
           <TouchableOpacity>
            <View style={styles.addfoto}>
                <Image style={styles.mais} source={require("./assets/mais.svg")}/>
            </View>
           </TouchableOpacity>
           <TextInput 
           style={styles.nome}
           placeholder="        Kainho"/>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
    },
    voltar:{
        width: 15,
        height: 15,
        marginRight: 350,
        top: 4,
    },
    textconf:{
        fontSize: 15,
        fontWeight: '700',
        top: -12,
        marginLeft: 163,
    },
    fundofoto:{
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: "#f5f5f5",
        marginLeft: 105,
    },
    userfoto:{
        width: 140,
        height: 140,
        marginLeft: 5,
        top: 10,
    },
    addfoto:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        marginLeft: 225,
        top: -35,
    },
    mais:{
        width: 30,
        height: 30,
    },
    nome:{
        width: 150,
        marginLeft: 110,
        fontSize: 20,
        fontWeight: '700',
        marginTop: -20,
    }
  
});
