import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';
import { styles } from '@/estilos/passos';
import { MaterialIcons } from '@expo/vector-icons';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function Troca() {

  const [fixador, setFixador] = useState(false);  
  const [tesoura, setTesoura] = useState(false); 
  const [pessoa, setPessoa] = useState(false); 

  const player = useVideoPlayer(
    require('@/assets/videos/video4.mp4'),
  );
      
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']}>

        {/*Aviso*/}
        <View style={styles.container_aviso}>
            <View style={styles.icon_titulo}>
                <MaterialIcons
                    name="info-outline"
                    size={30}
                    color='#12B9ED'
                />
                <Text style={styles.titulo_aviso}> Aviso</Text>
            </View>
            <Text style={styles.descricao_passo}>A troca do fixador requer <Text style={[styles.descricao_passo, {color: '#12B9ED', fontWeight: 'bold'}]}>duas pessoas</Text> para garantir a segurança da criança. Siga as instruções com cuidado.</Text>
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

        {/*Fixador*/}
        <View style={styles.check}>
          <CheckBox
            checked={fixador}
            onPress={() => setFixador(!fixador)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Fixador novo</Text>
        </View>

        {/*Tesoura*/}
        <View style={styles.check}>
          <CheckBox
            checked={tesoura}
            onPress={() => setTesoura(!tesoura)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Tesoura</Text>
        </View>

        {/*Segunda pessoa*/}
        <View style={styles.check}>
          <CheckBox
            checked={pessoa}
            onPress={() => setPessoa(!pessoa)}
            checkedColor= '#12B9ED'
            uncheckedColor="#85D7F2"
            size={33}
            containerStyle={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}
          />
          <Text style={styles.item}>Segunda pessoa</Text>
        </View>

        <Text style={[styles.titulo, {marginTop: 10}]}>Passo a Passo</Text>

        {/*Passo 1*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>1</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Preparar</Text>
            <Text style={styles.descricao_passo}>Reúna todos os materiais necessários e prepare o novo fixador. Certifique-se de que a segunda pessoa está pronta para ajudar.</Text>
          </View>
        </View>

        {/*Passo 2*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>2</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Executar</Text>
            <Text style={styles.descricao_passo}>Com a ajuda da segunda pessoa (que ficará segurando a cânula), remova o fixador antigo e coloque o novo com cuidado. Ajuste o fixador para garantir que esteja confortável e seguro.</Text>
          </View>
        </View>

        {/*Passo 3*/}
        <View style={styles.container_passo}>
          <View style={styles.circulo}>
            <Text style={styles.txt_circulo}>3</Text>
          </View>
          <View style={styles.txt_passo_container}>
            <Text style={styles.titulo_passo}>Finalizar</Text>
            <Text style={styles.descricao_passo}>Verifique se o fixador está bem colocado e seguro. Descarte o fixador antigo de forma adequada.</Text>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}