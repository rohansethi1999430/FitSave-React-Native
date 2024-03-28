import { View, Text, SafeAreaView,Image, TouchableOpacity,TextInput,FlatList, Alert} from 'react-native'
import React, { useLayoutEffect, useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import  {ExplorePlans, HeroImage}  from '../assets/index';
import * as Animatable from 'react-native-animatable';
import { Attractions, Avatar, Hotels, Restaurants, NotFound} from '../assets';
import FlatListWithTailwind from '../components/FlatListWithTailwind';
import { SearchBar } from 'react-native-elements';
import { FontAwesome, Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import axios from 'axios';
const Explore = () => {
 
  
  const [isToggled, setIsToggled] = useState(false);

  // const toggleSwitch = () => {
  //   setIsToggled(!isToggled);
  // };

    const navigation = useNavigation();
    const [isManualSearch, setIsManualSearch] = useState(true);
    const [searchHistoryResults, setSearchHistoryResults] = useState([]);
    

 
useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown:false,
  })
},[])

 
const handleSearch = async (query) => {
  setSearchQuery(query);
  if (query.trim().length > 0) {
    try {
      const response = await axios.get(`http://10.71.52.226:8090/manualSearchList/${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Failed to fetch data. Please try again later.');
    }
  } else {
    setSearchResults([]);
  }
};

const handleHistorySearch = async () => {
  setIsToggled(!isToggled);
  try {
    const response = await axios.get('http://10.71.52.226:8090/historySearchList/history');
    const searchHistory = Object.keys(response.data);

    const searchHistoryKeys = Object.keys(response.data);
    const searchHistoryValues = Object.values(response.data);
    console.log(Object.keys(response.data) + (Object.values(response.data)));

    const val = (Object.values(response.data))

    const searchHistoryResults = searchHistoryKeys.map((key, index) => ({
      term: key,
      count: parseInt(searchHistoryValues[index])
    }));

    // Logging the search history results
    console.log(searchHistoryResults);
    // const splitValues = val.map(item => item.split(' '));
    // console.log(val);
     setSearchHistoryResults(searchHistoryResults);
  } catch (error) {
    console.error('Search History Error fetching data:', error);
  //  Alert.alert('Error', 'Failed to fetch data. Please try again later.');
  }
};
useEffect(() => {
  handleHistorySearch();
}, []);
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const renderSearchResult = ({ item }) => {
  const nonActionableMessages = ["please type alphabet for search", "you are typing wrong..!!"];
  const isNonActionableMessage = nonActionableMessages.includes(item);
  console.log(nonActionableMessages.includes(item))
  return(
  <TouchableOpacity onPress={() =>  !isNonActionableMessage && handleSearch(item)} className = " mr-5 border-white border-2 rounded-2xl p-2" disabled={isNonActionableMessage} >
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

              </View>
              <View className = "items-center flex-row p-1 w-[80%]" >
              {/* <TouchableOpacity onPress={() => setIsManualSearch(!isManualSearch)} className = " bg-[#BED754] rounded-2xl p-2 w-[45%]">
                <Text className = "font-semibold text-xl text-black">{isManualSearch ? 'Switch to History' : 'Switch to Manual Search'}</Text>
                </TouchableOpacity> */}
                <Text className = "text-white p-2 font-semibold">
                  Hit the toggle to switch between history & manual mode!!
                </Text>
                <TouchableOpacity onPress={() => setIsToggled(!isToggled)}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {isToggled ? (
          <Feather name="toggle-left" size={35} color="white" />
        ) : (
          <Feather name="toggle-right" size={35} color="white" />
        )}
      </View>
    </TouchableOpacity>
              </View>
              {isToggled ? (
<View style={{ padding: 10 }}>
<View className = "p-2 flex-row justify-between items-center">
 
 <TextInput
   placeholder="Search ..."
   onChangeText={handleSearch}
   value={searchQuery}
   className = "bg-white text-black rounded-2xl p-3 px-4 w-[90%]"
 />

<TouchableOpacity>
<FontAwesome name="search" size={24} color="white" />
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
      <TouchableOpacity onPress={() => handleSearch(item.term)}>
        <View style={{ backgroundColor: '#E5E5E5', borderRadius: 10, padding: 10, marginRight: 10 }}>
          <Text style={{ fontSize: 16, color: '#333333' }}>{item.term}: {item.count}</Text>
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