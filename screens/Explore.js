import { View, Text, SafeAreaView,Image, TouchableOpacity,TextInput,FlatList, Alert} from 'react-native'
import React, { useLayoutEffect, useState,useEffect } from 'react'
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
    const [isManualSearch, setIsManualSearch] = useState(true);
    const [searchHistoryResults, setSearchHistoryResults] = useState([]);

 
useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown:false,
  })
},[])
useEffect(() => {
  handleHistorySearch();
}, []);
 
const handleSearch = async (query) => {
  setSearchQuery(query);
  if (query.trim().length > 0) {
    try {
      const response = await axios.get(`http://172.20.10.2:8080/manualSearchList/${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Alert.alert('Error', 'Failed to fetch data. Please try again later.');
    }
  } else {
    setSearchResults([]);
  }
};
const handleHistorySearch = async () => {
  try {
    const response = await axios.get('http://172.20.10.2:8080/historySearchList/history');
    const searchHistory = Object.keys(response.data);
    setSearchHistoryResults(searchHistory);
  } catch (error) {
    console.error('Search History Error fetching data:', error);
  //  Alert.alert('Error', 'Failed to fetch data. Please try again later.');
  }
};
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const renderSearchResult = ({ item }) => {
  const nonActionableMessages = ["please type alphabet for search", "you are typing wrong"];
  const isNonActionableMessage = nonActionableMessages.includes(item);
  return(
  <TouchableOpacity onPress={() => !isNonActionableMessage && handleSearch(item)} className = " mr-5 border-white border-2 rounded-2xl p-2 " disabled={isNonActionableMessage}>
      <Text className = " text-red-400 text-[18px]">{item}</Text>
  </TouchableOpacity>
)};


 
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
                <TouchableOpacity onPress={() => setIsManualSearch(!isManualSearch)} style={{ backgroundColor: '#6CC070', borderRadius: 10, padding: 5 }}>
<Text style={{ color: 'white', fontSize: 18 }}>{isManualSearch ? 'Switch to History' : 'Switch to Manual Search'}</Text>
</TouchableOpacity>
              </View>
              {isManualSearch ? (
<View style={{ padding: 10 }}>
<View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, backgroundColor: 'white', borderRadius: 20 }}>
<TextInput
              placeholder="Search ..."
              onChangeText={handleSearch}
              value={searchQuery}
              style={{ flex: 1 }}
            />
<TouchableOpacity onPress={() => handleSearch(searchQuery)}>
<FontAwesome name="search" size={40} color="black" />
</TouchableOpacity>
</View>
<View style={{ flexDirection: 'row', padding: 10 }}>
<FlatList
              data={searchResults}
              renderItem={renderSearchResult}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
</View>
</View>
      ) : (
<View style={{ flexDirection: 'row', padding: 10 }}>
<FlatList
            data={searchHistoryResults}
            renderItem={({ item }) => (
<TouchableOpacity onPress={() => handleSearch(item)}>
<View style={{ backgroundColor: '#E5E5E5', borderRadius: 10, padding: 10, marginRight: 10 }}>
<Text style={{ fontSize: 16, color: '#333333' }}>{item}</Text>
</View>
</TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
</View>
      )}
 
            <View>
            {/* <Image
              source={{uri : "https://medias-prepare.paris2024.org/uploads/2020/11/20201106-JO2024-Centres-de-Pre%CC%81paration-Les-re%CC%81gions-franc%CC%A7aises-Frise-scaled.jpg?x-oss-process=image/resize,w_2560,h_1031,m_lfit/format,webp"}}
              className=" h-60  rounded-md p-1 "
            /> */}
            <LottieView
                    source={require('../assets/Animation.json')} // Replace 'animation.json' with the path to your animation file
                    autoPlay
                    loop
                    className = "w-full h-[20%]  object-cover p-2 mt-1"
                  />
                <FlatListWithTailwind searchQuery={searchQuery}>
                  {console.log("Explore.js" +  searchQuery)}
                </FlatListWithTailwind>
 
                
            </View>
</SafeAreaView>
  )
}
 
export default Explore