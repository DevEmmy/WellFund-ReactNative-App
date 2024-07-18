import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useRouter } from 'expo-router';

const Profile = () => {

  const otherOptions = [
    {
      icon: "edit",
      title: "Edit Profile",
      route: "/"
    },
    {
      icon: "user",
      title: "Profile Details",
      route: "/",
      sub: "View your KYC information"
    },
    {
      icon: "settings",
      title: "Account Settings",
      sub: "Manage your account settings",
      route: "/"
    },
    {
      icon: "trash",
      title: "Delete Account",
      sub: "Delete or Deactivate my account"
    }
  ]

  const router = useRouter()
  return (
    // <ScrollView className="mt-14 px-3">
    //   <View className="flex flex-row gap-3">
    //     <Icon name="arrow-left" size={30} color="#000" />
    //     <Text className="text-[24px] font-bold">Profile</Text>
    //   </View>

    //   <View className="bg-primary2 px-5 py-7 rounded-3xl flex flex-row my-2 items-center ">

    //     <View className="border-[5px] border-white rounded-full">
    //       <Image source={{ uri: "https://elcomercio.pe/resizer/snr5ZG3SKW8Q6fUMgys3XkOs4Jc=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FHVPWJMHKVFJ7MNVVGKJZL5JA4.png" }} width={60} height={60} className="rounded-full " />
    //     </View>

    //     <View className="text-white pl-3">
    //       <Text className="text-white font-bold text-[24px] " style={{textShadowColor: "black"}}>Emmanuel Olaosebikan</Text>
    //       <Text className="text-[16px] text-white font-light"> Email: <Text className="text-white font-bold">eolaosebikan60@gmail.com</Text></Text>
    //     </View>
    //   </View>

    //   <View className="flex flex-col gap-y-4">
    //     {
    //       otherOptions.map((item, i)=>{
    //         return(
    //           <View key={i} className="flex flex-row gap-2 items-start">
    //             <Icon name={item.icon} size={30} color="#000" />
    //             <View>
    //               <Text className="text-[16px] font-semibold">{item.title}</Text>
    //               <Text className="text-[14px] text-gray-500">{item.sub}</Text>
    //             </View>
    //           </View>
    //         )
    //       })
    //     }
    //   </View>

    // </ScrollView>

    <ScrollView className="mt-14 px-3">
      <View className="flex items-center justify-center relative">
        <Text className="text-[24px] font-bold">Profile</Text>

        <View className="absolute right-[5%]" onTouchStart={()=> router.push("/settings/settings")}>
        <Icon name="settings" size={24} color="#000" />
        </View>
      </View>

      <View className="flex items-center justify-center my-10">
        <Image source={{ uri: "https://elcomercio.pe/resizer/snr5ZG3SKW8Q6fUMgys3XkOs4Jc=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FHVPWJMHKVFJ7MNVVGKJZL5JA4.png" }} width={150} height={150} className="rounded-full " />
        <Text className="text-[24px] font-bold py-1">Emmanuel Olaosebikan</Text>
        <Text className="text-[16px] text-gray-400">Joined in 2024, Lagos</Text>

        <View>
          <TouchableOpacity className="bg-gray-200 p-3 rounded-xl" onPress={()=> router.push("/settings/edit-profile")}> 
            <Text className="text-[18px] font-bold">Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-col gap-y-3 my-2">
        <Text className="text-[22px] font-bold">Personal Information</Text>

        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-[20px] ">Email</Text>
            <Text className="text-gray-400">eolaosebikan60@gmail.com</Text>
          </View>

          <Text className="font-bold text-[14px]" onPress={()=> router.push("/settings/edit-profile")}>Change</Text>
        </View>

        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-[20px] ">Phone Number</Text>
            <Text className="text-gray-400">09048988583</Text>
          </View>

          <Text className="font-bold text-[14px]" onPress={()=> router.push("/settings/edit-profile")}>Change</Text>
        </View>
      </View>


      <View  className="flex flex-col gap-y-3 my-2">
        <Text className="text-[22px] font-bold">Borrow History</Text>

        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-[16px] ">Items Borrowed</Text>
            <Text className="text-gray-400">0</Text>
          </View>

          <Icon name="arrow-right" size={24} color="#000" />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-[16px] ">Active Loans</Text>
            <Text className="text-gray-400">0</Text>
          </View>

          <Icon name="arrow-right" size={24} color="#000" />
        </View>
      </View>

      <View className="flex flex-col gap-y-3 my-2">
        <Text className="text-[22px] font-bold">Payment methods</Text>

        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-[16px] ">Add payment method</Text>
          </View>

          <Icon name="plus" size={24} color="#000" />
        </View>
      </View>


      <View className="flex flex-col gap-y-3 my-2">
        <Text className="text-[22px] font-bold">Contact methods</Text>

        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-[16px] ">Manage contact methods</Text>
          </View>

          <Icon name="arrow-right" size={24} color="#000" />
        </View>
      </View>

      <TouchableOpacity className=" my-10 bg-gray-200 w-full p-4 rounded-2xl">
        <Text className="text-center font-bold text-[20px]">Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Profile