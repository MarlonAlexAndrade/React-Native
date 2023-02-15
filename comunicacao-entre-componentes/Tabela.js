import { ScrollView, StyleSheet, Text } from "react-native";

// Exportar Componente
export default function Tabela({dados}){

    // Retornar estrutura do componente
    return(
        <ScrollView>
            {dados.map((obj, indice)=> {
                return(<Text style={estilo.linha} key={indice}>{obj.nome} | {obj.idade}</Text>)
            })}
        </ScrollView>
    )
}

const estilo = StyleSheet.create({

})
