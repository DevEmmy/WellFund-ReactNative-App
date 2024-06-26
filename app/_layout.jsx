import { Link, Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
      }} />
      <Stack.Screen name='(auth)' options={{
        headerShown: false
      }} />
      <Stack.Screen name='(main)' options={{
        headerShown: false
      }} />
    </Stack>
  );
}

