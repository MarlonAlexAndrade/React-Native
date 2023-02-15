import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";


export default function Atividade09() {

    const [valor, setValor] = useState();

    const buscar = () =>{
        
    }
    return (
        <SafeAreaView style={style.conteudo}>
            <TextInput placeholder='Digite o numero' style={style.input} onChangeText={setValor}/>
            <TouchableOpacity style={style.botao} onPress={buscar}>
                <Text>Buscar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    conteudo: {
        backgroundColor: '#e8e8e8',
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999999',
        borderStyle: 'solid',
        margin: 10,
        padding: 12
    },
    botao: {
        borderRadius: 5,
        borderStyle: 1,
        borderColor: '#130ca6',
        borderStyle: 'solid',
        backgroundColor: '#18b82d',
        margin: 10,
        padding: 12
    }
})