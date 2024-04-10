import React, { useState, useEffect,useLayoutEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import ItemCardContainer from '../components/ItemCardContainer'; // Adjust the path as necessary
import { fTApi1, fTApi6 } from '../api/callingExposedApis';
import { useNavigation } from '@react-navigation/native'
import { Avatar, FitnessWorld } from "../assets";
import ItineraryContainer from "../components/ItineraryContainer";
import LottieView from 'lottie-react-native';

const Location = ({ route }) => {
  const { searchQuery } = route.params;

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])

  const navigation = useNavigation();

  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("Location Api : "+searchQuery)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fTApi6(searchQuery);
        console.log(data);
        setMainData(data); // Make sure this matches the structure expected by your FlatList and ItemCardContainer
        setIsLoading(false); // Move the loading state change here to immediately reflect the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Ensure loading state is also set to false on error
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    // Show loading indicator while data is being fetched
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
        <LottieView
        source={require('../assets/Animation - 1711974188907.json')} // Replace 'animation.json' with your Lottie animation file
        autoPlay
        loop
        className = "w-[100%] h-[40%] mb-0"
      />

        <Text className = "font-semibold ">Please wait while we fetch the plans for you...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className = "bg-black   relative h-full" >
      {/* <View className = "w-full items-center justify-center">

      <Image 
      
      source={FitnessWorld}
      className = "w-[80%] h-[50%]"
      >

      </Image>
        <Text className = "text-[#BED754] text-3xl font-bold p-2">
          Fitness World
        </Text>
      </View> */}
                    <View className = "flex-row items-center justify-between px-5 bg-black ">
                <View>
                    <Text className = "text-[40px] text-[#BED754] font-bold">
                    Nearby
                    </Text>
 
                    <Text className = "text-[#E3651D] text-[36px] font-semibold">
                    Gyms
                    </Text>
                </View>
 
                <View className = "w-12 h-12 bg-red-400 rounded-md items-center justify-center shadow-lg">
                    <Image source={Avatar} className = " w-full h-full rounded-md object-cover"/>
                </View>

              </View>

              <LottieView
                    source={require('../assets/Animation - 1712013035924.json')} // Replace 'animation.json' with the path to your animation file
                    autoPlay
                    loop 
                    className = "w-full h-[20%]  object-cover p-2 mt-1"
                  />
      <FlatList
        data={mainData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
            
            ({ item }) => (
          <ItineraryContainer
            title={item.nameOfGym}
            // location={item.address} // Adjust if you have a location or other data to show
            data={item}
          
          />
       
        )
    }
      />
    </SafeAreaView>
  );
};

export default Location;
