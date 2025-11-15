import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';
import { styles } from '@/estilos/passos'
import { ResizeMode, Video } from 'expo-av';

export default function Estoma() {

  const [soro, setSoro] = useState(false);  
  const [luva, setLuva] = useState(false); 
  const [gaze, setGaze] = useState(false); 
  const [antisseptico, setAntisseptico] = useState(false); 
      
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']}>
            
        {/*Vídeo*/}
        <Text style={styles.titulo}>Vídeo Demonstrativo</Text>
        <Video
            style={styles.video}
            source={require('@/assets/videos/mock.mp4')}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
        />

        <Text style={styles.titulo}>Materiais</Text>

        {/*Gaze*/}
        <View style={styles.check}>
          <CheckBox
            checked={gaze}
            onPress={() => setGaze(!gaze)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Gaze estéril</Text>
        </View>

        {/*Soro*/}
        <View style={styles.check}>
          <CheckBox
            checked={soro}
            onPress={() => setSoro(!soro)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Soro fisiológico</Text>
        </View>

        {/*Antisséptico*/}
        <View style={styles.check}>
          <CheckBox
            checked={antisseptico}
            onPress={() => setAntisseptico(!antisseptico)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Antisséptico</Text>
        </View>

        {/*Luva*/}
        <View style={styles.check}>
          <CheckBox
            checked={luva}
            onPress={() => setLuva(!luva)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Luvas de procedimento</Text>
        </View>

        <Text style={[styles.titulo, {marginTop: 10}]}>Passo a Passo</Text>

        {/*Passo 1*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>1</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Preparar</Text>
            <Text style={styles.descricao_passo}>Reúna todos os materiais necessários e lave as mãos com água e sabão.</Text>
          </View>
        </View>

        {/*Passo 2*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>2</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Executar</Text>
            <Text style={styles.descricao_passo}>Umedeça a gaze com soro fisiológico e limpe a área ao redor do estoma com movimentos suaves. Aplique o antisséptico conforme orientação médica.</Text>
          </View>
        </View>

        {/*Passo 3*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>3</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Finalizar</Text>
            <Text style={styles.descricao_passo}>Seque a área com cuidado usando uma nova gaze estéril e coloque um novo protetor de estoma, se necessário.</Text>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}