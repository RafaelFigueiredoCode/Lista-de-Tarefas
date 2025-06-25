import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
    const { item } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Item</Text>

            {item ? (
                <>
                    <Text style={styles.itemtitle}>{item.title}</Text>
                    <Text style={styles.itemdescricao}>{item.descricao}</Text>
                </>
            ) : (
                <Text style={styles.message}>Nenhum formulario criado</Text>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6,
    color: '#444',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#6C63FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
