import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pagamentos({ navigation }) {
  const [date, setDate] = useState('');

  const handleDateChange = (text) => {
    // Remove any non-numeric characters
    let cleaned = text.replace(/[^0-9]/g, '');

    // Format the date as DD/MM
    if (cleaned.length >= 2) {
      cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    }

    // Limit to 5 characters (DD/MM)
    if (cleaned.length > 5) {
      cleaned = cleaned.slice(0, 5);
    }

    setDate(cleaned);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.voltar} source={require("./assets/voltar.svg")} />
      </TouchableOpacity>
      <Text style={styles.sessionText}>Meus Cartões</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.card}>
            <Image
              source={require("./assets/mc.svg")}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.addcart}>
          <Image style={styles.mais} source={require("./assets/mais.svg")} />
        </View>
      </TouchableOpacity>
      <View style={styles.cart}>
        <Text style={styles.num}>Número do Cartão</Text>
        <Text style={styles.number}>**** </Text>
        <Text style={styles.number2}>1014</Text>
        <Text style={styles.nome}>Nome</Text>
        <TextInput 
          style={styles.nomeuser}
          placeholder="Kaio Santos"
        />
        <Text style={styles.vali}>Validade</Text>
        <TextInput
          style={styles.dia}
          placeholder="15/06"
          value={date}
          onChangeText={handleDateChange}
          keyboardType="numeric"
          maxLength={5}
        />
        <Text style={styles.ccv}>CCV</Text>
        <TextInput style={styles.cvv}
        placeholder="233"
        keyboardType="numeric"
        maxLength={3} />
        <Image style={styles.bandeira} source={require("./assets/mc.svg")} />
      </View>
      <TouchableOpacity style={styles.buy}>
        <Text style={styles.salva}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20, 
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 10,
    padding: 10,
    zIndex: 1, 
  },
  voltar: {
    width: 30,
    height: 30,
  },
  sessionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    top: -9,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 30,
    borderRadius: 5,
  },
  largeContainer: {
    width: "90%",
    height: 200,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  largeImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  info: {
    marginRight: 100,
    backgroundColor: "#FF8600",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: 350,
    height: 200,
    marginLeft: 100,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  dados: {
    fontSize: 16,
    marginTop: 5,
  },
  cvv: {
    fontSize: 16,
    marginTop: 5,
    color: "red",
  },
  buy: {
    width: 150,
    height: 40,
    backgroundColor: "#3D1365",
    fontSize: 15,
    borderRadius: 10,
    color: "white",
    top: 200,
  },
  salva: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    top: 5,
    marginLeft: 48,
  },
  addcart: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    width: 25,
    height: 25,
    marginLeft: 130,
    top: -45,
  },
  mais: {
    width: 10,
    height: 10,
    marginLeft: 8,
    top: 7,
  },
  cart: {
    width: 350,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  number: {
    fontSize: 15,
    fontWeight: "700",
    top: 20,
    marginLeft: 10,
  },
  number2: {
    fontSize: 15,
    fontWeight: "700",
    top: -3,
    marginLeft: 40,
  },
  num:{
    fontSize: 12,
    marginLeft: 10,
    top: 20,
  },
  nome:{
    fontSize: 13,
    marginLeft: 10,
    top: 25,
  },
  nomeuser:{
   marginTop: 25,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '700',
    width: 160,
  },
  vali:{
    top: 30,
    marginLeft: 10,
    fontSize: 14,
  },
  dia:{
    fontSize: 15,
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 10,
    width: 50,
  },
  bandeira:{
    width: 50,
    height: 30,
    marginLeft: 290,
    top: -170,
  },
  ccv:{
    fontSize: 13,
    top: -35,
    marginLeft: 300,
  },
  cvv:{
    marginLeft: 300,
    fontWeight: '700',
    width: 30,
    marginTop: -35,
  }
});
