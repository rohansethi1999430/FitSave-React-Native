import React, { useState} from 'react';
import { View, Text, FlatList, TouchableOpacity,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: '1', title: 'Fitness World'},
  { id: '2', title: 'Good Life Fitness'},
  { id: '3', title: 'Planet Fitness'},
  { id: '4', title: 'Best Deal'},
  { id: '5', title: 'Search something about gyms?'},
];

const FlatListWithTailwind = ({ searchQuery }) => {
  if(searchQuery==""){
    console.log("123");
    
  }
  const navigation = useNavigation();
  const [selectedItemId, setSelectedItemId] = useState(null);

  const navigateToScreen = (id) => {
    console.log("id is",id)
    console.log("navigateToScreen",searchQuery)
    if (!searchQuery && (id === '1' || id === '2' || id === '3')) {
      Alert.alert('Alert', 'You have to pass something to click these');
      return;
    }
    const containsNumbersOrNonAlphabetic = /[0-9]|[^a-zA-Z]/.test(searchQuery);

  if (containsNumbersOrNonAlphabetic && (id === '1' || id === '2' || id === '3')) {
    Alert.alert('Alert', 'Search query contains numbers or non-alphabetic characters. Please remove them and try again.');
    return;
  }
    // Determine the screen to navigate to based on the id
    const screenName = `Plans${id}`;
    navigation.navigate(screenName, { searchQuery: searchQuery });
  };


  const renderItem = ({ item }) => (
    
<TouchableOpacity
  onPress={() => {
    if (!searchQuery && item.id !== '4' && item.id !== '5') {
    
      setSelectedItemId(item.id);
      navigateToScreen(item.id);
    }
  }}
  // disabled={!searchQuery}
  className={`flex-row items-center justify-between space-x-1 p-4 rounded-3xl ${selectedItemId === item.id ? 'bg-gray-200' : ''}`}
>
  <Text className="text-2xl text-[#E3651D] rounded-md text-[20px] font-semibold">
    {item.title}
  </Text>
</TouchableOpacity>
  );

  return (
    <View className="bg-[#191919] h-full w-full space-y-1">
      <FlatList
        searchQuery={searchQuery}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        className=""
      />
    </View>
  );
};

export default FlatListWithTailwind;
