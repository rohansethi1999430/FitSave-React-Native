import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from "react";

const DATA = [
  { id: '1', title: 'Fitness World'},
  { id: '2', title:  'Good Life Fitness'},
  { id: '3', title: 'Planet Fitness'},
  { id: '4', title: 'Best Deal'},
  { id: '5', title: 'Search something about gyms?'},
];

const FlatListWithTailwind = ({searchQuery}) => {
  const navigation = useNavigation();
  console.log("FlatListWithTailwind"+searchQuery)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const navigateToScreen = (id) => {
    // Determine the screen to navigate to based on the id
    const screenName = `Plans${id}`;
    // Navigate and pass searchQuery along with it
    navigation.navigate(screenName, { searchQuery });
  };

  const renderItem = ({ item }) => (
    
    <TouchableOpacity
      onPress={() => navigateToScreen(item.id)}
      className="flex-row items-center justify-between space-x-2 p-4 my-2"
    >
      <Text className="text-2xl text-[#E3651D] rounded-md text-[20px] font-semibold ">
        {item.title}
      </Text>
      
    </TouchableOpacity>
  );

  return (
    <View className={"bg-[#191919] h-full w-full space-y-2"}>
      <FlatList
        searchQuery = {searchQuery}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        className={"p-4"}
      />
    </View>
  );
};

export default FlatListWithTailwind;
