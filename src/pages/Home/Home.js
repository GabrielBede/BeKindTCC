import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_500Medium,
  Montserrat_700Bold, 
} from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CardONG from '../../components/CardONG';


const statusBarHeight = StatusBar.currentHeight;
const { width } = Dimensions.get('window');


export default function Home() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
      Montserrat_400Regular, 
      Montserrat_500Medium,
      Montserrat_700Bold, 
  });
  const [isLiked, setIsLiked] = useState(false);

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


        {/*Apresentação do usuário*/}
        <Text style = {styles.H1}><Text>Olá</Text> <Text style={{fontFamily: 'Montserrat_700Bold'}}>Gabriel,</Text></Text>
        <Text style = {styles.Text}>Seja gentil e doe para quem{'\n'}precisa.</Text>


        {/*Seta -> Doações*/}
        <TouchableOpacity>
            <View style={styles.Doacoes}>
              <Text style={styles.H3}>Doações</Text>
              <Image style={styles.Seta} source={require('../../img/SetaD.png')}/>
            </View>
        </TouchableOpacity>
 

        {/*Card SPInvisivel*/}
        <CardONG
          imgCardSource={require('../../img/BgONGSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          meta="Meta: R$7.000"
          descricao="O frio mais intenso é o da indiferença."
        />


        {/*Seta -> Categorias*/}
        <TouchableOpacity>
          <View style={styles.Doacoes}>
            <Text style={styles.H3}>Categorias</Text>
            <Image style={styles.Seta} source={require('../../img/SetaD.png')}/>
          </View>
        </TouchableOpacity>


        {/*Categorias*/}
        <View>
          <FlatList
            ref={(flatList) => { this.flatList = flatList; }} style={{backgroundColor: '#fff', paddingLeft:25}}
            horizontal={true}
            showsHorizontalScrollIndicator={false} // Remover barra de rolagem horizontal
            decelerationRate={0}
            snapToInterval={width - 100}
            snapToAlignment={"center"}
            data={[
              { image: require('../../img/IconAlimento.png'), text: 'Alimento' },
              { image: require('../../img/IconRoupa.png'), text: 'Roupas' },
              { image: require('../../img/IconDinheiro.png'), text: 'Dinheiro' },
              { image: require('../../img/IconMoradia.png'), text: 'Moradia' },
              { image: require('../../img/IconUtensilios.png'), text: 'Utensílios' },
              { image: require('../../img/IconVoluntario.png'), text: 'Voluntário' },
            ]}
          renderItem={({ item }) => (
              <TouchableOpacity style={styles.BBlue}>
                <Image style={styles.IconCategorias} source={item.image} />
                <Text style={styles.TextCategorias}>{item.text}</Text>
              </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
         </View>
        
        
        {/*Seta -> Blog*/}
        <TouchableOpacity>
              <View style={styles.Doacoes}>
                <Text style={styles.H3}>Blog</Text>
                <Image style={styles.Seta} source={require('../../img/SetaD.png')}/>
              </View>
        </TouchableOpacity>


        {/*Usuário do Blog*/}
        <TouchableOpacity>
          <View style={styles.PerfilBlog}>
            <Image style={styles.PostPerfil} source={require('../../img/PerfilSPInvisivel.png')} />
            <Text style={styles.PostUser}>SP Invisível</Text>
          </View>
        </TouchableOpacity>


        {/*Imagem do Post*/}
        <View style={styles.Post}>
          <View style={styles.InnerPost}>
            <ImageBackground style={styles.ImagePost} source={require('../../img/PostSPInvisivel.png')}>
              <View>
                <View style={styles.Header}>
                  
                  {/*Curtir Post*/}
                  <View style={styles.Curtir}>
                    <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                      <Image style={styles.Like} 
                        source={isLiked ? require('../../img/CurtirBlue.png') : 
                        require('../../img/Curtir.png')}
                      />
                    </TouchableOpacity>
                  </View>
                
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>


            {/*Texto do Post*/}
            <View style={styles.PostTexto}>
                <Text style={styles.PBlack}><Text style={styles.PBoldBlack}>SP Invisível:</Text> Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>
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
    marginTop:-65,
    marginBottom:-20,
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


  H1:{
    marginTop:-40,
    marginLeft: 30,
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular', 
  },

  H3:{
    fontSize:20, 
    fontFamily:'Montserrat_700Bold',
  },

  PBoldBlack: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 14,
    color: '#000',
  },

  PBlack:{
    color: '#000',
    fontSize:14,
    fontFamily: 'Montserrat_400Regular',
  },

  Text:{
    marginLeft: 30,
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular', 
  },
  
  TextCategorias:{
    color: 'white', 
    fontSize: 13, 
    fontFamily: 'Montserrat_400Regular', 
    alignSelf: 'center', 
    marginTop: '-35%' 
  },
  
  Doacoes:{
    marginRight:30, 
    alignItems:'center',
    marginTop: 10,
    marginLeft:30, 
    marginBottom:5, 
    flexDirection:'row', 
    justifyContent:'space-between'
  },

  Seta:{
    width:37, 
    resizeMode:'contain',
  },

  PerfilBlog:{
    flexDirection:'row', 
    marginLeft:30, 
    marginTop: -70
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


  IconCategorias:{
     width: 25, 
     resizeMode: 'contain', 
     alignSelf: 'center', 
     marginTop: '-15%' 
  },

  InnerPost:{
    borderRadius: 25, 
    overflow: 'hidden', 
    width:'100%', 
    height:'100%',
  },

  ImagePost:{
    width: '100%', 
    height:'100%', 
  },
  
  PostPerfil:{
    alignSelf: 'center', 
    width:33, 
    resizeMode:'contain',
  },

  PostUser:{
    alignSelf:'center', 
    fontFamily:'Montserrat_700Bold', 
    fontSize:14, 
    marginLeft:8, 
  },
  
  Like:{
    alignSelf: 'center', 
    width: 20, 
    resizeMode: 'contain'
  },

  PostTexto:{
    margin:30, 
    marginTop:15, 
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

  BBlue:{
    width:85,
    height:85,
    marginLeft:5,
    marginRight:5,
    marginTop: 0,
    backgroundColor:'#007CE0',
    borderRadius:15,
  },

  ScrollView: {
    marginBottom: 60,
  },
});