import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios'; // Import axios library
import { useRoute } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native';
// Import useRoute hook

const SearchedResults = () => {
  const route = useRoute(); // Use useRoute hook to access route params
  const searchText = route.params?.searchQuery || ''; // Access searchText from route params

  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(searchText); // Log searchText to verify if it's received correctly
        setIsLoading(true);
        const response = await axios.post('http://192.168.2.35:8090/invertedIndexing', {
          text: searchText // Pass searchText directly without wrapping it in params
        });
        if (response.data && response.data.relevantSites) {
          setMainData(response.data.relevantSites);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchText]);

  const renderCount = () => (

   
    <View style={styles.countContainer}>
      <Text style={styles.countText}>{mainData.length} Results Found</Text>
    </View>
    
  );

  const renderItem = ({ item }) => (

    <SafeAreaView className = "bg-black">
    <TouchableOpacity onPress={() => handleLinkPress(item.site)}>
      <View style={styles.item}>
        <Text style={styles.site}>{item.site}</Text>
        <Text style={styles.occurrences}>{item.occurrences}</Text>
      </View>
    </TouchableOpacity>
    </SafeAreaView>
  );

  const handleLinkPress = (url) => {
    // Handle link press, e.g., navigate to the selected URL
    console.log('Pressed URL:', url);
  };

  return (
    <View style={styles.container}>
      {renderCount()}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={mainData}
          renderItem={renderItem}
          keyExtractor={(item) => item.site}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Darkened background color
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  countContainer: {
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10, // Added padding for better spacing
  },
  countText: {
    fontSize: 20, // Increased font size
    fontWeight: 'bold', // Increased font weight
    color: 'white',
    paddingVertical: 15, // Changed text color to white
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#3b3b3b', // Changed background color of items
    borderRadius: 8,
    marginBottom: 10,
    color: 'white'
  },
  site: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  occurrences: {
    fontSize: 16,
    color: '#BED754',
  },
});

export default SearchedResults;
