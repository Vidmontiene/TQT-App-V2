import { router, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Provider } from 'react-native-paper';
import { useNavigationState } from '@react-navigation/native';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Tranforma o nome do arquivo em título
const getTituloTela = (routeName?: string) => {
  if (!routeName) return '';

  const titulos: Record<string, string> = {
    diarios: 'Cuidados com a Traqueostomia',
    emergencia: 'Emergência',
    canula: 'Especificações da Cânula',
    materiais: 'Materiais para Traqueostomia',
    aspiracao: 'Aspiração da Cânula',
    limpeza: 'Limpeza da Cânula Interna',
    estoma: 'Limpeza do Estoma',
    troca: 'Troca do Fixador',
    telas_emergencia: 'Emergência',
  };

  return titulos[routeName] ?? routeName;
};

// Header Customizado
const Header = () => {

  const route = useNavigationState(
    state => state.routes[state.index]
  );

  return(
  <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent:'center', padding: 15 }}>

    {/*Seta de voltar*/}
    <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', left: 10, padding: 10, }}>
      <MaterialIcons name="arrow-back-ios" size={24} color="dark-gray" />
    </TouchableOpacity>

    {/*Seta de voltar*/}
    <View style={{ height: 30, paddingHorizontal: 10, alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{getTituloTela(route?.name)}</Text>
    </View>
  </View>
  )
};

export default function RootLayout() {
  return (
    <Provider>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar style="dark" backgroundColor='white' translucent={false} />
      <Stack screenOptions={{
        animation: 'none',  
        headerBackTitle: '' ,
        headerBackVisible: false,
        header: () => <Header/>,
        }}> 

        <Stack.Screen name="(tabs)" options={{ headerShown: false, gestureEnabled: false }} />

      </Stack>
    </SafeAreaView>
    </Provider>
  );
}
