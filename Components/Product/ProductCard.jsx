import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ProductCard() {
  return (
    <View className="bg-white shadow p-2 rounded-2xl w-[200px] mx-2" >
      <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-full h-[200px] rounded-xl" />

      <View className="py-2">
        <Text className="text-[18px] font-semibold">Rice</Text>
        <Text className="text-[18px]">₦ 20,000
        </Text>
        <Text className="">Refund Span - 3 M</Text>
      </View>
    </View>
  )
}