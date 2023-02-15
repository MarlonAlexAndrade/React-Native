import { useState } from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import Formulario from "./Formulario";
import Tabela from "./Tabela";


// Exportar Componente
export default function App(){

  // UseState
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [vetor, setVetor] = useState([]);

  // Função de cadastro
  const cadastrar = () => {
    let obj = {
      'nome':nome,
      'idade':idade
    }
    // Adicionar objeto no vetor
    setVetor([...vetor, obj]);

    // Mensagem
    Alert.alert('Cliente cadastrado com sucesso!');
    
    // Limpar useState
    setNome('');
    setIdade('');
  }

  // Retornar a estrtuura do componente
  return(
    <SafeAreaView>
      <Formulario nome={nome} idade={idade} funcaoNome={setNome} funcaoIdade={setIdade} cadastrar={cadastrar} />
      <Tabela dados={vetor} />
    </SafeAreaView>
  )
}