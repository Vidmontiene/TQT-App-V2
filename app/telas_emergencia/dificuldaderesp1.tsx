import { Text } from 'react-native';
import { styles } from '@/estilos/emergencia';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dr1() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>1. Aspire a cânula</Text>
        <Text style={styles.txt}>Tente aspirar a cânula para remover possíveis secreções que possam estar obstruindo a passagem de ar.</Text>
    </SafeAreaView>
  );
}