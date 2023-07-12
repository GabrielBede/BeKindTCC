import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, Button, Dimensions,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const statusBarHeight = StatusBar.currentHeight;

const { width } = Dimensions.get('window');

export default function Eventos() {

let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });



  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      
          <View style={styles.Header}>
              <View style={{}}>
                <Image style={styles.Perfil}/>
              </View>
            
            <TouchableOpacity>
              <View style={{}}>
                <Image style={styles.Logo} source={require('../../img/Logo.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{}}>
                <Image style={styles.Perfil} source={require('../../img/Perfil.png')} />
              </View>
            </TouchableOpacity>

        </View>


<View style={{marginBottom:20,}}>
                <View style={{display:'flex', marginRight:30, alignItems:'center', marginLeft:30, marginTop: -20, flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{fontSize:25, fontFamily:'Montserrat_700Bold',}}>Eventos de Hoje</Text>
                </View>
 </View>

 
<View styles={{width:'85%', height:200,}}>

<TouchableOpacity>


        <View style={styles.Card}>
            <View style={{ borderRadius: 25, overflow: 'hidden' ,width:'100%',}}>
              <ImageBackground source={require('../../img/banner6.png')} style={{ width: '100%' }}>
                <View>
                  <View style={styles.Header}>

                    <TouchableOpacity>
                          <View style={styles.Info}>
                              <View style={styles.Img}>
                                <Image style={{ alignSelf: 'center', width:62, resizeMode:'contain', marginTop:-60,}} source={require('../../img/SpI.png')} />
                              </View>
                              <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                                <Text style={styles.PBold}>SP Invisível</Text>
                              </View>
                        </View>
                    </TouchableOpacity>

                  </View>
                  <View style={styles.CardText}>

                  <View style={{marginLeft:45, marginTop:25, width:'75%',}}>
                  
                    <Text style={{color: '#fff',fontSize:20,fontFamily:'Montserrat_700Bold',}}>Inverno Invisível</Text>
                    <Text style={{color: '#fff',fontSize:14,
fontFamily: 'Montserrat_500Medium',}}>Ao invés de entregar coisas velhas e usadas, combatemos o frio das ruas através do resgate da dignidade.</Text>

                  </View>
                    </View>
              </View>
          </ImageBackground>
        </View>
    </View>
</TouchableOpacity>
</View>



                <View style={{display:'flex', marginRight:30, alignItems:'center', marginLeft:30, marginTop:50, marginBottom:-35, flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{fontSize:25, fontFamily:'Montserrat_700Bold',}}>Eventos da Semana</Text>
                </View>
            
  <View style={{marginBottom:150,}}>
     

    


 <View style={styles.ContEvenSemana}>
  <View style={styles.EvenSemana}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.Icon} source={require('../../img/Cesta.png')} />
      <View>
        <Text style={{ fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>Entrega de Cestas</Text>
        <Text style={{ fontSize: 17, fontFamily: 'Montserrat_500Medium' }}>Mai. 1, 2023</Text>
      </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <TouchableOpacity>
        <Text style={{ color: '#007CE0', fontFamily: 'Montserrat_700Bold', fontSize: 19 }}>Ver</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  <View style={{ alignSelf: 'center', width: '82%', marginLeft: 45, marginTop: -45, backgroundColor: '#7E7E7E', padding: .5, borderBottomWidth: StyleSheet.hairlineWidth }} />
</View>


 <View style={styles.ContEvenSemana}>
  <View style={styles.EvenSemana}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.Icon} source={require('../../img/SopaS.png')} />
      <View>
        <Text style={{ fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>Sopa solidária</Text>
        <Text style={{ fontSize: 17, fontFamily: 'Montserrat_500Medium' }}>Mai. 3, 2023</Text>
      </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <TouchableOpacity>
        <Text style={{ color: '#007CE0', fontFamily: 'Montserrat_700Bold', fontSize: 19 }}>Ver</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  <View style={{ alignSelf: 'center', width: '82%', marginLeft: 45, marginTop: -45, backgroundColor: '#7E7E7E', padding: .5, borderBottomWidth: StyleSheet.hairlineWidth }} />
</View>


 <View style={styles.ContEvenSemana}>
  <View style={styles.EvenSemana}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.Icon} source={require('../../img/Gentileza.png')} />
      <View>
        <Text style={{ fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>Existe Gentileza em SP</Text>
        <Text style={{ fontSize: 17, fontFamily: 'Montserrat_500Medium' }}>Mai. 4, 2023</Text>
      </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <TouchableOpacity>
        <Text style={{ color: '#007CE0', fontFamily: 'Montserrat_700Bold', fontSize: 19 }}>Ver</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  <View style={{ alignSelf: 'center', width: '82%', marginLeft: 45, marginTop: -45, backgroundColor: '#7E7E7E', padding: .5, borderBottomWidth: StyleSheet.hairlineWidth }} />
</View>


 <View style={styles.ContEvenSemana}>
  <View style={styles.EvenSemana}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.Icon} source={require('../../img/EntregaCestas.png')} />
      <View>
        <Text style={{ fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>Entrega de Cestas</Text>
        <Text style={{ fontSize: 17, fontFamily: 'Montserrat_500Medium' }}>Ago. 11, 2023</Text>
      </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <TouchableOpacity>
        <Text style={{ color: '#007CE0', fontFamily: 'Montserrat_700Bold', fontSize: 19 }}>Ver</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  <View style={{ alignSelf: 'center', width: '82%', marginLeft: 45, marginTop: -45, backgroundColor: '#7E7E7E', padding: .5, borderBottomWidth: StyleSheet.hairlineWidth }} />
</View>



</View>

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
    marginTop:-60,
    marginBottom:-30, 
    alignSelf:'center',
    alignItems:'center',
  },

  Logo:{
    width:40,
    resizeMode:'contain',
    alignSelf: 'center',
  },

  Perfil:{
    width:50,
    resizeMode:'contain',
    alignSelf: 'center',
    marginRight:25,  
  },

  Icon:{
    width:75,
    resizeMode:'contain',
    marginRight:30,  
  },

  Card:{
    display:'flex',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '85%',
    borderRadius: 25,
    resizeMode:'contain',
  },
  

  CardText:{
    flexDirection: 'column',
    backgroundColor: '#000',
    width: '100%',
    height: 130,
    backgroundColor:'#D9D9D9D9',
    resizeMode:'contain',
    marginTop:'60%',
  },

  Info:{
    flexDirection: 'row',
    backgroundColor: '#000',
    width: 200,
    height: 70,
    borderRadius: 50,
    margin:-10,
    marginLeft:15,
    backgroundColor:'#D9D9D9D9',
    marginTop:70,
  },


  PBold:{
    color: '#fff',
    fontSize:17,
    fontFamily:'Montserrat_700Bold',
  },


  Img:{
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf:'center',
    marginLeft:5,
  },

  ContEvenSemana:{
    display:'flex',
    width:'85%',
    height:100,
    alignSelf:'center',
  },

  EvenSemana:{
    display:'flex',

  }


});