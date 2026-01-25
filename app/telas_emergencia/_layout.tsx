import { Stack } from "expo-router";
import { Platform, View } from 'react-native';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,    
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    />
  );
}