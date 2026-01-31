import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';

export default function Dr2() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>2. Verifique a Cânula</Text>
      <Image
        source={require('@/assets/images/dr2.png')}
        style={styles.foto}
        resizeMode= 'contain'
      />
      <Text style={styles.txt}>Verifique se cânula está fora do lugar ou se o fixador está muito apertado.</Text>

    </View>
  );
}