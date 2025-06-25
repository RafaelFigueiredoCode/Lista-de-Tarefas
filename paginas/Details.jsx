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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    // estilização da linha 29 até a 42 eu fiz vic,pode começar o resto a partir daqui e modificar oq a fiz a vontase,só fiz de base.//
})