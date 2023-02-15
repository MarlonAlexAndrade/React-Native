import { useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Atividade04(){

    const [valor, setValor] = useState();
    const [tabuada, setTabuada] = useState([]);

    const calcular = () => {

        // Vetor temporário
        let tabuadaTemp = [];

        // Laço
        for(let i = 0; i<11; i++){
            tabuadaTemp.push(i*valor)
        }
        // Envio a tabuadaTemp para o state tabuada
        setTabuada(tabuadaTemp);
    } 

    return(
        <SafeAreaView style={style.conteudo}>
            <TextInput placeholder='Digite um numero' style={style.input} onChangeText={setValor} />

            <TouchableOpacity style={style.botao} onPress={calcular}>
                <Text style={style.txtBotao}>Enviar</Text>
            </TouchableOpacity>

            <ScrollView>
                {tabuada.map((resultado, indice) => {
                    return(<Text style={style.tabuada} key={indice}>{resultado}</Text>);
                })}
            </ScrollView>
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
        backgroundColor: '#281fd1',
        margin: 10,
        padding: 12
    },
    txtBotao: {
        color: '#ffffff',
        textAlign: 'center'
    },
    tabuada: {
        margin: 1,
        backgroundColor: '#b3b8bd',
        fontSize: 15
    }
})