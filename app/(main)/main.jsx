import { View, Text, SafeAreaView, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import ProductCard from '../../Components/Product/ProductCard';

const Main = () => {
  return (
    <ScrollView className="flex flex-col h-full w-full mt-14" >
      <View className=" px-[5%] flex justify-between items-center flex-row">
        <View className="flex justify-between items-center flex-row gap-5">
          <View className="border-[5px] border-primary2 rounded-full">
            <Image source={{ uri: "https://elcomercio.pe/resizer/snr5ZG3SKW8Q6fUMgys3XkOs4Jc=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FHVPWJMHKVFJ7MNVVGKJZL5JA4.png" }} width={60} height={60} className="rounded-full " />
          </View>

          <View>
            <Text className="text-[18px]">Greetings 👋</Text>
            <Text className="text-[26px] font-bold">Emmanuel Olaosebikan</Text>
          </View>
        </View>

        <View className="flex items-center justify-center p-3 rounded-full border border-gray-500">
          <Icon name="shopping-cart" size={20} color="gray" />
        </View>
      </View>

      <View className="mx-[5%] bg-black p-6 py-10 rounded-2xl my-10 text-white shadow-lg">
        <Text className="text-white text-[22px] font-bold">What are you getting from us today</Text>
        <Text className="text-white text-[16px]">Discover your daily needs here.</Text>
      </View>


      <View className="flex flex-col  mx-[5%]">
        <View className="">
          <Text className="text-[26px] text-black font-bold">Oustanding Loans</Text>
        </View>
        <ScrollView horizontal={false} className="flex flex-col gap-y-3 overflow-scroll">
          {
            [1, 2].map((item, i) => {
              return (
                <View className="flex gap-y-3 justify-between flex-row items-center" key={i}>
                  <View className="flex flex-row gap-x-3 items-center">
                    <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-[120px] h-[80px] rounded-xl " />

                    <View>
                      <Text className=" text-[18px] font-light ">Groceries </Text>
                      <Text className=" text-[18px] text-gray-400 font-light">picked up by 12/24 </Text>
                    </View>
                  </View>

                  <TouchableOpacity>
                    <Text className="bg-gray-200 p-2 rounded-full">View Details</Text>
                  </TouchableOpacity>

                </View>
              )
            })
          }
        </ScrollView>
      </View>


      <View className="flex flex-col gap-y-2 mt-10 mx-[5%]">
        <View className="">
          <Text className="text-[26px] text-black font-bold">Categories</Text>
        </View>
        <ScrollView horizontal={true} className="flex flex-row gap-x-5 overflow-scroll">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <View className="flex gap-y-3 flex-col items-center justify-center" key={i}>
                  <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-[120px] h-[120px] rounded-full " />
                  <Text className="text-center text-[18px] font-bold ">Groceries </Text>

                </View>
              )
            })
          }
        </ScrollView>
      </View>

      <ScrollView className="flex flex-col gap-y-1 my-5">
        <View className="">
          <Text className="text-[26px] text-black font-bold px-5">Recently Added</Text>
        </View>
        <View className="flex flex-1 flex-row flex-wrap gap-y-3">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <View className="" style={{ width: '50%' }} key={i} >
                  <ProductCard key={i} />
                </View>
              )
            })
          }
        </View>
      </ScrollView>

      <ScrollView className="flex flex-col gap-y-1 my-5">
        <View className="">
          <Text className="text-[26px] text-black font-bold px-5">Featured Posts</Text>
        </View>
        <View className="flex flex-1 flex-row flex-wrap gap-y-3">
          {
            [1, 2, 3, 4, 5].map((item, i) => {
              return (
                <View className="" style={{ width: '50%' }} key={i} >
                  <ProductCard />
                </View>
              )
            })
          }
        </View>
      </ScrollView>

    </ScrollView>
  )
}

export default Main