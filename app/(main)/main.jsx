import { View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

const Main = () => {
  return (
    <SafeAreaView className="px-[5.7%] flex flex-col h-full w-full">

      <View className="flex items-center justify-between  flex-row pt-16">
        <View className="p-3 border rounded-full border-gray-200">
          <Icon name='menu' size={20} color={"rgb(107,114,128)"} />
        </View>

        <Text className="font-semibold text-[24px] text-gray-700">Home</Text>
        <View className="p-3 border rounded-full border-gray-200">
          <Icon name='bell' size={20} color={"rgb(107,114,128)"} />
        </View>
      </View>

      <Text className=" text-[26px] mt-5">
        Hi, Emmy 👋
      </Text>

      <Text className="font-semibold text-[26px]">
        Need Essentials? We've Got You Covered!
      </Text>

      <View className="my-3">

        <TextInput className="border-2 p-3 rounded-xl border-gray-400 text-[18px]" placeholder='search here...' />
      </View>

      <View className="flex flex-col my-5">
        <Text className="text-[20px] font-semibold">Recently Added</Text>
        <ScrollView horizontal={true} className="flex flex-row gap-5 overflow-scroll">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <View className="bg-white shadow w-1/4 p-2 rounded-2xl" key={i}>
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