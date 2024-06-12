import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Home({ navigation }) {
    return (
     <ScrollView>
        <View style={styles.container}>
           <TouchableOpacity>
               <View style={styles.user}>
                <Image style={styles.userimg} source={require('./assets/user.svg')}/>
               </View>
           </TouchableOpacity>
           <Text style={styles.bemvindo}>Bem vindo!</Text>
           <Text style={styles.nome}>Kaio Santos</Text>
           <TouchableOpacity>
            <View style={styles.notifica}>
                <Image style={styles.imgnotifica} source={require('./assets/sino.svg')} />
            </View>
        </TouchableOpacity>
       <View>
        <Image style={styles.lupa} source={require('./assets/lupa.svg')} />
       <TextInput 
        style={styles.pesquisa}
        placeholder="       Buscar"
        placeholderTextColor="#999"
        />
       </View>
       <Text style={styles.destaque}>Destaques da <Text style={styles.coloredText}>Semana</Text></Text>
       <Image style={styles.imgcar} source={require('./assets/image.png')} />
        </View>
        <View>
            <Text style={styles.categoria}>Categorias</Text>
            <TouchableOpacity>
                 <View style={styles.trufadinho1}>
                    <Text style={styles.trufadinhotext}>Trufadinhos</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho2}>
                    <Text style={styles.tradicionais}>Tradicionais</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho3}>

                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho4}>

                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho5}>

                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho6}>

                 </View>
            </TouchableOpacity>
        </View>
        
     </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    user:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        top: 5,
        marginLeft: -180,
    },
    userimg:{
        width: 25,
        height: 25,
        top: 10,
        marginLeft: 12,
    },
    bemvindo:{
        fontSize: 15,
        marginRight: 165,
        top: -40,
    },
    nome:{
        fontSize: 18,
        fontWeight: '700',
        top: -45,
        marginRight: 140,
    },
    notifica:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f5f5f5',
        top: -90,
        marginLeft: 330,
        
    },
    imgnotifica:{
        width: 30,
        height: 30,
        top: 10,
        marginLeft: 10,
    },
    pesquisa:{
        width: 350,
        height: 50,
        backgroundColor: '#fff',
        marginLeft: 0,
        borderRadius: 25,
        marginTop: -90,
        fontSize: 20,
    },
    lupa:{
        width: 20,
        height: 20,
        top: -55,
        marginLeft: 10,
        opacity: 0.5,
    },
    destaque:{
        fontSize: 20,
        marginRight: 140,
        fontWeight: '700',
    },
    coloredText:{
        color: 'purple'
    },
    imgcar:{
        width: 370,
        height: 200,
        borderRadius: 25,
        top: 10,
    },
    categoria:{
        fontSize: 20,
        marginLeft: 25,
        top: 40,
        fontWeight: '700',
    },
    trufadinho1:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#84504C',
        top: 50,
        marginLeft: 10,
    },
    trufadinho2:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#341A1F',
        top: -60,
        marginLeft: 210,
    },
    trufadinho3:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#C3A08C',
        top: -40,
        marginLeft: 10,
    },
    trufadinho4:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#F3ADAD',
        top: -150,
        marginLeft: 210,
    },
    trufadinho5:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#E4DEC3',
        top: -130,
        marginLeft: 10,
    },
    trufadinho6:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#D5D4DA',
        top: -240,
        marginLeft: 210,
    },
    trufadinhotext:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
       marginLeft: 5,
    },
    tradicionais:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
        marginLeft: 5,
    },
});
