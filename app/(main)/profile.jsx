import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

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
  return (
    <ScrollView className="mt-14 px-3">
      <View className="flex flex-row gap-3">
        <Icon name="arrow-left" size={30} color="#000" />
        <Text className="text-[24px] font-bold">Profile</Text>
      </View>

      <View className="bg-primary2 px-5 py-7 rounded-3xl flex flex-row my-5 items-center ">

        <View className="border-[5px] border-white rounded-full">
          <Image source={{ uri: "https://elcomercio.pe/resizer/snr5ZG3SKW8Q6fUMgys3XkOs4Jc=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FHVPWJMHKVFJ7MNVVGKJZL5JA4.png" }} width={60} height={60} className="rounded-full " />
        </View>

        <View className="text-white pl-3">
          <Text className="text-white font-bold text-[24px] " style={{textShadowColor: "black"}}>Emmanuel Olaosebikan</Text>
          <Text className="text-[16px] text-white font-light"> Email: <Text className="text-white font-bold">eolaosebikan60@gmail.com</Text></Text>
        </View>
      </View>

      <View className="flex flex-col gap-y-4">
        {
          otherOptions.map((item, i)=>{
            return(
              <View key={i} className="flex flex-row gap-2 items-start">
                <Icon name={item.icon} size={30} color="#000" />
                <View>
                  <Text className="text-[16px] font-semibold">{item.title}</Text>
                  <Text className="text-[14px] text-gray-500">{item.sub}</Text>
                </View>
              </View>
            )
          })
        }
      </View>

    </ScrollView>
  )
}

export default Profile