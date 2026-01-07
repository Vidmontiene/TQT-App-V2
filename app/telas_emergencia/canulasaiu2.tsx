import { Text, Image } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cs2() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>2. Levante o queixo da criança e afaste a pele para abrir o orifício da traqueostomia</Text>
        <Image
          source={require('@/assets/images/cs2.png')}
          style={styles.foto}
          resizeMode= 'contain'
        />
        <Text style={styles.txt}>Mantenha a calma. Isso dará a você uma visão clara do orifício (estoma).</Text>
    </SafeAreaView>
  );
}