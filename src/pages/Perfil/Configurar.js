import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Configurar({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
           <TouchableOpacity>
            <Image style={styles.voltar} source={require("./assets/voltar.svg")} />
           </TouchableOpacity>
           <Text style={styles.textconf}>Configurar</Text>
          <TouchableOpacity>
           <View style={styles.bola}>
            <Image style={styles.foto} source={require("./assets/user.svg")} />
           </View>
           <Text style={styles.nome}>Kainho</Text>
           <Text style={styles.interação}>Ver Perfil</Text>
           <Image style={styles.ver} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.imgcartao} source={require("./assets/cartao.svg")} />
            <Text style={styles.cartões}>Cartões</Text>
            <Image style={styles.ver2} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.sino} source={require("./assets/sino.svg")} />
            <Text style={styles.not}>Notificações</Text>
            <Image style={styles.ver3} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.imgidioma} source={require("./assets/idoma.svg")} />
            <Text style={styles.idioma}>Idioma</Text>
            <Image style={styles.ver4} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.pediosimg} source={require("./assets/pedidos.svg")} />
            <Text style={styles.pedidos}>Pedidos Realizados</Text>
            <Image style={styles.ver5} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.enderecoimg} source={require("./assets/marcador.svg")} />
            <Text style={styles.enderecotxt}>Endereços</Text>
            <Image style={styles.ver6} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <Text style={styles.linha}>━━━━━━━━━━━━━━━━━━━━━━━━ </Text>
          <TouchableOpacity>
            <Image style={styles.aceso} source={require("./assets/boneco.svg")} />
            <Text style={styles.acesotxt}>Acessibilidades</Text>
            <Image style={styles.ver7} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.cadeado} source={require("./assets/trancar.svg")} />
            <Text style={styles.info}>Informações Pessoais</Text>
            <Image style={styles.ver8} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.novidadeimg} source={require("./assets/novidades.svg")} />
            <Text style={styles.novidades}>Novidades</Text>
            <Image style={styles.ver9} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.imgescuro} source={require("./assets/escuro.svg")} />
            <Text style={styles.escuro}>Modo Escuro</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.ajudaimg} source={require("./assets/ajuda.svg")} />
            <Text style={styles.ajuda}>Ajuda</Text>
            <Image style={styles.ver10} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <Text style={styles.linha2}>━━━━━━━━━━━━━━━━━━━━━━━━ </Text>
          <TouchableOpacity>
            <Image style={styles.politica} source={require("./assets/ajuda.svg")} />
            <Text style={styles.politicatext}>Política de privacidade</Text>
            <Image style={styles.ver11} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.termosimg} source={require("./assets/termos.svg")} />
            <Text style={styles.termos}>Termos de uso</Text>
            <Image style={styles.ver12} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.trocaimg} source={require("./assets/termos.svg")} />
            <Text style={styles.troca}>Política de trocas e cancelamentos</Text>
            <Image style={styles.ver13} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <Text style={styles.linha3}>━━━━━━━━━━━━━━━━━━━━━━━━ </Text>
          <TouchableOpacity>
            <Image style={styles.torcaimg} source={require("./assets/trocar.svg")} />
            <Text style={styles.conta}>Trocar de Conta</Text>
            <Image style={styles.ver14} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.sairimg} source={require("./assets/sair.svg")} />
            <Text style={styles.sair}>Sair</Text>
            <Image style={styles.ver15} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.lixoimg} source={require("./assets/lixo.svg")} />
            <Text style={styles.lixo}>Excluir a conta</Text>
            <Image style={styles.ver16} source={require("./assets/voltar2.svg")} />
          </TouchableOpacity>
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
        top: -14,
        marginLeft: 145,
    },
    bola:{
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#f5f5f5'
    },
    foto:{
        width: 35,
        height: 35,
        top: 5,
        marginLeft: 2.5,
    },
    nome:{
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 50,
        top: -30,
    },
    interação:{
        fontSize: 9,
        fontWeight: '700',
        opacity: 0.6,
        marginLeft: 50,
        top: -32,
    },
    ver:{
        width: 15,
        height: 15,
        marginLeft: 350,
        top: -45,
    },
    imgcartao:{
        width: 15,
        height: 15,
        marginLeft: 10,
        top: -15,
    },
    cartões:{
        fontSize: 12,
        fontWeight: '700',
        top: -31,
        marginLeft: 35,
    },
    ver2:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -45,
    },
    sino:{
        width: 15,
        height: 15,
        marginLeft: 10,
        top: -25,
    },
    not:{
        fontSize: 12,
        fontWeight: '700',
        top: -41,
        marginLeft: 35,
    },
    ver3:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -55,
    },
    imgidioma:{
        width: 21,
        height: 21,
        marginLeft: 8,
        top: -35,
    },
    idioma:{
        fontSize: 12,
        fontWeight: '700',
        top: -54,
        marginLeft: 35,
    },
    ver4:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -68,
    },
    pediosimg:{
        width: 18,
        height: 18,
        top: -50,
        marginLeft: 10,
    },
    pedidos:{
        fontSize: 12,
        fontWeight: '700',
        top: -65,
        marginLeft: 35,
    },
    ver5:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -78,
    },
    enderecoimg:{
        width: 15,
        height: 15,
        top: -60,
        marginLeft: 12,
    },
    enderecotxt:{
        fontSize: 12,
        fontWeight: '700',
        top: -76,
        marginLeft: 35,
    },
    ver6:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -86,
    },
    linha:{
        marginLeft: 15,
        top: -80,
        opacity: 0.4,
    },
    linha2:{
        marginLeft: 15,
        top: -135,
        opacity: 0.4,
    },
    linha3:{
        marginLeft: 15,
        top: -200,
        opacity: 0.4,
    },
    aceso:{
        width: 20,
        height: 20,
        top: -80,
        marginLeft: 10,
    },
    acesotxt:{
        fontSize: 12,
        fontWeight: '700',
        top: -97,
        marginLeft: 35,
    },
    ver7:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -107,
    },
    cadeado:{
        width: 20,
        height: 20,
        top: -90,
        marginLeft: 10,
    },
    info:{
        fontSize: 12,
        fontWeight: '700',
        top: -107,
        marginLeft: 35,
    },
    ver8:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -117,
    },
    novidadeimg:{
        width: 20,
        height: 20,
        marginLeft: 10,
        top: -100,
    },
    novidades:{
        fontSize: 12,
        fontWeight: '700',
        top: -118,
        marginLeft: 35,
    },
    ver9:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -125,
    },
    imgescuro:{
        width: 20,
        height: 20,
        marginLeft: 10,
        top: -110,
    },
    escuro:{
        fontSize: 12,
        fontWeight: '700',
        top: -128,
        marginLeft: 35,
    },
    ajudaimg:{
        width: 20,
        height: 20,
        marginLeft: 10,
        top: -115,
    },
    ajuda:{
        fontSize: 12,
        fontWeight: '700',
        top: -134,
        marginLeft: 35,
    },
    ver10:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -146,
    },
    politica:{
        width: 20,
        height: 20,
        marginLeft: 10,
        top: -135,
    },
    politicatext:{
        fontSize: 12,
        fontWeight: '700',
        top: -153,
        marginLeft: 35,
    },
    ver11:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -162,
    },
    termosimg:{
        width: 23,
        height: 23,
        marginLeft: 8,
        top: -155,
    },
    termos:{
        fontSize: 12,
        fontWeight: '700',
        top: -175,
        marginLeft: 35,
    },
    ver12:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -185,
    },
    trocaimg:{
        width: 23,
        height: 23,
        marginLeft: 8,
        top: -175,
    },
    troca:{
        fontSize: 12,
        fontWeight: '700',
        top: -194,
        marginLeft: 35,
    },
    ver13:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -205,
    },
    torcaimg:{
        width: 19,
        height: 19,
        marginLeft: 11,
        top: -200,
    },
    conta:{
        fontSize: 12,
        fontWeight: '700',
        top: -217,
        marginLeft: 35,
    },
    ver14:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -228,
    },
    sairimg:{
        width: 19,
        height: 19,
        marginLeft: 11,
        top: -210,
    },
    sair:{
        fontSize: 12,
        fontWeight: '700',
        top: -228,
        marginLeft: 35, 
    },
    ver15:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -240 ,
    },
    lixoimg:{
        width: 19,
        height: 19,
        marginLeft: 9,
        top: -225,
    },
    lixo:{
        fontSize: 12,
        fontWeight: '700',
        top: -242,
        marginLeft: 35, 
    },
    ver16:{
        width: 10,
        height: 10,
        marginLeft: 350,
        top: -252,
    },
  
});
