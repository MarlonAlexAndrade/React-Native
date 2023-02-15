import { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade01(){

    // useState
    const [candidato1, setCandidato1] = useState(0);
    const [candidato2, setCandidato2] = useState(0);
    const [candidato3, setCandidato3] = useState(0);
    const [candidato4, setCandidato4] = useState(0);

    // Função de contabilização
    const acao = (candidato) => {
        
        let voto = 0;

        switch(candidato){
            case 'candidato1':
                voto = candidato1 + 1;
                setCandidato1(voto);
            break;

            case 'candidato2':
                voto = candidato2 + 1;
                setCandidato2(voto);
            break;

            case 'candidato3':
                voto = candidato3 + 1;
                setCandidato3(voto);
            break;

            case 'candidato4':
                voto = candidato4 + 1;
                setCandidato4(voto);
            break;
        }

    }


    // Função de situação
    const exibirResultado = (cand1, cand2, cand3, cand4) => {

        // Descobrir o maior número de votos
        let maiorVoto = cand1;

        if(cand2 > maiorVoto){
            maiorVoto = cand2;
        }

        if(cand3 > maiorVoto){
            maiorVoto = cand3;
        }

        if(cand4 > maiorVoto){
            maiorVoto = cand4;
        }

        // Quais os candidatos com o maior voto
        let qtd = 0;
        let nomes = [];

        if(cand1 != 0 || cand2 != 0 || cand3 != 0 || cand4 != 0){
            if(parseInt(candidato1) == maiorVoto){
                qtd++;
                nomes.push('Osvaldo');
            }
    
            if(parseInt(candidato2) == maiorVoto){
                qtd++;
                nomes.push('Henrique');
            }
    
            if(parseInt(candidato3) == maiorVoto){
                qtd++;
                nomes.push('Vinícius');
            }
    
            if(parseInt(candidato4) == maiorVoto){
                qtd++;
                nomes.push('Marlon');
            }
        }
        

        
        // Frase
        if(qtd == 1){
            return (`O vencedor da votação é ${nomes[0]}`);
        }else if(qtd >1){
            let listaNomes = '';

            for(let i=0; i<nomes.length; i++){
                listaNomes += nomes[i] + ' ';
            }
            return (`Votação empatada entre os candidatos ${listaNomes}`);
        }else{
            return 'Nenhum voto efetuado';
        }

    }

    // Estrutura do app
    return(
        <SafeAreaView style={estilos.conteudo}>
            
            <View style={estilos.centralizar}>
                <Image source={require('./imagens/08.png')} style={estilos.imagem} />
            </View>

            <View style={estilos.agruparBotoes}>
                <TouchableOpacity style={estilos.botao} onPress={() => {acao('candidato1')}}>
                    <Text style={estilos.txtBotao}>Osvaldo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.botao} onPress={() => {acao('candidato2')}}>
                    <Text style={estilos.txtBotao}>Henrique</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => {acao('candidato3')}}>
                    <Text style={estilos.txtBotao}>Vinícius</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.botao} onPress={() => {acao('candidato4')}}>
                    <Text style={estilos.txtBotao}>Marlon</Text>
                </TouchableOpacity>
            </View>

            <Text style={estilos.situacao}>{exibirResultado(candidato1, candidato2, candidato3, candidato4)}</Text>
            <Text style={estilos.situacao}>Osvaldo {candidato1}</Text>
            <Text style={estilos.situacao}>Henrique {candidato2}</Text>
            <Text style={estilos.situacao}>Vinícius {candidato3}</Text>
            <Text style={estilos.situacao}>Marlon {candidato4}</Text>
        </SafeAreaView>
    )
}

// CSS
const estilos = StyleSheet.create({
    conteudo:{
        flex:1,
        justifyContent:'center'
    },
    centralizar:{
        alignItems:'center'
    },
    imagem:{
        width:200,
        height:200,
        marginBottom:30
    },
    botao:{
        backgroundColor:'#155413',
        borderRadius:5,
        padding:10,
        width:200,
        marginTop:10
    },
    txtBotao:{
        color:'#fff',
        textAlign:'center'
    },
    agruparBotoes:{
        alignItems:'center'
    },
    situacao:{
        textAlign:'center',
        fontWeight:'bold',
        marginTop:30,
        fontSize:20
    }
});
