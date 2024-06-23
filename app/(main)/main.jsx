import { View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

const Main = () => {
  return (
    <SafeAreaView className="px-[5.7%] flex flex-col h-full w-full">

      <View className="flex items-center justify-between  flex-row pt-10">
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



      <View className="my-3 flex flex-row items-center shadow-lg bg-white border-gray-300 border p-2 rounded-full justify-between box-border">
        <Icon name='search' size={18} color={"rgb(107,114,128)"}  />
        <TextInput className=" text-[16px] w-full ml-2" placeholder='search here...' />
      </View>

      <View className="flex flex-col  my-5">
        <Text className="text-[20px] font-semibold">Categories</Text>
        <ScrollView horizontal={true} className="flex flex-row gap-5 overflow-scroll">
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

      <View className="flex flex-col my-5">
        <Text className="text-[20px] font-semibold">Recently Added</Text>
        <ScrollView horizontal={true} className="flex flex-row gap-5 overflow-scroll">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <View className="bg-white shadow min-w-1/4 p-2 rounded-2xl" key={i}>
                  <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-full h-[200px] rounded-xl" />

                  <View className="py-2">
                    <Text className="text-[18px] font-semibold">Rice</Text>
                    <Text className="text-[18px]">₦ 20,000
                    </Text>
                    <Text className="">Refund Span - 3 M</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Main