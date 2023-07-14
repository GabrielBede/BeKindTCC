import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

const slides = [
  {
    key: '1',
    title: 'BeKind',
    text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.',
    image: require('../../img/Carrossel.png'),
  },
  {
    key: '2',
    title: 'BeKind | Projeto',
    text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.',
    image: require('../../img/Carrossel.png'),
  },
  {
    key: '3',
    title: 'BeKind | Propósito',
    text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.',
    image: require('../../img/Carrossel.png'),
  }
];



export default function App (){
  
  const [showHome,setShowHome] = useState(false);
  let [fontsLoaded] = useFonts({Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold});

  function renderSlides({item}){
     return(
       <View style={{flex:1}}>
         <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '400%',
            width: '100%',
          }}
        />  
        
        <Text 
          style={{
            color: '#252525',
            fontSize: 30,
            fontFamily: 'Montserrat_700Bold'
          }}>
          {item.title}
        </Text>
        
        <Text style={{
            color: '#252525',
            fontSize: 15,
            fontFamily: 'Montserrat_500Medium'
          }}>
          {item.text}
         </Text>
       </View>
       )
    }

if(showHome){
   return <Text>ENTROU NA HOME</Text>
 } else{
  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyLe={{
       backgroundColor: '#009CFF',
       width: 30
    }}
  />
  );
  }
}

