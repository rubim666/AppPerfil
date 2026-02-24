import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Rodape from './src/components/Rodape';
import Perfil from './src/components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho mensagem="Meu app de perfil" />
      <ScrollView>
        <Perfil nome="eu" email = "eu@email.com" idade={30} cidade="São Paulo" />
      </ScrollView>
      <Rodape mensagem="© 2025 - Meu App" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
