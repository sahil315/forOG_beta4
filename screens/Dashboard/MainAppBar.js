import React, { useState } from 'react';
import { Text, StyleSheet, View, useColorScheme, Appearance, TouchableOpacity } from 'react-native';
import { Appbar, Modal, TextInput, Button } from 'react-native-paper';
import { Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlurView } from '@react-native-community/blur';


const MainAppBar = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // const navigation = useNavigation();

    const openSearchModal = () => {
      setSearchVisible(true);
    };
  
    const closeSearchModal = () => {
      setSearchVisible(false);
    };
  
    const handleSearch = () => {
      // Implement your search functionality here based on the searchQuery
      // For example, you can trigger an API call or perform local filtering
    //   console.log('Search Query:', searchQuery);
    setSearchVisible(false);
    };
    // const currentScreenName = path.dangerouslyGetState()?.routes?.[0]?.name;

 
    return (
    <>
        <View>
        <Appbar.Header>
            <Appbar.Content subtitle={'Subtitle'} />
            <Appbar.Action icon="magnify" title="search" onPress={openSearchModal} />
            {/* <Appbar.Action icon="dots-horizontal" onPress={() => {}} /> */}
        </Appbar.Header>
        <Modal visible={searchVisible} onDismiss={closeSearchModal} contentContainerStyle={styles.modalContainer}>
        {/* <BlurView style={styles.blurBackground} blurType="light" blurAmount={5}> */}
          <View style={styles.searchInputContainer}>
            {/* <Icon name="search" size={20} color="grey" style={styles.searchIcon} /> */}
            <TextInput
              label="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
              theme={{ colors: { primary: 'black' } }}
            />
            {/* <Button mode="elevated" title="search" onPress={handleSearch} style={styles.searchButton}> */}
                <Icon style={styles.searchIcon} name="search" onPress={handleSearch} size={30} color="black" />
            {/* </Button> */}
          </View>
          
        {/* </BlurView> */}
      </Modal>
      </View>
    </>    
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'justify',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     pointerEvents:'box-none',
//     margin: 16,
//     borderRadius: 10,
//     overflow: 'scroll',
//     elevation: 4,
//     backgroundColor: 'black!important',
//   },
//   box: {
//     width: '100%',
//     height: 80,
//     // display: 'block',
//     backgroundColor: 'transparent',
//     textAlign:'center',
//     // margin: 0,
//     padding:0,
//     // textOverflow: 'hidden',
//   },
//   lightContainer: {
//     backgroundColor: '#d0d0c0',
//   },
//   darkContainer: {
//     backgroundColor: '#242c40',
//   },
//   lightThemeText: {
//     color: '#242c40',
//   },
//   darkThemeText: {
//     color: '#d0d0c0',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     width:'100%',
//     display: 'flex',
//     textAlign:'center',
    
//   },
//   newText : {
//     fontSize: 24,
//     fontWeight: 'bold',
//     width:'100%',
//     display: 'flex',
//     textAlign:'center',
//     color:'red',
//   },
//   },
// );
const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    searchInputContainer: {
        backgroundColor:'transparent',
        flexDirection: 'row',
        marginTop:'100px',
        height:'250px',
        width:'100%',
    },
    searchInput: {
        marginBottom: 0,
        width:'80%',
        color: 'black',
        zIndex: 99999,
        backgroundColor: 'transparent',

    },
    searchButton: { 
        backgroundColor: 'transparent',
        height:'100px',
        width:'30%',
        margin: '0px',
        padding: '0px',
        display: 'flex',
        textAlign:'center',
        borderRadius: 10,
        direction: 'row',
        wrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        color: 'black',
        height: '100%',
        width: '100%',
        margin: '0px auto',
        
        // fontSize: '25px',
    },
  });
  

export default MainAppBar;
