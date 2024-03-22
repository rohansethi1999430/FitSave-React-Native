import { View, Text, SafeAreaView,Image, TouchableOpacity,TextInput,FlatList} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
 import  {ExplorePlans, HeroImage}  from '../assets/index';
 import * as Animatable from 'react-native-animatable';
 import { Attractions, Avatar, Hotels, Restaurants, NotFound} from '../assets';
import FlatListWithTailwind from '../components/FlatListWithTailwind';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import axios from 'axios';
const Explore = () => {

    const navigation = useNavigation();

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown:false,
  })
},[])

const handleSearch = async (query) => {
  setSearchQuery(query);
  try {
    console.log(searchQuery);
    console.log(query);
    const response = await axios.get(`http://192.168.2.35:8080/manualSearchList/${query}`);
    
    console.log(response.data);
    setSearchResults(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const renderSearchResult = ({ item }) => (
  <TouchableOpacity onPress={() => handleSearch(item)} className = " mr-5 border-white border-2 rounded-2xl p-2">
      <Text className = " text-red-400 text-[18px]">{item}</Text>
  </TouchableOpacity>
);

  return (
<SafeAreaView className = "bg-[#191919] flex-1 relative">
              <View className = "flex-row items-center justify-between px-5 bg-[#191919] ">
                <View>
                    <Text className = "text-[40px] text-[#BED754] font-bold">
                    Explore
                    </Text>

                    <Text className = "text-[#E3651D] text-[36px] font-semibold">
                    GYM Plans
                    </Text>
                </View>

                <View className = "w-12 h-12 bg-red-400 rounded-md items-center justify-center shadow-lg">
                    <Image source={Avatar} className = " w-full h-full rounded-md object-cover"/>
                </View>
              </View>
              <View className = "p-4 flex-row justify-between items-center">

                  <TextInput
                    placeholder="Search ..."
                    onChangeText={handleSearch}
                    value={searchQuery}
                    className = "bg-white text-black rounded-2xl p-4 px-5 w-[90%]"
                  />

                <TouchableOpacity>
                <FontAwesome name="search" size={24} color="white" />
                </TouchableOpacity>


              </View>

              <TouchableOpacity className  = "flex-row">
                            <View className = "flex-row p-3">
                {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Search Recommendations:</Text> */}
                <FlatList
                    data={searchResults}
                    renderItem={renderSearchResult}
                    keyExtractor={(item, index) => index.toString()}
                    className = "flex-row"
                    horizontal={true}
                />
            </View>
              </TouchableOpacity>

            <View>


            <LottieView
                    source={require('../assets/Animation.json')} // Replace 'animation.json' with the path to your animation file
                    autoPlay
                    loop
                    className = "w-full h-[25%]  object-cover p-2 mt-1"
                  />
                <FlatListWithTailwind></FlatListWithTailwind>

                
            </View>
</SafeAreaView>
  )
}

export default Explore