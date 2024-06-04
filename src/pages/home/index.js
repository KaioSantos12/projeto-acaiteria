import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, Kaio</Text>
            <Text style={styles.subtt}>Que tal tomar um açai agora!</Text>
            <View style={styles.container2}>
            <TouchableOpacity>
            <Image style={styles.sino} source={require('./assets/sino.svg')} />
            </TouchableOpacity>
            </View>
            <TextInput 
            style={styles.busca}
             placeholder="       Oque você procura?"
            
            />
            
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
        fontSize: 20,
        fontWeight: '700',
        top: -280,
        marginRight: 260,
    },
    subtt:{
        fontSize: 15,
        top: -275,
        marginRight: 150,
    },
    container2:{
        width: 30,
        height: 30,
        backgroundColor: '#9689E8',
        borderRadius: 10,
        top: -325,
        marginLeft: 330,
    },
    sino:{
        width: 20,
        height: 20,
        top: 5,
        marginLeft: 5,
    },
    busca:{
        marginRight: 100,
    }
   
});