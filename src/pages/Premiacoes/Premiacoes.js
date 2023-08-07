import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import Cupom from '../../components/Cupom';

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

          <Text style={styles.H3}>Meus cupons</Text>

         {/*Componentes cupom*/}
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
            />
            
            <Cupom
                cupom="BeKind: R$15 na loja do site"
                desc="Para pedidos acima de R$45,00"
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
});
