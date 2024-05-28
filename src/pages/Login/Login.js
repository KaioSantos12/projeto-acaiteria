import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ImageBackground } from "react-native-web";
 
export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
   return(
    <View style={styles.container}>
      <ImageBackground source={require ('./assets/tela.png')} style={styles.tela}    >
      <TextInput 
        style={styles.textInput} 
        placeholder='Informe seu e-mail ou telefone' 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput  
        secureTextEntry={!isPasswordVisible} 
        style={styles.textInput2} 
        placeholder='Informe sua senha' 
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Image source={require('./assets/8442581.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txtsenha} onPress={() => navigation.navigate('Home')} >Esqueceu sua senha?</Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.Button} >
      <Text style={styles.txtbutton}>Login</Text>
    </TouchableOpacity>
          <Text style={styles.txt}>Ou continue com</Text>
          <TouchableOpacity style={styles.imageButton} onPress={() => console.log('Image button pressed')}>
          <Text style={styles.textgoogle}>Continue com Google</Text>
          <Image source={require('./assets/google.svg')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageButton2} onPress={() => console.log('Image button pressed')}>
          <Text style={styles.textgoogle2}>Continue com Apple</Text>
          <Image source={require('./assets/apple.svg')} style={styles.buttonImage2} />
          </TouchableOpacity>
          <Text style={styles.txtnaotenhoconta}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('cad')}>
          <Text style={styles.txtsignup}>Inscrever-se</Text>
          </TouchableOpacity>
          </ImageBackground>
    </View>
   );
}
//estilo da tela de login>>>>>>
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
    txt:{
        top: 80,
        fontSize: 10,
        color: '#2F2E2E',
        fontWeight: 'bold',
        top: 580,
        marginLeft: 100,
      }, 
      textInput:{
        width: '90%',
        height: 50,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
       marginLeft: 100,
       
      },
      textInput2:{
        width: '90%',
        height: 50,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
       marginLeft: 100,
       marginBottom: -500,
      },
      txtsignup:{
        fontSize: 20,
        color: '#67127C',
        fontWeight: 'bold',
        top: 610,
        marginLeft: 100,
      },
      txtpassword:{
        fontSize: 15,
        color: '#2F2E2E',
        top: -5,
        marginLeft: -280,
        fontWeight: 'bold',
      },
      txtname:{
        fontSize: 15,
        color: '#2F2E2E',
        top: -5,
        marginLeft: -250,
        fontWeight: 'bold',
      },
      txtsenha:{
        fontSize: 12,
        color: '#2F2E2E',
        marginLeft: 290,
        top: 485,
        left: 30,
      },
      txtnaotenhoconta:{
        fontSize: 12,
        color: '#2F2E2E',
        top: 610,
        marginLeft: 100,
      },
      txtbutton:{
        color: '#fff',
        fontWeight: 'bold',
        top: 10,
        marginLeft: 155,
      },
      Button:{
        width: '90%',
        height: 40,
        backgroundColor: '#3D1365',
        borderRadius: 10,
        fontWeight: 'bold',
        top: 575,
        marginLeft: 100,
      },
      image: {
        width: 20,
        height: 20,
        marginLeft: 310,
        top: -502,
        opacity: 0.5,
      },  
      imageButton:{
        marginBottom: 12,
        width: '90%',
        height: 40,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
        top: 590,
        marginLeft: 100,
      },
      buttonImage:{
        width: 25,
        height: 25,
        marginLeft: 80,
        top: -14,
      },
      textgoogle:{
        fontSize: 15,
        marginLeft: 109,
        top: 8,
      },
      imageButton2:{
        width: '90%',
        height: 40,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 20,
        top: 590,
        marginLeft: 100,
      },
      buttonImage2:{
        width: 25,
        height: 25,
        marginLeft: 70,
        top: -14,
      },
      textgoogle2:{
        fontSize: 15,
        marginLeft: 100,
        top: 8,
      },
      tela:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: -200,
        marginLeft: -100,
      },
});
