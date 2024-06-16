import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, useRouter } from 'expo-router'

const Index = ()=> {
  const router = useRouter();

    return (
      <SafeAreaView>
        <StatusBar />

        <Text className="mt-16 text-[20px] font-bold text-center uppercase">WellFund</Text>

        <View className="min-h-[30vh] w-full  bg-[#a29595] text-white px-[5.7%] py-20 mt-6">
          <Text className=" text-center font-extrabold text-white text-[60px]">Get what you need today, pay over time.</Text>
          <Text className="font-[]  text-center text-white text-[20px]">Introducing a new way to pay for everything over a long period of time and live a pressure free life.</Text>

          
            <TouchableOpacity onPress={()=> router.push("/login")}  className="bg-blue-600 text-white my-5 w-[30%] mx-auto rounded-xl text-[16px] font-extrabold py-3 px-5">
              <Text className="text-white w-fit text-center">Get Started</Text>
            </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    )
  }

export default Index