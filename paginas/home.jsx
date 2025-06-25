import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import TarefaCard from '../components/tarefaCard.jsx';
import { useState } from 'react';

const DATA = [
  { id: '1', title: 'Item 1', description: 'Descrição 1' },
  { id: '2', title: 'Item 2', description: 'Descrição 2' },
  { id: '3', title: 'Item 3', description: 'Descrição 3' },
];

export default function Home({ navigation }) {
  const [itensRiscados, setItensRiscados] = useState({});

  const toggleRiscarItem = (id) => {
    setItensRiscados((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({ item }) => {
    const riscado = itensRiscados[item.id];

    return (
      <TarefaCard
        title={item.title}
        description={item.description}
        riscado={riscado}
        onPress={() => toggleRiscarItem(item.id)}
      />
    );
  };

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
    backgroundColor: '#F5F6FA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
  },
  list: {
    marginTop: 10,
    marginBottom: 20,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 12,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});