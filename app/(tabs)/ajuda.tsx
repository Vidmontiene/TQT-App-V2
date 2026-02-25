import { styles } from '@/estilos/botoes';
import { Feather,  MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, Linking } from 'react-native';
import { ligar } from '@/scripts/ligar';

export default function Ajuda() {
  return (
    <View style={[styles.container, {paddingTop: 0}]}>

      <Text style={[styles.txt_botao, {marginBottom: 15, textAlign: 'justify', marginTop: 15}]}>
        Este Aplicativo é uma ferramenta de apoio e não substitui o aconselhamento médico profissional. Em caso de emergência, entre em contato com os serviços de saúde locais imediatamente.
      </Text>

      <Text style={styles.titulo}>Contatos de Suporte</Text>

      {/*E-mail*/}
      <TouchableOpacity style={styles.botao} 
        onPress={() => Linking.openURL(`mailto:draraquelsales@hotmail.com`)}>

        <MaterialCommunityIcons  name="email-outline" size={31} style={styles.img_redondo}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>E-mail</Text>
          <Text style={styles.txt_botao}>draraquelsales@hotmail.com</Text>
        </View>
      </TouchableOpacity>

      {/*Telefone*/}
      <TouchableOpacity style={styles.botao}  
        onPress={() => ligar(8588374524)}>

        <Feather name="phone" size={31} style={styles.img_redondo}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Telefone</Text>
          <Text style={styles.txt_botao}>+55 (85) 8837-4524</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.titulo}>Recursos Externos</Text>

      {/*Ministério da saúde*/}
      <TouchableOpacity style={styles.botao} 
        onPress={() => Linking.openURL('https://www.gov.br/saude/pt-br')}>
          
        <Feather name="link" size={31} style={styles.img_redondo}/>
        <View style={styles.container_botao}>
          <Text style={styles.titulo_botao}>Ministério da saúde</Text>
          <Text style={styles.txt_botao}>saude.gov.br</Text>
        </View>
      </TouchableOpacity>
    
    </View>

  );
}
