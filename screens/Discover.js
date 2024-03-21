import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, Restaurants, NotFound,WishList, PlanetFitness, FitnessWorld, GoodLife} from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';



const Discover = () => {

 const [type, setType] = useState("Attractions")

    const navigation = useNavigation();
    const[isLoading,setIsLoading]=useState(false)
    const[mainData,setMainData]=useState([])
    const [bl_lat, setBl_lat] = useState(null);
    const [bl_lng, setBl_lng] = useState(null);
    const [tr_lat, setTr_lat] = useState(null);
    const [tr_lng, setTr_lng] = useState(null);
  
  

    useLayoutEffect(() =>{
      navigation.setOptions({
        headerShown:false,
      })
    },[])
    useEffect(()=>{setIsLoading(true);
        getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then( data=>{
         setMainData(data);
         setInterval(()=>{setIsLoading(false)},4000)
        })
       },[bl_lat, bl_lng, tr_lat, tr_lng, type])
 

  return (

        <SafeAreaView className = "flex-1 bg-[#191919] relative">
            <View className = "flex-row items-center justify-between px-8">
                <View>
                    <Text className = "text-[40px] text-[#0B646B] font-bold">
                        Discover
                    </Text>

                    <Text className = "text-[#527283] text-[36px]">
                        France today
                    </Text>
                </View>
                <TouchableOpacity onPress ={() => navigation.navigate("WishListScreen")} className="w-16 h-16 rounded-md item-center justify-center shadow-lg">
      <Image source={WishList} className="w-full h-full rounded-md object-cover"/>
      </TouchableOpacity>

                <View className = "w-12 h-12 bg-red-400 rounded-md items-center justify-center shadow-lg">
                    <Image source={Avatar} className = " w-full h-full rounded-md object-cover"/>
                </View>
            </View>

            <View className = "flex-row items-center bg-white mx-4 rounded-2xl py-1 px-4 shadow-lg" >
            <GooglePlacesAutocomplete
                GooglePlacesDetailsQuery={{fields:"geometry"}}
                placeholder='Search..'
                fetchDetails = {true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(details?.geometry?.viewport);
                    setBl_lat(details?.geometry?.viewport?.southwest?.lat);
                    setBl_lng(details?.geometry?.viewport?.southwest?.lng);
                    setTr_lat(details?.geometry?.viewport?.northeast?.lat);
                    setTr_lng(details?.geometry?.viewport?.northeast?.lng);
                }}
                />
            </View>
                {/* Menu Container */}
                {isLoading ? <View className = "flex-1 items-center justify-center">
                    <ActivityIndicator size={'large'} color={"#00ff00"}  />
                    
                    </View>:

                <ScrollView>

                    <View className = "flex-row items-center justify-between px-8 mt-8">
                        <MenuContainer
                        key={"hotels"}
                        title = {"Hotels"}
                        imageSrc = {PlanetFitness}
                        type = {type}
                        setType = {setType}
                        />

                        <MenuContainer
                        
                        key={"attractions"}
                        title = {"Attractions"}
                        imageSrc = {FitnessWorld}
                        type = {type}
                        setType = {setType}
                        />

                        <MenuContainer
                        
                        key={"Restaurants"}
                        title = {"Restaurants"}
                        imageSrc = {GoodLife}
                        type = {type}
                        setType = {setType}
                        />
                    </View>


                    <View>
                        <View className = "flex-row items-center justify-between px-4 mt-8">
                            <Text className = "text-[#2C7379] text-[28px] font-bold">
                                Top Tips
                            </Text>

                            <TouchableOpacity className = "flex-row items-center justify-between space-x-2"
                            
                            onPress={()=>navigation.navigate("Explore")}
                            
                            >
                            <Text className = "text-[#A0C4C7] text-[20px] font-bold">
                                Explore France 
                            </Text>
                            <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                            </TouchableOpacity>

                        </View>
                        <View className = "px-3 mt-8 flex-row items-center justify-evenly flex-wrap">
                            {mainData?.length > 0 ? <>

                            {mainData?.map((data,i) =>(

                                <ItemCardContainer 
                                key={i}
                                imageSrc = {
                                    data?.photo?.images?.medium?.url ?
                                    data?.photo?.images?.medium?.url :
                                    "https://gifdb.com/images/high/naruto-funny-crying-xcgzlj0eao9ihxnt.gif"
                                }
                                title = {data?.name} 
                                location = {data?.location_string}
                                data={data}
                                />

                            ))}


                            </> :<>
                            
                            <View className = " w-full h-[400px] items-center justify-center space-y-8">
                                <Image
                                source={{uri : "https://gifdb.com/images/high/naruto-funny-crying-xcgzlj0eao9ihxnt.gif"}}
                                className = " w-32 h-32 object-cover"
                                />

                                <Text className = " text-2xl text-[#428288] font-semibold">
                                    Opps...No data found
                                </Text>

                            </View>
                            </>
                            }

                            
                        </View>
                    </View>


                </ScrollView>

                            }


        </SafeAreaView>

  )
}

export default Discover