import React from "react";
import { StyleSheet, View, Text, TextInput, Button  } from "react-native-web";

export default function Login() {
   return(
    <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder='Informe seu Nome' />
          <TextInput secureTextEntry={true} style={styles.textInput2} placeholder='Informe sua senha' />
          <Button title="Login" onPress={() => navigation.navigate('Home')} />
          <Text style={styles.txt}>Não tem uma conta? Registre-se agora!</Text>
    </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    logo: {
        width: 150,
        height: 150,
        top: -20,
        right: -10,
       
       
      },
     
      txt:{
        fontSize: 10,
        color: '#2F2E2E',
     
      },
     
      botao: {
        backgroundColor: "#785BF2",
        width: 250,
        padding: 10,
        borderRadius: 30,
     
     
       
      },
     
      textInput:{
        width: '100%',
        height: 40,
        backgroundColor: '#EDF2FA',
        borderRadius: 30,
        paddingLeft: 10,
       
       
       
      },
      textInput2:{
        width: '100%',
        height: 40,
        backgroundColor: '#EDF2FA',
        borderRadius: 30,
        paddingLeft: 10,
       
       
      },
     
  
     
})