import { styles } from '@/estilos/botoes';
import { Feather, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ligar } from '@/scripts/ligar';

export default function Emergencia() {
  return (
    <ScrollView>
        <SafeAreaView
          style={styles.container}
          edges={['top', 'right', 'bottom', 'left']}>

          <Text style={styles.titulo}>Procedimentos de Emergência</Text>

          {/*A cânula saiu*/}
          <TouchableOpacity style={styles.botao}>
            <MaterialIcons  name="warning-amber" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>A cânula saiu</Text>
              <Text style={styles.txt_botao}>Passos para lidar com a saída da cânula.</Text>
            </View>
          </TouchableOpacity>

          {/*Dificuldade para Respirar*/}
          <TouchableOpacity style={styles.botao}>
            <MaterialIcons  name="warning-amber" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Dificuldade para Respirar</Text>
              <Text style={styles.txt_botao}>O que fazer em caso de dificuldade respiratória.</Text>
            </View>
          </TouchableOpacity>

          {/*Não Consigo Aspirar*/}
          <TouchableOpacity style={styles.botao}>
            <MaterialIcons name="warning-amber" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Não Consigo Aspirar</Text>
              <Text style={styles.txt_botao}>Instruções para quando a aspiração não for possível.</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.titulo}>Contatos de Emergência</Text>

          {/*SAMU*/}
          <TouchableOpacity style={styles.botao} onPress={() => ligar(192)}>
            <Feather name="phone" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>SAMU</Text>
              <Text style={styles.txt_botao}>Serviço de Atendimento Móvel de Urgência.</Text>
            </View>
          </TouchableOpacity>

          {/*Médico do seu Filho*/}
          <TouchableOpacity style={styles.botao}>
            <FontAwesome6 name="user-doctor" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Médico do seu Filho</Text>
              <Text style={styles.txt_botao}>Adicione o contato.</Text>
            </View>
          </TouchableOpacity>
        
          {/*Serviço de Emergência*/}
          <TouchableOpacity style={styles.botao}>
            <MaterialIcons name="emergency" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Serviço de Emergência</Text>
              <Text style={styles.txt_botao}>Adicione o contato.</Text>
            </View>
          </TouchableOpacity>

          {/*Adicionar e Editar Contatos*/}
          <TouchableOpacity style={styles.botao}>
            <Feather name="plus" size={33} style={styles.img}/>
            <View style={styles.container_botao}>
              <Text style={styles.titulo_botao}>Adicionar e Editar Contatos</Text>
              <Text style={styles.txt_botao}>Informe os contatos de emergência de seu filho.</Text>
            </View>
          </TouchableOpacity>

        </SafeAreaView>
    </ScrollView>
  );
}

