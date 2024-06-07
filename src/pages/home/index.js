import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import MyCarousel from "../carrosel/carrosel";

export default function Home({ navigation }) {
    return (
     <ScrollView>
            <View style={styles.container}>
            <Text style={styles.text}>Olá, Kaio</Text>
            <Text style={styles.subtt}>Que tal tomar um açai agora!</Text>
            <View style={styles.container2}>
                <TouchableOpacity>
                    <Image style={styles.sino} source={require('./assets/sino.svg')} />
                </TouchableOpacity>
            </View>
           <View>
            <Image style={styles.lupa} source={require('./assets/lupa.png')}/>
           <TextInput
            style={styles.busca}
             placeholder="         Oque você procura?"
            />
           </View>
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
         <TouchableOpacity>
         <Image style={styles.carrosel} source={require('./assets/img.jpg')}/>
         </TouchableOpacity>
          <Text style={styles.produtos}>Produtos</Text>    
          <TouchableOpacity>
            <Text style={styles.produ}>Ver mais</Text>
          </TouchableOpacity>    
         
          <TouchableOpacity>
            <View style={styles.um}>
                <View style={styles.borda}>
                <Image style={styles.copo} source={require('./assets/copoacai.webp')} />
            <TouchableOpacity>
            <View>
                <Image style={styles.heart} source={require('./assets/heart.svg')}/>
            </View>
          </TouchableOpacity>
                </View>
            </View>
          </TouchableOpacity>
          <View style={styles.desc}>
            <Text style={styles.desconto}>-10%</Text>
          </View>
          <Text style={styles.nome}>Açai Tradicional{'\n'}         500ml</Text>
          <Text style={styles.preco}>R$14,00</Text>
        </View>
     </ScrollView>
        
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
        top: 0,
        marginRight: 260,
    },
    subtt:{
        fontSize: 15,
        top: 0,
        marginRight: 150,
    },
    container2:{
        width: 30,
        height: 30,
        backgroundColor: '#9689E8',
        borderRadius: 10,
        top: -45,
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
        marginTop: 20,
    },
    lupa:{
    position: 'absolute',
    left: 10, 
    width: 15,
    height: 15,
    top: 33,
    opacity: 0.8,
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
        top: -30,
    },
    vermais:{
        fontSize: 15,
        fontWeight: '500',
        color: '#F6C543',
        marginLeft: 300,
        top: -55,
    },
    bola:{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        marginRight: 280,
        top: -25,
    },
    bola2:{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        marginRight: 90,
        top: -98,
    },
    bola3:{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        marginLeft: 100,
        top: -172,
    },
   bola4:{
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    marginLeft: 290,
    top: -246,
   },
   cat1:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -20,
    marginLeft: 2,
   },
   cat2:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -93,
    marginLeft: 10,
   },
   cat3:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -166,
    marginLeft: 108,
   },
   cat4:{
    fontSize: 10,
    fontWeight: 'bold',
    top: -239,
    marginLeft: 294,
   },
   destaques:{
    fontWeight: '700',
    fontSize: 20,
    top: -235,
    marginRight: 140,
   },
   carrosel:{
    width: 300,
    height: 200,
    top: -220,
    borderRadius: 20,
   },
   coloredText:{
    color: '#9689E8',
   },
   produtos:{
    fontWeight: '700',
    fontSize: 20,
    marginRight: 250,
    top: -180,
   },
   produ:{
        fontSize: 15,
        fontWeight: '500',
        color: '#F6C543',
        top: -203,
        marginLeft: 290,
   },
   um:{
    width: 150,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 10,
    top: -190,
    marginRight: 200,
   },
   salva:{
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 50,
    top: -10,
    marginLeft: 120,
   },
   heart:{
    width: 15,
    height: 15,
    top: 33,
    marginLeft: 130,
   },
   copo:{
    width: 100,
    height: 100,
    top: 10,
    marginLeft: 25,
   },
   desc:{
    width: 30,
    height: 10,
    backgroundColor: '#9689E8',
    top: -340,
    marginRight: 90,
    borderRadius: 10,
   },
   desconto:{ 
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 5,
    top: -2,
   },
   nome:{
    fontSize: 10,
    fontWeight: '700',
    top: -200,
    marginRight: 200,
   },
   preco:{
    fontSize: 12,
    fontWeight: '400',
    top: -245,
    marginRight: 290,
    color: '#fff'
   },
   borda:{
    width: 152,
    height: 130,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginLeft: -1,
    top: -1,
   }
});
