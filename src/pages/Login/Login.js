import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

//imports api
import Modal from 'react-native-modal';
import axios from "axios"; // faz requisições HTTP
import AsyncStorage from "@react-native-async-storage/async-storage";// armazenar dados localmente no dispositivo do usuário;
import Toast from 'react-native-toast-message'; // Importa o Toast


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorModalVisible, setErrorModalVisible] = React.useState(false);

  const HandleLogin = async () => {
    //verificar se o email or senha estão preenchidos
      if (!email.trim() || !senha.trim()){
         // Exibe o Toast em vez do modal
         Toast.show({
           type: 'error',
           text1: 'Campos obrigatórios',
           text2: 'Por favor, preencha todos os campos.',
         });
         return;
    }

    try {
        const resposta = await axios.post('');
        if (resposta.data){
            const usuario = resposta.data;
            if (usuario){
                console.log(usuario);
                console.log(usuario.user.dados_usuario_idUsuario);
                console.log(usuario.user.dados_usuario_nomeUsuario);
                console.log(usuario.acess_token);

                const idUsuario = usuario.user.dados_usuarios_idUsuarios;
                const token = usuario.acess_token;

                //vai armazenar o token na memoria da app (aysncStorage)
                await AsyncStorage.setItem('userToken', token);

                navigation.navigate('Home', {idUsuario});
            }
        }
    } catch (error) {
        console.error("Erro ao verificar o email e senha", error);
        setErrorModalVisible(true);
    }
};

const toastConfig = {
    error: ({ text1, text2, ...rest }) => (
        <View style={styles.toastContainer}>
            <Text style={styles.toastText1}>{text1}</Text>
            <Text style={styles.toastText2}>{text2}</Text>
        </View>
    ),
    // Adicione outros tipos de mensagens se necessário
};
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sing Up</Text>
            <Text style={styles.subtt}>Oi! Bem-vindo de volta, sentimos sua falta</Text>
            <Text style={styles.email}>Email</Text>
            <TextInput
            style={styles.inputemaill}
            placeholder="      exemplo@gmail.com" 
            value={email}
            onChangeText={setEmail}
            />
            <Text style={styles.senha}>Senha</Text>
            <TextInput 
            style={styles.inpusenha}
            placeholder="      ********"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
            />
            <TouchableOpacity>
              <Text  onPress={() => navigation.navigate('Emailortel')} style={styles.esqueceu} >Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbloco}onPress={HandleLogin}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.continue}>━━━━━━ Ou logue com ━━━━━━</Text>
            <TouchableOpacity style={styles.redondo}>
              <Image style={styles.google} source={require('./assets/google.svg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.redondo2}>
              <Image style={styles.face} source={require('./assets/face.svg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.redondo3}>
              <Image style={styles.apple} source={require('./assets/apple.svg')} />
            </TouchableOpacity>
            <Text style={styles.final}>Não tem uma conta?<TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.final2}>
                    <Text style={styles.final2}> Vamos criar agora!</Text>
                </TouchableOpacity></Text>
                <Modal isVisible={errorModalVisible} onBackdropPress={() => setErrorModalVisible(false)}>
                <View style={styles.errorModalVisible}>
                    <Text style={styles.errorModalTitle}>Erro de autenticação</Text>
                    <Text style={styles.errorModalMensage}>   O email ou a senha inseridos estão incorretos.{'\n'}           Por favor, verifique suas credenciais e{'\n'}                            tente novamente.</Text>
                    <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
                        <Text style={styles.errorModalButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} /> {/* Adiciona o componente Toast com a configuração */}
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
      fontSize: 30,
      fontWeight: 'bold',
        top: -95,
        marginLeft: 0,
    },
    subtt:{
      top: -95,
    },
    email:{
      fontSize: 15,
      fontWeight: 'bold',
      top: -36,
      marginRight: 310,
    },
    inputemaill:{
      width: '90%',
      height: 50,
      marginTop: -30,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
    },
    senha:{
      fontSize: 15,
      fontWeight: 'bold',
     marginRight: 300,
     top: 10,
    },
    inpusenha:{
      width: '90%',
      height: 50,
      marginTop: 15,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
    },
    esqueceu:{
      color: 'purple',
      fontSize: 13,
      fontWeight: '600',
      marginLeft: 230,
      top: 5,
    },
    loginbloco:{
      width: '90%',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#3D1365',
      top: 50,
    },
    login:{
      fontSize: 18,
      fontWeight: '450' ,
      color: '#fff',
      marginLeft: 155,
      top: 12,
    },
    continue:{
      top: 70,
        opacity: 0.7,
    },
    redondo:{
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 50,
      top:  100,
    },
    google:{
      width: 25,
      height: 25,
      top: 14,
      marginLeft: 14,
    },
    redondo2:{
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 50,
      top:  45,
      marginLeft: 140,
    },
    face:{
      width: 25,
      height: 25,
      top: 14,
      marginLeft: 14,
    },
    redondo3:{
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 50,
      top:  -10,
      marginLeft: -140,
    },
    apple:{
      width: 25,
      height: 25,
      top: 14,
      marginLeft: 14,
    },
    final:{
      fontSize: 15,
      fontWeight: '500',
      top: 80,
    },
    final2:{
      color: 'purple',
    },
    errorModalVisible:{
      width: 300,
      height: 100,
      backgroundColor: '#fff',
      top: -230,
      borderRadius: 10,
      marginLeft: 25,
    },
    errorModalTitle:{
      fontSize: 18,
      fontWeight: '700',
      color: '#3D1365',
      marginLeft: 68,
    },
    errorModalMensage:{
      fontSize: 13,
      fontWeight: '500',
      top: 5,
    },
    errorModalButtonText:{
      fontSize: 18,
      fontWeight: '700',
      color: '#3D1365',
      marginLeft: 135,
      top: 5,
    },
    toastContainer: {
      padding: 10,
      borderRadius: 8,
      backgroundColor: 'rgba(255, 0, 0, 0.9)',
      marginTop: 60,
      marginHorizontal: 10,
    },
    toastText1: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    toastText2: {
      fontSize: 14,
      color: '#fff',
    },
});
