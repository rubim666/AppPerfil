import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardUsuario from './CardUsuario';
import InfoAdicional from './InfoAdicional';

type PerfilProps = {
    nome: string;
    email: string;
    idade: number;
    cidade: string;
}

class Perfil extends Component<PerfilProps> {
    render() {
        const { nome, email, idade, cidade } = this.props;
        return (
            <View style={styles.container}>
                <CardUsuario nome={nome} email={email} />
                <InfoAdicional idade={idade} cidade={cidade} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    }


});

export default Perfil;