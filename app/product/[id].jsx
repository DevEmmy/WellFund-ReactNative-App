import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const EachProduct = () => {
    const repaymentOptions = [
        {
            price: "10,000",
            time: "2weeks"
        },
        {
            price: "12,000",
            time: "4weeks"
        },
        {
            price: "20,000",
            time: "8weeks"
        },
    ]

    const router = useRouter()

    const [selected, setSelected] = useState([])
    return (
        <ScrollView className="flex flex-col h-full w-full mt-14 gap-y-5" >
            <Image source={{ uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=1xw:1xh;center,top&resize=1200:*" }} className="w-full h-[400px] rounded-xl" />
            <View className="py-2 px-5 flex flex-col gap-y-5">
                <View>
                    <Text className="text-[24px] font-bold">Rice</Text>
                    <Text className="text-[18px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam alias nam maiores nobis, eveniet assumenda? Similique sit asperiores, reiciendis at recusandae placeat consectetur ab. Excepturi dolores quas numquam veniam!
                    </Text>
                </View>
                {/* <Text className="text-[18px] text-black">Repayment in 5 days</Text>
                 */}

                <View className="flex" >
                    <Text className="text-2xl font-bold">Repayment Options</Text>

                    <View className="flex flex-row gap-x-3">
                        {
                            repaymentOptions.map((item, i) => {
                                return (
                                    <View key={i} className={`border w-fit text-black p-2 rounded-lg border-gray-300 ${selected.includes(i) ? "bg-primary2 text-white" : "text-black"}`} onTouchStart={() => setSelected([...selected, i])}>
                                        <Text className={` ${selected.includes(i) && " text-white"}`}>{item.price} in {item.time}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                <TouchableOpacity className="bg-primary2 rounded-lg p-3 text-center">
                    <Text className="text-white font-bold text-center text-[16px]" >Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default EachProduct