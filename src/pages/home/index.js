import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

 
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Olá, Kaio</Text>
            <Text style={styles.subtt}>Que tal tomar um açai agora!</Text>
            <View style={styles.container2}>
                <TouchableOpacity>
                    <Image style={styles.sino} source={require('./assets/sino.svg')} />
                </TouchableOpacity>
            </View>
            <TextInput
            style={styles.busca}
             placeholder="         Oque você procura?"
            />
            <View style={styles.container3}>
                <TouchableOpacity>
                    <Image style={styles.filter} source={require('./assets/filter.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.categoria}>Categorias</Text>
            <TouchableOpacity>
            <Text style={styles.vermais}>Ver mais</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.bola}>
            </View>
            <Text style={styles.cat1}>Tradicionais</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.bola2}>
           </View>
           <Text style={styles.cat2}>Trufados</Text>
            </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.bola3}>
           </View>
           <Text style={styles.cat3}>Marmitas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.bola4}>
           </View>
           <Text style={styles.cat4}>Milk Shake</Text>
          </TouchableOpacity>
          <Text style={styles.destaques}>Destaques da <Text style={styles.coloredText}>Semana</Text></Text>
          
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
        fontSize: 20,
        fontWeight: '700',
        top: -140,
        marginRight: 260,
    },
    subtt:{
        fontSize: 15,
        top: -140,
        marginRight: 150,
    },
    container2:{
        width: 30,
        height: 30,
        backgroundColor: '#9689E8',
        borderRadius: 10,
        top: -185,
        marginLeft: 330,
    },
    sino:{
        width: 20,
        height: 20,
        top: 5,
        marginLeft: 5,
    },
    busca:{
        width: 310,
        height: 40,
        marginRight: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginTop: -120,
    },
    container3:{
        width: 40,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginLeft: 330,
        top: -40,
    },
    filter:{
        width: 25,
        height: 25,
        marginLeft: 8,
        top: 8,
    },
    categoria:{
        fontWeight: '600',
        fontSize: 25,
        marginRight: 220,
    },
    vermais:{
        fontSize: 15,
        fontWeight: '500',
        color: '#F6C543',
        marginLeft: 300,
        top: -25,
    },
    bola:{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        marginRight: 280,
        top: 5,
    },
    bola2:{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        marginRight: 90,
        top: -68,
    },
    bola3:{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        marginLeft: 100,
        top: -142,
    },
   bola4:{
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    marginLeft: 290,
    top: -216,
   },
   cat1:{
    fontSize: 10,
    fontWeight: 'bold',
    top: 10,
    marginLeft: 2,
   },
   cat2:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -63,
    marginLeft: 9,
   },
   cat3:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -136,
    marginLeft: 107,
   },
   cat4:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -209,
    marginLeft: 294,
   },
   destaques:{
    fontWeight: '700',
    fontSize: 20,
    top: -190,
    marginRight: 140,
   },
   coloredText:{
    color: '#9689E8', 
   },
   

});