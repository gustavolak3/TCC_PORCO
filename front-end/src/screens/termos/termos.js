import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Termos() {
  const termos = [
    'O aplicativo é destinado exclusivamente para fins educacionais.',
    'Nenhuma informação financeira real é coletada ou compartilhada.',
    'Os dados exibidos no app são fictícios e utilizados apenas como exemplo.',
    'O uso do aplicativo é de total responsabilidade do usuário.',
    'O app não realiza transações bancárias reais.',
    'Não nos responsabilizamos por decisões financeiras tomadas com base nas informações do app.',
    'O conteúdo pode ser atualizado ou modificado sem aviso prévio.',
    'O aplicativo exige login mas nao coleta dados pessoais.',
    'A reprodução do app é permitida apenas com autorização dos criadores.',
    'O uso do app implica na aceitação desses termos.'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>
      {termos.map((item, index) => (
        <Text key={index} style={styles.texto}>
          {index + 1}. {item}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginBottom: 10,
  },
});
