import {Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTabView from '../screens/HomeScreen';
import Category from '../screens/CategoriesScreen';
import Search from '../screens/SearchScreen';
import Favourite from '../screens/FavouriteScreen';
import Profile from '../screens/ProfileScreen';
import CardStory from '../components/home/StoryCard';
import LoginScreen from '../components/profile/Login';
import SignupScreen from '../components/profile/Signup';
import ReadChapter from '../components/home/ReadChapter';
import ListChapter from '../components/home/ListChapter';
import ListFavourite from '../components/favourite/ListFavourite';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

          return <Icon name={iconName} color={color} size={20} />;
        },
        tabBarLabel: ({ focused }) =>
          focused ? <Text style={{ color: 'blue', fontSize: 12 }}>{route.name}</Text> : null,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name="Home" component={HomeTabView} options={{ headerShown: false }} />
      <Tab.Screen name="Thể Loại" component={Category} options={{ headerShown: false }} />
      <Tab.Screen name="Tìm Kiếm" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="Yêu Thích" component={Favourite} options={{ headerShown: false }} />
      <Tab.Screen name="Cá Nhân" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="cardstory" component={CardStory} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="readchapter" component={ReadChapter} options={{ headerShown: false }} />
        <Stack.Screen name="listchapter" component={ListChapter} options={{ headerShown: false }} />
        <Stack.Screen name="listfavourte" component={ListFavourite} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
