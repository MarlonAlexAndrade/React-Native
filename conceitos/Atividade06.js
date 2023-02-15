import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

export default function Atividade06(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);

    const calcular = () => {

        let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

        if(media >= 7){
            Alert.alert(`Parabéns voçe foi aprovado sua nota foi: ${media}`);
        }else if(media >= 5 ){
            Alert.alert(`Voçe foi esta em exame sua nota foi: ${media}`);
        }else{
            Alert.alert(`Infelizmente você foi reprovado sua nota foi ${media}`);
        }
    }

    return(
        <SafeAreaView style={style.conteudo}>
            <TextInput placeholder='Digite o nota do 1° lado!' style={style.input} onChangeText={setNota1} />
            <TextInput placeholder='Digite o nota do 2° lado!' style={style.input} onChangeText={setNota2} />
            <TextInput placeholder='Digite o nota do 3° lado!' style={style.input} onChangeText={setNota3} />

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