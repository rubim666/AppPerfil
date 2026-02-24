import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definindo o tipo das props que o componente espera receber

type Cabecalho = {
    mensagem: string;
};

// Componente funcional que recebe as props e retorna a saudação personalizada

const Cabecalho: React.FC<Cabecalho> = ({ mensagem }) => {
    return (
        <View style={styles.container}>
            <Text style ={styles.texto}>
                {mensagem}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6200ee',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    texto: {
        fontFamily: 'verdana',
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Cabecalho;