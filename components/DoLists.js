import { View, Text } from 'react-native'
import React from 'react'

const DoLists = ({Tasks}) => {
  return (
    <View className="h-[80%] bg-black border-2 border-[#00FFFF] m-6 rounded-[20px]">
     {Tasks?.map((item,index)=>( <View className="w-[100%] h-20 flex flex-row justify-around items-center">
        <View children="w-[70%]">
          <Text className="text-[#00FFFF]">{index+1+'.  '}{item?.task}</Text>
        </View>
        <View children="w-[30%]">
          <Text className="text-[#00FFFF]">{item?.status}</Text>
        </View>
       </View>))}
    </View>
  )
}

export default DoLists