// Importação de módulos
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


// Componente
export default function Inicio({navigation}) {

    // useState
    const [formularioLoginAtivo, setFormularioLoginAtivo] = useState(true);
    const [nomeCriarConta, setNomeCriarConta] = useState('');
    const [senhaCriarConta, setSenhaCriarConta] = useState('');
    const [vetor, setVetor] = useState([]);
    const [nomeLogin, setNomeLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');

    // Função criar conta
    const criarConta = () => {

        // Criar objeto usuário
        let obj = {
            'nome': nomeCriarConta,
            'senha': senhaCriarConta
        }

        // Cadastrar o usuário no vetor
        setVetor([...vetor, obj]);

        // Voltar para a tela de login
        setFormularioLoginAtivo(true);
    }

    // Função para efetuar o login
    const logar = () => {

        // Verificar se o usuário informado existe no vetor
        let posicao = vetor.findIndex(obj => {
            return obj.nome == nomeLogin && obj.senha == senhaLogin
        });

        // Condicional
        if (posicao == -1) {
            Alert.alert('Usuário não encontrado')
        } else {
            navigation.navigate('Agenda', {id:posicao});
        }
    }

    // Retornar estrutura
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            {formularioLoginAtivo === true ?

                <View style={estilos.formulario}>

                    <Text>{JSON.stringify(vetor)}</Text>

                    <Image source={require('./imagens/login.png')} style={estilos.imagem} />

                    <TextInput onChangeText={setNomeLogin} style={estilos.input} placeholder="Nome de usuário" right={<TextInput.Icon icon="account" />} />
                    <TextInput onChangeText={setSenhaLogin} style={estilos.input} placeholder="Senha" secureTextEntry={true} right={<TextInput.Icon icon="eye" />} />
                    <Button onPress={logar} style={estilos.botaoLogar} mode="contained">Logar</Button>
                    <Button style={estilos.botaoCriarConta} mode="contained" onPress={() => { setFormularioLoginAtivo(false) }} >Criar Conta</Button>
                </View>
                :
                <View style={estilos.formulario}>
                    <Image source={require('./imagens/usuario.png')} style={estilos.imagem} />

                    <TextInput onChangeText={setNomeCriarConta} style={estilos.input} placeholder="Nome de usuário" right={<TextInput.Icon icon="account" />} />
                    <TextInput onChangeText={setSenhaCriarConta} style={estilos.input} placeholder="Senha" secureTextEntry={true} right={<TextInput.Icon icon="eye" />} />
                    <Button style={estilos.botaoCriarConta} mode="contained" onPress={criarConta}>Criar Conta</Button>
                    <Button style={estilos.botaoCriarConta} mode="contained" onPress={() => { setFormularioLoginAtivo(true) }}>Voltar</Button>
                </View>
            }
        </View>
    );

}

// CSS
const estilos = StyleSheet.create({
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 30
    },
    formulario: {
        alignItems: 'center'
    },
    input: {
        marginBottom: 10,
        width: 250
    },
    botaoLogar: {
        width: 250,
        marginTop: 20
    },
    botaoCriarConta: {
        width: 250,
        marginTop: 10
    },

})