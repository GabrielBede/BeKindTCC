import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium,Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

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

        <Text style={styles.H3}>Blog</Text>

        {/*Post - SP Invisivel*/}
        <Post
          ongPostSource={require('../../img/PostSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          descricao="❗️Para doações de alimento -Colégio Júlio Mesquita de segunda à sexta feira das 08h às 18h... Ler mais"
        />
        
        <Post
          ongPostSource={require('../../img/PostSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          descricao="❗️Para doações de alimento -Colégio Júlio Mesquita de segunda à sexta feira das 08h às 18h... Ler mais"
        />

        <Post
          ongPostSource={require('../../img/PostSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          descricao="❗️Para doações de alimento -Colégio Júlio Mesquita de segunda à sexta feira das 08h às 18h... Ler mais"
        />

        <Post
          ongPostSource={require('../../img/PostSPInvisivel.png')}
          ongPerfilSource={require('../../img/PerfilSPInvisivel.png')}
          nome="SP Invisível"
          descricao="❗️Para doações de alimento -Colégio Júlio Mesquita de segunda à sexta feira das 08h às 18h... Ler mais"
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

  H3:{
    marginLeft: 30,
    marginTop:-45,
    marginBottom: 15,
    fontSize: 20, 
    fontFamily:'Montserrat_700Bold',
  },
});