import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SearchedData = () => {
  const [relevantSites, setRelevantSites] = useState([]);

  // Simulating fetching data from a function
  useEffect(() => {
    const fetchData = async () => {
      // Call the function to get the JSON result
      const jsonResult = await yourFunctionToGetJsonResult();
      setRelevantSites(jsonResult.relevantSites);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.site}>{item.site}</Text>
      <Text style={styles.occurrences}>Occurrences: {item.occurrences}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {relevantSites.length > 0 ? (
        <FlatList
          data={relevantSites}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.message}>Nothing found related to your search! Try something else related to a gym and fitness</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  site: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  occurrences: {
    fontSize: 14,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SearchedData;
