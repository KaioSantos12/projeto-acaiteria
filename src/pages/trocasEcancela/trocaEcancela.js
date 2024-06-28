import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrocaECancela({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.voltar} source={require("./assets/voltar.svg")} />
        </TouchableOpacity>
        <Text style={styles.title}>Trocas e Cancelamentos</Text>
        <Text style={styles.sectionTitle}>Trocas:</Text>
        <Text style={styles.text}>
          - Não realizamos trocas de produtos que já tenham sido consumidos em grande parte ou completamente. Entendemos que pode haver casos em que o produto não atenda às expectativas, mas uma vez que o item foi parcialmente ou totalmente consumido, não podemos aceitar a devolução.
        </Text>
        <Text style={styles.sectionTitle}>Cancelamentos:</Text>
        <Text style={styles.text}>
          -<Text style={styles.bold}>Pedidos Não Enviados:</Text> Se você desejar cancelar um pedido antes do envio, faremos o reembolso total do valor gasto.
        </Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Pedidos Enviados:</Text> Não aceitamos cancelamentos de pedidos que já foram enviados. Pedimos a compreensão de nossos clientes, pois uma vez que o pedido é despachado, ele entra em processo de entrega e não pode ser revertido.
        </Text>
        <Text style={styles.text}>
          Estamos comprometidos em oferecer a melhor experiência possível e agradecemos sua compreensão e cooperação com nossas políticas. Se tiver alguma dúvida ou precisar de assistência adicional, nossa equipe de atendimento ao cliente está à disposição para ajudar.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  voltar: {
    width: 15,
    height: 15,
    marginRight: 350,
    top: -18,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    top: -38,
    marginLeft: 87,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: '700',
    marginRight: 0,
  },
});
