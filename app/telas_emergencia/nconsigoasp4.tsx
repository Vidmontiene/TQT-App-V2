import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca4() {

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.titulo}>4. Use o Ambu para Tentar Deslocar a Rolha</Text>
      <Image
        source={require('@/assets/images/nca4.png')}
        style={styles.foto}
        resizeMode= 'contain'
      />
      <Text style={{color: '#12B9ED', fontSize: 19, fontWeight: 'bold', marginBottom: 10, marginTop: -20}}>Dicas Importantes</Text>

      <View style={styles.topico}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.txt_topico}>Conecte a bolsa Ambu diretamente no tubo</Text>
      </View>

      <View style={styles.topico}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.txt_topico}>Aperte com firmeza e rapidez</Text>
      </View>

      <View style={styles.topico}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.txt_topico}>Observe se o tórax se eleva a cada compressão</Text>
      </View>

    </SafeAreaView>
  );
}