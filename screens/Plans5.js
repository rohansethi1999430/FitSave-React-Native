import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard,Alert,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Avatar } from '../assets';
import LottieView from 'lottie-react-native';

const Plans5 = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const buttonAnim = useRef(new Animated.Value(0)).current;
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSearch = () => {
    if (!searchQuery) {
      // If searchQuery is null or empty, show an alert
      Alert.alert('Input Error', 'Please provide input.');
    } else {
      // Proceed with search logic
      Keyboard.dismiss(); // Dismiss keyboard when searching
      navigation.navigate('SearchedResults', { searchQuery });
    }
  };

  const handleParse = async () => {
    try {
      const response = await axios.get('http://192.168.2.35:8090/parsing');
      // Handle the response data here
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const slideInButton = () => {
    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const slideOutButton = () => {
    Animated.timing(buttonAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  // style={styles.container}
  return (
    <SafeAreaView  className = "bg-black flex-1 relative">
                    <View className = "flex-row items-center justify-between px-5  ">
                <View>
                    <Text className = "text-[40px] text-[#BED754] font-bold">
                    Explore
                    </Text>
 
                    <Text className = "text-[#E3651D] text-[36px] font-semibold">
                    GYM Plans
                    </Text>
                </View>
 
                <View className = "w-12 h-12 bg-red-400 rounded-md items-center justify-center shadow-lg">
                    <Image source={Avatar} className = " w-full h-full rounded-md object-cover"/>
                </View>

              </View>
              {/* style={styles.header} */}

              <LottieView
                    source={require('../assets/Animation - 1712012069437.json')} // Replace 'animation.json' with the path to your animation file
                    autoPlay
                    loop 
                    className = "w-full h-[20%]  object-cover p-2 mt-1"
                  />
      <View className = " m-3 items-center justify-center" >


      <Animated.View style={[styles.buttonContainer]}>
          <TouchableOpacity style={styles.button} onPress={handleParse}>
            <Text style={styles.buttonText}>Parse</Text>
          </TouchableOpacity>
        </Animated.View>
        <Text style={styles.headerText}>Want To Search Something About Gym?</Text>
      </View>



      {/* style={styles.searchContainer} */}
      <View  className = " p-4">
        <TextInput
          style={styles.input}
          placeholder="Search anything here..!!"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={slideInButton}
          onBlur={slideOutButton}
        />
        <Animated.View style={[styles.buttonContainer, { opacity: buttonAnim }]}>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#BED754',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
    
  },
  button: {
    backgroundColor: '#BED754',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#191919',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Plans5;
