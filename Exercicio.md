Lista de Exercícios - Aula Prática de React Native com Expo
Exercício 1: Configuração do projeto e primeiro componente funcional
Objetivo: Criar o projeto e implementar componentes funcionais simples (Cabecalho e Rodape).

Enunciado:
Crie um novo projeto Expo com TypeScript chamado AppPerfil.

Organize a estrutura de pastas: crie a pasta src e dentro dela components.

Crie um componente funcional Cabecalho que exiba o texto "Meu App de Perfil" dentro de uma View. Estilize com fundo roxo (#6200ee), padding de 20px, texto branco, fonte 22px e negrito, alinhado ao centro.

Crie um componente funcional Rodape que exiba "© 2025 - Meu App" com fundo cinza claro (#ccc), padding 10px, texto centralizado.

No App.tsx, importe ambos e exiba-os dentro de uma SafeAreaView, um acima do outro.

Execute o app no Expo Go e verifique se os componentes aparecem corretamente.

Dicas:

Use StyleSheet.create para os estilos.

Para centralizar texto, use textAlign: 'center' ou alignItems: 'center' na View.

Lembre-se de exportar os componentes com export default.

Exercício 2: Componente de classe com props - CardUsuario
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

Para permitir rolagem caso os cards ultrapassem a tela, envolva-os em uma ScrollView.

Dicas:

Defina o tipo das props usando type CardUsuarioProps = { nome: string; email: string }.

No método render(), use this.props para acessar as props.

Não se esqueça de importar ScrollView do 'react-native'.

Exercício 3: Componente de classe com mais props - InfoAdicional
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

Para exibir a idade, use {idade} diretamente.

Exercício 4: Composição de componentes - Criando o Perfil
Objetivo: Combinar CardUsuario e InfoAdicional em um componente Perfil (classe) que recebe todas as props necessárias.

Enunciado:
Crie um componente de classe Perfil que receba as props: nome, email, idade, cidade.

Dentro do render(), utilize CardUsuario e InfoAdicional para exibir as informações, passando as props recebidas.

Adicione um estilo ao container do Perfil:

Margem vertical: 10px
Fundo branco
Borda arredondada: 10px
Padding: 5px
Sombra: utilize shadowColor, shadowOffset, shadowOpacity, shadowRadius para iOS e elevation para Android.

No App.tsx, substitua os pares de CardUsuario e InfoAdicional por três instâncias de Perfil, cada uma com seus próprios dados.

Dicas:

O componente Perfil atua como container, organizando a disposição dos filhos.

A sombra pode ser testada; valores comuns: shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3.

Exercício 5: Criando um componente funcional Amigo e incorporando ao Perfil
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

Lembre-se de importar Amigo no arquivo do Perfil.

Exercício 6 (Desafio): Estilização condicional com props opcionais
Objetivo: Adicionar uma prop opcional destaque ao componente Amigo para alterar sua aparência.

Enunciado:
Modifique o componente Amigo para que ele possa receber uma prop opcional destaque?: boolean.

Se destaque for true, o fundo do amigo deve ser dourado (#FFD700) e o texto em negrito (ou apenas o nome em negrito). Caso contrário, mantenha o estilo original.

No Perfil, torne o primeiro amigo de cada lista como destaque (passe destaque={true} para ele).

Dica: utilize um array de estilos condicional: style={[styles.container, destaque && styles.destaque]}.

Dicas:

No arquivo de estilos, crie uma classe .destaque com as alterações desejadas.

Lembre-se de que a prop é opcional, então pode não ser passada.

Exercício 7 (Refatoração e organização final)
Objetivo: Revisar a estrutura do projeto e garantir que todos os componentes estejam corretamente organizados e estilizados.

Enunciado:
Revise todos os componentes criados: Cabecalho, Rodape, CardUsuario, InfoAdicional, Perfil, Amigo.

Verifique se as exportações/importações estão corretas.

Confira se a tipagem TypeScript está sendo usada em todos os componentes (props tipadas).

Execute o app e verifique se a interface está agradável e sem erros.

Experimente alterar algumas cores ou tamanhos para personalizar o app.