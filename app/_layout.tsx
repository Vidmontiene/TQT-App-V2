import { Stack } from 'expo-router';
import { View } from 'react-native';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="diarios"
          options={{ 
            presentation: 'modal', 
            title: 'Cuidados com a Traqueostomia',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="emergencia"
          options={{ 
            presentation: 'modal', 
            title: 'Emergência',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="canula"
          options={{ 
            presentation: 'modal', 
            title: 'Especificações da Cânula',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="materiais"
          options={{ 
            presentation: 'modal', 
            title: 'Materiais para Traqueostomia',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="aspiracao"
          options={{ 
            presentation: 'modal', 
            title: 'Aspiração da Cânula',
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
            presentation: 'modal', 
            title: 'Limpeza da Cânula Interna',
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
            presentation: 'modal', 
            title: 'Limpeza do Estoma',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="troca"
          options={{ 
            presentation: 'modal', 
            title: 'Troca do Fixador',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="telas_emergencia"
          options={{ 
            presentation: 'modal', 
            title: 'Emergência',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />

      </Stack>
    </View>
  );
}

