import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca5() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>5. Passos finais</Text>
        <Text style={styles.txt}>ATENÇÃO! Se a cânula continua obstruida, contate o serviço de emergência imediamente.</Text>
    </SafeAreaView>
  );
}