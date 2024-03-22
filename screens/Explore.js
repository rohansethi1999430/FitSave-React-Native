import { View, Text, SafeAreaView,Image, TouchableOpacity,TextInput} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
 import  {ExplorePlans, HeroImage}  from '../assets/index';
 import * as Animatable from 'react-native-animatable';
 import { Attractions, Avatar, Hotels, Restaurants, NotFound} from '../assets';
import FlatListWithTailwind from '../components/FlatListWithTailwind';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
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
    console.log(query);
    //const response = await axios.get(`https://your-api-url.com/search?query=${query}`);
    //setSearchResults(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);

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
                    placeholder="Search with '*' in the end..."
                    onChangeText={handleSearch}
                    value={searchQuery}
                    className = "bg-white text-black rounded-2xl p-4 px-5 w-[90%]"
                  />

                <TouchableOpacity>
                <FontAwesome name="search" size={24} color="white" />
                </TouchableOpacity>

              </View>

              <TouchableOpacity>
                
              </TouchableOpacity>

            <View>
            {/* <Image
              source={{uri : "https://medias-prepare.paris2024.org/uploads/2020/11/20201106-JO2024-Centres-de-Pre%CC%81paration-Les-re%CC%81gions-franc%CC%A7aises-Frise-scaled.jpg?x-oss-process=image/resize,w_2560,h_1031,m_lfit/format,webp"}}
              className=" h-60  rounded-md p-1 "
            /> */}
            
                <FlatListWithTailwind searchQuery={searchQuery}>
                  {console.log(searchQuery)}
                </FlatListWithTailwind>

                
            </View>
</SafeAreaView>
  )
}

export default Explore