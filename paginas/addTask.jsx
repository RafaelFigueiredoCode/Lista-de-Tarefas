import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';

const AddTask = ({ onTaskAdded }) => {
  const [title, settitle] = useState('');
  const [descricao, setDescricao] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (title.trim() === '' || descricao.trim() === '') return;

    const novaTarefa = {
      id: Date.now().toString(),
      title,
      descricao
    };

    const novaLista = [...listaTarefas, novaTarefa];
    setListaTarefas(novaLista);
    settitle('');
    setDescricao('');
    if (onTaskAdded) onTaskAdded(novaTarefa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={settitle}
        placeholder="Digite o título da tarefa"
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição da tarefa"
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />

      <Text style={styles.listatitle}>Tarefas Adicionadas:</Text>
      <FlatList
        data={listaTarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemtitle}>{item.title}</Text>
            <Text>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },
  listatitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#444',
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#6C63FF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  itemtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
});

export default AddTask;
