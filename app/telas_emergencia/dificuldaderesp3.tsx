import { Text, ScrollView, View} from 'react-native';
import { styles } from '@/estilos/emergencia';
import { styles as styles2 } from '@/estilos/botoes';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr3() {

  return (
    <SafeAreaView style={[styles.container, {flex:1}]}>
      <ScrollView
        style={{ flex: 1 }}
        nestedScrollEnabled
        contentContainerStyle={{
          paddingBottom: 160, 
        }}
      >
        <Text style={styles.titulo}>3. Cheque a fonte de oxigênio (se a criança usar)</Text>

        {/*Verifique o ventilador mecânico*/}
        <View style={[styles.container_botao, {alignItems: 'center', marginVertical: 15, gap: 7, marginLeft: 10}]}>
          <Feather name="eye" size={25} color='#4A90E2'/>
          <Text style={styles.subtitulo_icon}>Verifique o Ventilador Mecânico</Text>
        </View>
        
        {/*O aparelho funciona?*/}
        <View style={styles2.botao}>
          <MaterialCommunityIcons name="power-plug-outline" size={33} style={[styles2.img, {color: '#4A90E2', backgroundColor: '#EDF4FC'}]} />
          <View style={styles2.container_botao}>
            <Text style={styles2.titulo_botao}>O aparelho está ligado e funcionando?</Text>
            <Text style={styles2.txt_botao}>Confirme se a luz de energia está acesa.</Text>
          </View>
        </View>

        {/*Existem alarmes?*/}
        <View style={styles2.botao}>
          <MaterialCommunityIcons name="bell-ring-outline" size={33} style={[styles2.img, {color: '#4A90E2', backgroundColor: '#EDF4FC'}]} />
          <View style={styles2.container_botao}>
            <Text style={styles2.titulo_botao}>Existem alarmes sonoros ou visuais?</Text>
            <Text style={styles2.txt_botao}>Verifique a tela para mensagens de erro.</Text>
          </View>
        </View>

        {/*Circuito está conectado?*/}
        <View style={styles2.botao}>
          <Ionicons name="code-working-sharp" size={33} style={[styles2.img, {color: '#4A90E2', backgroundColor: '#EDF4FC'}]} />
          <View style={styles2.container_botao}>
            <Text style={styles2.titulo_botao}>O circuito está conectado à traqueostomia?</Text>
            <Text style={styles2.txt_botao}>Garanta que todas as conexões estão seguras.</Text>
          </View>
        </View>

        {/*Verifique o cilindro*/}
        <View style={[styles.container_botao, {alignItems: 'center', marginVertical: 15, gap: 7, marginLeft: 10}]}>
          <Feather name="eye" size={25} color='#4A90E2'/>
          <Text style={styles.subtitulo_icon}>Verifique o Cilindro de Oxigênio</Text>
        </View>

        {/*O aparelho funciona?*/}
        <View style={styles2.botao}>
          <MaterialCommunityIcons name="pipe-valve" size={33} style={[styles2.img, {color: '#4A90E2', backgroundColor: '#EDF4FC'}]} />
          <View style={styles2.container_botao}>
            <Text style={styles2.titulo_botao}>O aparelho está ligado e funcionando?</Text>
            <Text style={styles2.txt_botao}>Gire a válvula para a posição 'ABERTO'.</Text>
          </View>
        </View>

        {/*O manômetro indica que há oxigênio?*/}
        <View style={styles2.botao}>
          <MaterialCommunityIcons name="speedometer" size={33} style={[styles2.img, {color: '#4A90E2', backgroundColor: '#EDF4FC'}]} />
          <View style={styles2.container_botao}>
            <Text style={styles2.titulo_botao}>O manômetro indica que há oxigênio?</Text>
            <Text style={styles2.txt_botao}>O ponteiro não deve estar na faixa vermelha.</Text>
          </View>
        </View>
      
        {/*O fluxo de oxigênio está ajustado?*/}
        <View style={styles2.botao}>
          <MaterialCommunityIcons name="notebook-heart-outline" size={33} style={[styles2.img, {color: '#4A90E2', backgroundColor: '#EDF4FC'}]} />
          <View style={styles2.container_botao}>
            <Text style={styles2.titulo_botao}>O fluxo de oxigênio está ajustado?</Text>
            <Text style={styles2.txt_botao}>Confirme o fluxo em litros por minuto (LPM).</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}