import { useState } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, TextInput,
} from 'react-native';
import {
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_500Medium,
  Montserrat_700Bold, 
} from '@expo-google-fonts/montserrat';
import { Feather } from '@expo/vector-icons';

export default function Login ({navigation}) {
    
  let [fontsLoaded] = useFonts({
      Montserrat_400Regular, 
      Montserrat_500Medium,
      Montserrat_700Bold, 
  });
  var [Olho, setOlho] = useState(true);


const [voluntarioPressionado, setVoluntarioPressionado] = useState(false);
const [ongPressionado, setOngPressionado] = useState(false);
const [tipoUsuario, setTipoUsuario] = useState('voluntario');
const [placeholder, setPlaceholder] = useState('Nome de usuário/CPF');

function handleVoluntarioPress() {
  if (!voluntarioPressionado) {
    setVoluntarioPressionado(true);
    setOngPressionado(false);
    setTipoUsuario('voluntario');
    setPlaceholder('Nome de usuário/CNPJ');
  }
}

function handleOngPress() {
  if (!ongPressionado) {
    setOngPressionado(true);
    setVoluntarioPressionado(false);
    setTipoUsuario('ong');
    setPlaceholder('Nome de usuário/CPF');
  }
}



  return (
    <View style={{backgroundColor:'white', width:'100%', height:'100%',}}>
      <View style={styles.container}>
        <Image
          style={styles.Logo}
          source={require('../../img/LogoCompleta.png')}
        />
        <View style={styles.Login}>
          <TouchableOpacity
            style={[
              styles.Selecao1,
              voluntarioPressionado && {
                backgroundColor: 'white',
                borderColor: 'black',
              },
            ]}
            onPress={handleOngPress}>

            <Text
              style={{
                fontFamily: 'Montserrat_700Bold',
                fontSize: 15,
                color: voluntarioPressionado ? 'black' : 'white',
                display:'flex',
                padding:5,
                textAlign:'center',
              }}>
              {' '}
              Voluntário
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.Selecao2,
              voluntarioPressionado && {
                backgroundColor: 'black',
                borderColor: 'black',
              },
            ]}
            onPress={handleVoluntarioPress}>
            <Text
              style={{
                fontFamily: 'Montserrat_700Bold',
                fontSize: 15,
                color: voluntarioPressionado ? 'white' : 'black',
                display:'flex',
                padding:5,
                textAlign:'center',
              }}>
              {' '}
              ONG
            </Text>
          </TouchableOpacity>

              
            </View>


            <Text style={styles.Text}>Entrar</Text>

          <View style={styles.InputArea}>
            <Feather style={styles.IconsOpcoes} name='user' size={23} color={"#7E7E7E"} />
            <TextInput style = {styles.Input} placeholder={placeholder} placeholderTextColor='#7E7E7E'/>
          </View>

        <View style={styles.InputAreaSenha}>
          <Feather style={styles.IconsOpcoes} name='lock' size={23} color={"#7E7E7E"} />
          <TextInput style={styles.Input} placeholder='Senha' placeholderTextColor='#7E7E7E' value={''} onChangeText={ (text) => setSenha(text)} secureTextEntry={Olho}/>

          <TouchableOpacity style={styles.Icon} onPress={() => setOlho(!Olho)}> 
            <Feather style={{marginLeft: -20, }} name={Olho ? 'eye-off' : 'eye'} color='#7E7E7E' size={24}/>
          </TouchableOpacity>
        </View>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style = {styles.Botao} value={''}> Entrar</Text>
          </TouchableOpacity>

          
          <TouchableOpacity onPress={() => navigation.navigate ('Cadastro')}> 
            <Text style = {styles.Paragrafo1}> <Text>Não possui cadastro?</Text> <Text style={{fontFamily: 'Montserrat_700Bold', color:'#007CE0'}}>Cadastre-se!</Text> </Text>
          </TouchableOpacity>

        <View style={styles.container2}>
          <View style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.Paragrafo2}>
                <Text>Esqueceu a senha?</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>



        </View>
      </View>
 
  );
}






const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'white',
  },

  container2: {
  flex: 1,
  justifyContent: 'flex-end',
},

  content: {
  alignItems: 'center',
  paddingBottom: 30,
},
  Paragrafo2: {
  fontFamily: 'Montserrat_400Regular',
  fontSize: 15,
  color: '#7E7E7E',
  marginTop: 15,
  textAlign: 'center',
},

  Logo: {
    width: 130,
    height: 130,
    resizeMode:'contain',
    marginTop:65,
  },

  Paragrafo1: {
    fontFamily: 'Montserrat_400Regular', 
    fontSize: 15,
    color: 'black',
    marginTop: 15,
    textAlign:'right',
  },  

   
  Text: {
    fontFamily: 'Montserrat_700Bold', 
    fontSize: 30,
    color: 'Black',
    marginTop:40,
    
  },

  IconsOpcoes:{
    marginRight:10,
  },

  InputArea: {
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 20,
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular', 
    backgroundColor: 'white',
    marginTop: 20,
    color: 'black', 
    borderColor:'#7E7E7E',
    borderWidth:1,
    alignItems:'center',
},

  InputAreaSenha: {
    paddingLeft: 20,
    flexDirection: 'row',
    padding: 9,
    borderRadius: 10,
    fontFamily: 'Montserrat_400Regular', 
    backgroundColor: 'white',
    marginTop: 20,
    color: 'black', 
    borderColor:'#7E7E7E',
    borderWidth:1,
    alignItems:'center',

},


  Input: {
    width: '85%',
    color: 'black',
    fontFamily: 'Montserrat_400Regular', 
    outline: 'none'

},

  Botao:{
    backgroundColor: "black",
    borderRadius: 8,
    padding: 13,
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginTop: 30,
    textAlign:'center',
  },

  Login:{
    display:'flex',
    width:'100%',
    flexDirection:'row',
    marginTop:25,
  },  

  Selecao1:{
    display:'flex',
    backgroundColor: "black",
    borderRadius: 8,
    padding: 10,
    color: 'white',
    fontFamily: 'Montserrat_400Regular',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign:'center',
    width:'50%',
    borderColor:'Black',
    borderWidth:1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight:'none',
    borderRightColor:'black',
  },
  Selecao2:{
    display:'flex',
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    color: 'white',
    fontFamily: 'Montserrat_400Regular',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign:'center',
    width:'50%',
    borderColor:'Black',
    borderWidth:1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft:'none',
    borderLeftColor:'black',
  },
  

});
