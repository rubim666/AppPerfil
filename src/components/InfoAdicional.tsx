{ /*Componente de classe com mais props - InfoAdicional
Objetivo: Praticar a criação de outro componente de classe com props diferentes.

Enunciado:
Crie um componente de classe InfoAdicional que receba as props idade (number) e cidade (string).

O componente deve exibir a idade e a cidade dentro de uma View com:

Padding horizontal: 10px
Margem vertical: 5px
Texto com fonte 14px, cor #555

No App.tsx, abaixo de cada CardUsuario, adicione um InfoAdicional correspondente (por exemplo, para o primeiro usuário: idade 30, cidade "São Paulo").

Use a ScrollView para manter a rolagem.

Dicas:

Lembre-se de tipar as props.

Para exibir a idade, use {idade} diretamente.*/ }

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type InfoAdicionalProps = {
    idade: number;
    cidade: string;
}

class InfoAdicional extends Component<InfoAdicionalProps> {
    render() {
        const { idade, cidade } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Idade: {idade}</Text>
                <Text style={styles.texto}>Cidade: {cidade}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    texto: {
        fontSize: 14,
        color: '#555',
    }
});

export default InfoAdicional;