import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"


export default function Atividade07(){

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [numero3, setNumero3] = useState(0);

    const calcular = () => {
        
        if(numero1 < numero2 && numero1 < numero3){
            Alert.alert(`O numero menor é ${numero1}`)
        } else if (numero2 < numero1 && numero2 < numero3){
            Alert.alert(`O numero menor é ${numero2}`)
        }else{
            Alert.alert(`O menor numero é ${numero3}`)
        }
    }

    return(
        <SafeAreaView style={style.conteudo}>
            <TextInput placeholder='Digite o nota do 1° lado!' style={style.input} onChangeText={setNumero1} />
            <TextInput placeholder='Digite o nota do 2° lado!' style={style.input} onChangeText={setNumero2} />
            <TextInput placeholder='Digite o nota do 3° lado!' style={style.input} onChangeText={setNumero3} />

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