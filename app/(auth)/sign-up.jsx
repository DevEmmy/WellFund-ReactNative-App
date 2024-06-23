import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const SignUp = () => {
  return (
    <SafeAreaView className="px-[5.7%] flex flex-col items-center justify-center h-full w-full">
    <View className="my-5 w-full">
        <Text className="text-[50px] font-extrabold">Sign Up.</Text>
        <Text className="text-[20p]">It's time to start a journey with WellFund</Text>
    </View>

    <View className="my-5 flex flex-col gap-2 w-full">
    <TextInput className="border  p-3 rounded-xl" placeholder='your name e.g John Doe'/>
        <TextInput className="border  p-3 rounded-xl" placeholder='youremail@mail.com'/>
        <TextInput passwordRules="" secureTextEntry={true}  className="border p-3 rounded-xl" placeholder='your password'/>
    </View>

    <TouchableOpacity className="bg-primary2 rounded-xl p-3 text-center w-full">
        <Text className="text-[16px] text-center text-white font-bold">Sign up</Text>
    </TouchableOpacity>

    <Text className="my-5">Or</Text>

    <TouchableOpacity className="bg-gray-300 rounded-xl p-3 text-center w-full">
        <Text className="text-[16px] text-center text-black font-bold">Continue with Google</Text>
    </TouchableOpacity>

    <Text className="my-3">I have an account already, <Link href={"/login"} className='!text-primary2 font-bold'>Sign In</Link></Text>

  </SafeAreaView>
  )
}

export default SignUp