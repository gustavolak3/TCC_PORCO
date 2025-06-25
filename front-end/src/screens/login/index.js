// 

import React, { useState } from 'react';

import PoupaporcoLogo from '../../../assets/Poupaporco_logo.png';
import CriarConta from '../cadastro/cadastro.js';
 


import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function Login({navigation}) 
{
const [nome, setNome] = useState('');
const [senha, setSenha] = useState('');


  function handleCadastro()
  {
    navigation.navigate("CriarConta")
  }
  function handleHome()
  {
    navigation.navigate("Home")
  }
async function efetuarLogin() {
  try {
  let id_usuario = localStorage.getItem('id_usuario');


  let tipo = "despesas"
  const dados = { nome:  nome, senha: senha};

 // const dados = { id_usuario: id_usuario, tipo: tipo, descricao: descricao, valor: valor, data: datalanca};
  const response = await fetch("https://localhost:7043/api/Usuario/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Login bem-sucedido:", data);

      localStorage.setItem('id_usuario', data.idusuario);

      console.log(localStorage.getItem('id_usuario'));

      navigation.navigate("Home");
    }
    else {
      alert("Erro ao efetuar login. Verifique suas credenciais.", dados);
    }
  }
 catch (error) {
    console.error('Erro ao efetuar login:', error);
  }
  }
 

  return (
    
    <View style={styles.container}>
      <Image source={PoupaporcoLogo} style={styles.image} />

    
      <Text style={styles.title}>Login</Text>
      
      <TextInput style={styles.input} placeholder="Digite seu nome:" onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Digite sua senha:"  onChangeText={setSenha} />
      
      <TouchableOpacity style={styles.button} onPress={efetuarLogin}>
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>
  
 <Text style={styles.text2}>Não tem uma conta? </Text>
 <TouchableOpacity style={styles.button} onPress={handleCadastro}>
  <Text style={styles.textButton}>Clique aqui!</Text>
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
    marginBottom: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    marginbottom: 1,
    resizeMode: 'center'
    
    
  },
  container2: {
    width: '80%', 
    padding: 15, 
    backgroundColor: '#579ACF', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20, 
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    
  }
}
);
  