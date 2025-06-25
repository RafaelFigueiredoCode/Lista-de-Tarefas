import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import TarefaCard from '../components/tarefaCard.jsx';
import { useState, useEffect } from 'react';

const DATA = [{id: '1', title: 'Item 1'},
    {id: '1', title: 'Item 1'},
    {id: '1', title: 'Item 1'},
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <TarefaCard title={item.title} description={item.description} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.title}>Lista de Itens</Text>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Meus Itens</Text>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', { mensagem: 'Olá do Home!' })
        }
      >
        <Text style={styles.buttonText}>Ir para detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    marginHorizontal: 76,
  },
  list: {
    marginVertical: 10,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});