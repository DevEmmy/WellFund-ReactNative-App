import { View, Text } from 'react-native'
import React, { useState } from 'react'

const CartItem = () => {
    const [qty, setQty] = useState(1)
  return (
    <View className="flex items-center justify-between flex-row mt-5">
      <View>
        <Text className="text-xl font-bold">Pasta, 1 satchet</Text>
        <Text>₦,1000</Text>
        <Text className="text-gray-400">Borrowed</Text>
      </View>

      <View className="flex flex-row gap-x-5 items-center">
        <View className="bg-gray-300 rounded-full px-2" onTouchStart={()=> {qty !== 1 && setQty(qty-1)}}><Text className="text-xl">-</Text></View>
        <Text className="text-xl">{qty}</Text>
        <View className="bg-gray-300 rounded-full px-2" onTouchStart={()=> setQty(qty+1)}><Text className="text-xl">+</Text></View>
      </View>
    </View>
  )
}

export default CartItem