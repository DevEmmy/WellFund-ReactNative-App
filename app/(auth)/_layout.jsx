import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App({children}) {
  return (
    <Stack
    screenOptions={{
      headerShown: false,
      
    }}
    >
      <Stack.Screen name='login' options={{
        headerShown: false
      }}/>
    </Stack>
  );
}

