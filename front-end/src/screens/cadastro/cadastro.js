import React, { useState } from 'react';
import PoupaporcoLogo from '../../../assets/Poupaporco_logo.png';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CriarConta({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastro() {
    const userData = {
      nome: nome,
      senha: senha
    };

    try {
      const response = await fetch("https://localhost:7043/api/Usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigation.navigate("Login");
      } else {
        const errorMessage = await response.text();
        alert(`Erro ao cadastrar: ${errorMessage}`);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={PoupaporcoLogo} style={styles.image} />
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Insira seu Nome:"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha:"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101026',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF', 
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#FFFFFF',
    color: '#101026',
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    borderBlockColor: '#A8A8A8',
    borderWidth: 2,
    marginTop: 2,
  },
  button: {
    width: '70%',
    height: 60,
    backgroundColor: '#6D90EB',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 1,
    resizeMode: 'center'
  }
});
