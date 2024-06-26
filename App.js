import React, { useState } from 'react'; //reconhce os cmd de start inicial

//imports das telas

import Feed from "./src/tabs/Feed";
import Home from "./src/pages/home";
import Login from "./src/pages/Login/Login";
import Cadastro from "./src/pages/Cadastro/cadastro";
import Verificacao from "./src/pages/Verificação/verifica";
import Emailortel from "./src/pages/Emailortel/emailortel";
import Senha from "./src/pages/Senha/Senha";
import Carrinho from "./src/pages/Carrinho/Carrinho";
import Usuario from "./src/pages/Usuario/Usuario";
import Notificacao from "./src/pages/Notificacao/index";
import Pagamentos from "./src/pages/Pagamentos/Pagamentos";
import Configurar from "./src/pages/Perfil/Configurar"
import trocaEcancela from "./src/pages/trocasEcancela/trocaEcancela"
import Termos from "./src/pages/termos/termos"
import Privacidade from "./src/pages/Privacidade/Privacidade"

//imports navegação
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function Loginscreen({ navigation }) {

    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Pagamentos" component={Pagamentos} />
             <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Home" component={Home} />    
            <Tab.Screen name="Login" component={Login} />   
            <Tab.Screen name="Verificacao" component={Verificacao} />  
            <Tab.Screen name="Emailortel" component={Emailortel} />
            <Tab.Screen name="Senha" component={Senha} />
            <Tab.Screen name="Config" component={Config} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
                <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Configurar" component={Configurar} />
                <Drawer.Screen name="Privacidade" component={Privacidade} />
                <Drawer.Screen name="Termos" component={Termos} /> 
                <Drawer.Screen name="Usuario" component={Usuario} />
                <Drawer.Screen name="trocaEcancela" component={trocaEcancela} />
                <Drawer.Screen name="Pagamentos" component={Pagamentos} /> 
                <Drawer.Screen name="Cadastro" component={Cadastro} /> 
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Emailortel" component={Emailortel} />
                <Drawer.Screen name="Verificacao" component={Verificacao} />
                <Drawer.Screen name="Senha" component={Senha} />
                <Drawer.Screen name="Carrinho" component={Carrinho} />
                <Drawer.Screen name="Notificacao" component={Notificacao} /> 
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;