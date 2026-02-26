{/**Exercício 5: Criando um componente funcional Amigo e incorporando ao Perfil
Objetivo: Adicionar uma seção de amigos dentro do Perfil, utilizando um novo componente funcional.

Enunciado:
Crie um componente funcional Amigo que receba as props nome (string) e idade (number). Ele deve exibir nome e idade lado a lado em uma linha com:

Fundo: #e1f5fe
Padding: 8px
Margem vertical: 4px
Borda arredondada: 5px
Layout em linha: flexDirection: 'row', justifyContent: 'space-between'
Nome: fonte 16px, cor #0277bd
Idade: fonte 14px, cor #01579b

Modifique o componente Perfil (classe) para que, além das props anteriores, receba também uma prop amigos que é um array de objetos { nome: string; idade: number }. Defina o tipo apropriado.

Dentro do Perfil, após InfoAdicional, adicione um título "Amigos:" (estilizado com fonte 16px, negrito, cor #333, margem superior 10px) e, em seguida, renderize um componente Amigo para cada amigo do array. Use o método map para isso.

No App.tsx, ao criar os perfis, inclua uma lista de amigos (pelo menos dois amigos por perfil). Exemplo:

tsx
<Perfil
  nome="João Silva"
  email="joao@email.com"
  idade={30}
  cidade="São Paulo"
  amigos={[
    { nome: 'Ana', idade: 28 },
    { nome: 'Pedro', idade: 32 }
  ]}
/>
Garanta que a ScrollView no App permita rolar todos os perfis.

Dicas:

Defina um tipo auxiliar para o objeto amigo, por exemplo: type AmigoType = { nome: string; idade: number }.

No Perfil, use this.props.amigos.map((amigo, index) => <Amigo key={index} nome={amigo.nome} idade={amigo.idade} />).

Lembre-se de importar Amigo no arquivo do Perfil. */}

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AmigoProps = {
    nome: string;
    idade: number;
}