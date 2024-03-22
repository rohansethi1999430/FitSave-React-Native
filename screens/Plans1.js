import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ItemCardContainer from '../components/ItemCardContainer'; // Adjust the path as necessary
import { fTApi1 } from '../api/callingExposedApis';

const Plans1 = ({ route }) => {
  const { searchQuery } = route.params;
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("Plans1"+searchQuery)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fTApi1(searchQuery);
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
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    </View>
  );
};

export default Plans1;
