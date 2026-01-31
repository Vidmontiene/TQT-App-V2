import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';

export default function Nca2() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>2. Tente com uma Sonda Nova</Text>
      <Image
        source={require('@/assets/images/nca2.png')}
        style={styles.foto}
        resizeMode= 'contain'
      />
      <Text style={styles.subtitulo}>Descarte a sonda atual</Text>
      <Text style={styles.txt}>A sonda que você está usando pode estar entupida. Usar uma nova, recém-aberta da embalagem estéril, ajuda a garantir que a via está livre para a passagem de ar.</Text>
      
    </View>
  );
}
