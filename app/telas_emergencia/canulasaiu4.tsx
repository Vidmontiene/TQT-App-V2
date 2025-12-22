import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cs4() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Procedimento finalizado</Text>
        <Text style={styles.txt}>Algumas observações aqui.</Text>
    </SafeAreaView>
  );
}