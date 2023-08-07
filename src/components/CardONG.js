import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';


const CardONG = ({ imgCardSource, ongPerfilSource, nome, meta, descricao }) => {
  const [Azul, setAzul] = useState(false);
  return (
        <View style={styles.Card}>
          <View style={styles.InnerCard}>
            <ImageBackground style={styles.ImageCard} source={imgCardSource}>
                
              {/*Header do Card*/}
              <View style={styles.Header}>
                  <TouchableOpacity>
                    <View style={styles.Info}>
                      <View style={styles.ONG}>
                        <Image style={styles.ONGPerfil} source={ongPerfilSource}/>
                      </View>
                    
                      {/*Informações do Card*/}
                      <View style={styles.NomeMeta}>
                        <Text style={styles.PBold}>{nome}</Text>
                        <Text style={styles.P}>{meta}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                      {/*Favoritar ONG*/}
                      <View style={styles.Favorite}>
                        <TouchableOpacity onPress={() => setAzul(!Azul)}>
                          <Image style={styles.Estrela} 
                            source={Azul ? require('../img/EstrelaBlue.png') : 
                            require('../img/Estrela.png')}/>
                        </TouchableOpacity>
                      </View>
                </View>

              <Text style={styles.H2}>{descricao}</Text>

                {/*Botão doar agora*/}
                <TouchableOpacity>
                  <View style={styles.CardButton}>
                    <View style={styles.DoarAgora}>
                      <Text style={styles.PBoldDoar}>Doe Agora</Text>
                        <View style={styles.BBlack}>
                          <Image style={styles.SetaWhite} source={require('../img/SetaWhite.png')} />
                        </View>
                    </View>
                  </View>
                </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  Header:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:-65,
    marginBottom:-30,
    alignSelf:'center',
    alignItems:'center',
  },

  H2:{
    color: '#fff', 
    fontFamily: 'Montserrat_700Bold', 
    fontSize: 25, 
    width: 250, 
    paddingTop: 160, 
    marginLeft: 25, 
    marginBottom: 7 
  },

  PBold: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 14,
    color: '#fff',
  },

  P:{
    color: '#fff',
    fontSize:14,
    fontFamily: 'Montserrat_400Regular',
  },

  SetaWhite:{
    width: 40, 
    resizeMode: 'contain', 
    alignSelf: 'center', 
    marginTop: '12%'
  },

  Card:{
    alignSelf: 'center',
    width: '85%',
    height:370,
    borderRadius: 25,
    resizeMode:'contain',
    marginTop: 20
  },

  InnerCard:{
    borderRadius: 25, 
    overflow: 'hidden',
    width:'100%',
  },

  ImageCard:{
    width: '100%' 
  },

  Estrela:{
     alignSelf: 'center', 
     width: 27, 
     resizeMode: 'contain' 
  },

  CardButton:{
    flexDirection: 'row',
    width: '94%',
    height: 80,
    borderRadius: 50,
    margin:10,
    marginLeft:10,
    backgroundColor:'rgba(217, 217, 217, 0.7)',
    resizeMode:'contain',
  },

  DoarAgora:{
    alignSelf: 'center', 
    marginLeft: 10, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },

  PBoldDoar:{
    marginLeft: 20, 
    color: '#fff', 
    fontSize: 15, 
    fontFamily: 'Montserrat_700Bold', 
    alignSelf: 'center' 
  },

  Info:{
    flexDirection: 'row',
    width: 200,
    height: 70,
    borderRadius: 50,
    margin:-10,
    marginLeft:15,
    backgroundColor:'rgba(217, 217, 217, 0.7)',
    marginTop:75,
  },

  NomeMeta:{
    alignSelf: 'center', 
    marginLeft: 10 
  },
  
  ONG:{
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf:'center',
    marginLeft:5,
  },
  
  ONGPerfil:{
    alignSelf: 'center', 
    width:62, 
    resizeMode:'contain', 
    marginTop:-60,
  },

  BBlack:{
    backgroundColor:'black',
    width: 100,
    height: 70,
    borderRadius: 50,
    alignSelf:'center',
    marginRight:16,
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
});

export default CardONG;
