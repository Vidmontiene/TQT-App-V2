import { Text, Image, View } from 'react-native';
import { styles } from '@/estilos/emergencia';

export default function Nca1() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>1. Verifique o Equipamento</Text>
      <Image
        source={require('@/assets/images/nca1.png')}
        style={styles.foto}
        resizeMode= 'contain'
      />
      <Text style={styles.txt}>Veja se o aspirador está ligado e está funcionando normalmente.</Text>
      
    </View>
  );
}
