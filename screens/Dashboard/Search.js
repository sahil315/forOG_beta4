import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen</Text>
      {/* Add your content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Search;
