import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nca1() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>tela 1</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 10,
    marginTop: 20,
  },
  
  container:{
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 1
  },
})