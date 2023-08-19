import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: -23.4545815,
    longitude: -46.5425497,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

  });

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('Permitir acessos à localização');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  }

  useEffect (() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
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

      <MapView style={styles.map} region={mapRegion}>
      <Marker coordinate={mapRegion} title='Sua localização atual' />
      </MapView>

          <TouchableOpacity onPress={userLocation}>
            <Text style = {styles.Botao} value={''}> Cadastrar vulnerável</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  Header:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:-34.5,
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

  map: {
    marginTop:-30,
    width: '100%',
    height: '60%',
  },

  Botao:{
    margin:25,
    backgroundColor: "black",
    borderRadius: 8,
    padding: 13,
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginTop: 30,
    textAlign:'center',
    shadowColor: '#black',
    shadowOpacity: 0.1,
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowRadius: 4,
    elevation: 3, 
  },
});
