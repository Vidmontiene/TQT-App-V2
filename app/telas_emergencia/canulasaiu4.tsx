import { Text, View } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { styles as styles2 } from '@/estilos/botoes'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Cs4() {

  return (
    <View style={styles.container}>

      <Text style={[styles.titulo, {textAlign: 'center', marginBottom: 40}]}>Procedimento Finalizado</Text>

      {/*Observar Respiração*/}
      <View style={styles2.botao}>
        <Feather name="eye" size={33} style={styles2.img}/>
        <View style={styles2.container_botao}>
          <Text style={styles2.titulo_botao}>Observar Respiração</Text>
          <Text style={styles2.txt_botao}>Observe se a criança está respirando normalmente.</Text>
        </View>
      </View>

      {/*Emergência*/}
      <View style={[styles2.botao, {height: 125, alignItems: 'flex-start'}]}>
        <MaterialIcons name="warning-amber" size={33} style={styles2.img_vermelha}/>
        <View style={styles2.container_botao}>
          <Text style={styles2.titulo_botao}>Emergência</Text>
          <Text style={styles2.txt_botao}>Em caso de dúvida ou se não houver melhora da respiração, leve a criança ao serviço de emergência imediatamente.</Text>
        </View>
      </View>

    </View>
  );
}