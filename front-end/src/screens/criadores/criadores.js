import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Criadores() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criadores do Aplicativo</Text>

      <Text style={styles.sectionTitle}>Alunos Desenvolvedores:</Text>
      <Text style={styles.name}>• Gustavo Santana Magalhães</Text>
      <Text style={styles.name}>• Gustavo Henrique Fernandes</Text>
      <Text style={styles.name}>• Vitor Xavier Rodrigues</Text>

      <Text style={styles.sectionTitle}>Orientador:</Text>
      <Text style={styles.name}>• Caio Malheiros</Text>

      <Text style={styles.sectionTitle}>Escola:</Text>
      <Text style={styles.name}>• ETEC Ermelinda Giannini Teixeira</Text>

      <Text style={styles.footer}>Este aplicativo foi desenvolvido como parte do curso técnico.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#007bff',
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
    alignSelf: 'center',
  },
});
