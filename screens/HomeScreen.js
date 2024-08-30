import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import CustomeStyle from '../utils/CustomeStyle';
import DoLists from '../components/DoLists';

const HomeScreen = () => {
  const navigation = useNavigation();
  const Tasks = [
    {
      id:1,
      task:"Code it",
      status:false
    },
    {
      id:2,
      task:"Cooking",
      status:false
    },
    {
      id:3,
      task:"Shopping",
      status:false
    }
  ]
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
  },[])

  return (
    <View className="bg-black pt-5" style={CustomeStyle.droidSafeArea}>
        <Header />
        <DoLists Tasks={Tasks}/>
    </View>
  );
};

export default HomeScreen;