import { Text, Image } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cs1() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>1. Posicione a Criança</Text>
        <Image
          source={require('@/assets/images/cs1.png')}
          style={styles.foto}
          resizeMode= 'contain'
        />
        <Text style={styles.txt}>Deite a criança com um apoio abaixo dos ombros para deixar o pescoço esticado.</Text>

    </SafeAreaView>
  );
}