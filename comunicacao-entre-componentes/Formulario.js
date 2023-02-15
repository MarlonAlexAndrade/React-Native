import { Button, StyleSheet, Text, TextInput, View } from "react-native";


// Componente
export default function Formulario({nome, idade, funcaoNome, funcaoIdade, cadastrar}){

    // Retornar a estrutura do componente
    return(
        <View style={estilo.conteudo}>
            <TextInput placeholder='Nome' style={estilo.input} onChangeText={funcaoNome} value={nome}/>
            <TextInput placeholder='Idade' style={estilo.input} onChangeText={funcaoIdade} value={idade} />
            <Button title='Cadastrar' onPress={cadastrar}/>
        </View>
    )
}

// CSS
const estilo = StyleSheet.create({
    conteudo:{
        padding: 20,
        paddingTop: 100
    },
    input: {
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000',
        marginBottom: 10,
        padding:10
    }
})