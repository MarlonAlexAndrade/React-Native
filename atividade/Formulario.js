import { Button, StyleSheet, Text, TextInput, View } from "react-native";


// Componente
export default function Formulario({nome, nota1, nota2, nota3, funcaoNome, funcaoNota1, funcaoNota2, funcaoNota3, cadastrar}){

    // Retornar a estrutura do componente
    return(
        <View style={estilo.conteudo}>
            <TextInput placeholder='Nome' style={estilo.input} onChangeText={funcaoNome} value={nome}/>
            <TextInput placeholder='Nota1' style={estilo.input} onChangeText={funcaoNota1} value={nota1} />
            <TextInput placeholder='Nota2' style={estilo.input} onChangeText={funcaoNota2} value={nota2} />
            <TextInput placeholder='Nota3' style={estilo.input} onChangeText={funcaoNota3} value={nota3} />
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