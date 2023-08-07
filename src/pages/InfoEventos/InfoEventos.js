import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, TouchableOpacity} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight;

export default function InfoEventos() {
  const [botaoativado, setBotaoativado] = useState(false);
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, 
    Montserrat_500Medium,
    Montserrat_700Bold, 
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
          
          <View style={styles.Card}>
            <Image style={styles.ImageCard} source={require('../../img/EventoSPInvisivel.png')} />
            <View style={styles.Info}></View>
          </View>
        
        {/*Usuário do Blog*/}
        <TouchableOpacity>
          <View style={styles.PerfilBlog}>
            <Image style={styles.PostPerfil} source={require('../../img/PerfilSPInvisivel.png')} />
            <Text style={styles.PostUser}>SP Invisível</Text>
          </View>
        </TouchableOpacity>

          <View style={styles.Descricao}>
              <Text style={{fontFamily: 'Montserrat_700Bold'}}><Text>110</Text> <Text style={styles.PBlack}>Participantes</Text></Text>
              <Image style={styles.Participantes} source={require('../../img/EventosParticipantes.png')} />
              <Text style={styles.H3}>Descrição do Evento:</Text>
              <Text style={styles.PBlack}>Todos os anos, dezenas de pessoas em situação de rua morrem de frio. Por isso, desde 2016 nós saímos nas madrugadas mais frias do ano para entregar um kit que, mais do que apenas aquecer o corpo, também aquecia o coração com um moletom novinho, desenvolvido especialmente para a população de rua. Afinal, entregar um item novo, diferente daquele cobertor velho, aquele moletom usado, também é uma forma de resgatar a dignidade de quem vive às margens da sociedade.</Text>
          </View>

          <TouchableOpacity onPress={() => setBotaoativado(!botaoativado)}>
            <Text style={[styles.Botao, { backgroundColor: botaoativado ? '#7E7E7E' : '#000' }]}>
              {botaoativado ? 'Cancelar participação' : 'Participar'}
            </Text>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },

  ImageCard: {
    width: '100%',
    height: 325,
  },

  H3: {
    fontSize: 20, 
    fontFamily: 'Montserrat_700Bold',
    color: '#000',
  },

  PBlack: {
    marginTop: 20,
    color: '#000',
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },

  PerfilBlog: {
    flexDirection: 'row', 
    marginLeft: 30, 
    marginTop: -45,
  },

  PostPerfil: {  
    alignSelf: 'center', 
    width: 33, 
    resizeMode: 'contain',
  },

  PostUser: {
    alignSelf: 'center', 
    fontFamily: 'Montserrat_700Bold', 
    fontSize: 14, 
    marginLeft: 8, 
  },

  Participantes: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
  },

  Descricao: {
    width: 360,
    marginLeft: 30,
    marginTop: -40,
  },

  Botao: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 13,
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
    marginHorizontal: 30,
  },
});