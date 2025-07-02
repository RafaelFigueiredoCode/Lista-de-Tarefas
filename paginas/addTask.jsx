import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function Form({ route, navigation }) {
  const [title, setTitle] = useState('');
  const [descricao, setDescricao] = useState('');

  const { onAdd } = route.params; 

  const adicionarTarefa = () => {
    if (title.trim() === '' || descricao.trim() === '') return;

    const novaTarefa = {
      id: Date.now().toString(),
      title,
      descricao,
    };

    if (onAdd) onAdd(novaTarefa); 

    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Digite o título"
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição"
      />
      <Button style={styles.button} title="Adicionar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#A67FFF',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#9C89B8',
  },
  input: {
    backgroundColor: '#F8F5FF',
    borderColor: '#E0D7F5',
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    color: '#5E4B8B',
  },
  listatitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20,
    color: '#A67FFF',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#F3E9FF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#CDA4FF',
    shadowColor: '#A67FFF',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  itemtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5B3B8B',
    marginBottom: 6,
  },
  button: {
     backgroundColor: '#b39ddb' 
  }
});