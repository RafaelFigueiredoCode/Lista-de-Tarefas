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
    backgroundColor: '#FFF0F5',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#9B65E6',
    textAlign: 'center',
    marginBottom: 24,
  },
  itemtitle: {
    fontSize: 26, 
    fontWeight: '700',
    color: '#7A5FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemdescricao: {
    fontSize: 20,
    color: '#8C7EDC',
    textAlign: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: '#A89BCF',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A67FFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#C8B3F4',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#A67FFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});