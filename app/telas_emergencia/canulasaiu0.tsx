import { Text, View } from 'react-native';
import { styles } from '@/estilos/emergencia';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Cs0() {

  return (
    <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
      <MaterialIcons name="back-hand" size={50} color='#12B9ED' />
      <Text style={[styles.titulo, {fontSize: 25, marginBottom: 15}]}>A Cânula Saiu?</Text>
      <Text style={[styles.txt, {textAlign: 'center'}]}>Siga os passos com atenção. Estamos aqui para ajudar.</Text>
    </View>
  );
}