import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, TouchableOpacity} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Progresso from '../../components/ProgressBar';

const statusBarHeight = StatusBar.currentHeight;

export default function InfoONG() {
  const navigation = useNavigation();

  const [botaoativado, setBotaoativado] = useState(false);
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, 
    Montserrat_500Medium,
    Montserrat_700Bold, 
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
          

          {/*Imagem principal*/}
          <View style={styles.Card}>
            <Image style={styles.ImageCard} source={require('../../img/BgONGSPInvisivel.png')} />
            <View style={styles.Info}></View>
          </View>

          <View style={styles.Slogan}>
            <Text style={styles.H3}>O frio mais intenso é o da indiferença.</Text>
          </View>

        {/*Usuário do Blog*/}
        <TouchableOpacity>
          <View style={styles.PerfilBlog}>
            <Image style={styles.PostPerfil} source={require('../../img/PerfilSPInvisivel.png')} />
            <Text style={styles.PostUser}>SP Invisível</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.H3Progresso}>
              <Text style={styles.H3}>Progresso</Text>
        </View>

        {/*Progresso e informações de metas da ONG*/}
          <View style={styles.Progresso}>
              <View style={styles.InfoProgresso}>
                  <Text style={styles.PBoldBlack}>15.4k doações</Text>
                  
                  <View style={styles.Dias}>
                    <Feather name='clock' size={20} color={"#7E7E7E"} />
                    <Text style={styles.PBoldGray}>3 dias</Text>
                  </View>
              </View>
              {/*Progresso e informações de metas da ONG*/}
              <Progresso/>

              <View style={styles.InfoProgresso}>
                  <Text style={styles.PBoldBlue}>R$78.000</Text> 
                  <Text style={styles.PBlack}>Meta: R$100.000</Text>
              </View>
          </View>


          {/*Sobre a ONG*/}
          <View style={styles.Descricao}>
              <Text style={styles.H3}>Sobre</Text>
              <Text style={styles.PBlack}>Todos os anos, dezenas de pessoas em situação de rua morrem de frio. Por isso, desde 2016 nós saímos nas madrugadas mais frias do ano para entregar um kit que, mais do que apenas aquecer o corpo, também aquecia o coração com um moletom novinho, desenvolvido especialmente para a população de rua. Afinal, entregar um item novo, diferente daquele cobertor velho, aquele moletom usado, também é uma forma de resgatar a dignidade de quem vive às margens da sociedade.</Text>
          </View>

          <View style={styles.Descricao}>
              <Text style={styles.H3}>Contato</Text>

              <View style={styles.Contato}>
                  <Feather style={styles.Icon} name='phone' size={20} color={"#007CE0"} />
                  <Text style={styles.PBlack}>(11) 99999-9999</Text>
              </View>

              <View style={styles.Contato}>
                  <Feather style={styles.Icon} name='at-sign' size={20} color={"#007CE0"} />
                  <Text style={styles.PBlack}>oi@spinvisivel.org</Text>
              </View>
              
              <View style={styles.Contato}>
                  <Feather style={styles.Icon} name='instagram' size={20} color={"#007CE0"} />
                  <Text style={styles.PBlack}>@spinvisivel</Text>
              </View>
          </View>

        <TouchableOpacity onPress={() => navigation.navigate('DoarDinheiro')}>
          <Text style = {styles.Botao}>Doar</Text>
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
    marginBottom: 5
  },

  PBlack: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },

  PBoldBlack: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 14,
    color: '#000',
  },

  PBoldGray: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 14,
    color: '#7E7E7E',
    marginLeft: 5
  },

  PBoldBlue: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 14,
    color: '#007CE0',
  },

  Slogan:{
    marginTop: 35,
    marginHorizontal: 30
  },
  
  PerfilBlog: {
    flexDirection: 'row', 
    marginLeft: 30, 
    marginTop: -65,
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

  H3Progresso:{
    flexDirection: 'column',
    marginTop: -20,
    marginHorizontal: 30
  },

  InfoProgresso:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },

  Dias:{
    flexDirection: 'row',
  },

  Progresso: {
    marginTop: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#7E7E7E',
    padding: 15
  },

  Descricao: {
    marginHorizontal: 30,
    marginTop: 45,
  },

  Contato:{
    flexDirection: 'row',
    marginVertical: 5
  },

  Icon:{
    marginRight: 10
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
    marginVertical: 45,
  },
});