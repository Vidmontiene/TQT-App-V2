import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Background } from '@react-navigation/elements';

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
            <TouchableOpacity onPress={() => router.push('/procedimentos')}>
              <MaterialIcons 
                name="health-and-safety" 
                size={48} 
                style={[styles.icon, {backgroundColor: "#F3E8FF"}]}  
                color="#A855F7"
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Procedimentos diários</Text>
          </View>

          {/*Procedimentos de emergência*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <MaterialIcons 
                name="warning-amber" 
                size={48} 
                style={[styles.icon, {backgroundColor: "#FEE2E2"}]} 
                color="#EF4444"
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Procedimentos de emergência</Text>
          </View>

          {/*Especificações da cânula*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <MaterialIcons 
                name="info-outline" 
                size={48} 
                style={[styles.icon, {backgroundColor: "#DBEAFE"}]} 
                color="#3B82F6"
              />
            </TouchableOpacity>
            <Text style={styles.texto_botao}>Especificações da cânula</Text>
          </View>

          {/*Materiais essenciais*/}
          <View style={styles.botao_container}>
            <TouchableOpacity>
              <AntDesign
                name="medicine-box" 
                size={48} 
                style={[styles.icon, {backgroundColor: "#DCFCE7"}]} 
                color="#22C55E"
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
    paddingBottom: 10
  },
  container:{
    backgroundColor: 'white',
    gap: 18
  },
  foto_perfil:{
    alignSelf:'center',
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
    alignItems: 'flex-start',
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
  },
  icon:{
    padding: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  }
});
