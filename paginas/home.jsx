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
          
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.title}>Lista de Itens</Text>

      
      <Form onTaskAdded={handleTaskAdded} />

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
    backgroundColor: '#FFF8FB',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#9B65E6',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#AB88F9',
    textAlign: 'center',
    marginBottom: 18,
  },
  list: {
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 16,
  },
  listHeader: {
    fontSize: 24,
    fontWeight: '600',
    color: '#7D6AFF',
    marginBottom: 14,
    paddingLeft: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A67FFF',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
    width: '90%',
    shadowColor: '#BFA1FF',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 19,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
});