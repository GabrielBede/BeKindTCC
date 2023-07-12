import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, Button, Dimensions,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';

const statusBarHeight = StatusBar.currentHeight;

const { width } = Dimensions.get('window');

export default function Doacoes() {

let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  const [isBlue, setIsBlue] = useState(false);
  const [isBlue2, setIsBlue2] = useState(false);
  const [isBlue3, setIsBlue3] = useState(false);
  const [isBlue4, setIsBlue4] = useState(false);

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



            <TouchableOpacity>
                <View style={{display:'flex', marginRight:30, alignItems:'center', marginLeft:30, marginTop: -35, marginBottom:-40, flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{fontSize:25, fontFamily:'Poppins_700Bold',}}>Doações</Text>
                </View>
            </TouchableOpacity>
 

<View style={{marginBottom:45}}>
  <FlatList
  ref={(flatList) => { this.flatList = flatList; }}
  style={{flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? statusBarHeight : 25, paddingLeft:25,}}
  horizontal={true}
  showsHorizontalScrollIndicator={false} // Remover barra de rolagem horizontal
  decelerationRate={0}
  snapToInterval={width - 60}
  snapToAlignment={"center"}
  data={[
    { image: require('../../img/alimento.png'), text: 'Alimento' },
    { image: require('../../img/roupa.png'), text: 'Roupas' },
    { image: require('../../img/dinheiro.png'), text: 'Dinheiro' },
    { image: require('../../img/moradia.png'), text: 'Moradia' },
    { image: require('../../img/voluntario.png'), text: 'Voluntário' },
  ]}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.BBlue}>
      <Image style={{ width: 25, resizeMode: 'contain', alignSelf: 'center', marginTop: '-15%' }} source={item.image} />
      <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginTop: '-35%' }}>{item.text}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item, index) => index.toString()}
/>


</View>
 
<View styles={{width:'85%', height:200,}}>

        <View style={styles.Card}>
            <View style={{ borderRadius: 25, overflow: 'hidden' ,width:'100%',}}>
              <ImageBackground source={require('../../img/banner5.png')} style={{ width: '100%' }}>
                <View>
                  <View style={styles.Header}>

                    <TouchableOpacity>
                          <View style={styles.Info}>
                              <View style={styles.Img}>
                                <Image style={{ alignSelf: 'center', width:62, resizeMode:'contain', marginTop:-60,}} source={require('../../img/ADR.png')} />
                              </View>
                              <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                                <Text style={styles.PBold}>Anjos da Rua</Text>
                                <Text style={styles.P}>Meta: R$800</Text>
                              </View>
                        </View>
                    </TouchableOpacity>

                      <View style={styles.Favorite}>
                      <TouchableOpacity onPress={() => setIsBlue(!isBlue)}>
                        <Image
                          style={{ alignSelf: 'center', width: 27, resizeMode: 'contain' }}
                          source={isBlue ? require('../../img/EstrelaBlue.png') : require('../../img/Estrela.png')}/>
                         </TouchableOpacity>
                      </View>

                  </View>
                  <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 25, width: 220, marginLeft: 25, paddingTop: 160, marginBottom: 7 }}>Ajude pessoas famintas</Text>

                <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }}>
                  <View style={styles.CardButton}>
                      <View style={{ alignSelf: 'center', marginLeft: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 20, color: '#fff', fontSize: 17, fontFamily: 'Montserrat_700Bold', alignSelf: 'center' }}>Doe Agora</Text>
                        <View style={styles.BBlack}>
                          <Image style={{ width: 40, resizeMode: 'contain', alignSelf: 'center', marginTop: '12%' }} source={require('../../img/SetaWhite.png')} />
                        </View>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>
          </ImageBackground>
        </View>
    </View>

</View>

<View styles={{width:'85%', height:200,}}>

        <View style={styles.Card}>
            <View style={{ borderRadius: 25, overflow: 'hidden' ,width:'100%',}}>
              <ImageBackground source={require('../../img/banner1.png')} style={{ width: '100%' }}>
                <View>
                  <View style={styles.Header}>

                    <TouchableOpacity>
                          <View style={styles.Info}>
                              <View style={styles.Img}>
                                <Image style={{ alignSelf: 'center', width:62, resizeMode:'contain', marginTop:-60,}} source={require('../../img/SpI.png')} />
                              </View>
                              <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                                <Text style={styles.PBold}>SP Invisível</Text>
                                <Text style={styles.P}>Meta: R$2.000</Text>
                              </View>
                        </View>
                    </TouchableOpacity>

                      <View style={styles.Favorite}>
                      <TouchableOpacity onPress={() => setIsBlue2(!isBlue2)}>
                        <Image
                          style={{ alignSelf: 'center', width: 27, resizeMode: 'contain' }}
                          source={isBlue2 ? require('../../img/EstrelaBlue.png') : require('../../img/Estrela.png')}/>
                         </TouchableOpacity>
                      </View>

                  </View>
                  <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 25, width: 220, marginLeft: 25, paddingTop: 160, marginBottom: 7 }}>Ajude pessoas famintas</Text>
                <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }}>
                  <View style={styles.CardButton}>
                      <View style={{ alignSelf: 'center', marginLeft: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 20, color: '#fff', fontSize: 17, fontFamily: 'Montserrat_700Bold', alignSelf: 'center' }}>Doe Agora</Text>
                        <View style={styles.BBlack}>
                          <Image style={{ width: 40, resizeMode: 'contain', alignSelf: 'center', marginTop: '12%' }} source={require('../../img/SetaWhite.png')} />
                        </View>
                      </View>
                  </View>
                </TouchableOpacity>

              </View>
          </ImageBackground>
        </View>
    </View>

