import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    Keyboard.dismiss(); // Dismiss keyboard when searching
    // Navigate to SearchedResults with the searchQuery as parameter
    navigation.navigate('SearchedResults', { searchQuery });
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Want To Search Something About Gym?</Text>
      </View>
      <View style={styles.searchContainer}>
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
    backgroundColor: '#191919',
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
