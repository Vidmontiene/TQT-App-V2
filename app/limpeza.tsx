import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '@/estilos/passos';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function Limpeza() {

  const [subcanula, setSubcanula] = useState(false);  
  const [luva, setLuva] = useState(false); 
  const [escova, setEscova] = useState(false); 
  const [gaze, setGaze] = useState(false); 
  const [agua, setAgua] = useState(false); 
  const [sabao, setSabao] = useState(false); 

  const player = useVideoPlayer(
    require('@/assets/videos/video3.mp4'),
  );
      
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>

        {/*Aviso*/}
        <View style={styles.container_aviso}>
          <View style={styles.icon_titulo}>
            <MaterialIcons name="info-outline" size={30} color='#12B9ED'/>
            <Text style={styles.titulo_aviso}> Aviso</Text>
          </View>
          <Text style={styles.descricao_passo}>Esse procedimento deve ser feito em cânulas Shiley e Metálica</Text>
        </View>

        {/*Vídeo*/}
        <Text style={styles.titulo}>Vídeo Demonstrativo</Text>
        <VideoView
          style={styles.video}
          nativeControls={true}
          player={player}
          contentFit="contain"
          fullscreenOptions={{
            enable: true,
          }}
        />

        <Text style={styles.titulo}>Materiais</Text>

        {/*Água*/}
        <View style={styles.check}>
          <CheckBox
            checked={agua}
            onPress={() => setAgua(!agua)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Água</Text>
        </View>

        {/*Sabão*/}
        <View style={styles.check}>
          <CheckBox
            checked={sabao}
            onPress={() => setSabao(!sabao)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Sabão neutro</Text>
        </View>

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
          <Text style={styles.item}>Gaze</Text>
        </View>

        {/*Luvas*/}
        <View style={styles.check}>
          <CheckBox
            checked={luva}
            onPress={() => setLuva(!luva)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Luvas</Text>
        </View>

        {/*Escova*/}
        <View style={styles.check}>
          <CheckBox
            checked={escova}
            onPress={() => setEscova(!escova)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Escovinha</Text>
        </View>

        {/*Subcanula*/}
        <View style={styles.check}>
          <CheckBox
            checked={subcanula}
            onPress={() => setSubcanula(!subcanula)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Subcânula de reserva</Text>
        </View>

        <Text style={[styles.titulo, {marginTop: 10}]}>Passo a Passo</Text>

        {/*Passo 1*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>1</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Preparar</Text>
            <Text style={styles.descricao_passo}>Lave as mãos e coloque as luvas. Prepare todos os materiais necessários em uma área limpa.</Text>
          </View>
        </View>

        {/*Passo 2*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>2</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Executar</Text>
            <Text style={styles.descricao_passo}>Remova a cânula interna. Lave-a com água e sabão neutro. Use a escovinha para limpar o interior. Enxágue bem e seque com gaze.</Text>
          </View>
        </View>

        {/*Passo 3*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>3</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Finalizar</Text>
            <Text style={styles.descricao_passo}>Insira a cânula interna limpa na cânula externa. Verifique se está bem encaixada. Descarte os materiais usados de forma segura.</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}