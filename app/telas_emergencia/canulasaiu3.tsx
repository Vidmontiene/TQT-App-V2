import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';

export default function Cs3() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>3. Inserindo a Nova Cânula</Text>
      <Image
        source={require('@/assets/images/cs3.png')}
        style={styles.foto}
        resizeMode= 'contain'
      />
      <Text style={styles.txt}>Passe xilocaína gel na cânula. Introduza a cânula no orifício em um movimento firme.</Text>

    </View>
  );
}