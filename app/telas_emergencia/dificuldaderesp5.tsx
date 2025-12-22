import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr5() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>5. Se não conseguir ventilar</Text>
        <Text style={styles.txt}>Se com o Ambu não conseguir ventilar, esvazie o balão da cânula (caso tenha) e retire o traqueostoma. Realize a troca da cânula de traqueostomia.</Text>
    </SafeAreaView>
  );
}