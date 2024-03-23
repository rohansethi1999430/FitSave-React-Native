import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: '1', title: 'Fitness World'},
  { id: '2', title: 'Good Life Fitness'},
  { id: '3', title: 'Planet Fitness'},
  { id: '4', title: 'Best Deal'},
  { id: '5', title: 'Search something about gyms?'},
];

const FlatListWithTailwind = ({ searchQuery }) => {
  const navigation = useNavigation();
  const [selectedItemId, setSelectedItemId] = useState(null);

  const navigateToScreen = (id) => {
    const screenName = `Plans${id}`;
    navigation.navigate(screenName, { searchQuery: searchQuery });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={searchQuery ? () => {
        setSelectedItemId(item.id);
        navigateToScreen(item.id);
      } : null}
      disabled={!searchQuery}
      className={`flex-row items-center justify-between space-x-2 p-4 my-2  rounded-3xl ${selectedItemId === item.id ? 'bg-gray-200' : ''}`}
    >
      <Text className="text-2xl text-[#E3651D] rounded-md text-[20px] font-semibold">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="bg-[#191919] h-full w-full space-y-2">
      <FlatList
        searchQuery={searchQuery}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        className="p-4"
      />
    </View>
  );
};

export default FlatListWithTailwind;
