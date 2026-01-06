import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca4() {

  return (
    <SafeAreaView style={styles.container}>
      
        <Text style={styles.titulo2}>4. Use o ambu para tentar deslocar a rolha</Text>
        <Image
          source={require('@/assets/images/nca4.png')}
          style={styles.foto}
          resizeMode= 'contain'
        />
        <Text style={styles.subtitulo}>Dicas importantes</Text>

        <View style={styles.topico}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.txt}>Conecte a bolsa Ambu diretamente no tubo</Text>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.txt}>Aperte com firmeza e rapidez</Text>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.txt}>Observe se o tórax se eleva a cada compressão</Text>
        </View>

    </SafeAreaView>
  );
}