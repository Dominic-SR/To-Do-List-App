import { View, Text, Image } from 'react-native'
import React from 'react'
import Theme from './Theme'

const Header = () => {
  return (
    <View className="w-screen h-[35%] bg-black flex flex-row justify-between items-center">
        <View className="w-[50%] flex items-start pl-5">
            <Image 
            source={{
            uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png" 
            }} 
            className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
        </View>
        <View className="w-[50%] flex items-end pr-5">
            {/* <Theme/> */}
            <Text className="text-white">
                Hello !
            </Text>
        </View>
    </View>
  )
}

export default Header