import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { router } from 'expo-router';
import { ligar } from "@/scripts/ligar";
import { styles as styles2 } from '@/estilos/passos';
import Feather from '@expo/vector-icons/Feather'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

export default function Nca5() {

  const [nao, setNao] = useState(0);

  return (
    <View style={styles.container}>

      {/*Tela inicial*/}
      {nao === 0 && (
        <>
          <Text style={[styles.titulo, {textAlign: 'center', marginBottom: 130}]}>Conseguiu Aspirar a Secreção e Desobstruir a Cânula?</Text>

          {/*Botão de sim*/}
          <TouchableOpacity style={styles.botao} onPress={() => router.push('..')}>
            <Text style={styles.txt_botao}>Sim, consegui aspirar</Text>
          </TouchableOpacity>

          {/*Botão de não*/}
          <TouchableOpacity style={[styles.botao, {backgroundColor: '#E5E7EB'}]} onPress={() => setNao(1)}>
            <Text style={[styles.txt_botao, {color: 'black'}]}>Não, continua obstruído</Text>
          </TouchableOpacity>
        </>
      )}

      {/*Apertou 'não'*/}
      {nao === 1 && (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            nestedScrollEnabled
            contentContainerStyle={{ paddingBottom: 10 }}
          >
          {/*Título*/}
          <View style={[styles.container_botao, {alignSelf: 'center', marginVertical:20, alignItems: 'center'}]}>
            <MaterialIcons name="warning-amber" size={35} color='#EE4544'/>
            <Text style={styles.titulo_icon}>Atenção: Emergência</Text>
          </View>

          {/*texto + botão 192*/}
          <Text style={styles.txt}>Se a cânula continua obstruída, contate o serviço de emergência imediatamente</Text>
          <TouchableOpacity style={[styles.botao, {backgroundColor: '#EE4544'}]} onPress={() => ligar(192)}>
            <View style={styles.container_botao}>
              <Feather name="phone" size={24} color="white" />
              <Text style={styles.txt_botao}>Ligar para 192</Text>
            </View>
          </TouchableOpacity>

          {/*Texto para passos*/}
          <Text style={[styles.subtitulo, {marginBottom: 20}]}>Enquanto a ajuda não chega, inicie a troca da cânula:</Text>

          {/*Passo 1*/}
          <View style={[styles2.container_passo, {backgroundColor: 'white', alignItems:'center'}]}>
            <View style={styles2.circulo}>
              <Text style={styles2.txt_circulo}>1</Text>
            </View>
            <View style={styles2.txt_passo_container}>
              <Text style={[styles2.descricao_passo, {fontWeight: '600'}]}>Esvazie o balão da cânula (cuff), caso tenha.</Text>
            </View>
          </View>

          {/*Passo 2*/}
          <View style={[styles2.container_passo, {backgroundColor: 'white', alignItems:'center'}]}>
            <View style={styles2.circulo}>
              <Text style={styles2.txt_circulo}>2</Text>
            </View>
            <View style={styles2.txt_passo_container}>
              <Text style={[styles2.descricao_passo, {fontWeight: '600'}]}>Retire o traqueostoma com cuidado.</Text>
            </View>
          </View>

          {/*Guia completo*/}
          <TouchableOpacity style={[styles.botao, {backgroundColor: '#12B9ED'}]} onPress={() => router.push('/telas_emergencia/grupo3')}>
            <View style={styles.container_botao}>
              <Text style={styles.txt_botao}>Guia completo de troca de cânula</Text>
              <Feather name="arrow-right" size={24} color="white" />
            </View>
          </TouchableOpacity>
          </ScrollView>
        </>
        
      )}
      
    </View>
  );
}