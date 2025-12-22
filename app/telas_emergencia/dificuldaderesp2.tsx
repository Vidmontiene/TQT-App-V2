import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr2() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>2. Verifique a cânula</Text>
        <Text style={styles.txt}>Verifique se cânula está fora do lugar ou se o fixador está muito apertado.</Text>
    </SafeAreaView>
  );
}