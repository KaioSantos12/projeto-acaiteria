import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Forgot password</Text>
            <TouchableOpacity  onPress={Home}>
              <Image source={require('./assets/left.png')} style={styles.imgleft}  />
            </TouchableOpacity>
            <Text style={styles.textinho}>Não se preocupe! Insira métodos{'\n'} selecionados de recuperação de senha abaixo.</Text>
            <View style={styles.rectangle}>

            </View>
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
        fontSize: 15,
        fontWeight: 'bold',
        top: -230,
        marginLeft: -200,
    },
    imgleft:{
        width: 20,
        height: 20,
        top: -249,
        marginLeft: -180,
    },
    textinho:{
       fontSize: 14, 
       top: -228,
       marginLeft: -55,
      
    },
    rectangle: {
        width: 350,
        height: 70,
        backgroundColor: 'blue',
        borderRadius: 20,
        borderColor: '#333',
      },
})