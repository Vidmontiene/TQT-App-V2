import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca4() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>4. Use o ambu para tentar descolcar a rolha</Text>
        <Text style={styles.txt}>Dicas importantes</Text>
        <Text style={styles.txt}>Conecte a bolsa Ambu diretamente no tubo</Text>
        <Text style={styles.txt}>Aperte com firmeza e rapidez</Text>
        <Text style={styles.txt}>Observe se o tórax se eleva a cada compressão</Text>
    </SafeAreaView>
  );
}