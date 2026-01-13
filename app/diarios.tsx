import { MaterialIcons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/estilos/botoes';
import { router } from 'expo-router';


export default function Diarios() {
  return (
    <SafeAreaView 
      style={styles.container}
      edges={['top', 'right', 'bottom', 'left']}>
      <Text style={styles.titulo}>Procedimentos Diários</Text>

      {/*Apiração da cânula*/}
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/aspiracao')}>
        <MaterialIcons  name="medication" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Aspiração de Cânula</Text>
          <Text style={styles.txt_botao}>Aspirar secreções para facilitar a respiração.</Text>
        </View>
      </TouchableOpacity>

      {/*Limpeza da cânula interna (subcânula)*/}
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/limpeza')}>
        <MaterialIcons  name="water-drop" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Limpeza da Cânula Interna (Subcânula)</Text>
          <Text style={styles.txt_botao}>Manter a cânula interna limpa para higiene.</Text>
        </View>
      </TouchableOpacity>

      {/*Limpeza do estoma (pele)*/}
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/estoma')}>
        <MaterialCommunityIcons name="necklace" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Limpeza do Estoma (Pele)</Text>
          <Text style={styles.txt_botao}>Manter a área do estoma limpa para prevenir infecções.</Text>
        </View>
      </TouchableOpacity>

      {/*Troca do fixador (cordinha)*/}
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/troca')}>
        <Octicons name="arrow-switch" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Troca do Fixador (Cordinha)</Text>
          <Text style={styles.txt_botao}>Trocar o fixador para garantir a higiene e segurança.</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


