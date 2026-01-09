import { Text, Image } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr4() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>4. Utilize o Ambu para Ventilar</Text>
        <Image
          source={require('@/assets/images/nca4.png')}
          style={styles.foto}
          resizeMode= 'contain'
        />
        <Text style={styles.txt}>Comprima levemente a bolsa para fornecer ar.</Text>
    </SafeAreaView>
  );
}