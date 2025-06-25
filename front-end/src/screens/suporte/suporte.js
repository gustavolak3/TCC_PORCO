import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Suporte() {
  const [faq, setFaq] = useState('');
  const [mensagemStatus, setMensagemStatus] = useState('');

  const enviarMensagem = async () => {
    if (faq.trim() === '') {
      Alert.alert('Erro', 'Por favor, escreva uma mensagem.');
      return;
    }

    try {
      const resposta = await fetch('https://localhost:7043/api/Faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ faq }),
      });

      if (resposta.ok) {
        setMensagemStatus('✅ Sua mensagem foi enviada com sucesso!');
        setFaq('');
      } else {
        setMensagemStatus('❌ Houve um problema ao enviar a mensagem.');
      }
    } catch (erro) {
      setMensagemStatus('❌ Não foi possível se conectar ao servidor.');
      console.error(erro);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fale com o Suporte</Text>

      <TextInput
        style={styles.textArea}
        placeholder="Digite sua reclamaçao/sugestao aqui"
        multiline
        numberOfLines={6}
        value={faq}
        onChangeText={setFaq}
      />

      <TouchableOpacity style={styles.botao} onPress={enviarMensagem}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>

      {mensagemStatus !== '' && (
        <Text style={styles.mensagemStatus}>{mensagemStatus}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textArea: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    textAlignVertical: 'top',
    marginBottom: 20,
    height: 150,
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  mensagemStatus: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
