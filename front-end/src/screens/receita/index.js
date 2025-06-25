import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Receita() {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');
  const [idUsuario, setIdUsuario] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('id_usuario');
    if (id) {
      setIdUsuario(parseInt(id));
    } else {
      alert('ID do usuário não encontrado. Faça login novamente.');
    }
  }, []);

  async function enviarTransacao() {
    const tipo = "receita"; 

    if (!idUsuario || !descricao || !data || !valor) {
      alert('Preencha todos os campos.');
      return;
    }

    const transacao = {
      id_usuario: idUsuario,
      tipo,
      descricao,
      data,
      valor,
    };

    try {
      const response = await fetch('https://localhost:7043/api/transacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transacao),
      });

      if (response.ok) {
        alert('Receita enviada com sucesso!');
        setDescricao('');
        setData('');
        setValor('');
      } else {
        alert('Erro ao enviar receita.');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro de conexão com o servidor.');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição (6 linhas)"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={6}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (ex: 2025-06-25)"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (ex: 99.99)"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={enviarTransacao}>
        <Text style={styles.buttonText}>Enviar Receita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
