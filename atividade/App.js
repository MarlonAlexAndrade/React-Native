import { useState } from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import Formulario from "./Formulario";
import Tabela from "./Tabela";


// Exportar Componente
export default function App(){

  // UseState
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [vetor, setVetor] = useState([]);

  // Função de cadastro
  const cadastrar = () => {
     (nota1+nota2+nota3/3)
    let obj = {
      'nome':nome,
      'media':((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3)
    }
    // Adicionar objeto no vetor
    setVetor([...vetor, obj]);

    // Mensagem
    Alert.alert('Cliente cadastrado com sucesso!');
    
    // Limpar useState
    setNome('');
    setNota1('');
    setNota2('');
    setNota3('');
  }

  // Retornar a estrutura do componente
  return(
    <SafeAreaView>
      <Formulario nome={nome} nota1={nota1} nota2={nota2} nota3={nota3} funcaoNome={setNome} funcaoNota1={setNota1} funcaoNota2={setNota2} funcaoNota3={setNota3} cadastrar={cadastrar} />
      <Tabela dados={vetor} />
    </SafeAreaView>
  )
}