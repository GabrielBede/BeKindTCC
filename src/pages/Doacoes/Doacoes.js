import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, Dimensions,TouchableOpacity, FlatList} from 'react-native';
import { useFonts,  Montserrat_400Regular,  Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

import CardONG from '../../components/CardONG';

  const statusBarHeight = StatusBar.currentHeight;
  const { width } = Dimensions.get('window');

export default function Doacoes() {
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

              <Text style={styles.H3}>Doações</Text>

        {/*Categorias*/}
        <View>
          <FlatList
            ref={(flatList) => { this.flatList = flatList; }} style={{backgroundColor: '#fff', paddingLeft:25, marginBottom: 20}}
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

          {/*Cards*/}
          {/*Card Anjos da Rua*/}
        <CardONG
          imgCardSource={require('../../img/BgONGAnjosdaRua.png')}
          ongPerfilSource={require('../../img/PerfilAnjosdaRua.png')}
          nome="Anjos da Rua"
          meta="Meta: R$2.000"
          descricao="Ajude famílias necessitadas"
        />

          {/*Card SPInvisivel*/}
        <CardONG
          imgCardSource={require('../../img/BgONGSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          meta="Meta: R$7.000"
          descricao="O frio mais intenso é o da indiferença."
        />

          {/*Card Olhar de Bia*/}
        <CardONG
          imgCardSource={require('../../img/BgONGOlhardeBia.png')}
          ongPerfilSource={require('../../img/PerfilOlhardeBia.png')}
          nome="Olhar de Bia"
          meta="Meta: R$1.350"
          descricao="Educação para eliminar a miséria."
        />

          {/*Card ONG Amamos*/}
        <CardONG
          imgCardSource={require('../../img/BgONGAmamos.png')}
          ongPerfilSource={require('../../img/PerfilONGAmamos.png')}
          nome="ONG Amamos"
          meta="Meta: R$350"
          descricao="Acolhimento para crianças."
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

  TextCategorias:{
    color: 'white', 
    fontSize: 13, 
    fontFamily: 'Montserrat_400Regular', 
    alignSelf: 'center', 
    marginTop: '-35%' 
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
    backgroundColor:'#007CE0',
    borderRadius:15,
  },

  ScrollView: {
    marginBottom: 60,
  },
});