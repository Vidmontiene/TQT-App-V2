import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr0() {

  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
      <FontAwesome5 name="lungs" size={50} color='#12B9ED' />
      <Text style={[styles.titulo, {fontSize: 25, marginBottom: 15}]}>Mantenha a Calma</Text>
      <Text style={[styles.txt, {textAlign: 'center'}]}>Siga os passos com atenção. Estamos aqui para ajudar</Text>
    </SafeAreaView>
  );
}