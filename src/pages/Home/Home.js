import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import { useFonts,  Montserrat_400Regular,  Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CardONG from '../../components/CardONG';
import Post from '../../components/Post';

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

  const handleDonateNow = () => {
    // Aqui, vamos navegar para a tela de doação (DonateScreen)
    navigation.navigate('InfoONG');
  };

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


        {/*Post - SP Invisivel*/}
        <Post
          ongPostSource={require('../../img/PostSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          descricao="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
        />

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

  CategoriasView:{
    marginRight:30, 
    alignItems:'center',
    marginTop: 10,
    marginLeft:30, 
    marginBottom:15, 
    flexDirection:'row', 
    justifyContent:'space-between'
  },

    BlogView:{
    marginRight:30, 
    alignItems:'center',
    marginTop: 15,
    marginLeft:30,
    marginBottom:15,
    flexDirection:'row', 
    justifyContent:'space-between'
  },

  Seta:{
    width:37, 
    resizeMode:'contain',
  },

  IconCategorias:{
     width: 25, 
     resizeMode: 'contain', 
     alignSelf: 'center', 
     marginTop: '-15%' 
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