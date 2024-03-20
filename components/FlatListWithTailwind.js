import React from 'react';
import { View, Text, FlatList, Image ,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import tw from 'tailwind-rn';

// Dummy data for the FlatList
const DATA = [
  { id: '1', title: 'Good Life Fitness',translate:"Discover the Culture of France" },
  { id: '2', title: 'Fitness World',translate:"Learn French" },
  { id: '3', title: 'Planet Fitness',translate:"Discover the French cuisine" },
  { id: '4', title: 'Best Deal',translate:"History of France" }
];

// Function to render each item in the FlatList
const renderItem = ({ item }) => (
  // <View className ={"p-4 my-2 rounded-lg w-full space-y-2 px-3 mt-5" }>
  //   <Text className="text-2xl text-[#E3651D] rounded-md text-[20px] font-semibold">{item.title}</Text>
  //   {/* <Text className="text-2xl text-[#428288] rounded-md text-[15px] font-semibold">{item.translate}</Text> */}
  // </View>

        <TouchableOpacity className = "flex-row items-center justify-between space-x-2 p-4 my-2"
                                  
        // onPress={()=>navigation.navigate("Explore")}
        
        >
        <Text className="text-2xl text-[#E3651D] rounded-md text-[20px] font-semibold ">{item.title}</Text>
        {/* <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" /> */}
        </TouchableOpacity>
  
);

const FlatListWithTailwind = () => {
  return (
    <View className={" bg-[#191919] h-full w-full space-y-2 "}>


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
