import { FontAwesome5, MaterialIcons, Octicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ModalScreen() {
  return (
    <SafeAreaView 
      style={styles.container}
      edges={['top', 'right', 'bottom', 'left']}>
      <Text style={styles.titulo}>Procedimentos Diários</Text>

      {/*Apiração da cânula*/}
      <TouchableOpacity style={styles.botao}>
        <MaterialIcons  name="medication" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Aspiração de cânula</Text>
          <Text style={styles.txt_botao}>Aspirar secreções para facilitar a respiração.</Text>
        </View>
      </TouchableOpacity>

      {/*Limpeza da cânula interna (subcânula)*/}
      <TouchableOpacity style={styles.botao}>
        <MaterialIcons  name="water-drop" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Limpeza da cânula interna (subcânula)</Text>
          <Text style={styles.txt_botao}>Manter a cânula interna limpa para higiene.</Text>
        </View>
      </TouchableOpacity>

      {/*Limpeza do estoma (pele)*/}
      <TouchableOpacity style={styles.botao}>
        <FontAwesome5 name="heartbeat" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Limpeza do estoma (pele)</Text>
          <Text style={styles.txt_botao}>Manter a área do estoma limpa para prevenir infecções.</Text>
        </View>
      </TouchableOpacity>

      {/*Troca do fixador (cordinha)*/}
      <TouchableOpacity style={styles.botao}>
        <Octicons name="arrow-switch" size={33} style={styles.img}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Troca do fixador (cordinha)</Text>
          <Text style={styles.txt_botao}>Trocar o fixador para garantir a higiene e segurança.</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffff',
    padding: 10,
    height: "100%"
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 20
  },
  botao:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderColor: "#f1f1f1ff",
    borderWidth: 0.7,
    borderRadius: 8,
    height: 115,
    marginBottom: 10,
  },
  titulo_botao:{
    fontWeight: 'bold',
    fontSize: 17,
  },
  txt_botao:{
    fontSize: 14,
    color: '#555'
  },
  img:{
    marginRight: 12,
    color: '#12B9ED',
    backgroundColor: "#D0F0FB",
    padding: 20,
    borderRadius: 12,
  
  },
  container_botao:{
    flex: 1,
    justifyContent: 'center',
    gap: 3
  }
});
