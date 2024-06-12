import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Usuario({ navigation }) {
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
                <TouchableOpacity style={styles.session}>
                    <Text style={styles.sessionText}>Compras</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.session}>
                    <Text style={styles.sessionText}>Cartões Cadastrados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.session}>
                    <Text style={styles.sessionText}>Cupons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.session}>
                    <Text style={styles.sessionText}>Endereços</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.session}>
                    <Text style={styles.sessionText}>Dados da Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.session}>
                    <Text style={styles.sessionText}>Notificações</Text>
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
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 18,
        color: 'purple',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 30,
    },
    session: {
        width: '90%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        marginBottom: 10,
        alignItems: 'center',
    },
    sessionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
