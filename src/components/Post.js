import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ImageBackground} from 'react-native';
import { useState } from 'react';

const Post = ({ongPerfilSource, ongPostSource, nome, descricao }) => {
    const [isLiked, setIsLiked] = useState(false);
   
return (
    <View>
      {/*Post*/}
      <TouchableOpacity>
        <View style={styles.PerfilBlog}>
          <Image style={styles.PostPerfil} source={ongPerfilSource} />
          <Text style={styles.PostUser}>{nome}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.Post}>
        <ImageBackground style={styles.ImagePost} source={ongPostSource}>
          {/* Curtir Post */}
          <View style={styles.Curtir}>
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
              <Image
                style={styles.Like}
                source={
                  isLiked
                  ? require('../img/CurtirBlue.png')
                  : require('../img/Curtir.png')
                }
                />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Texto do Post */}
      <View style={styles.PostTexto}>
        <Text style={styles.PBlack}>
          <Text style={styles.PBoldBlack}>{nome}: </Text>
          {descricao}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  PerfilBlog:{
    flexDirection:'row', 
    marginLeft:35, 
    marginBottom:10,
  },

  Post: {
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '85%',
    height: 362,
    borderRadius: 25,
    overflow: 'hidden',
  },
  
  ImagePost: {
    width: '100%',
    height: '100%',
    position: 'relative', 
  },
  
  PostPerfil:{
    alignSelf: 'center', 
    width:35, 
    height:35,
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

  Curtir: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 8,
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Post;