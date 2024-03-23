import React, { useState, useEffect,useLayoutEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import ItemCardContainer from '../components/ItemCardContainer'; // Adjust the path as necessary
import { fTApi4 } from '../api/callingExposedApis';
import { useNavigation } from '@react-navigation/native'
import { FitnessWorld } from "../assets";

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
        const data = await fTApi4(searchQuery);
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
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Please wait while we fetch the plans for you...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className = "bg-[#191919] items-center lex-1 relative h-full" >
      <View className = "w-full items-center justify-center">

      {/* <Image 
      
      source={FitnessWorld}
      className = "w-[80%] h-[50%]"
      >

      </Image> */}
        <Text className = "text-[#BED754] text-3xl font-bold p-2">
          Best Deals
        </Text>
      </View>
      <FlatList
        data={mainData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
            
            ({ item }) => (
          <ItemCardContainer
          title={item.gymName}
          location={item._id} // Adjust if you have a location or other data to show
          data={item}
          
          />
       
        )
    }
      />
    </SafeAreaView>
  );
};

export default Plans1;
