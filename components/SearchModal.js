import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Modal, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const SearchModal = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
  
    const openSearchModal = () => {
      setSearchVisible(true);
    };
  
    const closeSearchModal = () => {
      setSearchVisible(false);
    };
  
    const handleSearch = () => {
      // Implement your search functionality here based on the searchQuery
      // For example, you can trigger an API call or perform local filtering
      console.log('Search Query:', searchQuery);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.Content title="Your App" />
          <Appbar.Action icon="search" onPress={openSearchModal} />
        </Appbar.Header>
  
        {/* Your main content goes here */}
        <Text>Welcome to Your App!</Text>
  
        <Modal visible={searchVisible} onDismiss={closeSearchModal} contentContainerStyle={styles.modalContainer}>
          <TextInput
            label="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          <Button mode="contained" onPress={handleSearch}>
            Search
          </Button>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      margin: 40,
      borderRadius: 10,
    },
    searchInput: {
      marginBottom: 10,
    },
  });
  
  export default SearchModal;
  