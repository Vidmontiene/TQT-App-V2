import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr3() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>3. Cheque a fonte de oxigênio (se a criança usar)</Text>
        <Text style={styles.txt}>Aqui vao entrar varias opções.</Text>
    </SafeAreaView>
  );
}