import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, useColorScheme, Appearance, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import HomeBanner from './HomeBanner';
const colorNames = [
  'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black', 'White',
  // Add more color names here if needed
];

const HomeScreen = () => {
  const [textColor, setTextColor] = useState('#fff');
  const [colorName, setColorName] = useState('#fff'); // Default color name


  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setColorName(randomColor);
  };

  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });
  return (
  <>
    <HomeBanner/>
    
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar />
      <Text style={[styles.newText, themeTextStyle, {color: colorName}]}>colorScheme is : {colorScheme}{'\n'}Font color is : {colorName}</Text>
    <Button
        title="toggle"
        onPress={generateRandomColor}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={generateRandomColor}
      >  
      </TouchableOpacity>
      {/* <Text style={{ color: textColor, marginTop: 10 }}>Color Name: {colorName}</Text> */}


  </View>
</>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'justify',
    justifyContent: 'space-between',
    flexDirection: 'column',
    pointerEvents:'box-none',
    margin: 16,
    borderRadius: 10,
    overflow: 'scroll',
    elevation: 4,
    backgroundColor: 'black!important',
  },
  box: {
    width: '100%',
    height: 80,
    // display: 'block',
    backgroundColor: 'transparent',
    textAlign:'center',
    // margin: 0,
    padding:0,
    // textOverflow: 'hidden',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    width:'100%',
    display: 'flex',
    textAlign:'center',
    
  },
  newText : {
    fontSize: 24,
    fontWeight: 'bold',
    width:'100%',
    display: 'flex',
    textAlign:'center',
    color:'red',
  },
  },
);

export default HomeScreen;
