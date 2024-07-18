import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Icon from 'react-native-vector-icons/Feather';

const PaymentPlans = () => {
    const router = useRouter()
    const options = [
        {
            amount: "190",
            desc: "Pay in full",
            duration: "today"
        },
        {
            amount: "48.99",
            desc: "4 interest-free installments of ₦48.99",
            duration: "every two weeks"
        },
        {
            amount: "49.99",
            desc: "12 monthly payments of ₦16.75",
            duration: "monthly"
        },
    ]
    return (
        <View className="mt-14 px-5 h-[100vh]">
            <View className="flex flex-row gap-x-5">
                <View onTouchStart={() => router.back()}><Icon name={"arrow-left"} size={24} color="#000" /></View>
                <Text className="text-2xl font-bold">Payment Plans</Text>
            </View>

            <Text className="text-2xl mt-10 font-bold">Choose your payment plan</Text>

            <View className="flex flex-col">
                {
                    options.map((item, i) => {
                        return (
                            <View key={i} className="border-2 border-gray-300 rounded-2xl p-3 my-5">
                                <Text className="font-bold text-lg">{item.desc}</Text>
                                <View className="flex flex-row items-end">
                                    <Text className="font-extrabold text-[40px] p-0">₦{item.amount}</Text>
                                    <Text className="font-bold text-md">{item.duration}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>

            <TouchableOpacity className="bg-primary2 rounded-xl p-4 text-center w-full absolute bottom-10 left-5" onPress={() => router.push("cart/payment-plans")}>
                <Text className="text-[16px] text-center text-white font-bold">Confirm & Pay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentPlans
