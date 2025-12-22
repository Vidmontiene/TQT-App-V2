import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca3() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>3. Use soro fisiológico</Text>
        <Text style={styles.txt}>Pingue 2 ou 3 gotas de soro fisiológico na cânula para tentar amolecer a secreção.</Text>
    </SafeAreaView>
  );
}