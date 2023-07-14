import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { View, Image } from 'react-native';

{/*Bibliotecas do React Navigation*/}
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

{/*Páginas importadas*/}
import Routes from './src/pages/routes';
import Cadastro from './src/pages/Cadastro.Login/Cadastro';
import Login from './src/pages/Cadastro.Login/Login';
import Perfil from './src/pages/Perfil/Perfil';
import Notificacoes from './src/pages/Notificacoes/Notificacoes';
import InfoEventos from './src/pages/InfoEventos/InfoEventos';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  {/*Páginas de navegação*/}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Doacoes"
          component={Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Eventos"
          component={Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Mensagens"
          component={Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Mais"
          component={Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Notificacoes"
          component={Notificacoes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./src/img/Logo.png')}
                  style={{
                    width: 30,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />
              </View>
            ),
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: '#fff',
              shadowOpacity: 0,
            },
          }}
        />

        <Stack.Screen
          name="InfoEventos"
          component={InfoEventos}
          options={{
            title: '',
            headerTransparent: true,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}