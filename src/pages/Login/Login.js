import React from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native-web";

export default function Login() {
   return(
    <View style={styles.container}>
          <Text style={styles.txtname}>Email Address</Text>
          <TextInput style={styles.textInput} placeholder='Enter your email' />
          <Text style={styles.txtpassword}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.textInput2} placeholder='Enter your password' />
          <Image source={require('./assets/8442581.png')} style={styles.image} />
          <Text style={styles.txtsenha}>Forgot Password?</Text>
          <TouchableOpacity style={styles.Button}>
          <Text style={styles.txtbutton}>
            Login
          </Text>
          </TouchableOpacity>
          <Text style={styles.txt}>Or continue with</Text>
          <TouchableOpacity style={styles.imageButton} onPress={() => console.log('Image button pressed')}>
          <Text style={styles.textgoogle}>Continue with Google</Text>
          <Image source={require('./assets/google.svg')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageButton2} onPress={() => console.log('Image button pressed')}>
          <Text style={styles.textgoogle2}>Continue with Apple</Text>
          <Image source={require('./assets/apple.svg')} style={styles.buttonImage2} />
          </TouchableOpacity>
          
          <Text style={styles.txtnaotenhoconta}>Don't have an account?</Text>
          <Text style={styles.txtsignup}>Sign Up</Text>
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
        fontSize: 10,
        color: '#2F2E2E',
        fontWeight: 'bold',
      }, 
      textInput:{
        width: '90%',
        height: 50,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
      },
      textInput2:{
        width: '90%',
        height: 50,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
      },
      txtsignup:{
        fontSize: 20,
        color: '#67127C',
        fontWeight: 'bold',
        top: 160,
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
        marginLeft: 260,
        top: -20,
      },
      txtnaotenhoconta:{
        fontSize: 12,
        color: '#2F2E2E',
        top: 160,
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
      },
      image: {
        width: 20,
        height: 20,
        marginLeft: 310,
        top: -32,
        opacity: 0.5,
      },  
      imageButton:{
        width: '90%',
        height: 40,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
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
      
    
});
