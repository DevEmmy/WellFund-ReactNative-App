import { View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import ProductCard from '../../Components/Product/ProductCard';

const Main = () => {
  return (
    <ScrollView className="flex flex-col h-full w-full" >

      <View className="flex items-center justify-between  flex-row pt-10 px-[5%]">
        <Text className="font-semibold text-[24px] text-gray-700">WellFund.</Text>

        <View className="flex flex-row gap-x-3 items-center">
          <View className="p-3 border rounded-full border-gray-200">
            <Icon name='heart' size={20} color={"rgb(107,114,128)"} />
          </View>

          <View className="">
            <Icon name='shopping-cart' size={20} color={"rgb(107,114,128)"} />
          </View>
        </View>
      </View>

      <View className="my-3 mx-[2%] flex flex-row items-center shadow-lg bg-white border-gray-300 border p-4 rounded-full justify-between box-border">
        <Icon name='search' size={24} color={"rgb(107,114,128)"} />
        <TextInput className=" text-[16px] w-full ml-2" placeholder='search here...' />
      </View>

      <View className="flex flex-col gap-y-2  mb-10">
        <View className="bg-primary2 p-3 ">
          <Text className="text-[16px] text-white font-semibold">Categories</Text>
        </View>
        <ScrollView horizontal={true} className="flex flex-row gap-x-5 overflow-scroll">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <View className="flex flex-col items-center justify-center" key={i}>
                  <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-[80px] h-[80px] rounded-full " />
                  <Text className="text-center font-bold ">Groceries </Text>

                </View>
              )
            })
          }
        </ScrollView>
      </View>

      <View className="flex flex-col my-10 gap-y-2">
        <View className="bg-primary2 p-3 ">
          <Text className="text-[16px] text-white font-semibold">Recently Added</Text>
        </View>
        <ScrollView horizontal={true} className="flex flex-row  overflow-scroll">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <ProductCard key={i} />
              )
            })
          }
        </ScrollView>
      </View>

      <View className="flex flex-col my-10 gap-y-2">
        <View className="bg-primary2 p-3 ">
          <Text className="text-[16px] text-white font-semibold">Featured Products</Text>
        </View>
        <ScrollView horizontal={true} className="flex flex-row overflow-scroll">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <ProductCard key={i} />
              )
            })
          }
        </ScrollView>
      </View>

    </ScrollView>
  )
}

export default Main