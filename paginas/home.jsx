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

