import React from 'react';
import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ title, location,data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className=" rounded-3xl border-white space-y-2 px-3 py-2 shadow-md w-[300px] my-2 bg-gray-700 justify-center p-5"
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
    >
      <View className = "flex-row">
      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <Text className="text-[#8597A2] text-[18px]">
      {location?.length > 14 ? `${location.slice(0, 14)}...` : location}
      </Text>
      <Text className="text-[#BED754] text-[18px] font-semibold ml-2">
        
        {data.price}
      </Text>
      </View>
      {/* {data.features.map((feature, index) => (
        <Text key={index} className="text-[#E3651D] text-[14px]">
          {feature}
        </Text>
      ))} */}

<FlatList
  data={data.features}
  renderItem={({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: '#E3651D', fontSize: 14 }}>•</Text>
      <Text style={{ color: '#E3651D', fontSize: 14, marginLeft: 10 }}>{item}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
/>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
