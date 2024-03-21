import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState, useEffect } from "react";

const DATA = [
  { id: '1', title: 'Good Life Fitness', translate: "Discover the Culture of France" },
  { id: '2', title: 'Fitness World', translate: "Learn French" },
  { id: '3', title: 'Planet Fitness', translate: "Discover the French cuisine" },
  { id: '4', title: 'Best Deal', translate: "History of France" },
];

const FlatListWithTailwind = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Define renderItem inside FlatListWithTailwind to access navigation
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Plans")}
      className="flex-row items-center justify-between space-x-2 p-4 my-2"
    >
      <Text className="text-2xl text-[#E3651D] rounded-md text-[20px] font-semibold ">
        {item.title}
      </Text>
      {/* Place your FontAwesome icon here */}
    </TouchableOpacity>
  );

  return (
    <View className={"bg-[#191919] h-full w-full space-y-2"}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        className={"p-4"}
      />
    </View>
  );
};

export default FlatListWithTailwind;
