import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";


export default function Atividade03() {

    const [valor, setValor] = useState();

    const converter = () => {
        Alert.alert(`Valor em dólar será de ${valor / 5.06}`);
    }

    return (
        <SafeAreaView style={style.conteudo}>
            <TextInput placeholder='Digite o valor' style={style.input} onChangeText={setValor} />

            <TouchableOpacity style={style.botao} onPress={converter}>
                <Text style={style.txtBotao}>Enviar</Text>
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
        backgroundColor: '#281fd1',
        margin: 10,
        padding: 12
    },
    txtBotao: {
        color: '#ffffff',
        textAlign: 'center'
    }
})