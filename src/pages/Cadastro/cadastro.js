import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from "react-native";

export default function Cadastro() {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.img} source={require('./assets/left.png')}/>
            <Text style={styles.text}>Add new address</Text>
            </TouchableOpacity>
            <TextInput style={styles.textInput} 
        placeholder='Informe seu e-mail ou telefone'  />
                    <TextInput style={styles.textInput2} 
        placeholder='Confrime seu e-mail ou telefone'  />
         <TextInput style={styles.textInput3} 
        placeholder='Informe sua senha'  />
                    <TextInput style={styles.textInput4} 
        placeholder='Confrime sua senha'  />


               <TouchableOpacity style={styles.save}>
                <Text style={styles.savetext}>Salvar</Text>
               </TouchableOpacity>

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
        top: -160,
        marginRight: 190,
    },
    img:{
        width: 25,
        height: 25,
        top: -137,
        marginLeft: -30,
    },
    textInput:{
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
    },
    textInput2:{
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 15,
    },
    textInput3:{
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 15,
    },
    textInput4:{
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 15,
    },
    save:{
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#483D8B',
        top: 150,
    },
    savetext:{
        fontSize: 18,
        color: '#fff',
        marginLeft: 125,
        top: 10,

    }
})