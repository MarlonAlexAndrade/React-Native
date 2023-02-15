import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade02() {

    // UseSate
    const [valor, setValor] = useState('');
    const [pagamento, setPagamento] = useState('');

    // Função calcular
    const calcular = () => {
        if (valor >= 100 && pagamento == '0') {
            Alert.alert(`Desconto de 10%, valor a pagar: ${valor * 0.9}`);
        } else {
            Alert.alert(`Pagamento integral de R$ ${valor}`)
        }
    }

    // Retornar estrutura gráfica
    return (
        <SafeAreaView style={estilos.conteudo}>
            <View>
                <Image source={require('./imagens/02.png')} style={estilos.imagem} />
            </View>
            <TextInput placeholder='Valor da compra' style={estilos.input} onChangeText={setValor} />

            <View style={estilos.picker}>
                <Picker
                    selectedValue={pagamento}
                    onValueChange={pgto => { setPagamento(pgto) }}
                >

                    <Picker.Item label='Á vista' value='0' />
                    <Picker.Item label='Á prazo' value='1' />
                </Picker>

            </View>

            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.txtBotao}>Enviar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

// CSS
const estilos = StyleSheet.create({
    conteudo: {
        backgroundColor: '#e8e8e8',
        flex: 1,
        justifyContent: 'center'
    },
    imagem: {
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        height: 300,
        margin: 35
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999999',
        borderStyle: 'solid',
        margin: 10,
        padding: 12
    },
    picker: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999999',
        borderStyle: 'solid',
        margin: 10
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

})