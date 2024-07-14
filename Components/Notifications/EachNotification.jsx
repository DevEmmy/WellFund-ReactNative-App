import { View, Text } from 'react-native'
import React from 'react'

const EachNotification = ({title, message}) => {
  return (
    <View className="p-3 bg-white shadow-lg rounded-lg mb-5 flex flex-col gap-y-2">
      <Text className="text-lg font-semibold">{title}</Text>
      <Text className="text-sm ">{message}</Text>

      <View className="flex flex-row justify-between items-center" >
        <Text className="text-gray-400">Yesterday 12:15</Text>

        <View>
            <Text className="text-primary2">view</Text>
        </View>
      </View>
    </View>
  )
}

export default EachNotification