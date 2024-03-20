import { View, Text, SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
 import  {HeroImage}  from '../assets/index';
 import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
  
const navigation = useNavigation();

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown:false,
  })
},[])

  return (

    <SafeAreaView className = "bg-[#191919] flex-1 relative">

      {/* First Section */}

        <View className = "flex-row px-6 mt-8 items-center space-x-2">
          <View className = "w-16 h-16 bg-black  rounded-full items-center justify-center ">
            <Text className = "text-[#BED754] text-3xl font-bold">
              Fit
            </Text>
          </View>
          <Text className = "text-[#E3651D] text-3xl font-semibold">
            Save
          </Text>
        </View>

      <View className = "mt-8 space-y-1 px-6">
        <Text className = "text-[#BED754] text-[42px]">
        Find Your Fit
        </Text>

        <Text className = "text-[#E3651D] text-[38px] font-bold">
        Without Breaking the Bank!
        </Text>

        {/* <Text className = "text-[#3C6072] text-base ">
        Explore France: Where Every Corner Tells a Story
        </Text> */}
      </View>
{/* Circle Section */}
      {/* <View className = "w-[400px] h-[400px] bg-[#5D0E41] rounded-full absolute bottom-36 -right-40"></View>
      <View className = "w-[400px] h-[400px] bg-[#A0153E] rounded-full absolute -bottom-36 -left-36"></View> */}

      <View className = "flex-1 relative items-center justify-center">

        <Animatable.Image
        animation="fadeIn"
        easing="ease-in-out"
        source={HeroImage}
        className = "w-full h-[55%] -bottom-40 object-cover"
        />

        {/* <Image source = {HeroImage} className = "w-full h-[60%] -bottom-20 object-cover" /> */}
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Explore")}
        className = "absolute bottom-10 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#FF204E] rounded-full items-center justify-center ">
       
        <Animatable.View 
        animation={"pulse"}
        easing={'ease-in-out'}
        iterationCount={"infinite"}
        className = "w-20 h-20 items-center justify-center rounded-full bg-[#FF204E] ">
          <Text className = "text-gray-50 text-[36px] font-semibold">
            Go
          </Text>
        </Animatable.View>
        
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default HomeScreen