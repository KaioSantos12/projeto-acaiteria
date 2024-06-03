import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Config({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.produto}>Copo de 500ml</Text>
                    <Text style={styles.disponivel}>Disponivel no estoque</Text>
                    <Text style={styles.descricao}>Descrição do Produto</Text>
                    <Text style={styles.descricaoproduto}>No copo vão 500 ml de açaí ou cupuaçu{'\n'}mais 3 acompanhamentos à sua escolha.</Text>
                    <Image style={styles.img} source={require('./assets/500.png')} />
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.carrinho}>Add ao carrinho</Text>
                    </TouchableOpacity>
                    <Text style={styles.valor}>R$14.00</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D1365',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2:{
        width: 400,
        height: 600,
        backgroundColor: '#fff',
        top: -60,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3:{
        width: 500,
        height: 500,
        backgroundColor: '#F5F5F5',
        borderRadius: 200,
        top: -270,
        marginLeft: -10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    produto:{
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
        top: 400,
        marginRight: 190,
    },
    descricao:{
        fontSize: 15,
        color: 'black',
        fontWeight: '700',
        top: 420,
        marginRight: 180,
    },
    descricaoproduto:{
        top: 420,
        marginRight: 80,
    },
    disponivel:{
        top: 400,
        marginRight: 190,
    },
    img: {
        width: 200,
        height: 200,
        top: 70,
    },
    botao:{
        width: '30%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 25,
        top: 475,
        marginLeft: 220,
    },
    carrinho:{
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 30,
        top: 10,
    },
    valor:{
        fontSize: 20,
        fontWeight: '400',
        top: 440, 
        color: '#fff',
        marginRight: 250,
    }
});