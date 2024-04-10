import React from 'react';
import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItineraryContainer = ({ title, location,data }) => {
  const navigation = useNavigation();

  return (
    <View className = "items-center justify-center">
    <TouchableOpacity
      className=" rounded-3xl border-white space-y-2 px-3 py-2 shadow-md w-[350px] my-2 bg-gray-700 justify-center p-5 items-center"
    //   onPress={() => navigation.navigate("ItemScreen", { param: data })}
    >
      <View className = "w-[90%]">
        {/* <View className = " flex-row"> */}
        <Text className="text-[#E3651D] text-[21px] font-bold p-1">
        {/* {title?.length > 14 ? `${title.slice(0, 14)}...` : title} */}
        {title}: 
      </Text>
      <Text className="text-white text-[18px] p-1">
      {/* {location?.length > 14 ? `${location.slice(0, 14)}...` : location} */}
      Contact Details : {data.contactDetails}
      </Text>
        {/* </View> */}
      <Text className="text-[#BED754] text-[18px] font-semibold  p-1">
        
        Address : {data.address}
      </Text>
      </View>
      {/* {data.features.map((feature, index) => (
        <Text key={index} className="text-[#E3651D] text-[14px]">
          {feature}
        </Text>
      ))} */}

{/* <FlatList
  data={data.features}
  renderItem={({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: '#E3651D', fontSize: 14 }}>•</Text>
      <Text style={{ color: '#E3651D', fontSize: 14, marginLeft: 10 }}>{item}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
/> */}
    </TouchableOpacity>
    </View>

  );
};

export default ItineraryContainer;
