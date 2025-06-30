import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function TarefaCard({ title, description, riscado, onPress, onPressDetails }) {

   const [imgSrc, setImgSrc] = useState(require('./download.png'));

  const alternarImagem = () => {
    setImgSrc((prev) =>
      prev === require('./download.png')
        ? require('./x.png') 
        : require('./download.png')
    );
  };

  return (
  <View>
    <TouchableOpacity style={styles.card} onPress={onPressDetails}>
      <Text style={[styles.cardTitle, riscado && styles.riscado]}>{title}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { onPress(); alternarImagem(); }}>
            <Image 
            source={imgSrc}
            style={styles.image}
            />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
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
  riscado: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 10
  }
});