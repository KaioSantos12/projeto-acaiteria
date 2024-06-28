import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Privacidade({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.voltar} source={require("./assets/voltar.svg")} />
        </TouchableOpacity>
        <Text style={styles.title}>Política de Privacidade</Text>
        <Text style={styles.sectionTitle}>1. Introdução</Text>
        <Text style={styles.text}>
          Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações pessoais ao usar nosso aplicativo. Ao utilizar nosso aplicativo, você concorda com a coleta e uso de informações de acordo com esta política.
        </Text>
        <Text style={styles.sectionTitle}>2. Coleta de Informações</Text>
        <Text style={styles.text}>
          Podemos coletar informações pessoais que você nos fornece diretamente, como seu nome, endereço de e-mail, endereço de entrega, e informações de pagamento. Também podemos coletar informações automaticamente ao usar nosso aplicativo, como dados de localização, informações do dispositivo e comportamento de uso.
        </Text>
        <Text style={styles.sectionTitle}>3. Uso das Informações</Text>
        <Text style={styles.text}>
          Usamos suas informações pessoais para fornecer e melhorar nossos serviços, processar suas compras, comunicar com você, personalizar sua experiência no aplicativo e para fins de segurança.
        </Text>
        <Text style={styles.sectionTitle}>4. Compartilhamento de Informações</Text>
        <Text style={styles.text}>
          Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer nossos serviços (por exemplo, processadores de pagamento), cumprir a lei, ou proteger nossos direitos.
        </Text>
        <Text style={styles.sectionTitle}>5. Segurança</Text>
        <Text style={styles.text}>
          Tomamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
        </Text>
        <Text style={styles.sectionTitle}>6. Seus Direitos</Text>
        <Text style={styles.text}>
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Se desejar exercer esses direitos, entre em contato conosco através do suporte no aplicativo.
        </Text>
        <Text style={styles.sectionTitle}>7. Alterações nesta Política</Text>
        <Text style={styles.text}>
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política no aplicativo. Recomendamos revisar esta política regularmente para estar ciente de quaisquer alterações.
        </Text>
        <Text style={styles.sectionTitle}>8. Contato</Text>
        <Text style={styles.text}>
          Se você tiver qualquer dúvida sobre esta Política de Privacidade, por favor, entre em contato conosco através do suporte no aplicativo.
        </Text>
        <Text style={styles.text}>
          Obrigado por usar nosso aplicativo. Estamos comprometidos em proteger sua privacidade.
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
    top: -20,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    top: -38,
    marginLeft: 95,
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
});
