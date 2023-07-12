import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, Button, Dimensions,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import React, { useState } from 'react';

const statusBarHeight = StatusBar.currentHeight;
const { width } = Dimensions.get('window');

export default function Home() {

let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

const [isBlue, setIsBlue] = useState(false);
const [isLiked, setIsLiked] = useState(false);

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

          <View style={{display:'flex', marginRight:30, marginLeft:30,}}>
            <Text style = {styles.H1}><Text>Olá</Text> <Text style={{fontFamily: 'Montserrat_700Bold'}}>Gabriel,</Text></Text>
            <Text style = {styles.H2}>Seja gentil e doe para quem{'\n'}precisa.</Text>
          </View>

            <TouchableOpacity>
                <View style={{display:'flex', marginRight:30, alignItems:'center', marginLeft:30, marginBottom:20, flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{fontSize:20, fontFamily:'Montserrat_700Bold',}}>Doações</Text>
                  <Image style={{width:37, resizeMode:'contain', }} source={require('../../img/SetaD.png')}/>
                </View>
            </TouchableOpacity>
 
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

          <TouchableOpacity>
            <View style={{display:'flex', marginRight:30, alignItems:'center', marginLeft:30, marginTop: 15, marginBottom:-5, flexDirection:'row', justifyContent:'space-between', resizeMode:'contain',}}>
              <Text style={{fontSize:20, fontFamily:'Montserrat_700Bold', resizeMode:'contain',}}>Categorias</Text>
              <Image style={{width:37, resizeMode:'contain',}} source={require('../../img/SetaD.png')}/>
            </View>
          </TouchableOpacity>


          <View>
  <FlatList
      ref={(flatList) => { this.flatList = flatList; }}
      style={{    flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 25, paddingLeft:25,}}
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
        { image: require('../../img/voluntario.png'), text: 'Utensílios' },
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

      <TouchableOpacity>
            <View style={{display:'flex', marginRight:30, marginLeft:30, marginTop: 30, marginBottom:-20, flexDirection:'row', justifyContent:'space-between',}}>
              <Text style={{fontSize:20, fontFamily:'Montserrat_700Bold',}}>Blog</Text>
              <Image style={{width:35, resizeMode:'contain',}} source={require('../../img/SetaD.png')}/>
            </View>
      </TouchableOpacity>


          <View>

          <TouchableOpacity>
            <View style={{display:'flex', flexDirection:'row', marginLeft:30, marginTop:-40,}}>
              <Image style={{ alignSelf: 'center', width:35, resizeMode:'contain',}} source={require('../../img/SpI.png')} />
              <Text style={{alignSelf:'center', fontFamily:'Montserrat_700Bold', fontSize:14, marginLeft:8, }}>SP Invisível</Text>
            </View>
          </TouchableOpacity>



              <View style={styles.Post}>
                  <View style={{ borderRadius: 25, overflow: 'hidden', width:'100%', height:'100%', }}>
                    <ImageBackground source={require('../../img/banner2.png')} style={{ width: '100%', height:'100%', }}>
                      <View>
                        <View style={styles.Header}>

                          
                      <View style={styles.Curtir}>
                        <View style={{}}>
                          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                            <Image
                              style={{ alignSelf: 'center', width: 20, resizeMode: 'contain' }}
                              source={isLiked ? require('../../img/CurtirBlue.png') : require('../../img/Curtir.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                                                

                        </View>
                    </View>
                </ImageBackground>
                
              </View>
          </View>
            <View style={{margin:30, marginTop:15, textAlign:'justify', marginBottom:80,}}>
                <Text style={{fontFamily: 'Montserrat_500Medium', fontSize:14,}}><Text style={{ fontFamily:'Montserrat_700Bold', fontSize:14,}}>SP Invisível:</Text>  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>
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
  
  H1:{
    marginTop:-30,
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular', 
  },

  H2:{
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular', 
    height:50,
  },

  Header:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:-65,
    marginBottom:-30,
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

  Card:{
    display:'flex',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '85%',
    height:352,
    borderRadius: 25,
    resizeMode:'contain',
  },
  Post:{
    marginTop:-60,
    display:'flex',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '85%',
    height:362,
    borderRadius: 25,
    resizeMode:'contain',
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
    marginTop:75,
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
  Curtir:{
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    marginTop:362,
    marginLeft:'82%',
    borderRadius: 15,
    display:'flex',
  },

  CategoriasBlocos:{
    display:'flex',
    flexDirection:'row',
    marginLeft:25,
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