import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import { SafeAreaView, Text, View } from 'react-native';
 import HomeScreen from './screens/HomeScreen'
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';
import Explore from './screens/Explore';
import WishListScreen from './screens/WishListScreen';
import Plans1 from './screens/Plans1';
import Plans2 from './screens/Plans2';
import Plans3 from './screens/Plans3';
import Plans4 from './screens/Plans4';
import Plans5 from './screens/Plans5';
import SearchedResults from './screens/SearchedResults';

 const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name = "Discover" component={Discover}/>
      <Stack.Screen name = "ItemScreen" component={ItemScreen}/>
      <Stack.Screen name = "Explore" component={ Explore}/>
      <Stack.Screen name = "WishListScreen" component={WishListScreen}/>
      <Stack.Screen name = "Plans1" component={Plans1}/>
      <Stack.Screen name = "Plans2" component={Plans2}/>
      <Stack.Screen name = "Plans3" component={Plans3}/>
      <Stack.Screen name = "Plans4" component={Plans4}/>
      <Stack.Screen name = "Plans5" component={Plans5}/>
      <Stack.Screen name = "SearchedResults" component={SearchedResults}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

