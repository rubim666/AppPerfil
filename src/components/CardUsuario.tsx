{/*Exercício 2: Componente de classe com props - CardUsuario
Objetivo: Criar um componente de classe que receba props e as exiba com estilização.

Enunciado:
Crie um componente de classe CardUsuario que receba as props nome (string) e email (string).

O componente deve exibir o nome e o email dentro de um card com:

Fundo: #f9f9f9
Padding: 15px
Margem: 10px
Borda arredondada: 8px
Borda sólida 1px #ddd
Nome com fonte 18px, negrito, cor #333
Email com fonte 14px, cor #666, margem superior 5px

No App.tsx, adicione três instâncias de CardUsuario com diferentes nomes e emails, posicionadas entre o Cabecalho e o Rodape.

Para permitir rolagem caso os cards ultrapassem a tela, envolva-os em uma ScrollView.*/}

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CardUsuarioProps = {
    nome: string;
    email: string;
}

class CardUsuario extends Component<CardUsuarioProps> {
    render() {
        const { nome, email } = this.props;
        return (
            <View style={styles.card}>
                <Text style={styles.nome}>Nome: {nome}</Text>
                <Text style={styles.email}>E-mail: {email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        margin: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});

export default CardUsuario;