import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import TarefaCard from '../components/tarefaCard.jsx';
import { useState } from 'react';
import Form from './addTask.jsx';

export default function Home({ navigation }) {
  const [itensRiscados, setItensRiscados] = useState({});
  const [tarefas, setTarefas] = useState([]);

  const handleTaskAdded = (novaTarefa) => {
    setTarefas((prev) => [...prev, novaTarefa]);
  };

  const toggleRiscarItem = (id) => {
    setItensRiscados((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({ item }) => {
    const riscado = itensRiscados[item.id];

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { tarefa: item })}
      >
        <TarefaCard
          title={item.title}
          descricao={item.descricao}
          riscado={riscado}
          onPress={() => toggleRiscarItem(item.id)}
          onPressDetails={() => navigation.navigate('Details', { item } )}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.title}>Lista de Itens</Text>

      <FlatList
        data={tarefas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Meus Itens</Text>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Form', { onAdd: handleTaskAdded })
        }
      >
        <Text style={styles.buttonText}>Quer Adicionar mais uma Tarefa?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7e57c2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#9575cd',
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    color: '#512da8',
    textDecorationLine: 'underline',
    marginBottom: 40,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#b39ddb',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});