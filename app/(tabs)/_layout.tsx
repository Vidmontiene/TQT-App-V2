import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

if (Platform.OS === 'android') {
  Notifications.setNotificationChannelAsync('default', {
    name: 'Default',
    importance: Notifications.AndroidImportance.HIGH,
  });
}

export default function TabLayout() {

  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, []);

  return (   
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStatusBarHeight: 0,
        headerStyle: {
          height: 56,
        },     
        headerTitleStyle: {
          fontSize: 19,
          lineHeight: 22,
        },
        headerTitleAlign: 'center',
        animation: 'none',
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#66A2F9',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e5e5e5',
          height: 68,
          paddingBottom: 8,
          paddingHorizontal: 5,
        },
        tabBarItemStyle: {
          paddingVertical: 6,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
         
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={30} name="house.fill" color={color} />
          ),
          tabBarLabel: 'Início',
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={26} color={color}/>
          ),
          tabBarLabel: 'Agenda',
        }}
      />
      <Tabs.Screen
        name="ajuda"
        options={{
          title: 'Ajuda',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="emergency"  size={26} color={color}/>
          ),
          tabBarLabel: 'Ajuda',
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline"  size={26} color={color}/>
          ),
          tabBarLabel: 'Perfil',
        }}
      />
    </Tabs>
  );
}

