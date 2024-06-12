import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity,Image } from "react-native";

export default function Notificacao() {
   return (
      <SafeAreaView style={styles.safeArea}>
         <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.greeting}>Olá Usuário</Text>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/150' }} 
                    style={styles.profileImage} 
                />
            <Text style={styles.header}>Notificações</Text>
            <TouchableOpacity style={styles.session}>
               <Text style={styles.sessionText}>Um novo produto chegou, Venha conferir!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.session}>
               <Text style={styles.sessionText}>Você ganhou 15% de desconto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.session}>
               <Text style={styles.sessionText}>Parabéns! Você ganhou 20% de desconto em carrinho acima de 80 reais. Resgate já!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.session}>
               <Text style={styles.sessionText}>Sua senha foi atualizada com sucesso!</Text>
            </TouchableOpacity>
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   safeArea: {
      flex: 1,
      backgroundColor: '#fff',
   },
   container: {
      alignItems: 'center',
      padding: 20,
   },

   header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
   },
   session: {
      width: '90%',
      padding: 15,
      borderWidth: 1,
      borderColor: 'purple',
      borderRadius: 10,
      backgroundColor: '#f8f8f8',
      marginBottom: 10,
      alignItems: 'center',
   },
   sessionText: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
profileImage: {
    width: 80,
    height: 80,
    borderRadius: 75,
    marginBottom: 30,
    top:-20,
    marginRight:300,
},
   backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
},
backButtonText: {
    fontSize: 18,
    color: 'purple',
},
});
