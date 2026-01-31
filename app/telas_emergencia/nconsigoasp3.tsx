import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';

export default function Nca3() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>3. Use Soro Fisiológico</Text>
      <Image
        source={require('@/assets/images/nca3.png')}
        style={styles.foto}
        resizeMode= 'contain'
      />
      <Text style={styles.txt}>Pingue 2 ou 3 gotas de soro fisiológico na cânula para tentar amolecer a secreção.</Text>

    </View>
  );
}