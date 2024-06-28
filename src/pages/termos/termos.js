import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Termos({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.voltar} source={require("./assets/voltar.svg")} />
        </TouchableOpacity>
        <Text style={styles.title}>Termos de Uso</Text>
        <Text style={styles.sectionTitle}>1. Aceitação dos Termos</Text>
        <Text style={styles.text}>
          Ao acessar e utilizar nosso aplicativo, você concorda em cumprir e estar legalmente vinculado a estes Termos de Uso, que podem ser atualizados periodicamente. Se você não concordar com estes termos, por favor, não utilize nosso aplicativo.
        </Text>
        <Text style={styles.sectionTitle}>2. Cadastro de Usuário</Text>
        <Text style={styles.text}>
          Para utilizar certas funcionalidades do nosso aplicativo, você precisará criar uma conta. Você é responsável por manter a confidencialidade das informações da sua conta e por todas as atividades que ocorram sob sua conta. Você concorda em fornecer informações verdadeiras, precisas e completas durante o processo de cadastro.
        </Text>
        <Text style={styles.sectionTitle}>3. Compras</Text>
        <Text style={styles.text}>
          Nosso aplicativo permite que você compre açaí, sorvetes e outros produtos oferecidos pela nossa sorveteria. Todas as compras estão sujeitas à disponibilidade dos produtos. Reservamo-nos o direito de cancelar ou recusar qualquer pedido a nosso critério.
        </Text>
        <Text style={styles.sectionTitle}>4. Pagamentos</Text>
        <Text style={styles.text}>
          Os pagamentos devem ser realizados através dos métodos de pagamento disponíveis no aplicativo. Todos os preços são listados em moeda local e incluem impostos aplicáveis. Você concorda em pagar todos os encargos incorridos por sua conta.
        </Text>
        <Text style={styles.sectionTitle}>5. Entrega</Text>
        <Text style={styles.text}>
          Fazemos o possível para garantir que seu pedido seja entregue no prazo estimado. No entanto, não nos responsabilizamos por atrasos causados por circunstâncias fora do nosso controle. Você deve fornecer um endereço de entrega correto e atualizado.
        </Text>
        <Text style={styles.sectionTitle}>6. Avaliações</Text>
        <Text style={styles.text}>
          Você pode deixar avaliações sobre os produtos comprados. As avaliações devem ser baseadas em sua experiência pessoal e ser verdadeiras e precisas. Reservamo-nos o direito de remover avaliações que considerarmos inadequadas ou falsas.
        </Text>
        <Text style={styles.sectionTitle}>7. Uso Aceitável</Text>
        <Text style={styles.text}>
          Você concorda em usar nosso aplicativo apenas para fins legais e de acordo com estes Termos de Uso. Você não deve usar nosso aplicativo para qualquer atividade fraudulenta, ofensiva ou ilegal.
        </Text>
        <Text style={styles.sectionTitle}>8. Propriedade Intelectual</Text>
        <Text style={styles.text}>
          Todo o conteúdo do nosso aplicativo, incluindo textos, gráficos, logos, ícones e imagens, é de nossa propriedade ou de nossos licenciadores e é protegido por leis de direitos autorais e outras leis de propriedade intelectual. Você não deve reproduzir, modificar, distribuir ou usar qualquer conteúdo sem nossa autorização prévia por escrito.
        </Text>
        <Text style={styles.sectionTitle}>9. Limitação de Responsabilidade</Text>
        <Text style={styles.text}>
          Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nosso aplicativo, mesmo que tenhamos sido avisados da possibilidade de tais danos.
        </Text>
        <Text style={styles.sectionTitle}>10. Modificações nos Termos</Text>
        <Text style={styles.text}>
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Quaisquer alterações serão publicadas em nosso aplicativo e entrarão em vigor imediatamente após a publicação. É sua responsabilidade revisar estes Termos de Uso periodicamente para estar ciente de quaisquer modificações.
        </Text>
        <Text style={styles.sectionTitle}>11. Contato</Text>
        <Text style={styles.text}>
          Se você tiver qualquer dúvida sobre estes Termos de Uso, por favor, entre em contato conosco através do suporte no aplicativo.
        </Text>
        <Text style={styles.text}>
          Obrigado por usar nosso aplicativo. Esperamos que você tenha uma experiência maravilhosa com nossos produtos!
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
    marginLeft: 123,
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
