import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

const EditProfile = () => {
    const router = useRouter()
    return (
        <View className="mt-14 px-5">
            <View className="flex flex-row gap-x-5">
                <View onTouchStart={() => router.back()}><Icon name={"arrow-left"} size={24} color="#000" /></View>
                <Text className="text-2xl font-bold">Edit Profile</Text>
            </View>

            <View className="flex items-center justify-center my-10">
                <Image source={{ uri: "https://elcomercio.pe/resizer/snr5ZG3SKW8Q6fUMgys3XkOs4Jc=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FHVPWJMHKVFJ7MNVVGKJZL5JA4.png" }} width={150} height={150} className="rounded-full " />

            </View>

            <View className="flex flex-col gap-y-10">
                <View>
                    <Text className="text-lg">Full Name</Text>
                    <TextInput className="border-b text-md p-2" placeholder='John Doe' />
                </View>

                <View>
                    <Text className="text-lg">Email</Text>
                    <TextInput className="border-b text-md p-2" placeholder='name@mail.com' />
                </View>

                <View>
                    <Text className="text-lg">Phone Number</Text>
                    <TextInput className="border-b text-md p-2" placeholder='090282378' />
                </View>

                <TouchableOpacity className="bg-primary2 rounded-xl p-3 text-center w-full" >
                    <Text className="text-[16px] text-center text-white font-bold">Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfile