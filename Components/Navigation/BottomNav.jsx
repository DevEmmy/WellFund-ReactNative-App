import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Main from '../../app/(main)/main';
import Profile from '../../app/(main)/profile';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='home' component={<Main/>}/>
        {/* <Tab.Screen name='explore'/> */}
        <Tab.Screen name='profile' component={<Profile />}/>
        {/* <Tab.Screen name='settings'/> */}
    </Tab.Navigator>
  )
}

export default BottomNav