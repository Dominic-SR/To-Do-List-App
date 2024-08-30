import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
 
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
  },[])

  return (
    <View >
        <Header />
    </View>
  );
};

export default HomeScreen;