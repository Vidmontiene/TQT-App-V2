import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr4() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>4. Utilize o ambu para ventilar</Text>
        <Text style={styles.txt}>Comprima levemente a bolsa para fornecer ar.</Text>
    </SafeAreaView>
  );
}