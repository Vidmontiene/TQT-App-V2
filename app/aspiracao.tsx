import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';
import { styles } from '@/estilos/passos'
import { VideoView, useVideoPlayer } from 'expo-video';
import { router } from 'expo-router';

export default function Aspiracao() {

  const [soro, setSoro] = useState(false);  
  const [luva, setLuva] = useState(false); 
  const [aspirador, setAspirador] = useState(false); 
  const [sonda, setSonda] = useState(false); 
  const [agua, setAgua] = useState(false); 
  const [recipiente, setRecipiente] = useState(false); 

  const player = useVideoPlayer(
    require('@/assets/videos/video2.mp4'),
  );
      
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
          
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

        {/*Aspirador*/}
        <View style={styles.check}>
          <CheckBox
            checked={aspirador}
            onPress={() => setAspirador(!aspirador)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Aspirador</Text>
        </View>

        {/*Sonda*/}
        <View style={styles.check}>
          <CheckBox
            checked={sonda}
            onPress={() => setSonda(!sonda)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Sonda de aspiração</Text>
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
          <Text style={styles.item}>Luvas estéreis</Text>
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

        {/*Água e Sabão*/}
        <View style={styles.check}>
          <CheckBox
            checked={agua}
            onPress={() => setAgua(!agua)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Água e sabão</Text>
        </View>

        {/*Recipiente*/}
        <View style={styles.check}>
          <CheckBox
            checked={recipiente}
            onPress={() => setRecipiente(!recipiente)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Recipiente para descarte</Text>
        </View>

        <Text style={[styles.titulo, {marginTop: 10}]}>Passo a Passo</Text>

        {/*Passo 1*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>1</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Preparar</Text>
            <Text style={styles.descricao_passo}>Lave as mãos com água e sabão, prepare o aspirador e a sonda, e verifique a necessidade de ventilação mecânica.</Text>
          </View>
        </View>

        {/*Passo 2*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>2</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Executar</Text>
            <Text style={styles.descricao_passo}>Introduza a sonda o necessário para passar a cânula e vá retirando em movimento circular. Repita se necessário, monitorando a saturação.</Text>
          </View>
        </View>

        {/*Passo 3*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>3</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Finalizar</Text>
            <Text style={styles.descricao_passo}>Descarte a sonda, lave as mãos, e registre o procedimento, incluindo secreções e intercorrências.</Text>
          </View>
        </View>

        {/*Botão de Registro*/}
        <TouchableOpacity style={styles.botao} onPress={() => router.push('../(tabs)/agenda')}>
            <Text style={styles.txt_botao}>Registro</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}


