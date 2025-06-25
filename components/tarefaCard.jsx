import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function TarefaCard({ title, description, onPress}) {
    return (
        <View>
        <TouchableOpacity style={styles.card}>
           <Text style={styles.cardTitle} >{title}</Text>
           <Text style={styles.cardDescription} >{description}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
            source={require('./download.png')}
            style={styles.image}
            onPress={onPress}
            />
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
 card: {
     backgroundColor: '#fff',
     padding: 15,
     borderRadius: 10,
     marginBottom: 10,
     borderWidth: 1,
     borderColor: '#ddd',
     shadowColor: '#000',
     shadowOffset: {width: 0, height: 2 },
     shadowRadius: 5,
     elevation: 3
    },
    cardDescription: {
     fontSize: 14,
     color: '#666',
     marginTop: 5,
    },
    cardTitle: {
     fontSize: 14,
     fontWeight: 'bold',
     color: '#333',
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 10

    }
})