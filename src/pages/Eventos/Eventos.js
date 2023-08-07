import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, Dimensions,TouchableOpacity, ImageBackground} from 'react-native';
import { useFonts,  Montserrat_400Regular,  Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

import CardEventosSem from '../../components/CardEventosSem';

const statusBarHeight = StatusBar.currentHeight;
const { width } = Dimensions.get('window');

export default function Eventos() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
      Montserrat_400Regular, 
      Montserrat_500Medium,
      Montserrat_700Bold, 
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>

        {/*Header do aplicativo*/}
        <View style={styles.Header}>
          <Image style={styles.Perfil}/>
                        
          <TouchableOpacity>
            <Image style={styles.Logo} source={require('../../img/Logo.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Image style={styles.Perfil} source={require('../../img/Perfil.png')} />
          </TouchableOpacity>
        </View>

              <Text style={styles.H3}>Eventos de Hoje</Text>

        {/*Card - Eventos de Hoje*/}
        <TouchableOpacity onPress={() => navigation.navigate('InfoEventos')}>
                <View style={styles.Card}>
                  <View style={styles.InnerCard}>
                      <ImageBackground style={styles.ImageCard} source={require('../../img/EventoSPInvisivel.png')}>
                        <View>
                          <View style={styles.Header}>


                            {/*Card - Informações*/}
                            <TouchableOpacity>
                              <View style={styles.Info}>
                                <View style={styles.Img}>
                                  <Image style={styles.ONGPerfil} source={require('../../img/PerfilSPInvisivel.png')} />
                                </View>
                                  
                                <View style={styles.Nome}>
                                  <Text style={styles.PBold}>SP Invisível</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                          
                          
                          {/*Card - Descrição do evento*/}
                          <View style={styles.CardText}>
                            <View style={styles.InnerText}>
                              <Text style={styles.H3White}>Inverno Invisível</Text>
                              <Text style={styles.Text}>Ao invés de entregar coisas velhas e usadas, combatemos o frio das ruas através do resgate da dignidade.</Text>
                            </View>
                          </View>
                        </View>
                      </ImageBackground>
                  </View>
                </View>
        </TouchableOpacity>

              <Text style={styles.H3}>Eventos da Semana</Text>

        {/*1. Card - Eventos da semana*/}
        <TouchableOpacity>
          <CardEventosSem
            ongPerfilSource={require('../../img/EventoCesta.png')}
            nome="Entrega de cestas"
            data="Mai. 1, 2023"
          />
        </TouchableOpacity>


        {/*2. Card - Eventos da semana*/}
        <TouchableOpacity>
          <CardEventosSem
            ongPerfilSource={require('../../img/EventoSopa.png')}
            nome="Sopa solidária"
            data="Mai. 3, 2023"
          />
        </TouchableOpacity>


        {/*3. Card - Eventos da semana*/}
        <TouchableOpacity>
          <CardEventosSem
            ongPerfilSource={require('../../img/EventoGentileza.png')}
            nome="Existe gentileza em SP"
            data="Mai. 4, 2023"
          />
        </TouchableOpacity>


        {/*4. Card - Eventos da semana*/}
        <TouchableOpacity>
          <CardEventosSem
            ongPerfilSource={require('../../img/EventoEntregaCestas.png')}
            nome="Entrega de cestas"
            data="Ago. 11, 2023"
          />
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

  Header:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:-65,
    marginBottom:-60,
    alignSelf:'center',
    alignItems:'center',
  },

  Logo:{
    width:30,
    resizeMode:'contain',
    alignSelf: 'center',
  },

  Perfil:{
    width:50,
    resizeMode:'contain',
    alignSelf: 'center',
    marginRight:25,  
  },

  H3:{
    marginLeft: 30,
    marginBottom: 15,
    fontSize: 20, 
    fontFamily:'Montserrat_700Bold',
  },

  H3White:{
    color: '#fff',
    fontSize:20,
    fontFamily:'Montserrat_700Bold',
  },

  Text:{
    color: '#fff',
    fontSize:14,
    fontFamily: 'Montserrat_500Medium',
  },
  
  Card:{
    display:'flex',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '85%',
    borderRadius: 25,
    resizeMode:'contain',
    marginBottom: 60
  },
  
  InnerCard:{
    borderRadius: 25, 
    overflow: 'hidden',
    width:'100%',
  },

  ImageCard:{
    width: '100%' 
  },

  ONGPerfil:{
    alignSelf: 'center', 
    width:62, 
    resizeMode:'contain', 
    marginTop:-60,
  },

  Nome:{
    alignSelf: 'center', 
    marginLeft: 10 
  },

  InnerText:{
    marginLeft:45, 
    marginTop:25, 
    width:'75%',
  },

  CardText:{
    flexDirection: 'column',
    width: '100%',
    height: 130,
    backgroundColor:'rgba(217, 217, 217, 0.7)',
    resizeMode:'contain',
    marginTop:'60%',
  },

  Info:{
    flexDirection: 'row',
    width: 200,
    height: 70,
    borderRadius: 50,
    margin:-10,
    marginLeft:15,
    backgroundColor:'rgba(217, 217, 217, 0.7)',
    marginTop:70,
  },

  PBold: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 14,
    color: '#fff',
  },

  Img:{
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf:'center',
    marginLeft:5,
  },

  ScrollView: {
    marginBottom: 60,
  },
});