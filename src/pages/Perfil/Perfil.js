import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';


const statusBarHeight = StatusBar.currentHeight;
const { width } = Dimensions.get('window');

export default function Perfil({navigation}) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
      
        {/* Header do aplicativo */}
        <View style={styles.Header}>
          <TouchableOpacity>
            <Image style={styles.Logo} source={require('../../img/Logo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.PerfilText}>
          <Text style={styles.H3}>Perfil</Text>
        </View>

        {/*Informações do usuário*/}
        <View style={styles.Informacoes}>
          <TouchableOpacity disabled={true}>
            <Image style={styles.PerfilImage} source={require('../../img/Perfil.png')} />
            <Text style={styles.PerfilName}>Gabriel Bedê</Text>
            <Text style={styles.PerfilEmail}>bedegabriel14@gmail.com</Text>
          </TouchableOpacity>
        </View>

        {/*Botão Editar - Informações do usuário*/}
        <View style={styles.BotaoEditar}>
          <TouchableOpacity style={styles.EditarButton}>
            <Text style={styles.EditarButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>


        {/*Campos de configurações*/}
        <View style={styles.CamposContainer}>
          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes}>
            <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center',}}>
                <Feather style={styles.IconsOpcoes} name='settings' size={25} color={"#252525"} />
              <Text style={styles.OpcoesText}>Configurações</Text>
            </View>
                <Feather style={styles.Seta} name='chevron-right' size={25} color={"#252525"} />
            </TouchableOpacity>
          </View>

          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes} onPress={() => navigation.navigate('Notificacoes')}>
            <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center',}}>
                <Feather style={styles.IconsOpcoes} name='bell' size={25} color={"#252525"}/>
              <Text style={styles.OpcoesText}>Notificações</Text>
            </View>
                <Feather style={styles.Seta} name='chevron-right' size={25} color={"#252525"} />
            </TouchableOpacity>
          </View>

          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes}>
            <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center',}}>
                <Feather style={styles.IconsOpcoes} name='award' size={25} color={"#252525"} />
              <Text style={styles.OpcoesText}>Premiações</Text>
            </View>
                <Feather style={styles.Seta} name='chevron-right' size={25} color={"#252525"} />
            </TouchableOpacity>
          </View>

          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes}>
            <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center',}}>
                <Feather style={styles.IconsOpcoes} name='help-circle' size={25} color={"#252525"} />
              <Text style={styles.OpcoesText}>Ajuda e feedback</Text>
            </View>
                <Feather style={styles.Seta} name='chevron-right' size={25} color={"#252525"} />
            </TouchableOpacity>
          </View>

          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes}>
            
            <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center',}}>
                <Feather style={styles.IconsOpcoes} name='log-out' size={25} color={"#252525"} />
              <Text style={styles.OpcoesText}>Sair</Text>
            </View>

                <Feather style={styles.Seta} name='chevron-right' size={25} color={"#252525"} />
            </TouchableOpacity>
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

  ScrollView: {
    marginBottom: 60,
  },

  Header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -12,
    alignSelf: 'center',
    alignItems: 'center',
  },

  Logo: {
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  PerfilText: {
    marginRight: 30,
    alignItems: 'center',
    marginLeft: 30,
    marginBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  H3: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },

  Informacoes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -12,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  PerfilImage: {
    width: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  PerfilName: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
    marginTop: -20,
    textAlign: 'center',
  },

  PerfilEmail: {
    fontFamily: 'Montserrat_500Medium',
    marginTop: 5,
    fontSize: 15,
  },

  BotaoEditar: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom:15,
  },

  EditarButton: {
    backgroundColor: '#007CE0',
    width: 130,
    height: 37,
    borderRadius: 10,
  },

  EditarButtonText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
  },

  CamposContainer: {
    marginTop: 20,
  },

  Campos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 5
    },

  Componentes: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    justifyContent: 'space-between',
  },

  IconsOpcoes: {
    resizeMode: 'contain',
    width: 25,
  },

  OpcoesText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 15,
    marginLeft:15,

  },
  Seta: {
    resizeMode: 'contain',
    width: 25,
  },
});
