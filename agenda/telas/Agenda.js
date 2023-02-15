import { useState } from "react";
import { Text, View } from "react-native";
import { Button, DataTable, TextInput } from "react-native-paper";

// COmponente
export default function Agenda({route}) {

    // useState
    const [agenda, setAgenda] = useState(
        [
            { 'nome': 'Aline',    'Telefone': 988556611, 'id': 0 },
            { 'nome': 'Bruno',    'Telefone': 988557512, 'id': 0 },
            { 'nome': 'Carla',    'Telefone': 988777554, 'id': 1 },
            { 'nome': 'Daniel',   'Telefone': 999988844, 'id': 0 },
            { 'nome': 'Ellen',    'Telefone': 982245777, 'id': 1 },
            { 'nome': 'Fernando', 'Telefone': 928678278, 'id': 1 },
            { 'nome': 'Gabriela', 'Telefone': 922287855, 'id': 0 },
            { 'nome': 'Henrique', 'Telefone': 985554443, 'id': 0 }
        ]);

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const cadastrar = () =>{

        let obj = {
            'nome': nome,
            'Telefone': telefone 
        }

        setAgenda([...agenda, obj]);
    }

    // Retorno
    return (
        <View>

            <View style={{marginTop:50}}>
                <TextInput onChangeText={setNome} placeholder="nome" mode="outlined" />
                <TextInput onChangeText={setTelefone} placeholder="Telefone" mode="outlined" />
                <Button mode="contained" onPress={cadastrar} style={{marginTop:10}}>Cadastrar</Button>
            </View>

            <DataTable style={{marginTop:30}}>
                <DataTable.Header>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Telefone</DataTable.Title>
                </DataTable.Header>

                {agenda.filter((obj)=>{return obj.id == route.params.id}).map((obj, indice) => {
                    return(
                        <DataTable.Row>
                            <DataTable.Cell>{obj.nome}</DataTable.Cell>
                            <DataTable.Cell>{obj.Telefone}</DataTable.Cell>
                            <DataTable.Cell><Button>Selecionar</Button></DataTable.Cell>
                        </DataTable.Row>
                    )
                })}
            </DataTable>
        </View>
    )
}