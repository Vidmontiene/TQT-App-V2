import { Text } from 'react-native'
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="procedimentos"
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
        </Stack>
        <StatusBar style="dark" />
      </SafeAreaView>
  );
}