</View>

<View styles={{width:'85%', height:200,}}>

        <View style={styles.Card}>
            <View style={{ borderRadius: 25, overflow: 'hidden' ,width:'100%',}}>
              <ImageBackground source={require('../../img/banner4.png')} style={{ width: '100%' }}>
                <View>
                  <View style={styles.Header}>

                    <TouchableOpacity>
                          <View style={styles.Info}>
                              <View style={styles.Img}>
                                <Image style={{ alignSelf: 'center', width:62, resizeMode:'contain', marginTop:-60,}} source={require('../../img/ODB.png')} />
                              </View>
                              <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                                <Text style={styles.PBold}>Olhar de Bia</Text>
                                <Text style={styles.P}>Meta: R$1.350</Text>
                              </View>
                        </View>
                    </TouchableOpacity>

                      <View style={styles.Favorite}>
                      <TouchableOpacity onPress={() => setIsBlue3(!isBlue3)}>
                        <Image
                          style={{ alignSelf: 'center', width: 27, resizeMode: 'contain' }}
                          source={isBlue3 ? require('../../img/EstrelaBlue.png') : require('../../img/Estrela.png')}/>
                         </TouchableOpacity>
                      </View>

                  </View>
                  <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 25, width: 220, marginLeft: 25, paddingTop: 160, marginBottom: 7 }}>Ajude pessoas famintas</Text>

                <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }}>
                  <View style={styles.CardButton}>
                      <View style={{ alignSelf: 'center', marginLeft: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 20, color: '#fff', fontSize: 17, fontFamily: 'Montserrat_700Bold', alignSelf: 'center' }}>Doe Agora</Text>
                        <View style={styles.BBlack}>
                          <Image style={{ width: 40, resizeMode: 'contain', alignSelf: 'center', marginTop: '12%' }} source={require('../../img/SetaWhite.png')} />
                        </View>
                      </View>
                  </View>
                </TouchableOpacity>

              </View>
          </ImageBackground>
        </View>
    </View>

</View>

<View styles={{width:'85%', height:200, marginBottom:300,}}>

        <View style={styles.Card}>
            <View style={{ borderRadius: 25, overflow: 'hidden' ,width:'100%',}}>
              <ImageBackground source={require('../../img/banner3.png')} style={{ width: '100%' }}>
                <View>
                  <View style={styles.Header}>

                    <TouchableOpacity>
                          <View style={styles.Info}>
                              <View style={styles.Img}>
                                <Image style={{ alignSelf: 'center', width:62, resizeMode:'contain', marginTop:-60,}} source={require('../../img/ONGA.png')} />
                              </View>
                              <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                                <Text style={styles.PBold}>ONG Amamos</Text>
                                <Text style={styles.P}>Meta: R$550</Text>
                              </View>
                        </View>
                    </TouchableOpacity>

                      <View style={styles.Favorite}>
                      <TouchableOpacity onPress={() => setIsBlue4(!isBlue4)}>
                        <Image
                          style={{ alignSelf: 'center', width: 27, resizeMode: 'contain' }}
                          source={isBlue4 ? require('../../img/EstrelaBlue.png') : require('../../img/Estrela.png')}/>
                         </TouchableOpacity>
                      </View>

                  </View>
                  <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 25, width: 220, marginLeft: 25, paddingTop: 160, marginBottom: 7 }}>Ajude pessoas famintas</Text>

                <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }}>
                  <View style={styles.CardButton}>
                      <View style={{ alignSelf: 'center', marginLeft: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 20, color: '#fff', fontSize: 17, fontFamily: 'Montserrat_700Bold', alignSelf: 'center' }}>Doe Agora</Text>
                        <View style={styles.BBlack}>
                          <Image style={{ width: 40, resizeMode: 'contain', alignSelf: 'center', marginTop: '12%' }} source={require('../../img/SetaWhite.png')} />
                        </View>
                      </View>
                  </View>
                </TouchableOpacity>

              </View>
          </ImageBackground>
        </View>
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

  Card:{
    display:'flex',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '85%',
    height:352,
    borderRadius: 25,
    resizeMode:'contain',
    marginBottom:30,
  },
  

  CardButton:{
    flexDirection: 'row',
    backgroundColor: '#000',
    width: '94%',
    height: 80,
    borderRadius: 50,
    margin:10,
    marginLeft:10,
    backgroundColor:'#D9D9D9D9',
    resizeMode:'contain',
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

  P:{
    color: '#fff',
    fontSize:14,
    fontFamily: 'Montserrat_400Regular',
  },

  Img:{
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf:'center',
    marginLeft:5,
  },

  BBlack:{
    backgroundColor: '#fff',
    width: 100,
    height: 70,
    borderRadius: 50,
    alignSelf:'center',
    marginRight:16,
    backgroundColor:'black',

  },

  Favorite:{
    backgroundColor: '#fff',
    top: 10,
    left: 0,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent:'center',
    marginRight:'3%',
    marginTop:60,
  },

  BBlue:{
    width:85,
    height:85,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#007CE0',
    borderRadius:15,
  }
});