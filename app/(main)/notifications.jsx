import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import EachNotification from '../../Components/Notifications/EachNotification'

const Notifications = () => {
  const notifications = [
    {
      title: "New Product Alert",
      messages: "Check out our new arrivals! We’ve added exciting new items to our foodstuffs and pharmaceuticals collections."
    },
    {
      title: "Repayment Confirmed",
      messages: "Thank you! Your repayment for [Product Name] has been received. We appreciate your prompt payment."
    },
    {
      title: "Order Delivered",
      messages: "Your order for [Product Name] has been delivered. We hope you enjoy your purchase!"
    },
    {
      title: "Order Shipped",
      messages: "Good news! Your order for [Product Name] is on its way. Track your order in the app for more details."
    },
  ]
  return (
    <ScrollView className="flex flex-col h-full w-full mt-14 px-[5%]" >
      <Text className="text-2xl font-bold">Notifications</Text>

      <View style={styles.container}>
        {
          notifications.map((item, i)=>{
            return(
              <EachNotification key={i} message={item.messages} title={item.title} style={styles.notification}/>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20
  },
  notification: {
    marginBottom: 5, // Adjust spacing as needed
  },
});

export default Notifications