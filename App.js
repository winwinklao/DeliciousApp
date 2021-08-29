import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { useRoute,route } from '@react-navigation/native';

import Home from './Home'
import Search from './Search'
import Addmenu from './Addmenu'
import Favorite from './Favorite' 
import Splash from './Splash'

import Login from './ThisLogin';
import Register from './Register';
import RePassword from './RePassword';
import EditProfile from './EditProfile';
import ProfileUser from './ProfileUser';
import ProfileMenu from './ProfileMenu';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function ShowSplash() {
  const navigation = useNavigation();
  return (
    <Splash navigation={navigation}  />
  );
}

function ShowHome() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <Home navigation={navigation} route={route}/>
    );
}

function ShowSearch() {
    const navigation = useNavigation();
    return (
      <Search navigation={navigation}/>
    );
}

function ShowProfileUser() {
    const navigation = useNavigation();
    const route =  useRoute();
    return (
      <ProfileUser navigation={navigation} route={route} />
    );
}

function ShowFavorite() {
    const navigation = useNavigation();
    return (
      <Favorite navigation={navigation} />
    );
}

function ShowAddmenu() {
    const navigation = useNavigation();
    const route =  useRoute();
    return (
      <Addmenu navigation={navigation} route={route} />
    );
}

function ShowRePassword() {
    const navigation = useNavigation();
    return (
      <RePassword navigation={navigation}/>
    );
}

function ShowEditProfile() {
    const navigation = useNavigation();
    return (
      <EditProfile navigation={navigation}/>
    );
}

function ShowRegister() {
    const navigation = useNavigation();
    return (
      <Register navigation={navigation}/>
    );
}

function ShowLogin() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <Login navigation={navigation} route={route}/>
    );
}

function ShowProfileMenu() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ProfileMenu navigation={navigation} route={route}/>
  );
}

const ButtomTab = createBottomTabNavigator();
function MyButtomTab() {
    return (
      <ButtomTab.Navigator>
        <ButtomTab.Screen name="Show1" component={ShowHome} 
        options = {{title:"Home" , 
        tabBarIcon:({color})=>(<Entypo name="home" size={24} color={color} />) }} />
        <ButtomTab.Screen name="Show2" component={ShowSearch} 
        options = {{title:"Search" , 
        tabBarIcon:({color})=>(<FontAwesome name="search" size={24} color={color} />) }} />
        <ButtomTab.Screen name="Show3" component={ShowFavorite} 
        options = {{title:"Favorite" , 
        tabBarIcon:({color})=>(<MaterialIcons name="favorite" size={24} color={color}/>) }} />
      </ButtomTab.Navigator>
    );
  }


const Stack = createStackNavigator();
function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'Splash' component={ShowSplash}/>
     <Stack.Screen 
      options = {{headerShown : false}}
      name = 'Login' component={ShowLogin}/>
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'Home' component={MyButtomTab}/>
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'Addmenu' component={ShowAddmenu}/>
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'EditProfile' component={ShowEditProfile}/>
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'ProfileMenu' component={ShowProfileMenu}/>
     
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'Register' component={ShowRegister}/>
      
      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'ProfileUser' component={ShowProfileUser}/>

      <Stack.Screen 
      options = {{headerShown : false}}
      name = 'RePassword' component={ShowRePassword}/>
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
    
    <MyStack/>
    </NavigationContainer>
    
  );
}

    // <NavigationContainer>
    
    // <MyStack/>
    // </NavigationContainer>


