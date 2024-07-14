import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function ProductCard() {
  const router = useRouter()
  return (
    <View className="bg-white shadow p-2 rounded-2xl mx-2" onTouchStart={()=> {router.push("/product/1")}}>
      <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-full h-[200px] rounded-xl" />

      <View className="py-2 flex flex-col gap-y-1">
        <Text className="text-[22px] font-bold">Rice</Text>
        <Text className="text-[16px] text-gray-400">2% reduced starched rice, 1 plastic
        </Text>
        <Text className="text-[16px] text-gray-400">Repayment in 5 days</Text>
        <TouchableOpacity className="bg-primary2 rounded-lg p-3 text-center">
          <Text className="text-white font-bold text-center text-[16px]">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}