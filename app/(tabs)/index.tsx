import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']}>
        <Text style={styles.titulo}>Bem vindo(a) ao TQT-App</Text>
        <Image
          source={require('../../assets/images/criancas.jpg')}
          style={styles.foto_perfil}
        />
        <Text style={styles.subtitulo}>Cuidando com Amor e Atenção</Text>
        <Text style={styles.info}>Aqui você encontra tudo o que precisa para o cuidado diário e em situações especiais.</Text>

        {/*Botões*/}
        <View style={styles.alinha_botoes}>

          {/*Procedimentos diários*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/procdiarios.png')}
                style={styles.foto_botao}
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Procedimentos diários</Text>
          </View>

          {/*Procedimentos de emergência*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/emergencia.png')}
                style={styles.foto_botao}
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Procedimentos de emergência</Text>
          </View>

          {/*Especificações da cânula*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/especificacoes.png')}
                style={styles.foto_botao}
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Especificações da cânula</Text>
          </View>

          {/*Materiais essenciais*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/essenciais.png')}
                style={styles.foto_botao}
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Materiais essenciais</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 10
  },
  container:{
    backgroundColor: 'white',
    gap: 18
  },
  foto_perfil:{
    alignSelf:'center',
    //width: '90%', 
    //height: 200,
    width: 250,
    height: 180,
    borderRadius: 50,
    paddingVertical: 10
  },
  subtitulo:{
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 20
  },
  info:{
    textAlign: 'center',
    fontSize: 15,
    padding: 'auto'
  },
  alinha_botoes:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    justifyContent:'space-evenly',
    alignContent: 'center',
  },
  foto_botao:{
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  botao_container:{
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  texto_botao:{
    textAlign: 'center',
    marginTop: 8,
    flexWrap: 'wrap', 
  }
});
