import { View, Text, Image } from 'react-native'
import React from 'react'

const Theme = () => {

  return (
    <View className="relative flex flex-row">
      <Image source={require('../assets/Images/dark-mode-button.png')} className="w-20 h-10" /> 
      <Image source={require('../assets/Images/light-mode-button.png')} className="w-20 h-10" />
    </View> 
  )
}

export default Theme