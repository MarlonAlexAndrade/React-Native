import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";


export default function Atividade05() {

    const [lado1, setLado1] = useState();
    const [lado2, setLado2] = useState();
    const [lado3, setLado3] = useState();

    const calcular = () => {
        if (lado1 == lado2 && lado2 == lado3) {
            Alert.alert(`O seu triangulo é um Equilátero`);
        }else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            Alert.alert(`O seu triangulo é um Escaleno`);
        }else{
            Alert.alert(`Seu triangulo é um Isósceles`);
        }
    }

    return (
        <SafeAreaView style={style.conteudo}>
            <TextInput placeholder='Digite o numero do 1° lado!' style={style.input} onChangeText={setLado1} />
            <TextInput placeholder='Digite o numero do 2° lado!' style={style.input} onChangeText={setLado2} />
            <TextInput placeholder='Digite o numero do 3° lado!' style={style.input} onChangeText={setLado3} />

            <TouchableOpacity style={style.botao} onPress={calcular}>
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