import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../../Components/Navigation/BottomNav';
import Icon from 'react-native-vector-icons/Feather';

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View className="flex flex-col items-center justify-center">
      <Icon name={icon} size={20} color={focused ? "#1ABC9C"  : "rgb(107,114,128)"} />
      <Text className={`text-center text-black ${focused ? "font-bold text-primary2" : "font-normal"}`}>{name}</Text>
    </View>
  )
}

export default function TabLayout({ children }) {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFC33BB",
          tabBarStyle: {
            height: 64
          }
        }}
        
      >
        <Tabs.Screen name='main' options={{
          title: "Main",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"home"}
              name={"Home"}
              focused={focused}
              color={color}
            />
          )
        }} />

        <Tabs.Screen name='explore' options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={'rss'}
              name={"Explore"}
              focused={focused}
              color={color}
            />
          )
        }} />

        <Tabs.Screen name='profile' options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={'user'}
              name={"Profile"}
              focused={focused}
              color={color}
            />
          )
        }} />

        <Tabs.Screen name='help' options={{
          title: "Help",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={'help-circle'}
              name={"Help"}
              focused={focused}
              color={color}
            />
          )
        }} />


      </Tabs>
    </>
  );
}

