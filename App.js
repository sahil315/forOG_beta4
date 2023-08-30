import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// paper navigation
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

// import MainLayout from './screens/Dashboard/MainLayout';
import HomeScreen from "./screens/Dashboard/HomeBanner";
import ProfileScreen from "./screens/Dashboard/Profile";
import SearchScreen from "./screens/Dashboard/Search";
import MainAppBar from "./screens/Dashboard/MainAppBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Banner } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { NavigationProvider } from "./NavigationContext"; // Import the NavigationProvider

import BlogPostScreen from "./screens/BlogPostScreen";
const nav = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const Stack = createMaterialBottomTabNavigator();

const BlogPostStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BlogPost" component={BlogPostScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  const [visible, setVisible] = React.useState(true);
  useEffect(() => {
    console.log("path " + JSON.stringify("stack" + Stack));
  }, []);

  return (
    // <ScrollView>
    <NavigationProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainAppBar />
          <Tab.Navigator >
            <Tab.Screen
              
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => {
                  return <Icon name="home" size={size} color={color} />;
                },
              }}
            />

            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size }) => {
                  return <Icon name="cog" size={size} color={color} />;
                },
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarLabel: "Search",
                tabBarIcon: ({ color, size }) => {
                  return <Icon name="home-search" size={size} color={color} />;
                },
              }}
            />
            <Tab.Screen name="BlogPostStack" component={BlogPostStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NavigationProvider>
  );
};

export default App;
