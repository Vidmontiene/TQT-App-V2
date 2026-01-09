import { Text, Image } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr1() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>1. Aspire a Cânula</Text>
        <Image
          source={require('@/assets/images/dr1.png')}
          style={styles.foto}
          resizeMode= 'contain'
        />
        <Text style={styles.txt}>Tente aspirar a cânula para remover possíveis secreções que possam estar obstruindo a passagem de ar.</Text>
    </SafeAreaView>
  );
}