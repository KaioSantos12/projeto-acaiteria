import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from "react-native";


export default function Cadastro() {
    const [isInputFocused, setIsInputFocused] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem</Text>
            <Text style={styles.text2}>Vindo!</Text>
            <Text style={styles.info}>Crie uma conta para acessar o histórico{'\n'}de suas compras e receber novidaes em tempo real sobre o{'\n'}melhor Açai </Text>
            {!isInputFocused && (
                <Image style={styles.imgmail} source={require('./assets/mail.png')} />
            )}
            <TextInput
                style={styles.textInput}
                placeholder=' Enter your mail/phone number'
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            {!isInputFocused && (
                <Image style={styles.imgsenha} source={require('./assets/senha.png')} />
            )}
            <TextInput
                style={styles.textInput3}
                placeholder='             Enter your password'
                secureTextEntry={true}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            {!isInputFocused && (
                <Image style={styles.imgsenha2} source={require('./assets/senha.png')} />
            )}
            <TextInput
                style={styles.textInput4}
                placeholder='             Re-type your password'
                secureTextEntry={true}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            <Text style={styles.polocy}>Ao logar, você concorda com o nosso <Text style={styles.highlightedText}>Termos de{'\n'}Serviço</Text> e Política de Privacidade
            </Text>
            <TouchableOpacity style={styles.save}>
                <Text style={styles.savetext}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.or}>Or</Text>
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
        fontSize: 25,
        fontWeight: 'bold',
        top: -130,
        marginRight: 325,
        color: '#483D8B',
    },
    text2: {
        fontSize: 25,
        fontWeight: 'bold',
        top: -140,
        marginRight: 300,
    },
    info: {
        fontSize: 13,
        top: -130,
        marginLeft: -37,
        color: '#333',
    },
    textInput: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 45,
    },
    textInput3: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 15,
        paddingLeft: 45,
    },
    textInput4: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 15,
        paddingLeft: 45,
    },
    save: {
        width: '70%',
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#483D8B',
        top: 30,
    },
    savetext: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        top: 6,
    },
    polocy: {
        fontSize: 13,
        marginLeft: 20,
        color: '#333',
        top: 5,
    },
    highlightedText: {
        color: '#483D8B',
    },
    imgmail: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 40,
        top: 268,
        opacity: 0.6,
    },
    imgsenha: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 40,
        top: 333,
        opacity: 0.6,
    },
    imgsenha2: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 40,
        top: 397,
        opacity: 0.6,
    },
    or:{
        fontSize: 15,
       top: 40,
    },
});
