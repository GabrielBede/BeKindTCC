import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import BlueSwitch from '../../components/BlueSwitch';

const statusBarHeight = StatusBar.currentHeight;
const { width } = Dimensions.get('window');

export default function Perfil() {
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
          <Text style={styles.H3}>Notificações</Text>
        </View>

        {/* Campos de configurações */}
        <View style={styles.CamposContainer}>
          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>Alerta de vulnerável</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
          </View>

          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>Blog</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
          </View>

          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>Eventos</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
          </View>

          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>Mensagens de ONG’s</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
          </View>

          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>Mensagens de Voluntários</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
          </View>

          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>ONG’s próximas</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
          </View>

          <View style={styles.Campos}>
            <View style={styles.Componentes}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Feather name='bell' size={23} color={"#007CE0"} />
                <Text style={styles.P}>ONG’s que você segue</Text>
              </View>
            </View>
            <BlueSwitch style={{ marginLeft: 30 }} />
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
  
  H3: {
    marginLeft: 30,
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  
  CamposContainer: {
    marginTop: 60,
  },
  
  Campos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  Componentes: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    
  },
  
  P: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    marginLeft: 15,
  },
});
