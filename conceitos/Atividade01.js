import { useState } from "react";
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


// Componente
export default function Atividade01() {

    // useState
    const [nome, setNome] = useState('');

    // Função de concatenação
    const acao = () => {
        // Alert('Boa noite '+ nome);
        Alert.alert(`Boa noite ${nome}`);
    }

    // Estrutura do app
    return (
        <SafeAreaView style={estilos.conteudo}>

            <View style={estilos.centralizar}>
                <Image source={require('./imagens/01.png')} style={estilos.imagem} />
            </View>

            <TextInput style={estilos.input} placeholder='Informe o seu nome' onChangeText={setNome} />

            <View style={estilos.centralizar}>
                <TouchableOpacity style={estilos.botao} onPress={acao}>
                    <Text style={estilos.txtBotao}>Clique aqui</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

// CSS
const estilos = StyleSheet.create({
    conteudo: {
        backgroundColor: '#58585c',
        flex: 1,
    },
    centralizar: {
        alignItems: 'center'
    },
    imagem: {
        width: 200,
        height: 200
    },
    input: {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#e8e8e8',
        borderWidth: 1
    },
    botao: {
        borderRadius: 5,
        borderStyle: 1,
        borderColor: '#130ca6',
        borderStyle: 'solid',
        backgroundColor:'#ab8105',
        margin: 10,
        padding: 12

    },
    txtBotao: {
        color: '#fff',
        textAlign:'center'
    }

});