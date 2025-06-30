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
      <TarefaCard
        title={item.title}
        descricao={item.descricao}
        riscado={riscado}
        onPress={() => toggleRiscarItem(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.title}>Lista de Itens</Text>
      onTaskAdded={handleTaskAdded}

      <FlatList
        data={tarefas}
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
          navigation.navigate('Form', { onAdd: handleTaskAdded })
        }
      >
        <Text style={styles.buttonText}> Quer Adicionar mais uma Tarefa?</Text>
      </TouchableOpacity>
    </View>
    
  );
}

<<<<<<< Updated upstream
export default function Home({ navigation, tarefas }) {
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { tarefa: item })}
        >
          <TarefaCard
            title={item.title}
            description={item.descricao}
            riscado={riscado}
            onPress={() => toggleRiscarItem(item.id)}
          />
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tela Inicial</Text>
        <FlatList
          data={tarefas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          ListHeaderComponent={() => (
            <Text style={styles.listHeader}>Minhas Tarefas</Text>
          )}
        />
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#9B65E6',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#AB88F9',
    textAlign: 'center',
    marginBottom: 18,
  },
  list: {
    marginTop: 12,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7D6AFF',
    marginBottom: 14,
    paddingLeft: 8,
  },
  item: {
    backgroundColor: '#F3E9FF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#A67FFF',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#5B3B8B',
  },
  itemDescription: {
    fontSize: 15,
    color: '#866FC1',
    marginTop: 4,
  },
  icon: {
    marginRight: 14,
  },
  button: {
    backgroundColor: '#A67FFF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
    width: '100%',
    shadowColor: '#BFA1FF',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 17,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
=======
>>>>>>> Stashed changes
