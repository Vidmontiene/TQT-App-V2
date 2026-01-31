import { Text, View } from 'react-native';
import { styles } from '@/estilos/emergencia';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Nca0() {

  return (
    <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>   
      <AntDesign name="sun" size={50} color='#12B9ED' />
      <Text style={[styles.titulo, {fontSize: 25, marginBottom: 15}] }>Não está Conseguindo Aspirar?</Text>
      <Text style={[styles.txt, {textAlign: 'center'}]}>Siga os passos com calma. Estamos aqui para ajudar.</Text>
    </View>
  );
}

