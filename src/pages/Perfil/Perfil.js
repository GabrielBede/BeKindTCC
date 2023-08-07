import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions, TouchableOpacity, Modal,
} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';


const statusBarHeight = StatusBar.currentHeight;
const { width } = Dimensions.get('window');


export default function Perfil({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  const [isLiked, setIsLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>

        {/*Informações do usuário*/}
        <View style={styles.Informacoes}>
          <TouchableOpacity disabled={true}>
            <Image
              style={styles.PerfilImage}
              source={require('../../img/Perfil.png')}
            />
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

        {/*Campos de configurações do perfil*/}
        <View style={styles.CamposContainer}>
          
          {/*Campo - Configurações*/}
          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes}>
              <View style={styles.CamposOpcoes}>
                <Feather style={styles.IconsOpcoes} name="settings" size={25} color={'#252525'}/>
                <Text style={styles.OpcoesText}>Configurações</Text>
              </View>
              <Feather style={styles.Seta} name="chevron-right" size={25} color={'#252525'}/>
            </TouchableOpacity>
          </View>

          {/*Campo - Notificações*/}
          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes} onPress={() => navigation.navigate('Notificacoes')}>
              <View style={styles.CamposOpcoes}>
                <Feather style={styles.IconsOpcoes} name="bell" size={25} color={'#252525'}/>
                <Text style={styles.OpcoesText}>Notificações</Text>
              </View>
              <Feather style={styles.Seta} name="chevron-right" size={25} color={'#252525'}/>
            </TouchableOpacity>
          </View>

          {/*Campo - Premiações*/}
          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes} onPress={() => navigation.navigate('Premiacoes')}>
              <View style={styles.CamposOpcoes}>
                <Feather style={styles.IconsOpcoes} name="award" size={25} color={'#252525'}/>
                <Text style={styles.OpcoesText}>Premiações</Text>
              </View>
              <Feather style={styles.Seta} name="chevron-right" size={25} color={'#252525'}/>
            </TouchableOpacity>
          </View>

          {/*Campo - Ajuda e feedback*/}
          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes} onPress={openModal}>
              <View style={styles.CamposOpcoes}>
                <Feather style={styles.IconsOpcoes} name="help-circle" size={25} color={'#252525'}/>
                <Text style={styles.OpcoesText}>Ajuda e feedback</Text>
              </View>
              <Feather style={styles.Seta} name="chevron-right" size={25} color={'#252525'}/>
            </TouchableOpacity>
          </View>

          {/*Campo - Sair*/}
          <View style={styles.Campos}>
            <TouchableOpacity style={styles.Componentes} onPress={() => navigation.navigate('Login')}>
              <View style={styles.CamposOpcoes}>
                <Feather style={styles.IconsOpcoes} name="log-out" size={25} color={'#252525'}/>
                <Text style={styles.OpcoesText}>Sair</Text>
              </View>
              <Feather style={styles.Seta} name="chevron-right" size={25} color={'#252525'}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal */}
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContentContainer}>
              <ScrollView
                style={styles.modalScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.modalScrollViewContent}>
                <View style={[styles.modalContent, { marginTop: 60 }]}>
                  <Text style={styles.modalText}>
                    <Text style={{ fontFamily: 'Montserrat_700Bold' }}>
                      Caro usuário,
                    </Text>{' '}
                    {'\n'}{'\n'}
                    Agradecemos por utilizar o aplicativo BeKind e por se
                    envolver ativamente na transformação social. Sua
                    contribuição e apoio são essenciais para combater a
                    desigualdade e melhorar a vida das pessoas em situação de
                    vulnerabilidade social, especialmente os moradores de rua.
                    {'\n'}{'\n'}
                    Estamos comprometidos em oferecer a você a melhor
                    experiência possível por meio de nossa plataforma. Sua
                    opinião é fundamental para continuarmos aprimorando nossos
                    serviços e garantir que atendamos às suas necessidades de
                    forma eficiente. Gostaríamos de receber seu feedback sobre o
                    aplicativo BeKind para que possamos continuar aprimorando e
                    adaptando nossos recursos às suas expectativas.
                    {'\n'}{'\n'}
                    Queremos saber sobre sua experiência ao usar o aplicativo.
                    Você encontrou facilmente as funcionalidades que buscava? A
                    interface do usuário foi intuitiva e amigável? Suas doações
                    financeiras foram processadas de forma segura e rápida? Seu
                    apoio a projetos sociais específicos foi efetivo? Os
                    recursos de fornecimento de alimentos e roupas para aqueles
                    que precisam atenderam às suas expectativas?
                    {'\n'}{'\n'}
                    Além disso, gostaríamos de ouvir suas sugestões sobre
                    possíveis melhorias. Existe alguma funcionalidade adicional
                    que você gostaria de ver em nosso aplicativo? Alguma ideia
                    para aumentar o alcance e o impacto do BeKind na comunidade?
                    Estamos abertos a todas as suas sugestões e ideias para
                    tornar nossa plataforma ainda mais eficaz e acessível.
                    {'\n'}{'\n'}
                    Agradecemos antecipadamente pelo seu tempo e dedicação em
                    fornecer seu feedback valioso. Sua opinião nos ajuda a
                    fortalecer nossa missão e a alcançar um maior número de
                    pessoas em situação de vulnerabilidade social. Juntos,
                    podemos fazer a diferença e construir uma sociedade mais
                    justa e solidária.
                    {'\n'}{'\n'}
                    Lembre-se: sua gentileza e apoio fazem toda a diferença.
                    Seja BeKind e inspire outras pessoas a se juntarem a nós
                    nessa jornada de transformação social.
                    {'\n'}{'\n'}
                    <Text style={{ fontFamily: 'Montserrat_700Bold' }}>
                      Atenciosamente
                    </Text>
                    {'\n'}
                    <Text style={{ fontFamily: 'Montserrat_700Bold' }}>
                      Equipe BeKind
                    </Text>
                  </Text>

                  <View style={{ paddingTop: 30 }}>
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={closeModal}>
                      <Text style={styles.modalButtonText}>Fechar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
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
    marginBottom: 15,
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
    marginBottom: 5,
  },

  Componentes: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    justifyContent: 'space-between',
  },

  CamposOpcoes:{
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },

  IconsOpcoes: {
    resizeMode: 'contain',
    width: 25,
  },

  OpcoesText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 15,
    marginLeft: 15,
  },
  Seta: {
    resizeMode: 'contain',
    width: 25,
  },

  modalScrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 80,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '92%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 80,
  },

  modalScrollView: {
    width: '100%',
  },

  modalText: {
    marginTop: 35,
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Montserrat_500Medium',
  },
  modalButton: {
    backgroundColor: '#252525',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
});
