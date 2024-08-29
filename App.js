import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    // <NavigationContainer>
      // <Stack.Navigator>
      <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-red-500">Do To List!</Text>
      <StatusBar style="auto" />
      </View>
      // </Stack.Navigator>
    //  </NavigationContainer> 
  );
}
