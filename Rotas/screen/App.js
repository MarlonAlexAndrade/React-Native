// Importações

import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Stack
const Stack = createNativeStackNavigator();

// Componentes
function Inicio({ navigation }) {
  return (
    <View>
      <Text>Página inicial</Text>
      <Button title='Ir para a página sobre' onPress={() => navigation.navigate('sobre', { nome:'Marlon', cidade:'Blumenau' })} />
    </View>
  )
}

function Sobre({route, navigation}) {

  const { nome, cidade } = route.params;
  return (
    <View>
      <Text>Sobre o projeto....</Text>
      <Text>Nome: {JSON.stringify(nome)}</Text>
      <Text>cidade: {JSON.stringify(cidade)}</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='inicio' component={Inicio} options={{headerShown:false}}/> */}
        <Stack.Screen name='inicio' component={Inicio} />
        <Stack.Screen name='sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}