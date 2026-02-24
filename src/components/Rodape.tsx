import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Rodape = {
    mensagem: string;
};

const Rodape: React.FC<Rodape> = ({ mensagem }) => {
    return (
        <View style={styles.container}>
            <Text style ={styles.texto}>
                {mensagem}
            </Text>
        </View>
    )};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ccc',
        padding: 10,
        alignItems: 'center',
    },
    texto: {

    },

});

export default Rodape;