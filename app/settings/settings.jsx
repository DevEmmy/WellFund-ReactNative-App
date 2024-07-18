import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

const Settings = () => {
  const options = [
    {
      title: "Notifications",
      icon: "bell",
      route: "notification"
    },
    {
      title: "Privacy & Security",
      icon: "shield",
      route: "privacy"
    },
    {
      title: "Help",
      icon: "help-circle",
      route: "help"
    }
  ]

  const router = useRouter()
  return (
    <View className="mt-14 px-5">
      <View className="flex flex-row gap-x-5">
        <View onTouchStart={()=> router.back() }><Icon name={"arrow-left"} size={24} color="#000" /></View>
        <Text className="text-2xl font-bold">Settings</Text>
      </View>

      <View className="mt-2 flex flex-col">
        {
          options.map((item, i) => {
            return (
              <View key={i} className="flex flex-row items-center justify-between mt-8">
                <View className="flex flex-row items-center gap-x-3">
                  <View className="bg-gray-200 rounded-xl p-2">
                    <Icon name={item.icon} size={24} color="#000" />
                  </View>

                  <Text className="text-lg font-bold">{item.title}</Text>
                </View>

                <Icon name={"chevron-right"} size={24} color="#000" />
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default Settings