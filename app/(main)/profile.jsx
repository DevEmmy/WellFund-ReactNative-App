import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  return (
    <ScrollView className="mt-14 px-3">
      <View className="flex flex-row gap-3">
        <Icon name="arrow-left" size={30} color="#000" />
        <Text className="text-[24px] font-bold">Profile</Text>
      </View>

      <View className="bg-primary2 px-5 py-7 rounded-3xl flex flex-row my-5 items-center ">

        <View className="border-[5px] border-white rounded-full">
          <Image source={{ uri: "https://elcomercio.pe/resizer/snr5ZG3SKW8Q6fUMgys3XkOs4Jc=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FHVPWJMHKVFJ7MNVVGKJZL5JA4.png" }} width={80} height={80} className="rounded-full " />
        </View>

        <View className="text-white pl-3">
          <Text className="text-white font-bold text-[24px]">Emmanuel Olaosebikan</Text>
          <Text className="text-[16px] text-white font-light"> Email: <Text className="text-white font-bold">eolaosebikan60@gmail.com</Text></Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default Profile