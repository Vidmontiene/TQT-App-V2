import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cs0() {

  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
      <MaterialIcons name="back-hand" size={50} color='#12B9ED' />
      <Text style={[styles.titulo, {fontSize: 25}]}>Mantenha a calma</Text>
      <Text style={[styles.txt, {textAlign: 'center'}]}>Siga os passos com atenção. Estamos aqui para ajudar</Text>
    </SafeAreaView>
  );
}