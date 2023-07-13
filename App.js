import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './src/pages/routes';
import Perfil from './src/pages/Perfil/Perfil';
import Notificacoes from './src/pages/Notificacoes/Notificacoes';



const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold});

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Notificacoes">
        <Stack.Screen name="Home" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="Doacoes" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="Eventos" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="Mensagens" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="Mais" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name="Notificacoes" component={Notificacoes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

