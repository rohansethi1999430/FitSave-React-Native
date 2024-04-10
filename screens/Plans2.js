import React, { useState, useEffect,useLayoutEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import ItemCardContainer from '../components/ItemCardContainer'; // Adjust the path as necessary
import { fTApi2 } from '../api/callingExposedApis';
import { useNavigation } from '@react-navigation/native'
import { Avatar, FitnessWorld } from "../assets";
import LottieView from 'lottie-react-native';

const Plans1 = ({ route }) => {
  const { searchQuery } = route.params;

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])

  const navigation = useNavigation();

  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("Plans1"+searchQuery)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fTApi2(searchQuery);
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
    <SafeAreaView className = "bg-[#191919]  relative h-full" >
      {/* <View className = "w-full items-center justify-center">

      <Image 
      
      source={FitnessWorld}
      className = "w-[80%] h-[50%]"
      >

      </Image>
        <Text className = "text-[#BED754] text-3xl font-bold p-2">
          Good Life Fitness
        </Text>
      </View> */}
                          <View className = "flex-row items-center justify-between px-5 bg-[#191919] ">
                <View>
                    <Text className = "text-[40px] text-[#BED754] font-bold">
                    Good Life
                    </Text>
 
                    <Text className = "text-[#E3651D] text-[36px] font-semibold">
                    Fitness
                    </Text>
                </View>
 
                <View className = "w-12 h-12 bg-red-400 rounded-md items-center justify-center shadow-lg">
                    <Image source={Avatar} className = " w-full h-full rounded-md object-cover"/>
                </View>

              </View>
      <FlatList
        data={mainData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
            
            ({ item }) => (
          <ItemCardContainer
            title={item.membershipType}
            location="" // Adjust if you have a location or other data to show
            data={item}
          
          />
       
        )
    }
      />
    </SafeAreaView>
  );
};

export default Plans1;
