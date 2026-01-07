import { Text, Image } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca2() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>2. Tente com uma sonda nova</Text>
        <Image
          source={require('@/assets/images/nca2.png')}
          style={styles.foto}
          resizeMode= 'contain'
        />
        <Text style={styles.subtitulo}>Descarte a sonda atual</Text>
        <Text style={styles.txt}>A sonda que você está usando pode estar entupida. Usar uma nova, recém-aberta da embalagem estéril, ajuda a garantir que a via está livre para a passagem de ar.</Text>
    </SafeAreaView>
  );
}
