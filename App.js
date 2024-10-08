import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: {backgroundColor: '#f6f6f6f'}}}>
          <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
     </NavigationContainer> 
  );
}
