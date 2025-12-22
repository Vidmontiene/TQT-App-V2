import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cs2() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>2. Levante o queixo da criança e afaste a pele  para abrir o orifício da traqueostomia</Text>
        <Text style={styles.txt}>Mantenha a calma. Isso dará a você uma visão clara do orifício (estoma).</Text>
    </SafeAreaView>
  );
}