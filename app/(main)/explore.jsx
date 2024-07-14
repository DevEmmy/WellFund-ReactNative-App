import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import ProductCard from '../../Components/Product/ProductCard';
// import ProductCard from '../../Components/Product/ProductCard';

const Explore = () => {
  return (
    <ScrollView className="mt-14 ">
      <View className="flex flex-row px-3 gap-3 items-center justify-between">
        <Text className="text-[24px] font-bold">Explore </Text>

        <View className="flex items-center flex-row gap-x-5">
          <Icon name="shopping-cart" size={24} color="gray" />
          <Icon name="search" size={24} color="gray" />
        </View>
      </View>

      {/* <Text>All Available Products</Text> */}

      <View className="flex flex-col gap-y-1 my-5">
        <View className="">
          <Text className="text-[20px] text-black font-semibold px-5">Availablle Products</Text>
        </View>
        <View className="flex flex-1 flex-row flex-wrap gap-y-3">
          {
            [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,].map((item, i) => {
              return (
                <View className="" style={{ width: '100%' }} key={i} >
                  <ProductCard key={i} />
                </View>
              )
            })
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default Explore