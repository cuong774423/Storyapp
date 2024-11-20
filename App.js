import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon  from 'react-native-vector-icons/FontAwesome';
import HomeTabView from './src/screens/HomeScreen';
import Category from './src/screens/CategoriesScreen';
import Search from './src/screens/SearchScreen';
import Favourite from './src/screens/Favourite.Screen';
import Profile from './src/screens/ProfileScreen';
import CardStory from './src/components/StoryCard';
import LoginScreen from './src/components/Login';
import SignupScreen from './src/components/Signup';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Cấu hình Tab Navigator
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Thể Loại') iconName = 'navicon';
          else if (route.name === 'Tìm Kiếm') iconName = 'search';
          else if (route.name === 'Yêu Thích') iconName = 'heart';
          else if (route.name === 'Cá Nhân') iconName = 'user';

          return <Icon  name={iconName} color={color} size={20} />;
        },
        tabBarLabel: ({ focused }) => (
          focused ? <Text style={{ color: 'blue', fontSize: 12 }}>{route.name}</Text> : null
        ),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name='Home' component={HomeTabView} options={{ headerShown: false }} />
      <Tab.Screen name='Thể Loại' component={Category} options={{ headerShown: false }} />
      <Tab.Screen name='Tìm Kiếm' component={Search} options={{ headerShown: false }} />
      <Tab.Screen name='Yêu Thích' component={Favourite} options={{ headerShown: false }} />
      <Tab.Screen name='Cá Nhân' component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// Cấu hình App chính với Stack Navigator bọc quanh Tab Navigator
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />

        <Stack.Screen name="cardstory" component={CardStory} options={{ headerShown: false}} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  