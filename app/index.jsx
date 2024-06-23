import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, useRouter } from 'expo-router'
import splash from "./splash.jpg"

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-primary2 h-[120vh]  ">
      <StatusBar />

      <View className="flex flex-col h-[100vh]  justify-between">
        <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-brussels-sprouts-table-with-pills_23-2148431512.jpg?t=st=1719174611~exp=1719178211~hmac=9aec602be90d8e36a9c55b0389bd12fe16b67707bf30f49089a169863aed0fe1&w=360" }} className="w-full mx-auto object-cover h-[60vh]" />

        <View className="w-11/12 mx-auto flex flex-col gap-y-3 text-white">
        <Text className="text-[40px] font-bold text-white">Your Daily Needs Simplified</Text>
          <Text className="text-[16px] text-white font-semibold">
            Access Essential Goods Food and Pharmaceuticals Delivered to Your Door

          </Text>
          <TouchableOpacity className="bg-white shadow-xl  py-5 rounded-2xl " onPress={()=> router.push("/login")}>
            <Text className="text-black font-bold text-center text-[16px]">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Index