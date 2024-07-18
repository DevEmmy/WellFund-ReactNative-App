import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Icon from 'react-native-vector-icons/Feather';
import CartItem from '../../Components/Cart/CartItem';

const Cart = () => {
    const router = useRouter();

    return (
        <View className="mt-14 px-5 h-[100vh]">
            <View className="flex flex-row gap-x-5">
                <View onTouchStart={() => router.back()}><Icon name={"arrow-left"} size={24} color="#000" /></View>
                <Text className="text-2xl font-bold">Cart</Text>
            </View>

            {
                [1, 2, 2, 2].map((item, i) => {
                    return (
                        <CartItem key={i} />
                    )
                })
            }

            <View className="flex flex-col gap-y-3 mt-5">
                <View className="flex items-center justify-between flex-row">
                    <Text>Subtotal</Text>
                    <Text className="font-bold">₦20,000</Text>
                </View>

                <View className="flex items-center justify-between flex-row">
                    <Text>Delivery</Text>
                    <Text className="font-bold">₦0.00</Text>
                </View>

                <View className="flex items-center justify-between flex-row">
                    <Text>Total</Text>
                    <Text className="font-bold">₦20,000</Text>
                </View>
            </View>


            <TouchableOpacity className="bg-primary2 rounded-xl p-4 text-center w-full absolute bottom-10 left-5" onPress={() => router.push("cart/payment-plans")}>
                <Text className="text-[16px] text-center text-white font-bold">Proceed to Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart