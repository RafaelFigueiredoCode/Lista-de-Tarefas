import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, FlatList } from 'react-native';
import TarefaCard from './tarefaCard.js'
import { useState, useEffect } from 'react'

const DATA = [

]

export default function Home({navigation}){
    const renderItem = ({item}) => (
    <TarefaCard
    title={item.title}
    description={item.description}
    onPress={() => navigation.navigate('Details', { item })}
    />
    )}