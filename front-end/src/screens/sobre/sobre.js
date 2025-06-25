import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Termos')}>
        <Text style={styles.buttonText}>Termos de Uso</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Criadores')} style={styles.button}>
  <Text style={styles.buttonText}>Criadores</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Suporte')} style={styles.button}>
  <Text style={styles.buttonText}>suporte/sugestoes</Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
