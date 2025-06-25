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
    padding: 20
  },
  titulo: {
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5
  },
  listatitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },
  itemtitle: {
    fontWeight: 'bold'
  }
});

export default AddTask;
