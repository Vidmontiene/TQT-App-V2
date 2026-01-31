import { router, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar style="dark" backgroundColor='white' translucent={false} />
      <Stack screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ padding: 7}}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="dark-gray" 

            />
          </TouchableOpacity>
        ),
        animation: 'none',  
        headerBackTitle: '' ,
        headerBackVisible: false,
        }}>

        

        <Stack.Screen name="(tabs)" options={{ headerShown: false, gestureEnabled: false }} />

        <Stack.Screen
          name="diarios"
          options={{ 
            title: 'Cuidados com a Traqueostomia',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="emergencia"
          options={{ 
            title: 'Emergência',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="canula"
          options={{ 
            title: 'Especificações da Cânula',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="materiais"
          options={{ 
            title: 'Materiais para Traqueostomia',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="aspiracao"
          options={{ 
            title: 'Aspiração da Cânula',
            headerBackTitle: '' ,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="limpeza"
          options={{ 
            title: 'Limpeza da Cânula Interna',
            headerBackTitle: '' ,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="estoma"
          options={{ 
            title: 'Limpeza do Estoma',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="troca"
          options={{ 
            title: 'Troca do Fixador',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="telas_emergencia"
          options={{ 
            title: 'Emergência',
            headerTitleAlign: 'center',
            headerBackTitle: '' ,
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

      </Stack>
    </SafeAreaView>
  );
}

