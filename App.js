import Routes from './src/pages/routes';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import {NavigationContainer} from '@react-navigation/native'

export default function App() {
    let [fontsLoaded] = useFonts({Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold});

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}

