import React from 'react';
import { Text, StyleSheet, View, Button, useColorScheme } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 


const Tab = createBottomTabNavigator();

import HomeScreen from '../../HomeScreen';
import ProfileScreen from '../../ProfileScreen';
import SearchScreen from './Search';

const MainLayout = () => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
  <View style={[styles.container, themeContainerStyle]}>
    <Text style={[styles.text, themeTextStyle]}>MainLayout</Text>
    <StatusBar />
    {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
     
    </Tab.Navigator> */}
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    pointerEvents: 'box-none',
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
  },
});

export default MainLayout;
