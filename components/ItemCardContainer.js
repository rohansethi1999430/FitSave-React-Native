import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ title, location,data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[300px] my-2"
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
    >
      <Text className="text-[#428288] text-[20px] font-bold text-center">
        {title?.length > 20 ? `${title.slice(0, 20)}...` : title}
      </Text>
      <Text className="text-[#8597A2] text-[18px]">
      {location?.length > 14 ? `${location.slice(0, 14)}...` : location}
      </Text>
      <Text className="text-[#8597A2] text-[14px]">
        {data.price}
      </Text>
      {data.features.map((feature, index) => (
        <Text key={index} className="text-[#428288] text-[14px]">
          {feature}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
