import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, FlatList } from 'react-native';
import TarefaCard from '../components/tarefaCard.jsx'
import { useState, useEffect } from 'react'

const DATA = [

]

export default function Home({navigation}){
    const renderItem = ({item}) => (
    <TarefaCard
    title={item.title}
    description={item.description}
    />
    )
    return(
        <View style= {styles.container}>
            <Text style= {styles.title}>Tela Inicial</Text>
            <Text style= {styles.title}>Lista de Items</Text>
            HeaderListComponent={() => <Text style={styles.listHeader}>Meus Itens</Text>}
            <FlatList
            data= {DATA}
            renderItem= {renderItem}
            keyExtractor= {(item) => item.id}
            style={styles.list}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            />
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', {mensagem: 'Olá do Home!' })}
            >
                <Text style= {styles.buttonText}>Ir para detalhes</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        marginHorizontal: 76,
    },
})