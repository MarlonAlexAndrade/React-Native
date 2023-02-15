// Importar módulos
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar componentes
import Inicio from './telas/Inicio';
import Agenda from './telas/Agenda';

// Stack
const Stack = createNativeStackNavigator();

// Componente
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
        <Stack.Screen name="Agenda" component={Agenda} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 