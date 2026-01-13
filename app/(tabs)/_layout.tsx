import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle:{
          height: 65,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#66A2F9',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e5e5e5',
          height: 68,
          paddingBottom: 8,
          paddingHorizontal: 5
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

