import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cs1() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>1. Posicione a criança</Text>
        <Text style={styles.txt}>Deite a criança com um apoio abaixo dos ombros para deixar o pescoço esticado.</Text>
    </SafeAreaView>
  );
}