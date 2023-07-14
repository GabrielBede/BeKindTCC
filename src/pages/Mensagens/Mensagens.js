import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, TouchableOpacity, TextInput} from 'react-native';
import {
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_500Medium,
  Montserrat_700Bold, 
} from '@expo-google-fonts/montserrat';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Conversa from '../../components/Conversa';


const statusBarHeight = StatusBar.currentHeight;

export default function Mensagens() {
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


            <Text style={styles.H3}>Chat</Text>


          {/*Input - Pesquisar*/}
          <View style={styles.InputArea}>
            <Feather style={styles.InputIcon} name='search' size={22} color={'#7E7E7E'}/>
            <TextInput style={styles.Input} placeholder="Pesquisar ONG/Voluntário" placeholderTextColor='#7E7E7E' onChangeText={(text) => (text)} underlineColorAndroid="transparent"/>
          </View>


          {/*Section ONG's*/}
          <View style={styles.IconText}>
            <Image style={styles.Icon} source={require('../../img/MsgVoluntarios.png')} />
            <Text style={styles.PBold}>ONG's</Text>
          </View>


          {/*1. Conversa ONG*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/PerfilAnjosdaRua.png')}
                nome="Anjos da Rua"
                msg="Olá"
            />
          </TouchableOpacity>

          {/*2. Conversa ONG*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/PerfilSPInvisivel.png')}
                nome="SP Invisível"
                msg="Olá"
            />
          </TouchableOpacity>

          {/*3. Conversa ONG*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/PerfilOlhardeBia.png')}
                nome="Olhar de Bia"
                msg="Olá"
            />
          </TouchableOpacity>

          {/*4. Conversa ONG*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/PerfilONGAmamos.png')}
                nome="ONG Amamos"
                msg="Olá"
            />
          </TouchableOpacity>


          {/*Section Voluntários*/}
          <View style={styles.IconText2}>
            <Image style={styles.Icon} source={require('../../img/MsgVoluntarios.png')} />
            <Text style={styles.PBold}>Voluntários</Text>
          </View>


          {/*1. Conversa Voluntário*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/Pessoa1.png')}
                nome="Mariana"
                msg="Olá"
            />
          </TouchableOpacity>

          {/*2. Conversa Voluntário*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/Pessoa2.png')}
                nome="Pedro"
                msg="Olá"
            />
          </TouchableOpacity>
          
          
          {/*3. Conversa Voluntário*/}
          <TouchableOpacity>
            <Conversa
                pessoaSource={require('../../img/Pessoa3.png')}
                nome="João"
                msg="Olá"
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
    marginBottom: 20,
    fontSize: 20, 
    fontFamily:'Montserrat_700Bold',
  },

  PBold: {
    fontFamily:'Montserrat_700Bold',
    fontSize: 15,
    marginLeft: 10,
    color: '#7E7E7E',
  },

  InputArea: {
    flex: 1,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#7E7E7E',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},

  InputIcon: {
    padding: 10,
},

  Input: {
    flex: 0.9,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontFamily:'Montserrat_400Regular',

},

  IconText:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 70
  },

  IconText2:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 35
  },

  ScrollView: {
    marginBottom: 60,
  },

  Icon:{
    height: 14,
    width: 16
  },
});